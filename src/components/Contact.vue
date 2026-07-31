<template>
  <section id="contact" class="contact">
    <div class="container contact__inner">
      <div class="contact__card">
        <Doodle type="tape" class="contact__tape" />
        <h2 class="contact__title display-font title-stroke">联系我</h2>
        <p class="contact__subtitle">欢迎通过邮件或 GitHub 联系我，讨论前端、项目合作或技术交流。</p>
        <div class="contact__links">
          <a :href="`mailto:${profile.social.email}`" class="contact__link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4L12 13L2 4"/>
            </svg>
            <span>{{ profile.social.email }}</span>
          </a>
          <a :href="profile.social.github" target="_blank" rel="noopener" class="contact__link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub · @Faya-coco</span>
          </a>
        </div>
        <p class="contact__note">其他社交平台与联系方式正在整理中，后续会补充更新。</p>
      </div>
      <img src="../assets/mascot.svg" alt="" class="contact__mascot" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'
import Doodle from './Doodle.vue'
</script>

<style scoped>
.contact {
  padding: var(--section-padding) 0;
  background: var(--nost-bg-alt);
  border-top: var(--stroke-dashed);
  position: relative;
  overflow: hidden;
}

.contact__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.contact__card {
  position: relative;
  flex: 1;
  max-width: 640px;
  background: var(--nost-card);
  border: var(--stroke);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-offset);
  padding: 2.5rem;
  transform: rotate(-2deg);
}

.contact__tape {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%) rotate(-4deg);
  width: 80px;
}

.contact__title {
  font-size: clamp(2.5rem, 6vw, 3.8rem);
  display: inline-block;
  margin-bottom: 0.6rem;
}

.contact__subtitle {
  font-size: 1.05rem;
  color: var(--nost-ink-soft);
  margin-bottom: 1.8rem;
  font-weight: 600;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
}

.contact__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.3rem;
  background: var(--nost-bg);
  border: var(--stroke-thin);
  border-radius: var(--radius-pill);
  font-weight: 700;
  font-size: 0.92rem;
  color: var(--nost-ink);
  box-shadow: var(--shadow-offset-sm);
  transition: all var(--transition-base);
}

.contact__link:hover {
  background: var(--nost-coral);
  color: #fff;
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-offset);
}

.contact__link svg {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.contact__note {
  font-size: 0.82rem;
  color: var(--nost-ink-soft);
  font-style: italic;
}

.contact__mascot {
  width: clamp(110px, 14vw, 170px);
  flex-shrink: 0;
  animation: bob 5s ease-in-out infinite;
}

@keyframes bob {
  0%, 100% { transform: translateY(0) rotate(-3deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
}

@media (max-width: 768px) {
  .contact__inner {
    flex-direction: column;
  }
  .contact__card {
    transform: rotate(-1deg);
    padding: 2rem;
  }
  .contact__mascot {
    width: 120px;
    order: -1;
  }
}
</style>
