// 帮助ts理解jQuery库，以便使用的时候编辑器不报错

// 类型描述文件---这种是传统的那种使用jQuery的方式，通过script标签引入的

// 定义全局变量
// declare var $: (params: () => void) => void;
interface JqueryInstance {
  html: (params: string) => JqueryInstance;
}

// 定义全局函数
declare function $(params: () => void): void;
declare function $(params:string): JqueryInstance;

// 定义对象，以及对类进行定义，以及命名空间的嵌套
declare namespace $ {
  namespace fn {
    class init {}
  }
}

// 使用interface的语法，实现函数的重载
// interface JQuery {
//   (params: () => void): void;
//   (params:string): JqueryInstance;
// }
// declare var $: JQuery;