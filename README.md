# 1.别名设置,自动提示tsconfig.json
```bash
    alias: {
        '@myCenterPage': path.resolve(__dirname, '..', 'src/pages/myCenterPage/pages'),
        '@homePages': path.resolve(__dirname, '..', 'src/pages/homePages/pages'),
        '@components': path.resolve(__dirname, '..', 'src/components'),
        '@api': path.resolve(__dirname, '..', 'src/api'),
        '@utils': path.resolve(__dirname, '..', 'src/utils'),
        '@store': path.resolve(__dirname, '..', 'src/store'),
        '@assets': path.resolve(__dirname, '..', 'src/assets')
      },
```

### 2.无状态组件

### 3.mobx 统一状态管理器,多状态管理器

### 4.useState

### 5.createContext,useContext 组件间传值

### 6.时间处理moment
```bash
    yarn add moment
```

### 7.网络请求axios
```bash
    yarn add axios
```
### 8.图片懒加载
```bash
    yarn add react-lazyload
```

### 9.系统变量配置src/config/constant.js
```bash
    1.该文件的主要作用是对系统长脸能够进行定义，包括http协议，允许上传的文件类型，性别说明，等
```

### 10.系统变量配置src/assets
```bash
   存放静态资源文件
```
### 11.系统变量配置src/components
```bash
   存放共调用的功能公共组件
```
### 12.系统变量配置src/pages
```bash
   存放路由对应的页面，同时还分了两个包分别是homePages，myCenterPage，更具需求继续分包，具体可参考app.tsx中的subPackages
```
### 13.系统变量配置src/store
```bash
   存放的是全局的状态管理器，所有状态管理器都要放在这里进行统一管理
```
### 14.系统变量配置src/utils
```bash
   1.存放的有网络请求封装的底层request.js，他在src/api中尽心那个调用。
   2.libs,tools存放的是一些常用的公共那个方法，包括请求参数的处理等
```
### 15.系统变量配置src/index.js
```bash
   全局的入口文件，包括store的注入也在此完成
```
### 16.系统变量配置src/api
```bash
    所有的网络请求都在这里进行发起，在需要网络请求的位置进行调用，参数处理也最好着这个文件夹下对应的js中进行处理
```

# 预期
### 1.实现自动化项目管理，减少手动修改代码在scripts目录下进行";



