// Faya 个人信息数据文件（真实资料，来源：src/data/01-about-me.md / 02-skills.md / 05-contact.md）
// 修改此文件即可更新「关于我」和导航区的所有个人信息

import avatar from '../assets/pic/my_icon.jpg'

export const profile = {
  name: '方严',
  alias: 'Faya',
  title: '前端工程师 · 专注交互与视觉',
  tagline: '前端工程师 · 专注交互与视觉',
  heroNote:
    '中南财经政法大学计算机专业学生，正在深耕前端开发。我相信好的前端是工程思维与视觉表达的结合 —— 既要写跑得快、结构清晰的代码，也要在乎用户第一眼看到页面时的感受。这里记录我做过的项目与折腾过的技术。',
  bio:
    '我是方严（Faya），一名正在深耕前端开发的计算机专业学生，就读于中南财经政法大学信息工程学院计算机科学与技术专业。从写第一行 printf 开始，我就对"代码如何变成 usable 的产品"这件事着迷。在校的系统训练让我打下了扎实的计算机基础，后来接触前端开发，发现这里恰好能把工程思维和视觉表达结合在一起。我喜欢关注细节 —— 一个按钮的 hover 反馈、一段过渡动画的缓动曲线、一个表单在移动端的触控体验，这些看似小的点，往往决定了产品给人的感觉。目前正持续学习 Vue 生态、响应式布局与动效实现，通过独立项目打磨从想法到交付的完整能力。',
  school: '中南财经政法大学 · 信息工程学院 · 计算机科学与技术',
  schoolPeriod: '2023.09 — 至今 · 本科在读',
  coursework: '程序设计、算法设计与分析、数据结构、计算机系统、操作系统原理、汇编语言',
  extras: '英语技术文档阅读流畅 · 普通话一级乙等 · CET-4/6 已过',
  avatar,
  skills: {
    proficient: ['Vue 3', 'Vue Router', 'Pinia', 'HTML5 / CSS3 / JavaScript', 'Axios', 'Element Plus', '响应式布局'],
    familiar: ['Spring Boot', 'FastAPI', 'MySQL', 'SQLite', 'Android 原生(Java)', 'Git / GitHub', 'Docker Compose', 'Python', 'C / C++'],
    learning: ['TypeScript', '前端性能优化', 'CSS 动画与交互动效', '组件库与设计系统']
  },
  social: {
    github: 'https://github.com/Faya-coco',
    email: '2986904420@qq.com'
  }
}
