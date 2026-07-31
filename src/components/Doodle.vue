<template>
  <component :is="tag" class="doodle" :class="`doodle--${type}`" aria-hidden="true">
    <!-- 星星 -->
    <svg v-if="type === 'star'" viewBox="0 0 24 24" class="doodle__svg" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2 L14.5 9 L22 9.5 L16 14 L18 21.5 L12 17.5 L6 21.5 L8 14 L2 9.5 L9.5 9 Z"
            fill="#FFE66D" stroke="#2D2D2D" stroke-width="2" stroke-linejoin="round"/>
    </svg>
    <!-- 手绘箭头 -->
    <svg v-else-if="type === 'arrow'" viewBox="0 0 80 40" class="doodle__svg" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 28 C 20 8, 44 8, 62 22" fill="none" stroke="#2D2D2D" stroke-width="3" stroke-linecap="round"/>
      <path d="M52 12 L64 22 L52 32" fill="none" stroke="#2D2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <!-- 波浪线 -->
    <svg v-else-if="type === 'wave'" viewBox="0 0 200 12" class="doodle__svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M2 6 Q 15 0, 30 6 T 60 6 T 90 6 T 120 6 T 150 6 T 180 6 T 198 6"
            fill="none" stroke="#FF6B6B" stroke-width="3" stroke-linecap="round"/>
    </svg>
    <!-- 对话框 -->
    <svg v-else-if="type === 'speech'" viewBox="0 0 60 50" class="doodle__svg" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4 H56 V36 H22 L10 48 L13 36 H4 Z"
            fill="#FFFFFF" stroke="#2D2D2D" stroke-width="3" stroke-linejoin="round"/>
    </svg>
    <!-- 胶带贴纸 -->
    <svg v-else-if="type === 'tape'" viewBox="0 0 80 30" class="doodle__svg" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 9 L76 5 L76 24 L4 28 Z" fill="#FFE66D" stroke="#2D2D2D" stroke-width="2" stroke-linejoin="round" opacity="0.9"/>
      <line x1="14" y1="7" x2="14" y2="27" stroke="#2D2D2D" stroke-width="1" opacity="0.25"/>
      <line x1="66" y1="6" x2="66" y2="25" stroke="#2D2D2D" stroke-width="1" opacity="0.25"/>
    </svg>
  </component>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'star',
    validator: (v) => ['star', 'arrow', 'wave', 'speech', 'tape'].includes(v)
  },
  tag: {
    type: String,
    default: 'span'
  }
})
</script>

<style scoped>
.doodle {
  display: inline-block;
  line-height: 0;
}

.doodle__svg {
  display: block;
}

.doodle--star {
  width: 28px;
  height: 28px;
}

.doodle--arrow {
  width: 70px;
  height: 35px;
}

.doodle--wave {
  width: 100%;
  max-width: 200px;
  height: 12px;
}

.doodle--speech {
  width: 60px;
  height: 50px;
}

.doodle--tape {
  width: 80px;
  height: 30px;
}
</style>
