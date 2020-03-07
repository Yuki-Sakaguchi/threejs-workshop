// fragment shader ( フラグメントシェーダー、ピクセルシェーダー )
// このファイルに各ピクセルごとの処理を記述します

// varying vec2 vUv;

// void main() {
//   // vec4 color = vec4(1.0, 0.0, 0.0, 1.0);// rgba
  
//   vec4 color = vec4(vUv.x, vUv.y, 0.0, 1.0);

//   gl_FragColor = color;// gl_FragColor に vec4 型（rgba）の色を入れることでピクセル色を決定する。
// }

varying vec2 vUv;

uniform float uAspect;
uniform float uTime;
uniform vec2 uMouse;
uniform float uRadius;
uniform sampler2D uTex;
uniform float uPercent;

// 緑の光
// void main () {
//   vec2 uv = vec2(vUv.x * uAspect, vUv.y);

//   vec2 center = vec2(uMouse.x * uAspect, uMouse.y); // 画面の中心
//   // float dist = length(vUv - center); // 中心から現在のピクセルへの距離を取得
//   // vec4 color = vec4(vec3(dist), 1.0);

//   // 経過時間に応じて円が大きくなる
//   // float radius = 0.5 + sin(uTime * 2.0) * 0.025;

//   float lightness = uRadius / length(uv - center);
//   // lightness = clamp(lightness, 0.0, 1.0);
//   vec4 color = vec4(vec3(lightness), 1.0);

//   color *= vec4(0.2, 1.0, 0.5, 1.0);

//   gl_FragColor = color;
// }



// エフェクト：階調反転
// void main () {
//   vec3 color = texture2D(uTex, vUv).rgb;
//   vec3 invert = 1. - color;
//   color = mix(color, invert, uPercent);
//   gl_FragColor = vec4(color, 1.0);
// }


// エフェクト：チャンネルシフト
// void main () {
//   float shift = uPercent * 0.01;

//   float r = texture2D(uTex, vUv + vec2(shift, 0.0)).r;
//   float g = texture2D(uTex, vUv).g;
//   float b = texture2D(uTex, vUv - vec2(shift, 0.0)).b;

//   vec3 color = vec3(r, g, b);

//   gl_FragColor = vec4(color, 1.0);
// }


// モザイク
// void main () {
//   vec2 uv = vUv;

//   float moz = uPercent * 0.02;

//   if (moz > 0.) {
//     uv = floor(uv / moz) * moz + (moz * 0.5);
//   }

//   vec3 color = texture2D(uTex, uv).rgb;

//   gl_FragColor = vec4(color, 1.0);
// }　


// ゆらゆら
// texture2D()に渡すUV座標をsin(), cos()でオフセットして、色の取得先を波っぽくずらします。
void main () {
  vec2 uv = vUv;

  // 弱め
  // float t = uTime * 6.0;
  // float amount = uPercent * 0.02;

  // スライダーみたいに激しめにウェーブ
  // float t = uTime * 24.0;
  // float amount = uPercent * 0.2;

  // プリンみたいにプリン！
  float t = uTime * 24.0;
  float amount = uPercent * 0.02;

  vec2 uvOffset = vec2(cos(uv.y * 20.0 + t), sin(uv.x * 10.0 - t)) * amount;
  vec3 color = texture2D(uTex, uv + uvOffset).rgb;

  gl_FragColor = vec4(color, 1.0);
}