<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="projects__header">
        <h2 class="projects__title display-font">
          精选
          <span class="projects__title-highlight">
            项目
            <Doodle type="underline" class="projects__doodle-underline" />
          </span>
        </h2>
      </div>
      <div class="projects__grid">
        <article
          v-for="(project, index) in projects"
          :key="project.name"
          class="project-card"
          :style="{ '--card-delay': index * 0.1 + 's' }"
        >
          <div class="project-card__emoji">{{ project.emoji }}</div>
          <h3 class="project-card__name">{{ project.name }}</h3>
          <p class="project-card__desc">{{ project.desc }}</p>
          <div class="project-card__stack">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="project-card__tech"
            >
              {{ tech }}
            </span>
          </div>
          <div class="project-card__links">
            <a
              v-if="project.links.github"
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card__link"
            >
              <svg class="project-card__icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              v-if="project.links.demo"
              :href="project.links.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="project-card__link project-card__link--demo"
            >
              在线演示 →
            </a>
          </div>
          <!-- 涂鸦边框装饰 -->
          <div class="project-card__doodle-border"></div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects.js'
import Doodle from './Doodle.vue'
</script>

<style scoped>
.projects {
  padding: var(--section-padding) 0;
  background: var(--bg-primary);
  position: relative;
}

.projects__header {
  margin-bottom: 3rem;
}

.projects__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--text-primary);
  line-height: 1.2;
}

.projects__title-highlight {
  position: relative;
  display: inline-block;
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.projects__doodle-underline {
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 100%;
  max-width: none;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.project-card {
  position: relative;
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-soft);
  transition: all var(--transition-base);
  animation: cardIn 0.6s var(--ease-out) var(--card-delay) both;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}

.project-card:hover .project-card__doodle-border {
  opacity: 1;
}

.project-card__doodle-border {
  position: absolute;
  inset: -2px;
  border-radius: var(--radius-lg);
  border: 2.5px dashed transparent;
  background: linear-gradient(var(--bg-card), var(--bg-card)) padding-box,
              var(--gradient-main) border-box;
  border: 2.5px dashed;
  border-image: none;
  opacity: 0;
  transition: opacity var(--transition-base);
  pointer-events: none;
}

.project-card__emoji {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.project-card__name {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}

.project-card__desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.2rem;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.project-card__tech {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  background: var(--bg-alt);
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--candy-purple);
}

.project-card__links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-secondary);
  transition: color var(--transition-base);
}

.project-card__link:hover {
  color: var(--candy-purple);
}

.project-card__link--demo {
  color: var(--candy-purple);
}

.project-card__icon {
  width: 16px;
  height: 16px;
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式 */
@media (max-width: 1024px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
