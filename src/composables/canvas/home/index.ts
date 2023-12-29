import { Canvas2D } from "../canvas2D";

export class HomeCanvas extends Canvas2D {


  constructor(canvas: HTMLElement) {
    super(canvas);
  }

  initCavans = async () => {
    await this.initCanvas();
    await this.createTab()

    this.animation(() => {
      // 动画逻辑

    })
  }



  createTab = () => {
    let center = { x: this.WIDTH / 2, y: this.HEIGHT / 2 };  //中心点
    let radius = this
    let waveWidth = 0.011;   //波浪宽度,数越小越宽    
    let waveHeight = 70; //波浪高度,数越大越高
    let points = [];  //用于存放绘制Sin曲线的点

    const Tab = new Path2D();

  }


}
