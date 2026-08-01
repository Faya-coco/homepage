# Faya 主页部署到阿里云 OSS

## 准备

1. 在阿里云 OSS 控制台创建 Bucket，推荐选择离访问用户较近的地域，例如 `华东1（杭州）`。
2. Bucket 权限选择 `公共读`。
3. 安装并配置 `ossutil`：

```bash
# Windows 安装后先配置 AccessKey
ossutil config
```

## 一键上传

仓库已经带好生产构建产物，脚本会自动重新构建并同步到 OSS：

```powershell
.\scripts\deploy-oss.ps1 -Bucket 你的Bucket名 -Endpoint oss-cn-hangzhou.aliyuncs.com
```

脚本会执行：

- `npm run build`
- `ossutil sync` 上传 `dist/` 到 Bucket 根目录
- 开启静态网站托管，首页和错误页都使用 `index.html`

## 手动上传

1. 将项目根目录的 `faya-portfolio-dist.zip` 解压。
2. 进入 OSS 控制台，打开对应 Bucket。
3. 把解压后的**内容**（不是外层 `dist` 文件夹）上传到 Bucket 根目录。
4. 在 Bucket 的 `数据管理 -> 静态页面` 中设置：
   - 默认首页：`index.html`
   - 默认 404 页：`index.html`
5. 访问地址为：

```text
https://<Bucket名>.<Endpoint>/
```

示例：

```text
https://faya-homepage.oss-cn-hangzhou.aliyuncs.com/
```

## 自定义域名

如果希望使用自己的域名：

1. 在 OSS 控制台的 `传输管理 -> 域名管理` 中添加域名。
2. 按照提示解析 CNAME 到 Bucket 的默认域名。
3. 中国大陆地域的 Bucket 绑定自定义域名需要完成 ICP 备案；没有备案时可以先使用香港地域 Bucket，或直接使用 OSS 默认访问地址。
