export class Hex {
  color: string;
  chars: string = 'abcdef0123456789';
  constructor() {
    this.color = this.randomHex();
  }
  randomHex(): string {
    const hex: string[] = [];
    for (let i = 0; i < 6; i++) {
      hex.push(this.chars[Math.floor(Math.random() * this.chars.length)]);
    }
    return hex.join('');
  }
  get code(): string {
    return this.color;
  }
}