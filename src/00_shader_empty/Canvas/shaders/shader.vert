// vertex shader ( 頂点シェーダー )
// このファイルに各頂点ごとの処理を記述します

varying vec2 vUv;
uniform float uFixAspect;

void main() {
  vec3 pos = position;// position: ShaderMaterialで補完される vec3 型(xyz)の変数。ジオメトリの頂点のこと。
  
  // pos.y = (pos.y * 0.5) + sin(pos.x * 3.0) * 0.5; // 縦を半分のサイズにして、sinでy座標を歪ませる

  // 余白ができないようにアスペクト補正
  vUv = uv - .5; // uv: ShaderMaterialで補完されるvec2(xy)の座標
  vUv.y *= uFixAspect;
  vUv += .5;

  gl_Position = vec4( pos, 1.0 );
}
