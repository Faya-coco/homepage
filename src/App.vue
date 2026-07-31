<template>
  <div id="portfolio">
    <Nav />
    <main>
      <Hero />
      <About v-reveal />
      <Projects v-reveal />
      <Contact v-reveal />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// 滚动揭示指令（5.1.4）：元素进入视口时加 is-revealed，触发滑入动画
const vReveal = {
  mounted(el) {
    el.classList.add('reveal')
    // 尊重 prefers-reduced-motion：直接显示，不观察
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-revealed')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-revealed')
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    io.observe(el)
  }
}
</script>

<style>
/* 全局样式已在 global.css 中定义 */
</style>
