# threejs workshop

## DEMO
https://yuki-sakaguchi.github.io/threejs-workshop/public/

This is [three.js v98](https://github.com/mrdoob/three.js/releases/tag/r98) tutorial.  

install  
`npm install`  
  
watch  
`npm run watch`  

watch & serve  
`npm start`  

build  
`npm run build`  

---

# 学んだこと

## 第０回　基礎
https://qiita.com/watabo_shi/items/f7c559c3cdbcdd0f2629

* レンダリング
  * ラスタ化処理
    * レンダリングの過程で、プログラムで扱う図形（頂点）データからスクリーンに表示するための画像（画素）データに変換すること
* 構成要素
  * 「モデル」「カメラ」「ライト」
* モデル
  * 形状、色、質感などが設定されたポリゴンのまとまりのこと
  * ポリゴン
    * 3つの頂点から成る三角形のこと
* 頂点バッファ
  * 3DCGプログラミングでは、モデルの情報をそれぞれ「頂点バッファ」と呼ばれる配列に格納する
  * Position(座標)
    * 頂点がいまどこにあるのかを（X,Y,Z）で表す
  * Color（色）
    * 頂点ごとに色（R,G,B,A）が設定できる
  * Normal（法線）
    * この頂点が構成しているポリゴンの面の方向ベクトル（X,Y,Z）を表す
    * ざっくり言うとポリゴンの表がどっちを向いているかの情報
    * ライティングを行う際に使用する

## 第１回　レンダリング
https://qiita.com/watabo_shi/items/bf9bcd4569b6d480c608

* Mesh（メッシュ）
  * GeometryとMaterialからなる３Dモデル
* Geometry（ジオメトリ）
  * 頂点バッファのposition, normalなどのモデルの`形状`を設定
  * 球体`THREE.SphereGeometry`や直方体`THREE.BoxGeometry`などがある
* Material
  * 色やテクスチャなどの`質感`の設定
* Light
  * 環境光の`THREE.AmbientLight`
  * 点光源の`THREE.PointLight`
  * 方向光源の`THREE.DirectionalLight`
* Scene
  * カメラで撮影するためのステージ
  * カメラとシーンを追加することでカメラに映るようになる
* Camera
  * シーン内の3Dモデルを撮影するためのカメラ
  * `THREE.PerspectiveCamera`など
* Renderer
  * カメラで撮影した3Dモデルを画面に表示するためのレンダラー

## 第２回　アニメーション
https://qiita.com/watabo_shi/items/1c3c50429279eedec04e

* アニメーションは`requestAnimationFrame()`ごとに`renderer.render()`をする
* `Rendering > Paint flashing`と`Rendering > FPS meter`にチェックを入れると、60fpsで再描画されていることがわかる
* `requestAnimationFrame()`ごとに単純に値を増減させていくとFPSによって結果がずれてしまうので時間ベースのアニメーションが良い
  * `performance.now()`を使うとページ表示からの経過時間がミリ秒で扱えるので使いやすい
  * この経過時間とアニメーションの数値を使って結果を作り出す

## 第３弾　マウスやスクロールでのインタラクション
https://qiita.com/watabo_shi/items/0811d03390c18e46be86

* ウィンドウとWebGLの座標を統一させると扱いやすくなる
  * WebGLで見えている範囲（カメラの画角）をウィンドウと同じpxに直す
  * シーンの高さからMath.tanなどを使って調整する
  * 単位が揃うのでboxなどの大きさも300pxとかにして直感的な操作になるよ
* ブラウザの座標とWebGLの座標が違うので注意
  * ブラウザは左上が0,0
  * WebGLは真ん中が0,0
  * マウスの位置などはこれを吸収してから扱う

## 第4回 DOM要素との連携
https://qiita.com/watabo_shi/items/9ab12f62434a1e858226#_reference-a437d85928b89c9bb5e5

* `element.getBoundingClientRect()` 
  * これを使うと要素のwidth, height, top, left, right, bottomなどが取得できる
  * x, yというあたいもあるけど使えないブラウザもあるので使わない
* DOMと連携するときにはやっぱりx, y軸の位置の扱いが違うのでそこをオフセットする必要がある

## 第5回 シェーダー(GLSL)の基礎
https://qiita.com/watabo_shi/items/7325948db5c07f6fe9c7

* GLSL
  * OpenGL Shading Language （OpenGLシェーディング言語）
  * C言語がベース
  * モデルに陰影をつけるためのもの（シェーディング）
  * 頂点やピクセル単位でいじれるので、陰影だけでなく様々な表現が可能
  * WebGL1.0では、「頂点シェーダー」「フラグメントシェーダー（ピクセルシェーダー）」が使える
    * 頂点シェーダーは`.vert`(または`.glsl`)
    * ピクセルシェーダーは`.frag`（または`.glsl`）
* なぜシェーダーを書くのか
  * CPUではなくGPUで処理されるから
  * CPUはスポーツカー
    * とにかく速い
    * 一度に多くの人を運べない
  * GPUはバス
    * 同じ目的の人を一度に多く運べる
    * 速度自体はCPUにはおよばない
  * ということで、GPUは頂点やピクセルなど、大量の情報を一気に処理するのが得意
* シェーダーのフロー
  * ラスタ化処理の中でシェーダーが隠れている
  * フロー
    * 頂点データ（CPUで作成した頂点座標）
    * ※ 頂点シェーダー(頂点データを処理。座標を動かしたり、パースをかけたり)
    * ラスタライズ（頂点シェーダーで処理された頂点データを元に、線や面を画素データに変換）
    * ※ ピクセルシェーダー（ラスタライズされた画素データを処理。色を変えたり、テクスチャ座標をずらしたり）
    * 画素データ(ピクセルシェーダーで決定した画素データを表示)

## 第6回 ShaderMaterialでメッシュを変形、着色する
https://qiita.com/watabo_shi/items/c0d4ef11cba6f21189ed

* マテリアル
  * `ShaderMaterial`
    * 便利な変数を使ってシェーダーを書く
  * `RawShaderMaterial`
    * 補助無しのプレーンなシェーダー
* GLSLのコードをjs上に書くことになるのでテンプレート文字列を使うと書きやすい
* .vert, .frag, .glslファイルをwebpack上で使うためには`webpack-glsl-loader`を使う
* 頂点シェーダー
  * 各頂点ごとの処理を書くことができる
  * `void main()`の中にメイン処理を書く
  * `position` = ShaderMaterialで補完される vec3 型(xyz)の変数。ジオメトリの頂点のこと。
  * `gl_Position` = vec4型の座標を代入すると頂点の位置を決定するGLSLの組み込み変数
  * CPUだといちいちforループを回さないとできないことが、シェーダーを使うとほんの数行で実現できる
* ピクセルシェーダー
  * 各ピクセルごとの処理を書くことができる
  * `gl_FragColor` = vec4型の色を代入することでピクセルの色を決定するGLSLの組み込み変数
  * `vec4(1.0, 1.0, 1.0, 1.0)` = 白
  * `vec4(1.0, 1.0, 1.0, 1.0)` = 赤

## 第7回 シェーダーに変数を渡す
https://qiita.com/watabo_shi/items/1b48ca54a9034f3614d8

* 頂点シェーダーからピクセルシェーダーに変数を送ったり、CPU（JavaScript）からGPU（シェーダー）に変数を送ったりできる
* `varying`
  * 変数の前にvaryingをつけると頂点シェーダーからピクセルシェーダーに送られる
  * 頂点シェーダーもピクセルシェーダーも同じ書き方
  * 変数の頭に`v`の接頭辞をつけることによってわかりやすくする
* メッシュのテクスチャ座標をピクセルシェーダーに送る
  * テクスチャ座標
    * 頂点ごとにテクスチャのどの部分を対応させるのかを設定するもの
    * テクスチャの座標系では左下が原点になる
    * `uv`という変数名で受け取れる（ShaderMaterialで補完されるvec2(xy)の座標）
* `uniform`
  * CPUから値を受け取ります
  * 頂点シェーダーとピクセルシェーダー両方に送られますが、変数を使用しないシェーダーには記述する必要はありません。
  * 頭に接頭辞の`u`をつけるとわかりやすい
  * 変数はCPUから値を受け取るため、代入はできません
  * CPU側で更新した値はシェーダーが側でも使えるので、経過時間を渡してそれによってアニメーションさせたりする

## 第8回 シェーダーをインタラクティブに動かす
https://qiita.com/watabo_shi/items/39d21d53ca16541fd498

* 第3回でやったmouse座標を持ってくるを使ってmouse座標をシェーダーに渡して位置を設定する
* `leap`を使うと簡単なイージングが実装できる
  * `vecA.lerp(vecB, 0.2)`とかくと`vecAをvecBの位置に20%近づける`という意味になる
  * この処理が毎フレーム呼び出されるように書いておけば、現在の位置から徐々に20%ずつ近づいていきます。
  * 近づけば近づくほど20%の量が小さくなるのでゆっくりになります。
  * これをfloatで書こうとしたら`val += (tragetVal - val) * 0.2`となります。

## 第9回 シェーダーでテクスチャにエフェクトをかける
https://qiita.com/watabo_shi/items/2fc671f2147e799787f9

* テクスチャーの読み込み方
  * `TextureLoader(three/src/loaders/TextureLoader)`
    * `const loader = new TextureLoader();// テクスチャローダーを作成`
    * `const texture = loader.load('/resource/img/img.jpg');// テクスチャ読み込み`
  * これで読み込んだtextureをuniformsでシェーダーに渡して使う
    * `uniform sample2D uTet;`
    * `vec3 color = texture2D(uText, vUV).rgb`
      * テクスチャのuv座標地点の色をrgbaで取得
* テクスチャ画像サイズについて
  * WebGLではメモリ効率化のため、テクスチャに使用する画像は`縦横が2の累乗サイズの画像の利用が推奨されています。`
  * `256 x 256`、`512 x 1024`、`2048 x 128`など
  * 非推奨のサイズ画像を使うとコンソールでアラートが出る
* アスペクト比
  * cssの`background-size: cover;`と同じように画面中心からスケールして全体を覆い尽くすように扱いたいので計算方法が異なる
* GLSLは色を0.0 ~ 1.0で表現するので、1.0 - colorとすることで色が反転する
* `mix()`関数は第一、第二引数に入れたふたつの色（色でなくでも可）を第三引数のfloat値をパーセントとして混ぜる関数です
* エフェクト
  * 階調反転
  * チャンネルシフト
  * モザイク
  * ゆらゆら