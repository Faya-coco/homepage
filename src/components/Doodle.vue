<template>
  <component :is="tag" class="doodle" :class="`doodle--${type}`">
    <svg v-if="type === 'underline'" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle__svg">
      <path d="M4 8 Q50 2 100 7 Q150 12 196 5" stroke="url(#doodleGrad1)" stroke-width="3" stroke-linecap="round" fill="none" :style="filterStyle"/>
      <defs>
        <linearGradient id="doodleGrad1" x1="0" y1="0" x2="200" y2="0">
          <stop offset="0%" stop-color="#FF7EB3"/>
          <stop offset="50%" stop-color="#8A5CFF"/>
          <stop offset="100%" stop-color="#2BD9C5"/>
        </linearGradient>
      </defs>
    </svg>
    <svg v-else-if="type === 'star'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle__svg">
      <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" :fill="color" opacity="0.8"/>
    </svg>
    <svg v-else-if="type === 'arrow'" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle__svg">
      <path d="M4 15 Q20 5 40 15 Q50 20 55 12" stroke="#8A5CFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
      <path d="M48 8 L56 12 L50 19" stroke="#8A5CFF" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    </svg>
    <svg v-else-if="type === 'circle'" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="doodle__svg">
      <circle cx="50" cy="50" r="45" stroke="url(#doodleGrad2)" stroke-width="2.5" fill="none" stroke-dasharray="8 6" :style="filterStyle"/>
      <defs>
        <linearGradient id="doodleGrad2" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stop-color="#FF7EB3"/>
          <stop offset="100%" stop-color="#2BD9C5"/>
        </linearGradient>
      </defs>
    </svg>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'underline',
    validator: (v) => ['underline', 'star', 'arrow', 'circle'].includes(v)
  },
  tag: {
    type: String,
    default: 'span'
  },
  color: {
    type: String,
    default: '#FFD86B'
  }
})

// SVG feTurbulence filter for hand-drawn effect
const filterStyle = computed(() => ({
  filter: 'url(#roughen)'
}))
</script>

<style scoped>
.doodle {
  display: inline-block;
  line-height: 0;
}

.doodle__svg {
  display: block;
}

.doodle--underline {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.doodle--underline .doodle__svg {
  width: 100%;
  height: 12px;
}

.doodle--star {
  width: 24px;
  height: 24px;
}

.doodle--arrow {
  width: 60px;
  height: 30px;
}

.doodle--circle {
  width: 100px;
  height: 100px;
}
</style>
