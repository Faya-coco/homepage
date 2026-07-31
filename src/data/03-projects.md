# 项目展示

## Homie 智能租房系统

- **emoji**: 🏠
- **一句话定位**：面向租客与房东的 C2C 智能租房平台
- **角色**：独立完成全栈开发

### 项目描述

Homie 是一个覆盖租房全流程的 Web 应用，连接租客、房东和管理员三类角色，提供房源管理、租约管理、消息通讯、收藏评价等完整业务流程。项目核心亮点是集成了基于 DeepSeek LLM 的 AI 智能推荐机器人，支持自然语言搜索、多轮对话和租房行情分析。

### 技术栈

Vue 3.4.21、Pinia 2.1.7、Element Plus 2.7.0、Vue Router 4、Axios、Spring Boot 3.2.5、FastAPI、MySQL 8.0、Docker Compose、DeepSeek API

### 核心功能

- 房源 CRUD、租约管理、消息通讯、收藏与评价
- AI 智能推荐：LLM 意图解析 + 后端结构化筛选 + LLM 语义重排序
- 多角色身份体系：租客 / 房东 / 管理员，支持灵活切换
- 管理员后台：数据看板、房源审核、用户管理、系统通知广播
- SSE 流式输出，实现打字机效果的推荐反馈

### 成果

- 6 大核心模块、30+ API 接口、15+ 前端页面
- 自然语言搜索（如“青州市3室2000以内朝南精装”），Top5 推荐准确率约 85%+
- Docker Compose 一键部署，支持万级房源数据导入
- 完整开源，含详细 README 和 API 文档

### 链接

- GitHub：https://github.com/Faya-coco/homie

---

## 英文文档阅读器

- **emoji**: 📖
- **一句话定位**：面向英语学习的安卓文档阅读 App
- **角色**：独立完成 Android 原生开发

### 项目描述

这是一款 Android 原生阅读应用，整合“文档导入 - 阅读 - 划词翻译 - 生词积累 - 标注回顾”闭环，解决阅读英文 PDF / TXT 时频繁切换翻译 App 的低效问题。应用覆盖 Android 5.0 ~ 14，核心代码约 2000+ 行 Java。

### 技术栈

Android 原生 Java、AndroidX、Material Design、SQLite、SharedPreferences、OkHttp 4.12.0、iText 7、ExecutorService

### 核心功能

- 文档导入与解析：支持 TXT / PDF，自动检测 GBK / UTF-8 等编码
- 阅读核心交互：SpannableString 高亮标注、划词调用百度翻译 API、阅读进度自动保存
- 数据持久化：自研 SQLite 单例 + LRU 缓存 + ReentrantLock 线程安全方案
- 权限适配：按 Android SDK 版本分支处理存储权限，持久化 Uri 权限

### 成果

- 覆盖课程设计全部要求：文档导入、书架管理、阅读、标注、划词翻译、生词本
- 数据库异步预加载 + LRU 缓存，主线程零阻塞
- 支持 Android 5.0 ~ 14（API 21 ~ 34）

### 链接

- GitHub：https://github.com/Faya-coco/reader
