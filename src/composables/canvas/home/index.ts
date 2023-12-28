import { Canvas2D } from "../canvas2D";

export class HomeCanvas extends Canvas2D {

  constructor(canvas: HTMLElement) {
    super(canvas);
  }

  initCavans = async () => {
    await this.initCanvas();

    this.animation(() => {
      // 动画逻辑
      
    })
  }

}
