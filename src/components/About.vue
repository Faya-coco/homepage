<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about__header">
        <h2 class="about__title display-font">
          关于
          <span class="about__title-highlight">
            我
            <Doodle type="underline" class="about__doodle-underline" />
          </span>
        </h2>
        <Doodle type="arrow" class="about__doodle-arrow" />
      </div>
      <div class="about__content">
        <div class="about__bio">
          <p class="about__bio-text">{{ profile.bio }}</p>
        </div>
        <div class="about__skills">
          <h3 class="about__skills-title">技能栈</h3>
          <div class="about__chips">
            <span
              v-for="(skill, index) in profile.skills"
              :key="skill"
              class="about__chip"
              :style="{ '--chip-delay': index * 0.05 + 's' }"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <!-- 角落装饰 -->
    <Doodle type="star" class="about__corner-star" color="#2BD9C5" />
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'
import Doodle from './Doodle.vue'
</script>

<style scoped>
.about {
  padding: var(--section-padding) 0;
  background: var(--bg-alt);
  position: relative;
  overflow: hidden;
}

.about__header {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 3rem;
}

.about__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--text-primary);
  line-height: 1.2;
}

.about__title-highlight {
  position: relative;
  display: inline-block;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about__doodle-underline {
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  max-width: none;
}

.about__doodle-arrow {
  margin-bottom: 0.5rem;
}

.about__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.about__bio-text {
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: var(--text-secondary);
  line-height: 1.9;
}

.about__skills-title {
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.about__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.about__chip {
  display: inline-block;
  padding: 0.5rem 1.2rem;
  background: var(--bg-card);
  border: 2px solid transparent;
  border-radius: var(--radius-xl);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  box-shadow: var(--shadow-soft);
  transition: all var(--transition-base);
  animation: chipIn 0.5s var(--ease-out) var(--chip-delay) both;
}

.about__chip:hover {
  transform: translateY(-3px) rotate(-2deg);
  border-color: var(--candy-purple);
  box-shadow: var(--shadow-card);
}

@keyframes chipIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about__corner-star {
  position: absolute;
  bottom: 2rem;
  right: 3rem;
  width: 28px;
  opacity: 0.6;
  animation: twinkle 3s ease-in-out infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(0.8); }
}

@media (max-width: 768px) {
  .about__content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .about__header {
    margin-bottom: 2rem;
  }
}
</style>
