# typescript

> TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准。
> TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。

### JavaScript 与 TypeScript 的区别
TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。

### 资源
官网[http://wwww.typescriptlang.org](http://www.typescriptlang.org)

### ts环境搭建
+ 安装
```
npm i typescript -g
```
+ 配置文件
```
tsc --init
```
+ 生成package.json
```
npm init 
```
+ 工程化
    + 安装相关工具：webpack、webpack-cli、webpack-dev-server、ts-loader、typescript、html-webpack-plugin
    ```
    cnpm i webpack webpack-cli webpack-dev-server ts-loader typescript html-webpack-plugin
    ```

# 运行
```
npm run dev
```
