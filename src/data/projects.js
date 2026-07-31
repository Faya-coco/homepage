// 项目展示数据文件
// 新增项目：只需在此数组追加一个对象，无需修改任何 .vue 组件
// 字段：name(名称), emoji(图标), desc(描述), stack(技术栈数组), links(链接对象)

export const projects = [
  {
    name: 'CloudBoard',
    emoji: '☁️',
    desc: '一个实时协作的在线白板工具，支持多人同时编辑、画笔、便签和思维导图。',
    stack: ['Vue 3', 'WebSocket', 'Canvas API', 'Node.js'],
    links: {
      github: 'https://github.com/faya/cloudboard',
      demo: 'https://cloudboard.faya.dev'
    }
  },
  {
    name: 'PixelForge',
    emoji: '🎨',
    desc: '基于 WebGL 的像素艺术编辑器，支持图层管理、动画导出和社区分享。',
    stack: ['React', 'WebGL', 'IndexedDB', 'Rust/WASM'],
    links: {
      github: 'https://github.com/faya/pixelforge',
      demo: 'https://pixelforge.faya.dev'
    }
  },
  {
    name: 'DevPulse',
    emoji: '📊',
    desc: '开发者效率分析仪表盘，可视化 Git 贡献、代码质量和项目健康度。',
    stack: ['TypeScript', 'D3.js', 'PostgreSQL', 'Docker'],
    links: {
      github: 'https://github.com/faya/devpulse'
    }
  },
  {
    name: 'TinyCLI',
    emoji: '⚡',
    desc: '一个极简的命令行工具集，用于快速生成项目脚手架、管理环境变量。',
    stack: ['Node.js', 'Commander.js', 'Shell'],
    links: {
      github: 'https://github.com/faya/tinycli',
      demo: 'https://www.npmjs.com/package/tinycli'
    }
  }
]
