/**
 * @description canvas init
 */

import { GUI } from "dat.gui";

export class Canvas2D {

  static instance: Canvas2D;
  protected canvas!: HTMLCanvasElement;
  protected ctx!: CanvasRenderingContext2D;

  protected WIDTH: number = 0;
  protected HEIGHT: number = 0;

  protected frameHandle: number = 0;

  // animation
  protected delta = 0; // 时间间隔
  protected fps_60 = 60
  protected fps_30 = 30
  protected runAnimate = true;

  constructor(canvas: HTMLElement) {
    this.createCavnasEl(canvas)
    Canvas2D.instance = this;

  }

  _initCanvasCallBack = () => { };

  protected initCanvas = async () => {
    await this.onWindowResize();
    await this.initCanvasListener();
    await this.frameByFrame();

    this._initCanvasCallBack()

  }

  private createCavnasEl = (canvas: HTMLElement) => {
    const canvasEl = document.createElement('canvas')
    canvas.appendChild(canvasEl)
    this.canvas = canvasEl;
    this.ctx = canvasEl.getContext('2d')!;
  }

  private initCanvasListener() {
    // 随浏览器窗口大小发生变化
    window.addEventListener("resize", this.onWindowResize);

  }

  private countRect() {
    let width = document.body.clientWidth;
    let height = document.body.clientHeight;
    if (width != this.WIDTH || height != this.HEIGHT) {
      this.WIDTH = width;
      this.HEIGHT = height;
    };
  }

  private onWindowResize = () => {
    this.countRect();
    this.canvas.width = this.WIDTH;
    this.canvas.height = this.HEIGHT;
    this.canvas.style.width = this.WIDTH + 'px';
    this.canvas.style.height = this.HEIGHT + 'px';
  }


  _animation: VoidFunction = () => { };

  animation(call: VoidFunction) {
    this._animation = call;
  }

  /**
   * @description 逐帧渲染 frame(帧)
   */
  private frameByFrame = () => {
    this.frameHandle = requestAnimationFrame(this.frameByFrame);
    // 计算与上一帧的时间差
    this.delta += performance.now();
    // 如果时间差小于 16.7 毫秒，则等待剩余时间
    if (this.delta > 1 / this.fps_60) {
      this.runAnimate && this._animation();
      this.delta = 0;
    }

  }

  /**
   *  @description 停止逐帧渲染
   */
  protected stopFrame = () => {
    cancelAnimationFrame(this.frameHandle);
    this.frameHandle = 0;
  }

  /**
   * @description canvas 重绘
   */
  protected rePaint = () => {
    this.ctx.clearRect(0, 0, this.WIDTH, this.HEIGHT);
  }
}
