# 开发环境配置

1. npm install -g typescript
2. 实时编译：terminal---->>RunTask--->>会出现两个选择，选择 tsc:watch - tsconfig.json
3. tsc --init 生成 tsconfig.json 文件，tsconfig.json 为配置文件，所在的目录为根目录，更多配置[点击官网](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
4. 1. ts 代码不能直接在浏览器和 node 环境下直接运行的，需要先进行 tsc 编译，要想在 node 环境下直接运行 ts 代码，可以安装一个工具 ts-node， ts-node demo.ts

# 编译

1. "build": "tsc -w" 实时编译
2. 实时运行编译后的文件，"start": "nodemon node ./build/crowller.js"
3. 在 package.json 文件进行 nodemon 配置， "nodemonConfig": {"ignore": ["data/*"]}，忽略 data 下面的变化导致的重新运行，nodemon 默认不支持监听 ts 的变化
4. 安装 concurrently，同时运行多个代码

```json
"scripts": {
  "dev:build": "tsc -w",
  "dev:start": "nodemon node ./build/crowller.js",
  "dev": "concurrently npm:dev:*" // 等价于 concurrently npm run dev:build & npm run dev:start
}
```

# 配置文件 tsconfig.json

1. 直接执行 tsc 命令，后面不跟任何参数的时候，才会走 tsconfig.json 文件，否则不走该文件
2. include 指定编译文件
3. exclude 排除那些不需要编译的文件
4. files: []，会编译那些写在该数组的文件
5. removeComments: true 去除注释
6. strict: true
7. noImplicitAny: true 如果是 any 类型也必须写上
8. strictNullChecks: false 不强制对 null 进行校验，此时 null 也可以赋值给字符串类型
9. "rootDir": "./src"
10. "outDir": "./build"
11. "incremental": true，增量编译，已经编译过的不在编译
12. target: es5，编译成 ts5
13. allowJs: true，es6 的 js 代码也可以编译成 es5 的
14. checkJs: true，对 js 语法进行检测
15. sourceMap: true，生成 sourceMap 文件
16. noUnusedLocals: true，对于那些没有使用的变量报错
17. noUnusedParameters: true，对于函数没有使用的参数报错，对函数参数进行校验
18. outFile: "./build/page.js" 但是不支持 commonjs 规范，支持 amd 规范，把所有文件全部打包到这一个文件

# ts 中的模块化-namespace

```js
namespace Home {
  // 不想暴露出去的模块
  class Header {}
  class Content {}
  class Footer {}
  // 需要暴露出去的模块
  export class Page {}
}
```

# namespace 之间的引用

```ts
// page.ts
///<reference path='./components.ts' />
namespace Home {
  export class Page {
    user: Components.User = {
      name: "ts",
    };
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}

// components.ts
namespace Components {
  export namespace SubComponents {
    export class Test {}
  }
  export interface User {
    name: string;
  }
  export class Header {
    constructor() {}
  }
  export class Content {
    constructor() {}
  }
  export class Footer {
    constructor() {}
  }
}
```

# import 模块化

```ts
import { Header, Content, Footer } from "./components";
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
// 在index.html中需要引入requirejs解析define amd规范
require([
  "page",
  function (page) {
    new page.default();
  },
]);
```

# parcel

# 描述文件中的全局类型

# 如遇到如下报错：

> tsc : 无法加载文件 C:\Users\Administrator\AppData\Roaming\npm\tsc.ps1，因为在此系统上禁止运行
> 脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution
> \_Policies。
> 解决方式：
> 按照管理员权限打开 Windows powershell，输入 set-ExecutionPolicy RemoteSigned，输入 Y

# 基础类型

1. null、undefined、void、number、string、boolean、symbol

# 对象类型

1. const teacher : {name: string} = {name: 'ts'}
2. const age: number[] = [1,2,3]
3. class Person {}，const dell : Person = new Person()
4. const getTotal = () => numebr = () => {return 1;} // 是一个函数 返回值是一个 number，具体函数为...

# 类型注解

```js
let count: number;
count = 123;
```

# 类型推断

```js
let count = 123;
```

# 常见配置项

```js
{
  "compilerOptions": {
    "allowUnreachableCode": true, // 不报告执行不到的代码错误。
    "allowUnusedLabels": false,	// 不报告未使用的标签错误
    "alwaysStrict": false, // 以严格模式解析并为每个源文件生成 "use strict"语句
    "baseUrl": ".", // 工作根目录
    "experimentalDecorators": true, // 启用实验性的ES装饰器
    "jsx": "react", // 在 .tsx文件里支持JSX
    "sourceMap": true, // 是否生成map文件
    "module": "commonjs", // 指定生成哪个模块系统代码
    "noImplicitAny": false, // 是否默认禁用 any
    "removeComments": true, // 是否移除注释
    "types": [ //指定引入的类型声明文件，默认是自动引入所有声明文件，一旦指定该选项，则会禁用自动引入，改为只引入指定的类型声明文件，如果指定空数组[]则不引用任何文件
      "node", // 引入 node 的类型声明
    ],
    "paths": { // 指定模块的路径，和baseUrl有关联，和webpack中resolve.alias配置一样
      "src": [ //指定后可以在文件之直接 import * from 'src';
        "./src"
      ],
    },
    "target": "ESNext", // 编译的目标是什么版本的
    "outDir": "./dist", // 输出目录
    "declaration": true, // 是否自动创建类型声明文件
    "declarationDir": "./lib", // 类型声明文件的输出目录
    "allowJs": true, // 允许编译javascript文件。
    "lib": [ // 编译过程中需要引入的库文件的列表
      "es5",
      "es2015",
      "es2016",
      "es2017",
      "es2018",
      "dom"
    ]
  },
  // 指定一个匹配列表（属于自动指定该路径下的所有ts相关文件）
  "include": [
    "src/**/*"
  ],
  // 指定一个排除列表（include的反向操作）
  "exclude": [
    "demo.ts"
  ],
  // 指定哪些文件使用该配置（属于手动一个个指定文件）
  "files": [
    "demo.ts"
  ]
}
```
