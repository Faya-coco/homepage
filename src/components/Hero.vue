<template>
  <section id="hero" class="hero">
    <!-- Canvas 粒子背景 -->
    <CanvasParticles />
    <!-- 光标跟随柔光 -->
    <div class="hero__glow" ref="glowEl" :style="glowStyle"></div>
    <!-- 涂鸦装饰 -->
    <Doodle type="star" class="hero__star hero__star--1" color="#FFD86B" />
    <Doodle type="star" class="hero__star hero__star--2" color="#FF7EB3" />
    <Doodle type="star" class="hero__star hero__star--3" color="#2BD9C5" />
    <!-- 主内容 -->
    <div class="container hero__content">
      <div class="hero__text">
        <p class="hero__greeting display-font">Hi, I'm</p>
        <h1 class="hero__name display-font">
          <span class="gradient-text">{{ profile.name }}</span>
        </h1>
        <p class="hero__tagline">{{ profile.tagline }}</p>
        <div class="hero__cta">
          <a href="#projects" class="hero__btn hero__btn--primary">
            看看我的作品
            <span class="hero__btn-arrow">→</span>
          </a>
          <a href="#contact" class="hero__btn hero__btn--secondary">联系我</a>
        </div>
      </div>
      <div class="hero__visual">
        <img src="../assets/mascot.svg" alt="Faya Mascot" class="hero__mascot" />
      </div>
    </div>
    <!-- 底部波浪过渡 -->
    <div class="hero__wave">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 60 Q360 0 720 60 Q1080 120 1440 60 L1440 120 L0 120 Z" fill="var(--bg-alt)"/>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/profile.js'
import CanvasParticles from './CanvasParticles.vue'
import Doodle from './Doodle.vue'

const glowEl = ref(null)
const glowStyle = ref({})

const handleMouseMove = (e) => {
  glowStyle.value = {
    background: `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(138, 92, 255, 0.06), transparent 60%)`
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--bg-primary);
  overflow: hidden;
}

.hero__glow {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.hero__content {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding-top: 5rem;
  padding-bottom: 8rem;
}

.hero__text {
  flex: 1;
  max-width: 600px;
}

.hero__greeting {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}

.hero__name {
  font-size: clamp(3rem, 12vw, 8rem);
  line-height: 1.1;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero__tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 450px;
}

.hero__cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.9rem 2rem;
  border-radius: var(--radius-xl);
  font-weight: 700;
  font-size: 1rem;
  transition: all var(--transition-base);
}

.hero__btn--primary {
  background: var(--gradient-main);
  color: white;
  box-shadow: 0 4px 20px rgba(138, 92, 255, 0.3);
}

.hero__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(138, 92, 255, 0.4);
}

.hero__btn--secondary {
  background: transparent;
  color: var(--candy-purple);
  border: 2px solid var(--candy-purple);
}

.hero__btn--secondary:hover {
  background: rgba(138, 92, 255, 0.08);
  transform: translateY(-2px);
}

.hero__btn-arrow {
  transition: transform var(--transition-base);
}

.hero__btn--primary:hover .hero__btn-arrow {
  transform: translateX(4px);
}

.hero__visual {
  flex: 0 0 auto;
  position: relative;
}

.hero__mascot {
  width: clamp(180px, 25vw, 320px);
  height: auto;
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 20px 40px rgba(138, 92, 255, 0.2));
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* 星星装饰 */
.hero__star {
  position: absolute;
  z-index: 5;
  animation: twinkle 3s ease-in-out infinite;
}

.hero__star--1 {
  top: 15%;
  right: 10%;
  width: 32px;
  animation-delay: 0s;
}

.hero__star--2 {
  top: 30%;
  left: 5%;
  width: 20px;
  animation-delay: 1s;
}

.hero__star--3 {
  bottom: 25%;
  right: 20%;
  width: 24px;
  animation-delay: 2s;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.8; transform: scale(1) rotate(0deg); }
  50% { opacity: 0.4; transform: scale(0.8) rotate(15deg); }
}

/* 底部波浪 */
.hero__wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.hero__wave svg {
  width: 100%;
  height: 80px;
  display: block;
}

/* 响应式 */
@media (max-width: 768px) {
  .hero__content {
    flex-direction: column;
    text-align: center;
    padding-top: 6rem;
  }
  .hero__text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .hero__tagline {
    text-align: center;
  }
  .hero__cta {
    justify-content: center;
  }
  .hero__visual {
    order: -1;
  }
  .hero__mascot {
    width: 160px;
  }
}
</style>
