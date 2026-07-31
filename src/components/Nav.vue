<template>
  <nav class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <div class="container nav__inner">
      <a href="#hero" class="nav__brand">
        <span class="nav__brand-name">{{ profile.name }}</span>
        <svg class="nav__doodle" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5 Q20 1 40 5 Q60 9 78 4" stroke="url(#navDoodleGrad)" stroke-width="2.5" stroke-linecap="round" fill="none"/>
          <defs>
            <linearGradient id="navDoodleGrad" x1="0" y1="0" x2="80" y2="0">
              <stop offset="0%" stop-color="#FF7EB3"/>
              <stop offset="50%" stop-color="#8A5CFF"/>
              <stop offset="100%" stop-color="#2BD9C5"/>
            </linearGradient>
          </defs>
        </svg>
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
import { profile } from '../data/profile.js'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
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
  background: rgba(255, 247, 251, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(138, 92, 255, 0.06);
  padding: 0.6rem 0;
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__brand {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
}

.nav__brand-name {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

.nav__doodle {
  width: 60px;
  height: 6px;
  margin-top: 2px;
}

.nav__links {
  display: flex;
  gap: 2rem;
}

.nav__link {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color var(--transition-base);
  position: relative;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-main);
  border-radius: 2px;
  transition: width var(--transition-base);
}

.nav__link:hover {
  color: var(--text-primary);
}

.nav__link:hover::after {
  width: 100%;
}

@media (max-width: 480px) {
  .nav__links {
    gap: 1.2rem;
  }
  .nav__link {
    font-size: 0.85rem;
  }
  .nav__brand-name {
    font-size: 1.6rem;
  }
}
</style>
