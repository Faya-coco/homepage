<template>
  <section id="about" class="about">
    <div class="container about__inner">
      <div class="about__header">
        <h2 class="about__title display-font title-stroke">关于我</h2>
        <Doodle type="wave" class="about__wave" />
      </div>

      <div class="about__body">
        <!-- 左：身份卡（头像 + 教育） -->
        <aside class="about__id">
          <div class="about__avatar-wrap">
            <img :src="profile.avatar" :alt="profile.name" class="about__avatar" />
          </div>
          <h3 class="about__name display-font">{{ profile.name }}</h3>
          <p class="about__alias">{{ profile.alias }} · {{ profile.title }}</p>
          <div class="about__divider"></div>
          <div class="about__edu">
            <p class="about__edu-school">{{ profile.school }}</p>
            <p class="about__edu-period">{{ profile.schoolPeriod }}</p>
          </div>
          <p class="about__coursework">
            <span class="about__label">主修课程</span>
            {{ profile.coursework }}
          </p>
          <p class="about__extras">
            <span class="about__label">其他</span>
            {{ profile.extras }}
          </p>
        </aside>

        <!-- 右：简介 + 技能三组 -->
        <div class="about__detail">
          <p class="about__bio">{{ profile.bio }}</p>

          <div class="about__skills">
            <div class="about__skill-group">
              <h4 class="about__skill-title">熟练</h4>
              <div class="about__chips">
                <span v-for="s in profile.skills.proficient" :key="s" class="about__chip about__chip--proficient">{{ s }}</span>
              </div>
            </div>
            <div class="about__skill-group">
              <h4 class="about__skill-title">了解</h4>
              <div class="about__chips">
                <span v-for="s in profile.skills.familiar" :key="s" class="about__chip about__chip--familiar">{{ s }}</span>
              </div>
            </div>
            <div class="about__skill-group">
              <h4 class="about__skill-title">学习中</h4>
              <div class="about__chips">
                <span v-for="s in profile.skills.learning" :key="s" class="about__chip about__chip--learning">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Doodle type="star" class="about__corner" />
  </section>
</template>

<script setup>
import { profile } from '../data/profile.js'
import Doodle from './Doodle.vue'
</script>

<style scoped>
.about {
  padding: var(--section-padding) 0;
  background: var(--nost-bg-alt);
  position: relative;
  overflow: hidden;
  border-top: var(--stroke-dashed);
}

.about__inner {
  position: relative;
}

.about__header {
  margin-bottom: 3rem;
}

.about__title {
  font-size: clamp(2.8rem, 7vw, 4.5rem);
  display: inline-block;
}

.about__wave {
  width: 180px;
  margin-top: 0.5rem;
  display: block;
}

.about__body {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 2.5rem;
  align-items: start;
}

/* 左：身份卡 */
.about__id {
  background: var(--nost-card);
  border: var(--stroke);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-offset);
  padding: 1.8rem;
  text-align: center;
  transform: rotate(-1.5deg);
}

.about__avatar-wrap {
  display: inline-block;
  padding: 5px;
  background: var(--nost-yellow);
  border: var(--stroke);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-offset-sm);
  margin-bottom: 1rem;
}

.about__avatar {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: var(--radius-sm);
  display: block;
}

.about__name {
  font-size: 2rem;
  color: var(--nost-ink);
  line-height: 1.1;
}

.about__alias {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--nost-ink-soft);
  margin-top: 0.2rem;
}

.about__divider {
  height: 0;
  border-top: var(--stroke-dashed);
  margin: 1rem 0;
}

.about__edu-school {
  font-size: 0.92rem;
  font-weight: 800;
  color: var(--nost-ink);
}

.about__edu-period {
  font-size: 0.82rem;
  color: var(--nost-ink-soft);
  margin-top: 0.2rem;
}

.about__coursework,
.about__extras {
  font-size: 0.82rem;
  color: var(--nost-ink-soft);
  margin-top: 0.8rem;
  text-align: left;
  line-height: 1.6;
}

.about__label {
  display: inline-block;
  font-weight: 800;
  color: var(--nost-coral);
  margin-right: 0.3rem;
}

/* 右：简介 + 技能 */
.about__bio {
  font-size: clamp(1rem, 1.6vw, 1.1rem);
  color: var(--nost-ink);
  line-height: 1.9;
  background: var(--nost-card);
  border: var(--stroke);
  box-shadow: var(--shadow-offset);
  padding: 1.6rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.8rem;
}

.about__skills {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.about__skill-title {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--nost-ink);
  margin-bottom: 0.5rem;
}

.about__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.about__chip {
  display: inline-block;
  padding: 0.4rem 1rem;
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--nost-ink);
  transition: transform var(--transition-base);
}

.about__chip--proficient {
  background: var(--nost-yellow);
  border: var(--stroke-thin);
  box-shadow: var(--shadow-offset-sm);
}

.about__chip--familiar {
  background: var(--nost-card);
  border: var(--stroke-thin);
}

.about__chip--learning {
  background: var(--nost-bg);
  border: 2px dashed var(--nost-ink-soft);
  color: var(--nost-ink-soft);
}

.about__chip:hover {
  transform: rotate(-3deg) translate(-2px, -2px);
}

.about__corner {
  position: absolute;
  bottom: 1.5rem;
  right: 2.5rem;
  width: 30px;
  animation: swing 4s ease-in-out infinite;
}

@keyframes swing {
  0%, 100% { transform: rotate(-6deg); }
  50% { transform: rotate(6deg); }
}

@media (max-width: 768px) {
  .about__body {
    grid-template-columns: 1fr;
    gap: 1.8rem;
  }
  .about__id {
    transform: rotate(0deg);
  }
  .about__corner {
    display: none;
  }
}
</style>
