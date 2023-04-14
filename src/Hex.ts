type HexCode = [string, string, string, string, string, string];

export class Hex {
  colorCode: HexCode = ['a', 'a', 'a', 'a', 'a', 'a'];
  letters: string = 'abcdef';
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() {
    // this.colorCode = [];
  }
  randomLetter(): string {
    const { length } = this.letters;
    const { letters } = this;
    return letters[Math.floor(Math.random() * length)];
  }
  randomNumber(): number {
    const { length } = this.numbers;
    const { numbers } = this;
    return numbers[Math.floor(Math.random() * length)];
  }
}