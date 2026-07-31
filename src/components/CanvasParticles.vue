<template>
  <div class="canvas-particles" ref="canvasWrap">
    <canvas ref="canvasEl"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasEl = ref(null)
const canvasWrap = ref(null)
let animationId = null
let particles = []
let mouse = { x: -1000, y: -1000 }
let isVisible = true

const PARTICLE_COUNT = 70
const DPR = Math.min(window.devicePixelRatio || 1, 2)

const colors = ['#FF7EB3', '#8A5CFF', '#2BD9C5', '#FFD86B']

class Particle {
  constructor(w, h) {
    this.reset(w, h)
  }
  reset(w, h) {
    this.x = Math.random() * w
    this.y = Math.random() * h
    this.size = Math.random() * 4 + 2
    this.speedX = (Math.random() - 0.5) * 0.5
    this.speedY = (Math.random() - 0.5) * 0.5
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.opacity = Math.random() * 0.5 + 0.3
  }
  update(w, h, mx, my) {
    // Mouse interaction
    const dx = mx - this.x
    const dy = my - this.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 150 && dist > 0) {
      const force = (150 - dist) / 150
      this.speedX += (dx / dist) * force * 0.02
      this.speedY += (dy / dist) * force * 0.02
    }
    // Damping
    this.speedX *= 0.99
    this.speedY *= 0.99
    this.x += this.speedX
    this.y += this.speedY
    // Wrap around
    if (this.x < -10) this.x = w + 10
    if (this.x > w + 10) this.x = -10
    if (this.y < -10) this.y = h + 10
    if (this.y > h + 10) this.y = -10
  }
  draw(ctx) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.globalAlpha = this.opacity
    ctx.fill()
    ctx.globalAlpha = 1
  }
}

const initCanvas = () => {
  const canvas = canvasEl.value
  if (!canvas) return
  const parent = canvas.parentElement
  const w = parent.clientWidth
  const h = parent.clientHeight
  canvas.width = w * DPR
  canvas.height = h * DPR
  canvas.style.width = w + 'px'
  canvas.style.height = h + 'px'
  const ctx = canvas.getContext('2d')
  ctx.scale(DPR, DPR)
  return { ctx, w, h }
}

const initParticles = (w, h) => {
  particles = []
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle(w, h))
  }
}

const animate = () => {
  if (!isVisible) return
  const canvas = canvasEl.value
  if (!canvas) return
  const parent = canvas.parentElement
  const w = parent.clientWidth
  const h = parent.clientHeight
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, w, h)
  particles.forEach(p => {
    p.update(w, h, mouse.x, mouse.y)
    p.draw(ctx)
  })
  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 100) {
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.strokeStyle = '#8A5CFF'
        ctx.globalAlpha = (1 - dist / 100) * 0.15
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    }
  }
  animationId = requestAnimationFrame(animate)
}

const handleMouseMove = (e) => {
  const canvas = canvasEl.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  mouse.x = e.clientX - rect.left
  mouse.y = e.clientY - rect.top
}

const handleVisibility = () => {
  isVisible = !document.hidden
  if (isVisible) {
    animate()
  } else if (animationId) {
    cancelAnimationFrame(animationId)
  }
}

const handleResize = () => {
  const result = initCanvas()
  if (result) {
    initParticles(result.w, result.h)
  }
}

// Check prefers-reduced-motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

onMounted(() => {
  if (prefersReducedMotion) return
  const result = initCanvas()
  if (result) {
    initParticles(result.w, result.h)
    animate()
  }
  const parent = canvasWrap.value
  if (parent) {
    parent.addEventListener('mousemove', handleMouseMove, { passive: true })
  }
  document.addEventListener('visibilitychange', handleVisibility)
  window.addEventListener('resize', handleResize, { passive: true })
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  const parent = canvasWrap.value
  if (parent) {
    parent.removeEventListener('mousemove', handleMouseMove)
  }
  document.removeEventListener('visibilitychange', handleVisibility)
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.canvas-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.canvas-particles canvas {
  width: 100%;
  height: 100%;
}
</style>
