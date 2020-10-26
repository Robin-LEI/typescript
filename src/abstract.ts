// 抽象类只能被继承，不能被实例化
// 把一些类相关的公共的东西抽象出来

abstract class Geom {
  width: number;
  getType() {
    return 'geom';
  }
  abstract getArea(): number;
}

class Circle extends Geom {
  getArea() {
    return 1;
  }
}