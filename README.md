# 优医问诊

## 前置准备

### 项目搭建
```shell
npm init vue@latest
```

选择项目依赖内容
```bash
✔ Project name: … patients-h5-100
✔ Add TypeScript? … No / `Yes`
✔ Add JSX Support? … `No` / Yes
✔ Add Vue Router for Single Page Application development? … No / `Yes`
✔ Add Pinia for state management? … No / `Yes`
✔ Add Vitest for Unit Testing? … `No` / Yes
✔ Add Cypress for both Unit and End-to-End testing? … `No` / Yes
✔ Add ESLint for code quality? … No / `Yes`
✔ Add Prettier for code formatting? … No / `Yes`

Scaffolding project in /Users/zhousg/Desktop/...

Done. Now run:

  cd 项目名称
  pnpm install
  pnpm lint
  pnpm dev
```

### ts报错修改
在 `env.d.ts` （只要是 `.d.ts` 文件后缀即可）文件中添加如下配置：
```ts
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
```

前往 `tsconfig.json` 文件中添加如下配置：
```json
{
  "compilerOptions": {
    "strict": true,
    "module": "es2020",
    "target": "esnext",
    "jsx": "preserve",
    "moduleResolution": "node",
    "types": ["webpack-env", "vite/client", "vue-router", "vite-plugin-dts", "@vitejs/plugin-vue"]
  },
  "files": [],
  "include": [
    "env.d.ts",
  ],
  "references": [
    {
      "path": "./tsconfig.node.json"
    },
    {
      "path": "./tsconfig.app.json"
    }
  ],
}
```

关闭 vscode 重启项目即可。

### 快速搭建目录结构
在 `src` 文件夹打开终端，输入如下命令快速创建文件夹目录结构：
```bash
mkdir styles views services types utils
```

### 其他设置
1. 引入需要的依赖，如 `sass` 、`vant` 等
2. 在 `styles` 下新建一个 `main.scss` 文件，用于设置基础样式，修改覆盖 `vant` 的基础样式
3. `axios` 二次封装，并封装一个请求工具函数

## 提交规范
|命令|含义|
|-|-|
|feat|新功能 feature|
|fix|修复 bug|
|docs|文档注释|
|style|代码格式（不影响代码运行的变动）|
|refactor|重构、优化（既不增加新功能，也不修复bug）|
|perf|性能优化|
|test|增加测试|
|chore|构建过程或辅助工具变动|
|revert|回退|
|build|打包|