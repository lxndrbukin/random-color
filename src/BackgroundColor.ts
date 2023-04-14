interface Color {
  code: string | number[];
}

export class BackgroundColor {
  constructor(public color: Color) { }
  set(divId: string): void {
    const root: HTMLElement = document.getElementById(divId)!;
    const { code } = this.color;
    if (code instanceof Array) {
      console.log(code);
      const rgb = code.join(', ');
      root.style.backgroundColor = `rgb(${rgb})`;
    }
    if (typeof code === 'string') {
      console.log(code);
      root.style.backgroundColor = `#${code}`;
    }
  }
}