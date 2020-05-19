import Page00  from './00_empty';
import Page00s from './00_shader_empty';
import Page01  from './01_rendering';
import Page02  from './02_animation';
import Page03  from './03_interaction';
import Page04  from './04_linkWithDOM';
import Page05  from './05_shader';
import Page06  from './06_shader_texture';

// ドキュメントを読み込んだらページごとの処理を実行
document.addEventListener('DOMContentLoaded', () => {
  const path = location.pathname;
  console.log(path);

  if(path.indexOf('00_empty') >= 0)               new Page00();
  else if(path.indexOf('00_shader_empty') >= 0)   new Page00s();
  else if(path.indexOf('01_rendering') >= 0)      new Page01();
  else if(path.indexOf('02_animation') >= 0)      new Page02();
  else if(path.indexOf('03_interaction') >= 0)    new Page03();
  else if(path.indexOf('04_linkWithDOM') >= 0)    new Page04();
  else if(path.indexOf('05_shader') >= 0)         new Page05();
  else if(path.indexOf('06_shader_texture') >= 0) new Page06();
});
