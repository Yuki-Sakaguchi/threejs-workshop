// これだと使ってないモジュールも全てバンドルされるので重くなる
// import * as THREE from 'three'

// こんな感じで必要な奴だけimportするとバンドルサイズを抑えられる
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import { Scene } from 'three/src/scenes/Scene';
import { PointLight } from 'three/src/lights/PointLight';
import { BoxGeometry } from 'three/src/geometries/BoxGeometry';
import { MeshLambertMaterial } from 'three/src/materials/MeshLambertMaterial';
import { Mesh } from 'three/src/objects/Mesh';
import { Vector2 } from 'three/src/math/Vector2';

export default class Canvas {
  constructor (elementId) {
    // elementIdのついたDOM要素を取得
    this.element = document.getElementById(elementId)
    const rect = this.element.getBoundingClientRect()

    //  ウィンドウサイズ
    this.w = window.innerWidth
    this.h = window.innerHeight

    // マウス座標
    this.mouse = new Vector2(0, 0)

    // スクロール
    this.scrollY = 0

    // レンダラーを作成
    this.renderer = new WebGLRenderer({ alpha: true }) // 背景を透明に
    this.renderer.setSize(this.w, this.h)
    this.renderer.setPixelRatio(window.devicePixelRatio) // ピクセル比

    // #canvas-containerにレンダラーのcanvasを追加
    const container = document.getElementById('canvas-container')
    container.appendChild(this.renderer.domElement)

    // カメラを作成（視野角、画面のアスペクト比、カメラに映る最短距離、カメラに映る最遠距離）
    // this.camera = new PerspectiveCamera(60, this.w / this.h, 1, 10)
    // this.camera.position.z = 3 // カメラを遠ざける

    // カメラに映る範囲を画面のサイズにする(見たままの大きさをpxで操作できるようになった)
    // 視野角をラジアンに変換
    const fov = 60
    const fovRad = (fov / 2) * (Math.PI / 180)
    const dist = (this.h / 2) / Math.tan(fovRad)
    this.camera = new PerspectiveCamera(fov, this.w / this.h, 1, dist * 2)
    this.camera.position.z = dist

    // シーンを追加
    this.scene = new Scene()

    // ライトを作成
    this.light = new PointLight(0x00ffff)
    this.light.position.set(0, 0, 400) // ライトの位置を設定

    // ライトをシーンに追加
    this.scene.add(this.light)

    // 立方体のジオメトリを作成（幅、高さ、奥行き）
    const depth = 300
    const geo = new BoxGeometry(rect.width, rect.height, depth)

    // マテリアルを作成
    const mat = new MeshLambertMaterial({ color: 0xffffff })

    // ジオメトリとマテリアルからメッシュを作成
    this.mesh = new Mesh(geo, mat)

    // ウィンドウ中心からDOMRect中心へのベクトルを求めてオフセットする
    const center = new Vector2(rect.x + rect.width / 2, rect.y + rect.height / 2)
    const diff = new Vector2(center.x - this.w / 2, center.y - this.h / 2)
    this.mesh.position.set(diff.x, -diff.y, -depth / 2) // zは半分前に出ているのを下げる
    this.offsetY = this.mesh.position.y
    　
    // rotationの角度の単位はラジアン
    // this.mesh.rotation.x = Math.PI / 4 // PI = 180° なので 180 / 4 = 45°
    // this.mesh.rotation.y = Math.PI / 4 // THREE.Math.DEG2RAD * 45で度数法で書ける

    // メッシュをシーンに追加
    this.scene.add(this.mesh)

    // 画面に表示
    this.render()
  }

  /**
   * マウスの位置を保存。ブラウザのx,yとWebGLでの座標の扱いが違うのでここで吸収する
   * @param x 
   * @param y 
   */
  mouseMoved (x, y) {
    // ブラウザは左上が(0, 0), WebGLは真ん中が(0, 0) 
    this.mouse.x = x - (this.w / 2)
    this.mouse.y = -y + (this.h / 2)
  }

  /**
   * スクロール位置を保存
   * @param y 
   */
  scrolled (y) {
    this.scrollY = y
  }

  /**
   * 描画
   */
  render () {
    requestAnimationFrame(() => this.render())
    
    // これだとrequestAnimationFrameのタイミングによって結果が変わってしまうので時間ベースにする
    // this.mesh.rotation.x += 0.01    
    // this.mesh.rotation.y += 0.01    

    // performance.now()は「ページ表示時からの経過時間がミリ秒」が帰ってくる
    // const sec = performance.now() / 1000 // ミリ秒から秒に変換

    // 1秒で45°回転する
    // this.mesh.rotation.x = sec * (Math.PI / 4)
    // this.mesh.rotation.y = sec * (Math.PI / 4)

    // ライトの位置をマウスの位置に変更
    this.light.position.x = this.mouse.x
    this.light.position.y = this.mouse.y

    // メッシュの位置をスクロールに追従させる
    // this.mesh.position.y = this.scrollY * 0.5 // DOMよりもスクロールを送らせてパララックス風にする
    this.mesh.position.y = this.offsetY + this.scrollY // DOMの大きさと位置に追従するように設定

    this.renderer.render(this.scene, this.camera)
  }
};
