# BR7 Game Platform Desktop Application

## 项目介绍

这是一个基于 Electron + Vue 3 开发的桌面应用程序，提供静态服务。

## 技术栈

- Electron v28.0.0
- Vue 3.3.0
- Vite 5.0.0
- electron-builder 25.1.8

## 功能特性

- 🎮 游戏平台界面
- 🎯 轮播图展示
- 📋 列表数据展示
- 🎨 现代化 UI 设计
- 📱 响应式布局

## 开发环境要求

- Node.js >= 16.0.0
- pnpm >= 8.0.0
- Windows 10/11 (开发者模式)

## 安装和运行

1. 克隆项目
```bash
git clone <repository-url>
cd electron-demo
```

2. 安装依赖
```bash
pnpm install
```

3. 开发模式运行
```bash
pnpm run electron:dev
```

4. 打包构建
```bash
pnpm run electron:build
```

## 项目结构 

## 注意事项

1. 开发模式
   - Windows 用户需要启用开发者模式或使用管理员权限运行命令行
   - 首次运行可能需要安装额外的依赖

2. 构建注意
   - 确保有足够的磁盘空间
   - 需要稳定的网络连接
   - Windows 用户可能需要管理员权限

## 常见问题

1. 构建失败
   - 检查是否以管理员身份运行
   - 清理缓存后重试
   ```bash
   pnpm run clean
   ```

2. 开发模式加载失败
   - 检查端口 5173 是否被占用
   - 确认 Node.js 版本是否符合要求


## 许可证

ISC License

## 更新日志

### v1.0.0 (当前版本)
- 初始版本发布
- 实现基础界面
- 添加轮播图功能
- 实现列表展示