import { BackgroundColor } from './BackgroundColor';
import { RGB } from './RGB';
import { Hex } from './Hex';

const rgb = new RGB();
const hex = new Hex();
hex.randomLetter();
const bgcolor = new BackgroundColor(rgb.code);

bgcolor.set('root');