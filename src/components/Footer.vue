<template>
  <footer class="footer">
    <div class="container footer__inner">
      <img src="../assets/mascot.svg" alt="" class="footer__mascot" aria-hidden="true" />
      <div class="footer__text">
        <p class="footer__made display-font">
          Made with <span class="gradient-text">♥</span> by
          <span class="gradient-text footer__name">{{ profile.name }}</span>
        </p>
        <p class="footer__year">&copy; {{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { profile } from '../data/profile.js'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 2.5rem 0;
  background: var(--bg-primary);
  border-top: 1px solid rgba(138, 92, 255, 0.1);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.footer__mascot {
  width: 48px;
  height: 48px;
  opacity: 0.7;
}

.footer__text {
  text-align: center;
}

.footer__made {
  font-size: 1.3rem;
  color: var(--text-secondary);
}

.footer__name {
  font-weight: 700;
}

.footer__year {
  font-size: 0.85rem;
  color: var(--text-light);
  margin-top: 0.3rem;
}

@media (max-width: 480px) {
  .footer__inner {
    flex-direction: column;
    gap: 0.8rem;
  }
}
</style>
