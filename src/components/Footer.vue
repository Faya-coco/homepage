<template>
  <footer class="footer">
    <div class="container footer__inner">
      <img src="../assets/mascot.svg" alt="" class="footer__mascot" aria-hidden="true" />
      <div class="footer__text">
        <p class="footer__made display-font">
          Made with <span class="footer__heart">♥</span> by 方严 · Faya
        </p>
        <p class="footer__year">© {{ currentYear }} · {{ profile.title }}</p>
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
  background: var(--nost-bg);
  border-top: var(--stroke);
}

.footer__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
}

.footer__mascot {
  width: 52px;
  height: 52px;
}

.footer__text {
  text-align: center;
}

.footer__made {
  font-size: 1.5rem;
  color: var(--nost-ink);
}

.footer__heart {
  color: var(--nost-coral);
}

.footer__year {
  font-size: 0.85rem;
  color: var(--nost-ink-soft);
  margin-top: 0.2rem;
  font-weight: 600;
}

@media (max-width: 375px) {
  .footer__inner {
    flex-direction: column;
    gap: 0.6rem;
  }
}
</style>
