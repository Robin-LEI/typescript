// 帮助ts理解jQuery库，以便使用的时候编辑器不报错

// 类型描述文件---这种是es6模块化的描述文件

declare module 'jquery' {
  interface JqueryInstance {
    html: (params: string) => JqueryInstance;
  }
  function $(params: () => void): void;
  function $(params:string): JqueryInstance;
  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
