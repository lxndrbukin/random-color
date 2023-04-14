export class BackgroundColor<T> {
  constructor(public color: T) { }
  set(divId: string): void {
    const root: HTMLElement = document.getElementById(divId)!;
    if (this.color instanceof Array) {
      const rgb = this.color.join(', ');
      root.style.backgroundColor = `rgb(${rgb})`;
    }
  }
}