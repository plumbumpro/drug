# Intelligent Battery 网站开发者文档

> 本文档旨在帮助协作者快速理解项目结构、掌握开发规范，便于后续的修改和维护。

---

## 目录

- [项目概述](#项目概述)
- [目录结构](#目录结构)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [样式系统](#样式系统)
- [页面结构](#页面结构)
- [JavaScript 功能](#javascript-功能)
- [国际化 (i18n)](#国际化-i18n)
- [修改指南](#修改指南)
- [部署指南](#部署指南)
- [常见问题](#常见问题)

---

## 项目概述

**Intelligent Battery** 是一个纯静态网站，用于展示"智能电池管理系统"研究项目。该项目采用现代化的深色主题设计，支持中英文双语，包含丰富的交互组件。

### 主要特性

- ✅ 纯静态 HTML/CSS/JS，无需构建工具
- ✅ 中英文双语支持（i18n）
- ✅ 响应式设计（移动端适配）
- ✅ 深色主题 + 渐变色配色
- ✅ 丰富的交互组件（卡片展开、FAQ、模态框等）
- ✅ 无障碍支持（ARIA 标签、键盘导航）
- ✅ SEO 优化（结构化数据、Meta 标签）

### 页面列表

| 页面 | 文件名 | 功能描述 |
|------|--------|----------|
| 首页 | `index.html` | 项目介绍、核心优势、常见问题 |
| 团队介绍 | `team.html` | 负责人信息、核心成员、团队风采 |

| 加入我们 | `recruit.html` | 招聘职位、职位详情、联系方式 |
| 404 页面 | `404.html` | 404 错误页面 |

---

## 目录结构

```
IntelligentBattery/
├── index.html              # 首页
├── team.html               # 团队介绍页面

├── recruit.html            # 招聘页面
├── 404.html                # 404 错误页面
├── favicon.svg             # 网站图标
├── css/
│   └── style.css           # 全局样式文件
├── js/
│   ├── main.js             # 主要交互逻辑
│   └── i18n.js             # 国际化配置
├── assets/                 # 资源文件夹（预留，可存放图片）
├── CLAUDE.md               # Claude Code 项目指引
└── 开发者文档.md            # 本文档
```

---

## 技术栈

### 核心技术

- **HTML5**: 语义化标签、结构化数据
- **CSS3**: CSS 变量、Flexbox、Grid、动画
- **Vanilla JavaScript**: ES6+ 语法、无框架依赖

### 外部依赖

- **Google Fonts**: Inter 字体
- **Unsplash**: 占位图片（临时使用）

### 浏览器兼容性

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- 移动端浏览器（iOS Safari, Chrome Mobile）

---

## 快速开始

### 本地开发

#### 方法一：直接打开 HTML 文件

```bash
# 直接用浏览器打开任意 HTML 文件
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

#### 方法二：使用本地服务器（推荐）

```bash
# Python 3
python3 -m http.server 8000

# Node.js (需要安装 serve)
npx serve

# PHP
php -S localhost:8000
```

访问 `http://localhost:8000` 查看网站。

### 修改后查看效果

1. 编辑 HTML/CSS/JS 文件
2. 保存文件
3. 刷新浏览器即可看到效果（无需重新编译）

---

## 样式系统

### CSS 变量

所有颜色和尺寸都定义在 `:root` 中，方便统一修改：

```css
:root {
    /* 主题色 */
    --primary: #00f2ea;          /* 主色调 - 青色 */
    --primary-dark: #00bcb6;     /* 主色调深色 */
    --secondary: #2d5af5;        /* 次要色 - 蓝色 */

    /* 背景色 */
    --bg-dark: #0b0d11;          /* 深色背景 */
    --bg-card: rgba(30, 35, 45, 0.6); /* 卡片背景（半透明） */

    /* 文字颜色 */
    --text-main: #ffffff;        /* 主要文字 */
    --text-muted: #a0a0a5;       /* 次要文字 */

    /* 渐变 */
    --gradient-main: linear-gradient(135deg, #00f2ea 0%, #2d5af5 100%);

    /* 布局 */
    --nav-height: 70px;          /* 导航栏高度 */
}
```

### 常用类名

#### 工具类

```html
<!-- 文字颜色 -->
<span class="text-primary">主要文字</span>
<span class="text-muted">次要文字</span>
<span class="text-white">白色文字</span>

<!-- 文字对齐 -->
<div class="text-center">居中对齐</div>

<!-- 边距 -->
<div class="mt-1">上边距 0.5rem</div>
<div class="mb-2">下边距 1rem</div>
<div class="mx-auto">水平居中</div>

<!-- 背景 -->
<section class="bg-transparent">透明背景</section>
```

#### 组件类

```html
<!-- 卡片 -->
<div class="card">基础卡片</div>
<div class="card card-transparent">透明卡片</div>

<!-- 网格布局 -->
<div class="grid-container">
    <div class="card">卡片 1</div>
    <div class="card">卡片 2</div>
    <div class="card">卡片 3</div>
</div>
```

### 响应式断点

```css
/* 移动端（< 768px）*/
@media (max-width: 768px) {
    /* 移动端样式 */
}
```

主要适配：
- 导航栏变为汉堡菜单
- 内容区域边距缩小
- 字体大小调整

---

## 页面结构

### 通用页面结构

每个页面都遵循相同的结构：

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <!-- Meta 标签 -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>页面标题</title>
    <meta name="description" content="页面描述">

    <!-- 结构化数据（SEO） -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      ...
    }
    </script>

    <!-- 样式和字体 -->
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet">
</head>

<body>
    <!-- 导航栏 -->
    <nav class="navbar">
        <div class="logo">IntelligentBattery</div>
        <button class="hamburger">...</button>
        <ul class="nav-links">...</ul>
        <div class="lang-switcher">...</div>
    </nav>

    <!-- 主要内容 -->
    <header class="hero">...</header>
    <section>...</section>
    <section>...</section>

    <!-- 页脚 -->
    <footer>...</footer>

    <!-- 交互组件 -->
    <div class="lightbox">...</div>
    <div class="modal">...</div>
    <button class="back-to-top">...</button>

    <!-- 脚本（注意顺序：i18n.js 必须在 main.js 之前） -->
    <script src="js/i18n.js"></script>
    <script src="js/main.js"></script>
</body>

</html>
```

### 导航栏配置

修改导航链接需同步更新所有页面的 `<nav>` 部分：

```html
<ul class="nav-links">
    <li><a href="index.html" data-i18n="nav.home">首页</a></li>
    <li><a href="team.html" data-i18n="nav.team">团队介绍</a></li>
        <li><a href="recruit.html" data-i18n="nav.recruit">加入我们</a></li>
</ul>
```

**注意**：`class="active"` 用于标记当前页面的导航项。

---

## JavaScript 功能

### 主要功能模块

#### 1. 移动端导航切换

```javascript
// 位置: js/main.js:7-35
// 功能：点击汉堡菜单切换导航显示
```

#### 2. 返回顶部按钮

```javascript
// 位置: js/main.js:37-55
// 功能：滚动超过 300px 时显示返回顶部按钮
```

#### 3. 模态框（Modal）

```javascript
// 位置: js/main.js:57-109
// 功能：点击带有 data-modal 属性的元素打开模态框
// 用法示例：
<div data-modal="job-modal-1">点击打开</div>
```

#### 4. 可展开内容（Expandable）

```javascript
// 位置: js/main.js:111-143
// 功能：点击带有 expand-trigger 类的元素展开/收起内容
// 用法示例：
<div class="card expand-trigger" tabindex="0" role="button">
    <h3>标题</h3>
    <div class="expandable-content">
        <div class="expandable-wrapper">隐藏的内容</div>
    </div>
</div>
```

#### 5. 图片灯箱（Lightbox）

```javascript
// 位置: js/main.js:145-194
// 功能：点击带有 clickable-image 类的图片放大显示
// 用法示例：
<img src="..." class="clickable-image" alt="...">
```

#### 6. FAQ 手风琴

```javascript
// 位置: js/main.js:196-231
// 功能：点击问题展开答案（同时关闭其他问题）
// 用法示例：
<div class="faq-item">
    <div class="faq-question">问题</div>
    <div class="faq-answer">答案</div>
</div>
```

#### 7. 时间线模态框

```javascript
// 位置: js/main.js:233-255
// 功能：点击时间线节点打开详细模态框
// 用法示例：
<div class="timeline-content" data-modal-target="timeline-modal-1">...</div>
```

### 事件监听器总结

| 事件 | 触发条件 | 处理函数 |
|------|----------|----------|
| `DOMContentLoaded` | 页面加载完成 | 初始化所有交互功能 |
| `scroll` | 页面滚动 | 显示/隐藏返回顶部按钮 |
| `click` | 点击元素 | 导航切换、模态框、展开内容等 |
| `keydown` | 键盘按键 | 键盘导航支持（Enter/Space） |
| `languageChanged` | 语言切换 | 更新交互元素的文字 |

---

## 国际化 (i18n)

### 配置文件

国际化配置位于 `js/i18n.js`，包含完整的中文和英文翻译。

### 翻译键结构

```javascript
const translations = {
    zh: {
        nav: {
            home: "首页",
            team: "团队介绍",
            ...
        },
        hero: {
            index_title: "Intelligent Battery",
            ...
        },
        ...
    },
    en: {
        // 对应的英文翻译
    }
};
```

### 如何添加新的翻译

#### 步骤 1：在 HTML 中添加 `data-i18n` 属性

```html
<h1 data-i18n="new_section.title">新标题</h1>
<p data-i18n="new_section.description">新描述</p>
```

#### 步骤 2：在 `i18n.js` 中添加翻译

```javascript
const translations = {
    zh: {
        // ... 现有翻译
        new_section: {
            title: "新标题",
            description: "新描述"
        }
    },
    en: {
        // ... 现有翻译
        new_section: {
            title: "New Title",
            description: "New Description"
        }
    }
};
```

### 语言切换

语言切换按钮位于导航栏右侧，支持：
- 中文（默认）
- English

语言偏好会保存到 `localStorage`，下次访问自动应用。

---

## 修改指南

### 修改文字内容

#### 静态文字（不需要翻译）

直接修改 HTML 文件中的文字：

```html
<h1>这里是新标题</h1>
```

#### 需要翻译的文字

1. 确保元素有 `data-i18n` 属性
2. 修改 `js/i18n.js` 中的翻译

```html
<!-- HTML -->
<h1 data-i18n="hero.index_title">Intelligent Battery</h1>

<!-- i18n.js -->
translations = {
    zh: {
        hero: {
            index_title: "智能电池项目"  // 修改这里
        }
    },
    en: {
        hero: {
            index_title: "Intelligent Battery Project"
        }
    }
}
```

### 修改颜色主题

修改 `css/style.css` 中的 CSS 变量：

```css
:root {
    /* 修改主色调为绿色 */
    --primary: #00ff88;
    --primary-dark: #00cc66;

    /* 修改次要色调为紫色 */
    --secondary: #9945ff;
}
```

### 添加新的页面

#### 步骤 1：创建 HTML 文件

```bash
# 复制现有页面作为模板
cp index.html about.html
```

#### 步骤 2：修改页面内容

编辑 `about.html`，修改 `<title>`、`<meta>` 标签和主要内容。

#### 步骤 3：添加导航链接

在所有页面的导航栏中添加新链接：

```html
<li><a href="about.html" data-i18n="nav.about">关于我们</a></li>
```

#### 步骤 4：添加翻译

在 `js/i18n.js` 中添加：

```javascript
nav: {
    // ...
    about: "关于我们"  // 中文
}

nav: {
    // ...
    about: "About Us"  // 英文
}
```

### 添加新的卡片

在 `grid-container` 中添加新的 `card` 元素：

```html
<div class="card expand-trigger" tabindex="0" role="button">
    <div class="card-icon">
        <svg viewBox="0 0 24 24">...</svg>
    </div>
    <h3 data-i18n="new_card.title">卡片标题</h3>
    <p data-i18n="new_card.desc">卡片描述</p>
    <div class="expandable-content">
        <div class="expandable-wrapper">
            <!-- 展开后的详细内容 -->
        </div>
    </div>
</div>
```

### 添加新的 FAQ 问题

```html
<div class="faq-item">
    <div class="faq-question" tabindex="0" role="button" aria-expanded="false">
        <span data-i18n="faq.q5">新问题？</span>
        <span class="icon">+</span>
    </div>
    <div class="faq-answer">
        <p class="text-muted lh-1-8" data-i18n="faq.a5">
            新问题的答案...
        </p>
    </div>
</div>
```

然后在 `i18n.js` 中添加对应的翻译。

### 修改联系人信息

修改 `recruit.html` 中的联系方式部分：

```html
<div id="contact" class="contact-info">
    <h2 data-i18n="sections.contact">联系方式</h2>
    <p data-i18n="recruit.contact_desc">请将简历发送至以下邮箱</p>
    <div style="font-size: 1.8rem; ...">
        new-email@example.com  <!-- 修改这里 -->
    </div>
    <p data-i18n="recruit.location">
        新办公地址  <!-- 修改这里 -->
    </p>
</div>
```

同时更新页脚和所有页面的联系信息。

### 添加真实图片

当前使用 Unsplash 占位图片。替换步骤：

1. 将图片放到 `assets/` 文件夹
2. 修改 HTML 中的 `src` 属性：

```html
<!-- 替换前 -->
<img src="https://images.unsplash.com/photo-..." alt="...">

<!-- 替换后 -->
<img src="assets/team-photo.jpg" alt="团队照片">
```

---

## 部署指南

### 静态托管平台

本网站可部署到任意静态托管服务：

#### GitHub Pages

```bash
# 1. 创建 gh-pages 分支
git checkout -b gh-pages

# 2. 推送到远程
git push origin gh-pages

# 3. 在 GitHub 仓库设置中启用 Pages，选择 gh-pages 分支
```

访问地址：`https://username.github.io/IntelligentBattery/`

#### Vercel / Netlify

1. 连接 Git 仓库
2. 选择根目录
3. 自动部署（无需配置）

#### 传统服务器

直接上传所有文件到服务器的 Web 目录：

```bash
# 使用 scp 上传
scp -r ./* user@server:/var/www/html/

# 或使用 FTP 工具上传
```

### SEO 优化建议

1. **提交到搜索引擎**
   - Google Search Console
   - 百度搜索资源平台

2. **生成 sitemap.xml**（可选）

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url><loc>https://intelligentbattery.com/</loc></url>
       <url><loc>https://intelligentbattery.com/team.html</loc></url>
              <url><loc>https://intelligentbattery.com/recruit.html</loc></url>
   </urlset>
   ```

3. **配置 robots.txt**（可选）

   ```txt
   User-agent: *
   Allow: /
   Sitemap: https://intelligentbattery.com/sitemap.xml
   ```

---

## 常见问题

### Q: 修改了 CSS 但看不到效果？

**A**: 清除浏览器缓存：
- Chrome/Edge: `Ctrl + Shift + R` (Windows) 或 `Cmd + Shift + R` (Mac)
- 或使用无痕模式测试

### Q: JavaScript 不工作？

**A**: 检查以下几点：
1. 确保脚本加载顺序正确：`i18n.js` 必须在 `main.js` 之前
2. 打开浏览器控制台（F12）查看是否有错误
3. 确保文件路径正确（相对路径）

### Q: 移动端显示异常？

**A**:
1. 确保在 `<head>` 中有 viewport 标签：
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
2. 检查 `@media (max-width: 768px)` 中的样式

### Q: 如何添加第三方统计（如 Google Analytics）？

**A**: 在 `</head>` 之前添加统计代码：

```html
<head>
    <!-- ... 其他标签 ... -->

    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    </script>
</head>
```

### Q: 如何优化网站加载速度？

**A**:
1. **压缩图片**：使用 TinyPNG、ImageOptim 等工具
2. **压缩 CSS/JS**：使用在线压缩工具
3. **启用 gzip 压缩**（服务器配置）
4. **使用 CDN**：将静态资源托管到 CDN

### Q: 如何修改网站标题和描述？

**A**: 修改每个 HTML 文件的 `<head>` 部分：

```html
<head>
    <title>新页面标题</title>
    <meta name="description" content="新页面描述">
    <meta name="keywords" content="关键词1, 关键词2">
</head>
```

### Q: 如何添加新的交互效果？

**A**:
1. 在 `js/main.js` 的 `DOMContentLoaded` 事件中添加新的事件监听器
2. 保持代码风格一致
3. 添加必要的无障碍支持（键盘导航、ARIA 标签）

示例：

```javascript
// 在 main.js 中添加
document.addEventListener('DOMContentLoaded', () => {
    // ... 现有代码 ...

    // 新功能：平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
```

---

## 开发规范

### 代码风格

#### HTML
- 使用 4 空格缩进
- 标签和属性名小写
- 自闭合标签不需要 `/`
- 添加必要的 `aria-` 标签以支持无障碍

#### CSS
- 使用 4 空格缩进
- 选择器使用小写
- 使用 CSS 变量而不是硬编码颜色
- 保持选择器简短高效

#### JavaScript
- 使用 4 空格缩进
- 使用 const/let，避免 var
- 函数命名使用 camelCase
- 添加必要的注释

### Git 提交规范

推荐使用约定式提交：

```bash
git commit -m "feat: 添加新的招聘页面"
git commit -m "fix: 修复移动端导航问题"
git commit -m "style: 更新主题颜色"
git commit -m "docs: 更新开发者文档"
git commit -m "refactor: 重构导航栏代码"
```

---

## 联系方式

如有问题或建议，请通过以下方式联系：

- **项目仓库**: https://gitee.com/baiyuan1/intellgentbattery_webpage
- **邮箱**: hr@intelligentbattery.com

---

## 附录

### 浏览器开发者工具技巧

- **F12**: 打开开发者工具
- **Ctrl + Shift + C**: 选择元素检查
- **Ctrl + Shift + M**: 切换设备模式（移动端调试）
- **Elements 面板**: 实时修改 HTML/CSS
- **Console 面板**: 查看 JavaScript 输出和错误
- **Network 面板**: 查看资源加载情况

### 有用的在线工具

- **颜色选择器**: https://colorhunt.co / https://coolors.co
- **渐变生成器**: https://cssgradient.io
- **占位图片**: https://placeholder.com / https://source.unsplash.com
- **CSS 压缩**: https://cssminifier.com
- **JS 压缩**: https://javascript-minifier.com
- **HTML 验证**: https://validator.w3.org

---

**文档版本**: v1.0
**最后更新**: 2026-01-26
**维护者**: Intelligent Battery Project Team
