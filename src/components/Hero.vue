<template>
  <section id="hero" class="hero">
    <!-- 漫画装饰 -->
    <Doodle type="star" class="hero__deco hero__deco--1" />
    <Doodle type="star" class="hero__deco hero__deco--2" />
    <Doodle type="arrow" class="hero__deco hero__deco--3" />
    <Doodle type="tape" class="hero__tape" />

    <div class="container hero__content">
      <p class="hero__greeting display-font">你好，我是方严</p>
      <h1 class="hero__name display-font title-stroke">FAYA</h1>
      <p class="hero__tagline">{{ profile.tagline }}</p>

      <div class="hero__main">
        <div class="hero__note">
          <Doodle type="tape" class="hero__note-tape" />
          <p>{{ profile.heroNote }}</p>
        </div>
        <div class="hero__visual">
          <img src="../assets/mascot.svg" alt="Faya 吉祥物" class="hero__mascot" />
        </div>
      </div>

      <div class="hero__cta">
        <a href="#projects" class="btn btn--primary">
          看看我的作品 <span>→</span>
        </a>
        <a href="#contact" class="btn btn--ghost">联系我</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'
import Doodle from './Doodle.vue'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--nost-bg);
  overflow: hidden;
  padding-top: 6rem;
  padding-bottom: 4rem;
}

.hero__content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero__greeting {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: var(--nost-ink);
  margin-bottom: 0.2rem;
}

.hero__name {
  font-size: clamp(4rem, 12vw, 10rem);
  line-height: 0.95;
  margin-bottom: 0.8rem;
  letter-spacing: 2px;
}

.hero__tagline {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--nost-ink-soft);
  font-weight: 700;
  margin-bottom: 2.5rem;
}

.hero__main {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
}

.hero__note {
  position: relative;
  flex: 1;
  background: var(--nost-card);
  border: var(--stroke-dashed);
  box-shadow: var(--shadow-offset);
  padding: 2rem 1.8rem;
  border-radius: var(--radius-md);
  transform: rotate(-2deg);
  max-width: 560px;
}

.hero__note p {
  font-size: clamp(1rem, 1.6vw, 1.1rem);
  color: var(--nost-ink);
  line-height: 1.8;
}

.hero__note-tape {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%) rotate(-3deg);
  width: 70px;
}

.hero__visual {
  flex: 0 0 auto;
}

.hero__mascot {
  width: clamp(170px, 24vw, 280px);
  height: auto;
  filter: drop-shadow(6px 6px 0 rgba(45, 45, 45, 0.15));
  animation: bob 4s ease-in-out infinite;
}

@keyframes bob {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(2deg); }
}

.hero__cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* 装饰定位 + 摆动 */
.hero__deco {
  position: absolute;
  z-index: 1;
}

.hero__deco--1 {
  top: 14%;
  right: 8%;
  animation: swing 4s ease-in-out infinite;
}

.hero__deco--2 {
  top: 30%;
  left: 4%;
  animation: swing 5s ease-in-out infinite 0.5s;
}

.hero__deco--3 {
  bottom: 18%;
  right: 14%;
  animation: swing 4.5s ease-in-out infinite 1s;
}

.hero__tape {
  position: absolute;
  top: 10%;
  left: 10%;
  width: 70px;
  z-index: 1;
  opacity: 0.9;
  transform: rotate(-12deg);
}

@keyframes swing {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}

@media (max-width: 768px) {
  .hero__main {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  .hero__note {
    transform: rotate(-1deg);
  }
  .hero__mascot {
    width: 150px;
  }
  .hero__deco--2 {
    display: none;
  }
}
</style>
