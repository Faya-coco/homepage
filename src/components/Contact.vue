<template>
  <section id="contact" class="contact">
    <div class="container contact__inner">
      <div class="contact__content">
        <h2 class="contact__title display-font">
          <span class="gradient-text">保持联系</span>
        </h2>
        <p class="contact__subtitle">有想法？有项目？或者只是想打个招呼？随时找我！</p>
        <div class="contact__links">
          <a :href="`mailto:${profile.social.email}`" class="contact__link" target="_blank" rel="noopener">
            <svg class="contact__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 4L12 13L2 4"/>
            </svg>
            <span>{{ profile.social.email }}</span>
          </a>
          <a :href="profile.social.github" class="contact__link" target="_blank" rel="noopener">
            <svg class="contact__icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a :href="profile.social.twitter" class="contact__link" target="_blank" rel="noopener">
            <svg class="contact__icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>Twitter / X</span>
          </a>
          <a :href="profile.social.blog" class="contact__link" target="_blank" rel="noopener">
            <svg class="contact__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            <span>博客</span>
          </a>
        </div>
      </div>
      <!-- IP 形象点缀 -->
      <img src="../assets/mascot.svg" alt="" class="contact__mascot" aria-hidden="true" />
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'
</script>

<style scoped>
.contact {
  padding: var(--section-padding) 0;
  background: var(--bg-alt);
  position: relative;
  overflow: hidden;
}

.contact__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
}

.contact__content {
  flex: 1;
}

.contact__title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.contact__subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 450px;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.contact__link {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.8rem 1.5rem;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary);
  box-shadow: var(--shadow-soft);
  transition: all var(--transition-base);
  border: 2px solid transparent;
}

.contact__link:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-card);
  border-color: var(--candy-purple);
}

.contact__icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.contact__mascot {
  width: clamp(120px, 15vw, 200px);
  height: auto;
  opacity: 0.8;
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
}

@media (max-width: 768px) {
  .contact__inner {
    flex-direction: column;
    text-align: center;
  }
  .contact__subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .contact__links {
    justify-content: center;
  }
  .contact__mascot {
    width: 120px;
    order: -1;
  }
}
</style>
