export class RGB {
  color: number[] = [];
  constructor() {
    this.color = [this.random(), this.random(), this.random()];
  }
  random(): number {
    return Math.floor(Math.random() * 255);
  }
  get code(): number[] {
    return this.color;
  }
}