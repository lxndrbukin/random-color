import { BackgroundColor } from './BackgroundColor';
import { RGB } from './RGB';
import { Hex } from './Hex';

const btn = document.getElementById('btn')!;

function setColor(): void {
  const rgb = new RGB();
  // const hex = new Hex();
  const bgcolor = new BackgroundColor(rgb);
  bgcolor.set('root');
}

btn.addEventListener('click', () => {
  setColor();
});

setColor();
