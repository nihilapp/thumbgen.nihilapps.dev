import { amber } from './color.amber';
import { black } from './color.black';
import { blue } from './color.blue';
import { cyan } from './color.cyan';
import { emerald } from './color.emerald';
import { fuchsia } from './color.fuchsia';
import { gold } from './color.gold';
import { gray } from './color.gray';
import { green } from './color.green';
import { pink } from './color.pink';
import { indigo } from './color.indigo';
import { lime } from './color.lime';
import { neutral } from './color.neutral';
import { orange } from './color.orange';
import { sky } from './color.sky';
import { red } from './color.red';
import { rose } from './color.rose';
import { royalBlue } from './color.rotal-blue';
import { paleSky } from './color.pale-sky';
import { hotPink } from './color.hot-pink';
import { purple } from './color.purple';
import { slate } from './color.slate';
import { teal } from './color.teal';
import { stone } from './color.stone';
import { violet } from './color.violet';
import { yellow } from './color.yellow';
import { zinc } from './color.zinc';

export const color = {
  amber,
  black,
  blue,
  cyan,
  emerald,
  fuchsia,
  gold,
  gray,
  green,
  hotPink,
  indigo,
  lime,
  neutral,
  orange,
  paleSky,
  pink,
  purple,
  red,
  rose,
  royalBlue,
  sky,
  slate,
  stone,
  teal,
  violet,
  yellow,
  zinc,
  white: '#FFFFFF',
  custom(code: string) {
    return `#${code}`;
  },
};
