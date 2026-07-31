# AGENTS.md - Faya Portfolio

## 项目概览
Faya 个人作品集主页，基于 Vue 3 + Vite 的纯前端 SPA 单页应用。

## 技术栈
- **框架**: Vue 3 (`<script setup>` 语法)
- **构建**: Vite 8.x
- **语言**: 原生 JavaScript (ESM)
- **样式**: 原生 CSS + CSS 变量 (scoped)
- **部署**: 静态文件，可部署到 GitHub Pages

## 目录结构
```
src/
  main.js                 # 入口文件
  App.vue                 # 根组件，组合所有板块
  components/
    Nav.vue               # 吸顶导航
    Hero.vue              # 首屏 (100vh)
    CanvasParticles.vue   # 自写 Canvas 粒子动效
    Doodle.vue            # 手绘涂鸦 SVG 装饰
    About.vue             # 关于我
    Projects.vue          # 项目展示卡片网格
    Contact.vue           # 联系区
    Footer.vue            # 页脚
  data/
    profile.js            # 个人信息数据
    projects.js           # 项目数据数组
  assets/
    mascot.svg            # IP 形象 SVG
  styles/
    global.css            # CSS 变量 + 全局样式
```

## 命令
- 开发: `pnpm run dev`
- 构建: `pnpm run build`
- 预览: `pnpm run preview`

## 内容更新指南
- **更新个人信息**: 编辑 `src/data/profile.js`
- **新增项目**: 在 `src/data/projects.js` 的 `projects` 数组追加对象，字段: `name/emoji/desc/stack/links`
- **无需修改任何 .vue 组件**

## 设计规范
- 糖果渐变配色: `#FF7EB3` → `#8A5CFF` → `#2BD9C5`
- 标题字体: Caveat (手写体)
- 正文字体: Nunito + Noto Sans SC
- 响应式断点: 375px / 768px / 1280px
