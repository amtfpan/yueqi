# 粤启卫浴 - 企业励志主题网站

一个具有强烈视觉冲击力和情感共鸣的企业励志主题界面，展现群体团结向前、共同迈向美好未来的核心概念。

## 🎨 设计特点

- **视觉核心**：动态光环徽章 + 旋转箭头，象征团队凝聚与向前
- **色彩方案**：水蓝色渐变（专业）+ 深色背景（稳重）+ 橙金点缀（活力）
- **动效设计**：粒子漂浮、脉动光环、数字滚动、悬浮交互
- **响应式布局**：适配桌面、平板、手机等所有设备

## 📂 项目结构

```
├── index.html          # 主页面
├── package.json        # 项目配置
├── .nojekyll           # GitHub Pages 配置（防止 Jekyll 处理）
├── CNAME               # 自定义域名配置（如需）
└── README.md           # 项目说明文档
```

## 🚀 部署到 GitHub Pages

### 方法一：手动部署

1. 创建新的 GitHub 仓库，命名为 `yueqi-bathroom`
2. 将所有文件推送到仓库
3. 进入仓库 **Settings** → **Pages**
4. Source 选择 `Deploy from a branch`
5. Branch 选择 `main`，文件夹选择 `/ (root)`
6. 点击 Save，等待部署完成
7. 访问 `https://yourusername.github.io/yueqi-bathroom`

### 方法二：使用自定义域名

1. 在 `CNAME` 文件中填入您的域名（如 `www.yueqi-bathroom.com`）
2. 在您的域名 DNS 设置中添加 CNAME 记录指向 `yourusername.github.io`
3. 在 GitHub Pages 设置中填入自定义域名

## 🛠 本地开发

```bash
# 安装依赖
npm install

# 启动本地服务器
npm run dev

# 构建生产版本
npm run build
```

## 📱 页面预览

- **Hero 首屏**：动态徽章 + 粒子效果
- **品牌展示**：粤启卫浴 Logo 与品牌理念
- **团队板块**：四个核心特质卡片
- **数据成就**：数字滚动统计
- **价值观**：三维球体视觉隐喻
- **行动召唤**：CTA 引导区域

## 📄 许可证

MIT License - 可免费商用

---

*以水之灵动，铸就卓越品质*
