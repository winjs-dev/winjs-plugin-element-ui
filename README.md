# winjs-plugin-element-ui

适配 WinJS 的 Element UI 插件，为 Vue 2 项目提供 Element UI 组件库的自动导入和配置支持。

<p>
  <a href="https://npmjs.com/package/@winner-fed/plugin-element-ui">
   <img src="https://img.shields.io/npm/v/@winner-fed/plugin-element-ui?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/@winner-fed/plugin-element-ui?minimal=true"><img src="https://img.shields.io/npm/dm/@winner-fed/plugin-element-ui.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## 功能特性

- 🚀 **自动导入**: 支持 Element UI 组件的按需自动导入
- 📦 **零配置**: 开箱即用，无需手动配置组件导入
- 🔧 **集成性**: 与 WinJS 框架深度集成
- 🎯 **Vue 2 兼容**: 专为 Vue 2 项目设计

## 安装

```bash
npm install @winner-fed/plugin-element-ui element-ui
# 或者
yarn add @winner-fed/plugin-element-ui element-ui
# 或者
pnpm add @winner-fed/plugin-element-ui element-ui
```

## 快速开始

### 1. 在 `.winrc.ts` 中配置插件

```typescript
import { defineConfig } from 'win';

export default defineConfig({
  plugins: [
    require.resolve('@winner-fed/plugin-element-ui')
  ],
  elementUI: {
    // 插件配置选项（可选）
  }
});
```

### 2. 在 Vue 组件中使用

插件会自动处理 Element UI 组件的导入，你可以直接在模板中使用：

```vue
<template>
  <div>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      date: ''
    }
  }
}
</script>
```

## 配置选项

### elementUI

类型：`object`

Element UI 相关配置，目前支持的配置项：

```typescript
export default defineConfig({
  elementUI: {
    // 未来可能会添加更多配置选项
  }
});
```

## 工作原理

本插件通过以下方式实现 Element UI 的集成：

1. **自动检测依赖**: 插件会自动检测项目中是否安装了 `element-ui` 包
2. **配置解析器**: 使用 `unplugin-vue-components` 的 `ElementUiResolver` 来处理组件的自动导入
3. **版本信息**: 自动读取 Element UI 的版本信息并注入到应用数据中
4. **按需导入**: 只导入实际使用的组件，减少打包体积

## 依赖要求

- Vue 2.x
- Element UI 2.15.13+
- WinJS 框架

### 示例代码

```vue
<!-- src/pages/index.vue -->
<template>
  <div>
    <h2>Welcome to WinJS + Element UI!</h2>
    <el-button type="primary">我是 Element UI 的按钮</el-button>
    <el-input v-model="message" placeholder="输入一些内容"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>
```

## 常见问题

### Q: 插件无法找到 Element UI 包？

A: 确保已经安装了 `element-ui` 依赖：

```bash
npm install element-ui
```

### Q: 组件样式没有生效？

A: Element UI 的样式需要单独引入，可以在入口文件中添加：

```javascript
// 在 main.js 或入口文件中
import 'element-ui/lib/theme-chalk/index.css'
```

### Q: 如何使用 Element UI 的按需导入？

A: 插件已经自动配置了按需导入，你只需要在模板中使用组件即可，无需手动导入。

## 许可证

[MIT](./LICENSE).
