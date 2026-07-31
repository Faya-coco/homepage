// 项目展示数据文件（真实资料，来源：src/data/03-projects.md）
// 新增项目：只需在此数组追加一个对象，无需修改任何 .vue 组件
// 字段：name / emoji / tagline / role / platform / desc / stack / highlights / stats / image / gallery / video / links

import homie1 from '../assets/pic/图片1.png'
import homie2 from '../assets/pic/图片2.png'
import homie3 from '../assets/pic/图片3.png'
import homie4 from '../assets/pic/图片4.png'
import homie5 from '../assets/pic/图片5.png'
import homie6 from '../assets/pic/图片6.png'
import homie7 from '../assets/pic/图片7.png'
import homie8 from '../assets/pic/图片8.png'
import homie9 from '../assets/pic/图片9.png'
import homie10 from '../assets/pic/图片10.png'
import reader1 from '../assets/pic/reader/1.png'
import reader2 from '../assets/pic/reader/2.png'
import reader3 from '../assets/pic/reader/3.png'
import reader4 from '../assets/pic/reader/4.png'
import reader5 from '../assets/pic/reader/5.png'
import reader6 from '../assets/pic/reader/6.png'

// 视频放在 public/videos/ 下，通过 BASE_URL 拼接，保证 dev 与相对路径部署（base: './'）下都能正确加载
const PUB = import.meta.env.BASE_URL
const homieVideo = `${PUB}videos/homie.mp4`
const readerVideo = `${PUB}videos/reader.mp4`

export const projects = [
  {
    name: 'Homie 智能租房系统',
    emoji: '🏠',
    tagline: '面向租客与房东的 C2C 智能租房平台',
    role: '独立完成全栈开发',
    platform: 'Web 应用 · 全栈',
    desc:
      '覆盖租房全流程的 Web 应用，连接租客、房东、管理员三类角色，提供房源管理、租约管理、消息通讯、收藏评价等完整业务流程。核心亮点是集成基于 DeepSeek LLM 的 AI 智能推荐机器人，支持自然语言搜索、多轮对话和租房行情分析。',
    stack: ['Vue 3', 'Pinia', 'Element Plus', 'Vue Router', 'Axios', 'Spring Boot', 'FastAPI', 'MySQL', 'Docker Compose', 'DeepSeek API'],
    highlights: [
      'AI 智能推荐：LLM 意图解析 + 结构化筛选 + 语义重排序，Top5 准确率约 85%+',
      '多角色身份体系：租客 / 房东 / 管理员，支持灵活切换',
      'SSE 流式输出，打字机效果推荐反馈',
      '6 大模块、30+ API、15+ 前端页面，Docker Compose 一键部署'
    ],
    stats: [
      { label: '核心模块', value: '6 大' },
      { label: 'API 接口', value: '30+' },
      { label: '前端页面', value: '15+' },
      { label: '推荐准确率', value: '85%+' }
    ],
    image: homie9,
    gallery: [homie1, homie2, homie3, homie4, homie5, homie6, homie7, homie8, homie9, homie10],
    video: homieVideo,
    links: {
      github: 'https://github.com/Faya-coco/homie'
    }
  },
  {
    name: '英文文档阅读器',
    emoji: '📖',
    tagline: '面向英语学习的安卓文档阅读 App',
    role: '独立完成 Android 原生开发',
    platform: 'Android 原生应用',
    desc:
      'Android 原生阅读应用，整合"文档导入 — 阅读 — 划词翻译 — 生词积累 — 标注回顾"闭环，解决阅读英文 PDF / TXT 时频繁切换翻译 App 的低效问题。覆盖 Android 5.0 ~ 14，核心代码约 2000+ 行 Java。',
    stack: ['Android 原生 Java', 'AndroidX', 'Material Design', 'SQLite', 'OkHttp', 'iText 7'],
    highlights: [
      '文档导入与解析：TXT / PDF，自动检测 GBK / UTF-8 编码',
      '自研 SQLite 单例 + LRU 缓存 + ReentrantLock 线程安全方案',
      '按 Android SDK 版本分支处理存储权限，支持 Android 5.0 ~ 14'
    ],
    stats: [
      { label: '核心代码', value: '2000+ 行' },
      { label: '最低支持', value: 'Android 5.0' },
      { label: '最高支持', value: 'Android 14' },
      { label: 'API 级别', value: '21 ~ 34' }
    ],
    image: reader1,
    gallery: [reader1, reader2, reader3, reader4, reader5, reader6],
    video: readerVideo,
    links: {
      github: 'https://github.com/Faya-coco/reader'
    }
  }
]
