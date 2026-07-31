# Faya Portfolio

Faya 的个人品牌作品集单页主页 —— 让访客在 10 秒内认知「Faya 是谁、做过什么、怎么找到他」。

## 技术栈

- **框架**: Vue 3 (`<script setup>`)
- **构建**: Vite 8.x
- **语言**: 原生 JavaScript (ESM)，无 TypeScript
- **样式**: 原生 CSS + CSS 变量 (scoped)，不引入 UI 库
- **动效**: 自写 2D Canvas 粒子，不引入三方库
- **部署**: GitHub Pages（gh-pages）

## 命令

```bash
pnpm install      # 安装依赖
pnpm run dev      # 本地开发 (http://localhost:5173)
pnpm run build    # 生产构建
pnpm run preview  # 预览构建产物
pnpm run deploy   # 构建并发布到 GitHub Pages（需先 npm i -g gh-pages）
```

## 页面结构（6 个区块）

| 区块 | 说明 |
|------|------|
| Nav | 吸顶半透明导航，手写体品牌名 + 涂鸦下划线，锚点平滑滚动 |
| Hero | 100vh 全屏首屏，糖果渐变背景 + Canvas 粒子层 + 超大手写姓名 + IP 形象 + 双 CTA |
| About | 手写大标题 + 涂鸦波浪下划线 + 个人简介 + 技能栈 chip |
| Projects | 大图冲击卡片网格（桌面 3 列 / 平板 2 列 / 手机 1 列），hover 上浮 |
| Contact | 简洁联系区，GitHub / 邮箱 / Twitter / 博客链接 |
| Footer | IP 形象 + 手写署名 + 年份 |

## 视觉设计

- **糖果渐变**: `#FF7EB3` → `#8A5CFF` → `#2BD9C5` → `#FFD86B`
- **手写字体**: Caveat + 马善政楷书（标题），Nunito + 思源黑体（正文）
- **Canvas 粒子**: 70 个渐变圆点，鼠标吸引 / 排斥响应，粒子连线
- **手绘涂鸦**: SVG 波浪下划线、箭头、星星、圆圈
- **专属 IP**: 戴眼镜的「代码小星球」SVG 吉祥物
- **响应式断点**: 375px / 768px / 1280px

## 内容更新

- **更新个人信息**: 编辑 `src/data/profile.js`
- **新增项目**: 在 `src/data/projects.js` 的 `projects` 数组追加对象，字段 `name/emoji/desc/stack/links`
- **无需修改任何 .vue 组件**

## 目录结构

```
src/
  main.js                 # 入口
  App.vue                 # 根组件
  components/
    Nav.vue / Hero.vue / CanvasParticles.vue / Doodle.vue
    About.vue / Projects.vue / Contact.vue / Footer.vue
  data/profile.js         # 个人信息
  data/projects.js        # 项目数据
  assets/mascot.svg       # IP 形象
  styles/global.css       # CSS 变量 + 全局样式
  styles/fonts.css        # 字体 stack 定义
```

## 特性

- `prefers-reduced-motion` 自动降级（粒子停摆、动画归零）
- Canvas 粒子 `visibilitychange` 暂停，DPR 上限 2
- 内容与逻辑分离，零三方 UI 依赖
