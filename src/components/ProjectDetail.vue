<template>
  <Transition name="overlay">
    <div v-if="project" class="overlay" :class="{ 'overlay--locked': lightboxOpen }" @click="$emit('close')">
      <div class="overlay__panel" ref="panelRef" @click.stop>
        <!-- 吸顶 wayfinding 条 -->
        <div class="topbar">
          <span class="topbar__name">
            <span class="topbar__emoji">{{ project.emoji }}</span>
            {{ project.name }}
          </span>
          <button class="topbar__close" @click="$emit('close')" aria-label="关闭详情">
            ✕ <span class="topbar__close-text">关闭</span>
          </button>
        </div>

        <!-- ============ 1. Hero 展区 ============ -->
        <header class="hero reveal-item" :style="{ '--i': 0 }">
          <Doodle type="tape" class="hero__tape" />
          <div class="hero__text">
            <span class="hero__badge">{{ project.platform }}</span>
            <h2 class="hero__name display-font title-stroke">{{ project.name }}</h2>
            <p class="hero__tagline">{{ project.tagline }}</p>
            <p class="hero__role">
              <span class="hero__role-label">角色</span>{{ project.role }}
            </p>
            <p class="hero__desc">{{ project.desc }}</p>
          </div>
          <figure class="hero__figure">
            <img :src="project.image" :alt="project.name + ' 主视图'" class="hero__img" />
            <Doodle type="star" class="hero__star" />
          </figure>
        </header>

        <!-- ============ 2. 数据看板 ============ -->
        <section class="stats reveal-item" :style="{ '--i': 1 }" aria-label="项目数据">
          <div v-for="(s, i) in project.stats" :key="s.label" class="stat-card">
            <span class="stat-card__value display-font">{{ s.value }}</span>
            <span class="stat-card__label">{{ s.label }}</span>
            <span class="stat-card__index">0{{ i + 1 }}</span>
          </div>
        </section>

        <!-- ============ 3. 截图画廊 ============ -->
        <section class="section reveal-item" :style="{ '--i': 2 }" id="detail-gallery">
          <div class="section__head">
            <Doodle type="arrow" class="section__arrow" />
            <h3 class="section__title display-font title-stroke">界面截图</h3>
            <span class="section__count">{{ project.gallery.length }} 张</span>
          </div>

          <!-- 主图（展览主视觉） -->
          <figure class="gallery__feature" @click="openLightbox(0)">
            <img :src="project.gallery[0]" :alt="project.name + ' 主截图'" class="gallery__feature-img" />
            <span class="gallery__feature-tag">展览主图 · 点击放大</span>
            <Doodle type="tape" class="gallery__feature-tape" />
          </figure>

          <!-- 砌体网格 -->
          <div class="gallery__grid">
            <figure
              v-for="(img, i) in project.gallery.slice(1)"
              :key="i"
              class="gallery__item"
              :class="{ 'gallery__item--tall': (i % 5 === 2) }"
              @click="openLightbox(i + 1)"
            >
              <img :src="img" :alt="project.name + ' 截图 ' + (i + 2)" class="gallery__item-img" loading="lazy" />
              <span class="gallery__item-num">0{{ i + 2 }}</span>
            </figure>
          </div>
        </section>

        <!-- ============ 4. 演示视频 ============ -->
        <section class="section reveal-item" :style="{ '--i': 3 }" id="detail-video">
          <div class="section__head">
            <Doodle type="arrow" class="section__arrow" />
            <h3 class="section__title display-font title-stroke">演示视频</h3>
            <span class="section__count">▶ NOW SHOWING</span>
          </div>

          <div class="cinema">
            <Doodle type="tape" class="cinema__tape cinema__tape--left" />
            <Doodle type="tape" class="cinema__tape cinema__tape--right" />
            <div class="cinema__screen">
              <video
                ref="videoEl"
                class="cinema__video"
                controls
                preload="none"
                playsinline
                :poster="project.gallery[0]"
                :src="project.video"
              ></video>
            </div>
            <p class="cinema__hint">提示：视频文件较大，首次播放需缓冲；部署前建议压缩或换外链</p>
          </div>
        </section>

        <!-- ============ 5. 核心亮点 ============ -->
        <section class="section reveal-item" :style="{ '--i': 4 }">
          <div class="section__head">
            <Doodle type="arrow" class="section__arrow" />
            <h3 class="section__title display-font title-stroke">核心亮点</h3>
          </div>
          <div class="highlights">
            <article
              v-for="(h, i) in project.highlights"
              :key="i"
              class="highlight-card reveal-item"
              :style="{ '--i': 5 + i }"
            >
              <span class="highlight-card__num display-font">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="highlight-card__text">{{ h }}</p>
            </article>
          </div>
        </section>

        <!-- ============ 6. 技术栈 ============ -->
        <section class="section reveal-item" :style="{ '--i': 9 }">
          <div class="section__head">
            <Doodle type="arrow" class="section__arrow" />
            <h3 class="section__title display-font title-stroke">技术栈</h3>
          </div>
          <div class="stack">
            <span v-for="(tech, i) in project.stack" :key="tech" class="stack__chip" :style="{ '--d': i * 0.04 + 's' }">
              {{ tech }}
            </span>
          </div>
        </section>

        <!-- ============ 7. CTA ============ -->
        <section class="cta reveal-item" :style="{ '--i': 10 }">
          <Doodle type="star" class="cta__star" />
          <p class="cta__text">喜欢这个项目？</p>
          <a
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="cta__btn display-font"
          >
            查看 GitHub 源码 →
          </a>
        </section>
      </div>

    </div>
  </Transition>

  <!-- ============ 灯箱（点击放大） ============
       注意：灯箱必须独立于 .overlay 之外（作为兄弟根节点）。
       因为 .overlay 设了 backdrop-filter，会成为其 fixed 后代的包含块，
       导致灯箱随遮罩滚动条错位、图片偏离视口中央甚至被遮挡。 -->
  <Transition name="lightbox">
    <div v-if="project && lightboxOpen" class="lightbox" @click="closeLightbox">
      <button class="lightbox__close" @click.stop="closeLightbox" aria-label="关闭">✕</button>
      <button class="lightbox__nav lightbox__nav--prev" @click.stop="lPrev" aria-label="上一张">‹</button>
      <img
        :src="project.gallery[lightboxIndex]"
        :alt="project.name + ' 放大截图 ' + (lightboxIndex + 1)"
        class="lightbox__img"
        @click.stop
      />
      <button class="lightbox__nav lightbox__nav--next" @click.stop="lNext" aria-label="下一张">›</button>
      <span class="lightbox__count">{{ lightboxIndex + 1 }} / {{ project.gallery.length }}</span>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import Doodle from './Doodle.vue'

const props = defineProps({
  project: { type: Object, default: null }
})
const emit = defineEmits(['close'])

const panelRef = ref(null)
const videoEl = ref(null)

// 灯箱状态
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)
const openLightbox = (i) => {
  if (!props.project) return
  lightboxIndex.value = i
  lightboxOpen.value = true
}
const closeLightbox = () => { lightboxOpen.value = false }
const lNext = () => {
  const len = props.project.gallery.length
  lightboxIndex.value = (lightboxIndex.value + 1) % len
}
const lPrev = () => {
  const len = props.project.gallery.length
  lightboxIndex.value = (lightboxIndex.value - 1 + len) % len
}

// 滚动揭示：IntersectionObserver，逐项淡入上移
let io = null
const setupReveal = () => {
  if (io) io.disconnect()
  if (!panelRef.value || !('IntersectionObserver' in window)) {
    // 不支持 IO 时直接全部显示
    if (panelRef.value) {
      panelRef.value.querySelectorAll('.reveal-item').forEach((el) => el.classList.add('is-revealed'))
    }
    return
  }
  const items = panelRef.value.querySelectorAll('.reveal-item')
  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  items.forEach((el) => io.observe(el))
}

// 切换项目时重置、锁定背景滚动、并重建揭示观察者
watch(
  () => props.project,
  async (p) => {
    lightboxOpen.value = false
    lightboxIndex.value = 0
    document.body.style.overflow = p ? 'hidden' : ''
    if (p) {
      await nextTick()
      // 回到顶部
      if (panelRef.value) panelRef.value.closest('.overlay')?.scrollTo({ top: 0 })
      setupReveal()
    } else if (io) {
      io.disconnect()
      io = null
    }
  }
)

// 键盘：灯箱优先，其次 Esc 关闭详情
const onKey = (e) => {
  if (!props.project) return
  if (lightboxOpen.value) {
    if (e.key === 'Escape') closeLightbox()
    else if (e.key === 'ArrowRight') lNext()
    else if (e.key === 'ArrowLeft') lPrev()
    return
  }
  if (e.key === 'Escape') emit('close')
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  if (io) io.disconnect()
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ============ Overlay 外层 ============ */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(45, 45, 45, 0.7);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1rem;
  overflow-y: auto;
}

/* 灯箱打开时锁定背后遮罩滚动（保留滚动位置，不跳动） */
.overlay--locked {
  overflow: hidden;
}

.overlay__panel {
  position: relative;
  width: 100%;
  max-width: 1080px;
  background: var(--nost-bg);
  border: var(--stroke);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-offset-lg);
  padding: 0 0 2.5rem;
  /* 上下留白用 margin 实现，避免 overlay 的 padding-top 让吸顶栏悬在半空 */
  margin: 3vh 0;
}

/* ============ 吸顶 wayfinding 条 ============ */
.topbar {
  position: sticky;
  top: 0;
  z-index: 6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.7rem 1.4rem;
  background: var(--nost-ink);
  color: #fff;
  border-bottom: var(--stroke);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
}

.topbar__name {
  font-weight: 800;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.topbar__emoji {
  font-size: 1.2rem;
}

.topbar__close {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.9rem;
  border-radius: var(--radius-pill);
  background: var(--nost-coral);
  color: #fff;
  border: 2px solid #fff;
  font-size: 0.82rem;
  font-weight: 800;
  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.25);
  transition: transform var(--transition-base);
}

.topbar__close:hover {
  transform: translate(-2px, -2px) rotate(-3deg);
}

/* ============ 通用 section ============ */
.section {
  padding: 2.2rem 2.2rem 0;
}

.section__head {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.4rem;
  flex-wrap: wrap;
}

.section__arrow {
  width: 56px;
  height: 28px;
  flex: 0 0 auto;
}

.section__title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  line-height: 1;
}

.section__count {
  margin-left: auto;
  padding: 0.25rem 0.8rem;
  background: var(--nost-yellow);
  border: var(--stroke-thin);
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--nost-ink);
}

/* ============ Hero ============ */
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 1.8rem;
  align-items: center;
  padding: 2.4rem 2.2rem 1.6rem;
  background:
    radial-gradient(circle at 90% 10%, rgba(255, 230, 109, 0.25), transparent 45%),
    var(--nost-bg);
  border-bottom: 3px dashed var(--nost-ink);
}

.hero__tape {
  position: absolute;
  top: 14px;
  left: 18px;
  width: 70px;
  height: 26px;
  transform: rotate(-12deg);
  z-index: 2;
}

.hero__badge {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  background: var(--nost-mint);
  border: var(--stroke-thin);
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--nost-ink);
  box-shadow: var(--shadow-offset-sm);
  margin-bottom: 0.9rem;
}

.hero__name {
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.05;
  margin-bottom: 0.4rem;
}

.hero__tagline {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--nost-coral);
  margin-bottom: 0.7rem;
}

.hero__role {
  font-size: 0.88rem;
  color: var(--nost-ink-soft);
  margin-bottom: 1rem;
}

.hero__role-label {
  display: inline-block;
  font-weight: 800;
  color: var(--nost-ink);
  background: var(--nost-bg-alt);
  border: var(--stroke-thin);
  border-radius: var(--radius-sm);
  padding: 0.05rem 0.5rem;
  margin-right: 0.4rem;
  font-size: 0.76rem;
}

.hero__desc {
  font-size: 0.92rem;
  color: var(--nost-ink);
  line-height: 1.85;
}

.hero__figure {
  position: relative;
  border: var(--stroke);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-offset);
  background: var(--nost-card);
  overflow: hidden;
  transform: rotate(1.5deg);
  transition: transform var(--transition-base);
}

.hero__figure:hover {
  transform: rotate(0deg) translate(-3px, -3px);
}

.hero__img {
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.hero__star {
  position: absolute;
  top: -14px;
  right: -14px;
  width: 40px;
  height: 40px;
  transform: rotate(15deg);
  z-index: 2;
}

/* ============ 数据看板 ============ */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.9rem;
  padding: 1.8rem 2.2rem 0.4rem;
}

.stat-card {
  position: relative;
  text-align: center;
  padding: 1rem 0.5rem 0.9rem;
  background: var(--nost-card);
  border: var(--stroke);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-offset-sm);
  transition: transform var(--transition-base);
}

.stat-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: var(--shadow-offset);
}

.stat-card__value {
  display: block;
  font-size: clamp(1.3rem, 3vw, 1.9rem);
  font-weight: 700;
  color: var(--nost-coral);
  line-height: 1;
}

.stat-card__label {
  display: block;
  margin-top: 0.4rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--nost-ink-soft);
}

.stat-card__index {
  position: absolute;
  top: 4px;
  left: 8px;
  font-size: 0.65rem;
  font-weight: 900;
  color: var(--nost-ink-soft);
  opacity: 0.5;
}

/* ============ 截图画廊 ============ */
.gallery__feature {
  position: relative;
  border: var(--stroke);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-offset);
  overflow: hidden;
  background: var(--nost-card);
  cursor: zoom-in;
  margin-bottom: 1rem;
}

.gallery__feature-img {
  width: 100%;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}

.gallery__feature:hover .gallery__feature-img {
  transform: scale(1.04);
}

.gallery__feature-tag {
  position: absolute;
  bottom: 12px;
  left: 12px;
  padding: 0.3rem 0.8rem;
  background: var(--nost-ink);
  color: #fff;
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-weight: 800;
}

.gallery__feature-tape {
  position: absolute;
  top: -10px;
  right: 24px;
  width: 64px;
  height: 24px;
  transform: rotate(8deg);
}

.gallery__grid {
  column-count: 3;
  column-gap: 0.9rem;
}

.gallery__item {
  position: relative;
  break-inside: avoid;
  margin-bottom: 0.9rem;
  border: var(--stroke-thin);
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-offset-sm);
  overflow: hidden;
  background: var(--nost-card);
  cursor: zoom-in;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.gallery__item:hover {
  transform: translate(-3px, -3px);
  box-shadow: var(--shadow-offset);
}

.gallery__item-img {
  width: 100%;
  display: block;
  transition: transform 0.45s var(--ease-out);
}

.gallery__item:hover .gallery__item-img {
  transform: scale(1.06);
}

.gallery__item-num {
  position: absolute;
  top: 8px;
  left: 8px;
  padding: 0.1rem 0.5rem;
  background: var(--nost-yellow);
  border: var(--stroke-thin);
  border-radius: var(--radius-sm);
  font-size: 0.7rem;
  font-weight: 900;
  color: var(--nost-ink);
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.gallery__item:hover .gallery__item-num {
  opacity: 1;
  transform: translateY(0);
}

/* ============ 影院式视频 ============ */
.cinema {
  position: relative;
  padding: 1.4rem;
  background: var(--nost-ink);
  border: var(--stroke);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-offset);
}

.cinema__tape {
  position: absolute;
  top: -12px;
  width: 70px;
  height: 26px;
  z-index: 3;
}

.cinema__tape--left {
  left: 30px;
  transform: rotate(-10deg);
}

.cinema__tape--right {
  right: 30px;
  transform: rotate(9deg);
}

.cinema__screen {
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-sm);
  overflow: hidden;
  background: #000;
}

.cinema__video {
  width: 100%;
  display: block;
  max-height: 70vh;
}

.cinema__hint {
  margin-top: 0.8rem;
  text-align: center;
  font-size: 0.75rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}

/* ============ 核心亮点 ============ */
.highlights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.9rem;
}

.highlight-card {
  position: relative;
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
  padding: 1.1rem 1.2rem;
  background: var(--nost-card);
  border: var(--stroke);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-offset-sm);
  transition: transform var(--transition-base), background var(--transition-base);
}

.highlight-card:hover {
  transform: translate(-3px, -3px);
  box-shadow: var(--shadow-offset);
  background: var(--nost-yellow);
}

.highlight-card__num {
  flex: 0 0 auto;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--nost-coral);
  line-height: 1;
  -webkit-text-stroke: 1.5px var(--nost-ink);
  paint-order: stroke fill;
}

.highlight-card__text {
  font-size: 0.9rem;
  color: var(--nost-ink);
  line-height: 1.65;
}

/* ============ 技术栈 ============ */
.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.stack__chip {
  padding: 0.4rem 1rem;
  background: var(--nost-card);
  border: var(--stroke-thin);
  border-radius: var(--radius-pill);
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--nost-ink);
  box-shadow: 3px 3px 0 var(--nost-ink);
  transition: transform var(--transition-base), background var(--transition-base), color var(--transition-base);
  animation: chip-pop 0.4s var(--ease-out) backwards;
  animation-delay: var(--d, 0s);
}

.stack__chip:hover {
  transform: translate(-2px, -2px);
  background: var(--nost-coral);
  color: #fff;
}

@keyframes chip-pop {
  from { opacity: 0; transform: scale(0.7) translateY(8px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}

/* ============ CTA ============ */
.cta {
  position: relative;
  margin: 2.6rem 2.2rem 0;
  padding: 2rem 1.5rem;
  text-align: center;
  background: var(--nost-bg-alt);
  border: var(--stroke-dashed);
  border-radius: var(--radius-lg);
}

.cta__star {
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%) rotate(12deg);
  width: 38px;
  height: 38px;
}

.cta__text {
  font-size: 1rem;
  font-weight: 800;
  color: var(--nost-ink-soft);
  margin-bottom: 0.9rem;
}

.cta__btn {
  display: inline-block;
  padding: 0.85rem 2rem;
  background: var(--nost-coral);
  color: #fff;
  border: var(--stroke);
  border-radius: var(--radius-pill);
  font-size: 1.2rem;
  font-weight: 700;
  box-shadow: var(--shadow-offset);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.cta__btn:hover {
  transform: translate(-4px, -4px) rotate(-2deg);
  box-shadow: var(--shadow-offset-lg);
}

/* ============ 灯箱 ============ */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1100;
  background: rgba(20, 20, 20, 0.92);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overscroll-behavior: contain;
}

.lightbox__img {
  max-width: 86vw;
  max-height: 82vh;
  object-fit: contain;
  border: 3px solid #fff;
  border-radius: var(--radius-sm);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
}

.lightbox__close,
.lightbox__nav {
  position: absolute;
  background: var(--nost-yellow);
  color: var(--nost-ink);
  border: var(--stroke-thin);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  box-shadow: var(--shadow-offset-sm);
  transition: background var(--transition-base), color var(--transition-base), transform var(--transition-base);
}

.lightbox__close {
  top: 1.4rem;
  right: 1.4rem;
  width: 46px;
  height: 46px;
  font-size: 1.2rem;
}

.lightbox__nav {
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  font-size: 2rem;
  line-height: 1;
}

.lightbox__nav--prev { left: 1.4rem; }
.lightbox__nav--next { right: 1.4rem; }

.lightbox__close:hover,
.lightbox__nav:hover {
  background: var(--nost-coral);
  color: #fff;
}

.lightbox__nav--prev:hover { transform: translateY(-50%) translateX(-3px); }
.lightbox__nav--next:hover { transform: translateY(-50%) translateX(3px); }

.lightbox__count {
  position: absolute;
  bottom: 1.4rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.35rem 1rem;
  background: var(--nost-ink);
  color: #fff;
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 800;
}

/* ============ 滚动揭示 ============ */
.reveal-item {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
  transition-delay: calc(var(--i, 0) * 0.06s);
}

.reveal-item.is-revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ============ Overlay 过渡 ============ */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s var(--ease-out);
}

.overlay-enter-active .overlay__panel,
.overlay-leave-active .overlay__panel {
  transition: transform 0.35s var(--ease-out), opacity 0.35s var(--ease-out);
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

.overlay-enter-from .overlay__panel,
.overlay-leave-to .overlay__panel {
  transform: translateY(30px) scale(0.98);
  opacity: 0;
}

/* 灯箱过渡 */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s var(--ease-out);
}

.lightbox-enter-active .lightbox__img,
.lightbox-leave-active .lightbox__img {
  transition: transform 0.25s var(--ease-out);
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox__img,
.lightbox-leave-to .lightbox__img {
  transform: scale(0.92);
}

/* ============ 响应式 ============ */
@media (max-width: 860px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 2rem 1.4rem 1.4rem;
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
    padding: 1.4rem 1.4rem 0.2rem;
  }
  .section { padding: 1.8rem 1.4rem 0; }
  .gallery__grid { column-count: 2; }
  .highlights { grid-template-columns: 1fr; }
  .cta { margin: 2.2rem 1.4rem 0; }
}

@media (max-width: 480px) {
  .gallery__grid { column-count: 1; }
  .stats { grid-template-columns: repeat(2, 1fr); }
  .lightbox__nav { width: 44px; height: 44px; font-size: 1.6rem; }
  .lightbox__nav--prev { left: 0.6rem; }
  .lightbox__nav--next { right: 0.6rem; }
  .topbar__close-text { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal-item { opacity: 1; transform: none; transition: none; }
  .overlay-enter-active,
  .overlay-leave-active,
  .overlay-enter-active .overlay__panel,
  .overlay-leave-active .overlay__panel,
  .lightbox-enter-active,
  .lightbox-leave-active { transition: none; }
  .stack__chip { animation: none; }
}
</style>
