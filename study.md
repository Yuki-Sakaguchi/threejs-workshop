# 第０回　基礎
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

# 第１回　レンダリング
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

# 第２回　アニメーション
https://qiita.com/watabo_shi/items/1c3c50429279eedec04e

* アニメーションは`requestAnimationFrame()`ごとに`renderer.render()`をする
* `Rendering > Paint flashing`と`Rendering > FPS meter`にチェックを入れると、60fpsで再描画されていることがわかる
* `requestAnimationFrame()`ごとに単純に値を増減させていくとFPSによって結果がずれてしまうので時間ベースのアニメーションが良い
  * `performance.now()`を使うとページ表示からの経過時間がミリ秒で扱えるので使いやすい
  * この経過時間とアニメーションの数値を使って結果を作り出す

# 第３弾　マウスやスクロールでのインタラクション
https://qiita.com/watabo_shi/items/0811d03390c18e46be86

* ウィンドウとWebGLの座標を統一させると扱いやすくなる
  * WebGLで見えている範囲（カメラの画角）をウィンドウと同じpxに直す
  * シーンの高さからMath.tanなどを使って調整する
  * 単位が揃うのでboxなどの大きさも300pxとかにして直感的な操作になるよ
* ブラウザの座標とWebGLの座標が違うので注意
  * ブラウザは左上が0,0
  * WebGLは真ん中が0,0
  * マウスの位置などはこれを吸収してから扱う

# 第4回 DOM要素との連携
https://qiita.com/watabo_shi/items/9ab12f62434a1e858226#_reference-a437d85928b89c9bb5e5

* `element.getBoundingClientRect()` 
  * これを使うと要素のwidth, height, top, left, right, bottomなどが取得できる
  * x, yというあたいもあるけど使えないブラウザもあるので使わない
* DOMと連携するときにはやっぱりx, y軸の位置の扱いが違うのでそこをオフセットする必要がある


# 第5回 シェーダー(GLSL)の基礎
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

# 第6回 ShaderMaterialでメッシュを変形、着色する
https://qiita.com/watabo_shi/items/c0d4ef11cba6f21189ed

* 