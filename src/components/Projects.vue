<template>
  <section id="projects" class="projects">
    <div class="container">
      <div class="projects__header">
        <h2 class="projects__title display-font title-stroke">精选项目</h2>
        <Doodle type="wave" class="projects__wave" />
        <p class="projects__hint">点击任意项目卡片，查看完整截图画廊与演示视频 →</p>
      </div>

      <div class="projects__grid">
        <article
          v-for="project in projects"
          :key="project.name"
          class="project-card"
          @click="openDetail(project)"
        >
          <!-- 项目截图（真实界面） -->
          <div class="project-card__media">
            <img :src="project.image" :alt="project.name + ' 截图'" class="project-card__img" />
            <span class="project-card__emoji">{{ project.emoji }}</span>
            <span class="project-card__view">点击查看详情</span>
          </div>

          <div class="project-card__body">
            <h3 class="project-card__name">{{ project.name }}</h3>
            <p class="project-card__tagline">{{ project.tagline }}</p>
            <p class="project-card__role">
              <span class="project-card__role-label">角色</span>{{ project.role }}
            </p>
            <p class="project-card__desc">{{ project.desc }}</p>

            <div class="project-card__stack">
              <span v-for="tech in project.stack" :key="tech" class="project-card__tech">{{ tech }}</span>
            </div>

            <div class="project-card__links">
              <a
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-card__link"
                @click.stop
              >
                <svg class="project-card__icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <span class="project-card__more">查看详情 →</span>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- 项目详情 Overlay -->
    <ProjectDetail :project="selected" @close="selected = null" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { projects } from '../data/projects.js'
import Doodle from './Doodle.vue'
import ProjectDetail from './ProjectDetail.vue'

const selected = ref(null)
const openDetail = (project) => {
  selected.value = project
}
</script>

<style scoped>
.projects {
  padding: var(--section-padding) 0;
  background: var(--nost-bg);
  position: relative;
}

.projects__header {
  margin-bottom: 2.5rem;
}

.projects__title {
  font-size: clamp(2.8rem, 7vw, 4.5rem);
  display: inline-block;
}

.projects__wave {
  width: 180px;
  margin-top: 0.5rem;
  display: block;
}

.projects__hint {
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--nost-ink-soft);
}

.projects__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.project-card {
  position: relative;
  background: var(--nost-card);
  border: var(--stroke);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-offset);
  overflow: hidden;
  cursor: pointer;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.project-card:hover {
  transform: translate(-4px, -4px);
  box-shadow: var(--shadow-offset-lg);
}

.project-card__media {
  position: relative;
  border-bottom: var(--stroke);
  background: var(--nost-bg-alt);
}

.project-card__img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.project-card__emoji {
  position: absolute;
  top: 12px;
  left: 12px;
  width: 46px;
  height: 46px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  background: var(--nost-yellow);
  border: var(--stroke-thin);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-offset-sm);
}

.project-card__view {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: var(--nost-coral);
  color: #fff;
  border: var(--stroke-thin);
  border-radius: var(--radius-pill);
  padding: 0.3rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 800;
  box-shadow: var(--shadow-offset-sm);
  opacity: 0;
  transform: translateY(6px);
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.project-card:hover .project-card__view {
  opacity: 1;
  transform: translateY(0);
}

.project-card__body {
  padding: 1.6rem;
}

.project-card__name {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--nost-ink);
  margin-bottom: 0.3rem;
}

.project-card__tagline {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--nost-coral);
  margin-bottom: 0.6rem;
}

.project-card__role {
  font-size: 0.85rem;
  color: var(--nost-ink-soft);
  margin-bottom: 1rem;
}

.project-card__role-label {
  display: inline-block;
  font-weight: 800;
  color: var(--nost-ink);
  background: var(--nost-bg-alt);
  border: var(--stroke-thin);
  border-radius: var(--radius-sm);
  padding: 0.05rem 0.5rem;
  margin-right: 0.4rem;
  font-size: 0.78rem;
}

.project-card__desc {
  font-size: 0.9rem;
  color: var(--nost-ink-soft);
  line-height: 1.7;
  margin-bottom: 1.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.3rem;
}

.project-card__tech {
  display: inline-block;
  padding: 0.25rem 0.7rem;
  background: var(--nost-bg-alt);
  border: var(--stroke-thin);
  border-radius: var(--radius-sm);
  font-size: 0.76rem;
  font-weight: 700;
  color: var(--nost-ink);
}

.project-card__links {
  display: flex;
  gap: 0.7rem;
  align-items: center;
  flex-wrap: wrap;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 1rem;
  border: var(--stroke-thin);
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 700;
  background: var(--nost-card);
  color: var(--nost-ink);
  transition: all var(--transition-base);
}

.project-card__link:hover {
  background: var(--nost-coral);
  color: #fff;
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-offset-sm);
}

.project-card__more {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--nost-coral);
}

.project-card__icon {
  width: 16px;
  height: 16px;
}

/* 响应式断点：375 / 768 / 1280（移动优先） */
@media (min-width: 768px) {
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 375px) {
  .project-card__view {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
