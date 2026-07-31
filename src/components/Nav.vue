<template>
  <nav class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <div class="container nav__inner">
      <a href="#hero" class="nav__brand display-font">
        Faya<span class="nav__brand-dot">.</span>
      </a>
      <div class="nav__links">
        <a href="#about" class="nav__link">关于</a>
        <a href="#projects" class="nav__link">项目</a>
        <a href="#contact" class="nav__link">联系</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}
onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 0;
  transition: all var(--transition-base);
  background: transparent;
}

.nav--scrolled {
  background: rgba(245, 245, 240, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: var(--stroke);
  padding: 0.6rem 0;
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__brand {
  font-size: 2rem;
  color: var(--nost-coral);
  -webkit-text-stroke: 1px var(--nost-ink);
  paint-order: stroke fill;
  line-height: 1;
}

.nav__brand-dot {
  color: var(--nost-ink);
}

.nav__links {
  display: flex;
  gap: 0.5rem;
}

.nav__link {
  padding: 0.4rem 1.1rem;
  border-radius: var(--radius-pill);
  border: var(--stroke-thin);
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--nost-ink);
  background: var(--nost-card);
  transition: all var(--transition-base);
}

.nav__link:hover {
  background: var(--nost-ink);
  color: #fff;
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-offset-sm);
}

@media (max-width: 375px) {
  .nav__links {
    gap: 0.3rem;
  }
  .nav__link {
    padding: 0.35rem 0.75rem;
    font-size: 0.8rem;
  }
  .nav__brand {
    font-size: 1.6rem;
  }
}
</style>
