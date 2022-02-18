该项目使用[Create React App](https://github.com/facebook/create-react-app)生成. 基本按要求完成

从git clone之后, 首先需要安装相关依赖, 安装完成后使用`yarn start`命令启动项目
## 项目使用技术
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Material UI](https://material-ui.com/)
- [typescript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)

## 项目结构
主要看src
```
src
├─App.tsx                 // 首页
├─index.css
├─index.tsx
├─react-app-env.d.ts
├─serviceWorker.ts
├─setupTests.ts
├─searchHeader
|      └Header.tsx        // 搜索头部组件, 内部拆分了搜索框组件
├─search                  
|   ├─SearchResult.tsx    // 搜索结果展示组件
|   ├─mockData.ts         // mock 数据
|   ├─searchMockAPI.ts    // mock API
|   └searchSlice.ts       // search result的reducer, 里面包含了state、actions、thunk的数据获取
├─app                     // store的生成
|  ├─hooks.ts             // 根据项目定义自己的hooks
|  └store.ts              // 装配reducer的地方, 返回一个store
```