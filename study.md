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