type RGBCode = [number, number, number];

export class RGB {
  colorCode: RGBCode;
  constructor() {
    this.colorCode = [this.random(), this.random(), this.random()];
  }
  random(): number {
    return Math.floor(Math.random() * 255);
  }
  get code(): RGBCode {
    return this.colorCode;
  }
}