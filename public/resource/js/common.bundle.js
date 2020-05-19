/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"common": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/00_empty/Canvas/index.js":
/*!**************************************!*\
  !*** ./src/00_empty/Canvas/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/PerspectiveCamera */ \"./node_modules/three/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/lights/PointLight */ \"./node_modules/three/src/lights/PointLight.js\");\n/* harmony import */ var three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/geometries/BoxGeometry */ \"./node_modules/three/src/geometries/BoxGeometry.js\");\n/* harmony import */ var three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/MeshLambertMaterial */ \"./node_modules/three/src/materials/MeshLambertMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// これだと使ってないモジュールも全てバンドルされるので重くなる\n// import * as THREE from 'three'\n// こんな感じで必要な奴だけimportするとバンドルサイズを抑えられる\n\n\n\n\n\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas(elementId) {\n    _classCallCheck(this, Canvas);\n\n    // elementIdのついたDOM要素を取得\n    this.element = document.getElementById(elementId);\n    var rect = this.element.getBoundingClientRect(); //  ウィンドウサイズ\n\n    this.w = window.innerWidth;\n    this.h = window.innerHeight; // マウス座標\n\n    this.mouse = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](0, 0); // スクロール\n\n    this.scrollY = 0; // レンダラーを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]({\n      alpha: true\n    }); // 背景を透明に\n\n    this.renderer.setSize(this.w, this.h);\n    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n    // #canvas-containerにレンダラーのcanvasを追加\n\n    var container = document.getElementById('canvas-container');\n    container.appendChild(this.renderer.domElement); // カメラを作成（視野角、画面のアスペクト比、カメラに映る最短距離、カメラに映る最遠距離）\n    // this.camera = new PerspectiveCamera(60, this.w / this.h, 1, 10)\n    // this.camera.position.z = 3 // カメラを遠ざける\n    // カメラに映る範囲を画面のサイズにする(見たままの大きさをpxで操作できるようになった)\n    // 視野角をラジアンに変換\n\n    var fov = 60;\n    var fovRad = fov / 2 * (Math.PI / 180);\n    var dist = this.h / 2 / Math.tan(fovRad);\n    this.camera = new three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"](fov, this.w / this.h, 1, dist * 2);\n    this.camera.position.z = dist; // シーンを追加\n\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"](); // ライトを作成\n\n    this.light = new three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__[\"PointLight\"](0x00ffff);\n    this.light.position.set(0, 0, 400); // ライトの位置を設定\n    // ライトをシーンに追加\n\n    this.scene.add(this.light); // 立方体のジオメトリを作成（幅、高さ、奥行き）\n\n    var depth = 300;\n    var geo = new three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__[\"BoxGeometry\"](rect.width, rect.height, depth); // マテリアルを作成\n\n    var mat = new three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__[\"MeshLambertMaterial\"]({\n      color: 0xffffff\n    }); // ジオメトリとマテリアルからメッシュを作成\n\n    this.mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__[\"Mesh\"](geo, mat); // ウィンドウ中心からDOMRect中心へのベクトルを求めてオフセットする\n\n    var center = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](rect.x + rect.width / 2, rect.y + rect.height / 2);\n    var diff = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](center.x - this.w / 2, center.y - this.h / 2);\n    this.mesh.position.set(diff.x, -diff.y, -depth / 2); // zは半分前に出ているのを下げる\n\n    this.offsetY = this.mesh.position.y; // rotationの角度の単位はラジアン\n    // this.mesh.rotation.x = Math.PI / 4 // PI = 180° なので 180 / 4 = 45°\n    // this.mesh.rotation.y = Math.PI / 4 // THREE.Math.DEG2RAD * 45で度数法で書ける\n    // メッシュをシーンに追加\n\n    this.scene.add(this.mesh); // 画面に表示\n\n    this.render();\n  }\n  /**\n   * マウスの位置を保存。ブラウザのx,yとWebGLでの座標の扱いが違うのでここで吸収する\n   * @param x \n   * @param y \n   */\n\n\n  _createClass(Canvas, [{\n    key: \"mouseMoved\",\n    value: function mouseMoved(x, y) {\n      // ブラウザは左上が(0, 0), WebGLは真ん中が(0, 0) \n      this.mouse.x = x - this.w / 2;\n      this.mouse.y = -y + this.h / 2;\n    }\n    /**\n     * スクロール位置を保存\n     * @param y \n     */\n\n  }, {\n    key: \"scrolled\",\n    value: function scrolled(y) {\n      this.scrollY = y;\n    }\n    /**\n     * 描画\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      requestAnimationFrame(function () {\n        return _this.render();\n      }); // これだとrequestAnimationFrameのタイミングによって結果が変わってしまうので時間ベースにする\n      // this.mesh.rotation.x += 0.01    \n      // this.mesh.rotation.y += 0.01    \n      // performance.now()は「ページ表示時からの経過時間がミリ秒」が帰ってくる\n      // const sec = performance.now() / 1000 // ミリ秒から秒に変換\n      // 1秒で45°回転する\n      // this.mesh.rotation.x = sec * (Math.PI / 4)\n      // this.mesh.rotation.y = sec * (Math.PI / 4)\n      // ライトの位置をマウスの位置に変更\n\n      this.light.position.x = this.mouse.x;\n      this.light.position.y = this.mouse.y; // メッシュの位置をスクロールに追従させる\n      // this.mesh.position.y = this.scrollY * 0.5 // DOMよりもスクロールを送らせてパララックス風にする\n\n      this.mesh.position.y = this.offsetY + this.scrollY; // DOMの大きさと位置に追従するように設定\n\n      this.renderer.render(this.scene, this.camera);\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/00_empty/Canvas/index.js?");

/***/ }),

/***/ "./src/00_empty/index.js":
/*!*******************************!*\
  !*** ./src/00_empty/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page00; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/00_empty/Canvas/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n // このクラス内に ページごとのcanvas外の処理を書いていきます\n\nvar Page00 = function Page00() {\n  _classCallCheck(this, Page00);\n\n  var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('scroll-container_title');\n  window.addEventListener('mousemove', function (e) {\n    canvas.mouseMoved(e.clientX, e.clientY);\n  });\n  window.addEventListener('scroll', function (e) {\n    canvas.scrolled(window.scrollY);\n  });\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/00_empty/index.js?");

/***/ }),

/***/ "./src/00_shader_empty/Canvas/index.js":
/*!*********************************************!*\
  !*** ./src/00_shader_empty/Canvas/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/OrthographicCamera */ \"./node_modules/three/src/cameras/OrthographicCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/geometries/PlaneGeometry */ \"./node_modules/three/src/geometries/PlaneGeometry.js\");\n/* harmony import */ var three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/materials/ShaderMaterial */ \"./node_modules/three/src/materials/ShaderMaterial.js\");\n/* harmony import */ var three_src_materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/MeshBasicMaterial */ \"./node_modules/three/src/materials/MeshBasicMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\n/* harmony import */ var three_src_loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three/src/loaders/TextureLoader */ \"./node_modules/three/src/loaders/TextureLoader.js\");\n/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaders/shader.vert */ \"./src/00_shader_empty/Canvas/shaders/shader.vert\");\n/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_vert__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shaders/shader.frag */ \"./src/00_shader_empty/Canvas/shaders/shader.frag\");\n/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_frag__WEBPACK_IMPORTED_MODULE_10__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n // シェーダーソース\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    // ウィンドウサイズ\n    this.w = window.innerWidth;\n    this.h = window.innerHeight; // レンダラーを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n    this.renderer.setSize(this.w, this.h); // 描画サイズ\n\n    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n    // #canvas-containerにレンダラーのcanvasを追加\n\n    var container = document.getElementById(\"canvas-container\");\n    container.appendChild(this.renderer.domElement); // カメラを作成（背景シェーダーだけならパースいらないので、OrthographicCameraをつかう）\n\n    this.camera = new three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__[\"OrthographicCamera\"](-1, 1, 1, -1, 0, -1); // シーンを作成\n\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"](); // 平面をつくる（幅, 高さ, 横分割数, 縦分割数）\n    // const geo = new PlaneGeometry(2, 2, 10, 10);\n\n    var geo = new three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_3__[\"PlaneGeometry\"](2, 2, 1, 1); // マウス\n\n    this.mouse = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](0.5, 0.5); // マウスの位置\n    // this.targetRadius = 0.005; // 半径\n\n    this.targetPercent = 0.0;\n    var loader = new three_src_loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_8__[\"TextureLoader\"]();\n    var texture = loader.load('/resource/img/img.jpg'); // uniform変数を定義\n\n    this.uniforms = {\n      uAspect: {\n        value: this.w / this.h\n      },\n      uTime: {\n        value: 0.0\n      },\n      uMouse: {\n        value: new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](0.5, 0.5)\n      },\n      uRadius: {\n        value: this.targetRadius\n      },\n      uFixAspect: {\n        value: this.h / this.w // 逆アスペクト\n\n      },\n      uTex: {\n        value: texture\n      },\n      uPercent: {\n        value: this.targetPercent\n      } // シェーダーソースを渡してマテリアルを作成\n\n    };\n    var mat = new three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_4__[\"ShaderMaterial\"]({\n      uniforms: this.uniforms,\n      vertexShader: _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_9___default.a,\n      fragmentShader: _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_10___default.a,\n      wireframe: false // ワイヤーフレームをオフ\n\n    });\n    this.mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__[\"Mesh\"](geo, mat); // メッシュをシーンに追加\n\n    this.scene.add(this.mesh); // 描画ループ開始\n\n    this.render();\n  }\n\n  _createClass(Canvas, [{\n    key: \"mouseMoved\",\n    value: function mouseMoved(x, y) {\n      this.mouse.x = x / this.w;\n      this.mouse.y = 1.0 - y / this.h;\n    }\n  }, {\n    key: \"mousePressed\",\n    value: function mousePressed(x, y) {\n      this.mouseMoved(x, y); // this.targetRadius = 0.25\n\n      this.targetPercent = 1.0;\n    }\n  }, {\n    key: \"mouseReleased\",\n    value: function mouseReleased(x, y) {\n      this.mouseMoved(x, y); // this.targetRadius = 0.005\n\n      this.targetPercent = 0.0;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      // 次のフレームを要求\n      requestAnimationFrame(function () {\n        _this.render();\n      }); // ミリ秒から秒に変換\n\n      var sec = performance.now() / 1000;\n      this.uniforms.uTime.value = sec;\n      this.uniforms.uMouse.value.lerp(this.mouse, 0.2); // マウスの位置までの移動をイージングありにする\n      // this.uniforms.uRadius.value += (this.targetRadius - this.uniforms.uRadius.value) * 0.2\n\n      this.uniforms.uPercent.value += (this.targetPercent - this.uniforms.uPercent.value) * 0.2; // 画面に表示\n\n      this.renderer.render(this.scene, this.camera);\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/00_shader_empty/Canvas/index.js?");

/***/ }),

/***/ "./src/00_shader_empty/Canvas/shaders/shader.frag":
/*!********************************************************!*\
  !*** ./src/00_shader_empty/Canvas/shaders/shader.frag ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"// fragment shader ( フラグメントシェーダー、ピクセルシェーダー )\\n// このファイルに各ピクセルごとの処理を記述します\\n\\n// varying vec2 vUv;\\n\\n// void main() {\\n//   // vec4 color = vec4(1.0, 0.0, 0.0, 1.0);// rgba\\n  \\n//   vec4 color = vec4(vUv.x, vUv.y, 0.0, 1.0);\\n\\n//   gl_FragColor = color;// gl_FragColor に vec4 型（rgba）の色を入れることでピクセル色を決定する。\\n// }\\n\\nvarying vec2 vUv;\\n\\nuniform float uAspect;\\nuniform float uTime;\\nuniform vec2 uMouse;\\nuniform float uRadius;\\nuniform sampler2D uTex;\\nuniform float uPercent;\\n\\n// 緑の光\\n// void main () {\\n//   vec2 uv = vec2(vUv.x * uAspect, vUv.y);\\n\\n//   vec2 center = vec2(uMouse.x * uAspect, uMouse.y); // 画面の中心\\n//   // float dist = length(vUv - center); // 中心から現在のピクセルへの距離を取得\\n//   // vec4 color = vec4(vec3(dist), 1.0);\\n\\n//   // 経過時間に応じて円が大きくなる\\n//   // float radius = 0.5 + sin(uTime * 2.0) * 0.025;\\n\\n//   float lightness = uRadius / length(uv - center);\\n//   // lightness = clamp(lightness, 0.0, 1.0);\\n//   vec4 color = vec4(vec3(lightness), 1.0);\\n\\n//   color *= vec4(0.2, 1.0, 0.5, 1.0);\\n\\n//   gl_FragColor = color;\\n// }\\n\\n\\n\\n// エフェクト：階調反転\\n// void main () {\\n//   vec3 color = texture2D(uTex, vUv).rgb;\\n//   vec3 invert = 1. - color;\\n//   color = mix(color, invert, uPercent);\\n//   gl_FragColor = vec4(color, 1.0);\\n// }\\n\\n\\n// エフェクト：チャンネルシフト\\n// void main () {\\n//   float shift = uPercent * 0.01;\\n\\n//   float r = texture2D(uTex, vUv + vec2(shift, 0.0)).r;\\n//   float g = texture2D(uTex, vUv).g;\\n//   float b = texture2D(uTex, vUv - vec2(shift, 0.0)).b;\\n\\n//   vec3 color = vec3(r, g, b);\\n\\n//   gl_FragColor = vec4(color, 1.0);\\n// }\\n\\n\\n// モザイク\\n// void main () {\\n//   vec2 uv = vUv;\\n\\n//   float moz = uPercent * 0.02;\\n\\n//   if (moz > 0.) {\\n//     uv = floor(uv / moz) * moz + (moz * 0.5);\\n//   }\\n\\n//   vec3 color = texture2D(uTex, uv).rgb;\\n\\n//   gl_FragColor = vec4(color, 1.0);\\n// }　\\n\\n\\n// ゆらゆら\\n// texture2D()に渡すUV座標をsin(), cos()でオフセットして、色の取得先を波っぽくずらします。\\nvoid main () {\\n  vec2 uv = vUv;\\n\\n  // 弱め\\n  // float t = uTime * 6.0;\\n  // float amount = uPercent * 0.02;\\n\\n  // スライダーみたいに激しめにウェーブ\\n  // float t = uTime * 24.0;\\n  // float amount = uPercent * 0.2;\\n\\n  // プリンみたいにプリン！\\n  float t = uTime * 24.0;\\n  float amount = uPercent * 0.02;\\n\\n  vec2 uvOffset = vec2(cos(uv.y * 20.0 + t), sin(uv.x * 10.0 - t)) * amount;\\n  vec3 color = texture2D(uTex, uv + uvOffset).rgb;\\n\\n  gl_FragColor = vec4(color, 1.0);\\n}\"\n\n//# sourceURL=webpack:///./src/00_shader_empty/Canvas/shaders/shader.frag?");

/***/ }),

/***/ "./src/00_shader_empty/Canvas/shaders/shader.vert":
/*!********************************************************!*\
  !*** ./src/00_shader_empty/Canvas/shaders/shader.vert ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"// vertex shader ( 頂点シェーダー )\\n// このファイルに各頂点ごとの処理を記述します\\n\\nvarying vec2 vUv;\\nuniform float uFixAspect;\\n\\nvoid main() {\\n  vec3 pos = position;// position: ShaderMaterialで補完される vec3 型(xyz)の変数。ジオメトリの頂点のこと。\\n  \\n  // pos.y = (pos.y * 0.5) + sin(pos.x * 3.0) * 0.5; // 縦を半分のサイズにして、sinでy座標を歪ませる\\n\\n  // 余白ができないようにアスペクト補正\\n  vUv = uv - .5; // uv: ShaderMaterialで補完されるvec2(xy)の座標\\n  vUv.y *= uFixAspect;\\n  vUv += .5;\\n\\n  gl_Position = vec4( pos, 1.0 );\\n}\\n\"\n\n//# sourceURL=webpack:///./src/00_shader_empty/Canvas/shaders/shader.vert?");

/***/ }),

/***/ "./src/00_shader_empty/index.js":
/*!**************************************!*\
  !*** ./src/00_shader_empty/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page00; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/00_shader_empty/Canvas/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Page00 = function Page00() {\n  _classCallCheck(this, Page00);\n\n  var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  window.addEventListener('mousemove', function (e) {\n    canvas.mouseMoved(e.clientX, e.clientY);\n  });\n  window.addEventListener('mousedown', function (e) {\n    canvas.mousePressed(e.clientX, e.clientY);\n  });\n  window.addEventListener('mouseup', function (e) {\n    canvas.mouseReleased(e.clientX, e.clientY);\n  });\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/00_shader_empty/index.js?");

/***/ }),

/***/ "./src/01_rendering/Canvas/index.js":
/*!******************************************!*\
  !*** ./src/01_rendering/Canvas/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/PerspectiveCamera */ \"./node_modules/three/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/lights/PointLight */ \"./node_modules/three/src/lights/PointLight.js\");\n/* harmony import */ var three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/geometries/BoxGeometry */ \"./node_modules/three/src/geometries/BoxGeometry.js\");\n/* harmony import */ var three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/MeshLambertMaterial */ \"./node_modules/three/src/materials/MeshLambertMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\n\n\n\n\nvar Canvas = function Canvas() {\n  _classCallCheck(this, Canvas);\n\n  // ウィンドウサイズ\n  this.w = window.innerWidth;\n  this.h = window.innerHeight; // レンダラーを作成\n\n  this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n  this.renderer.setSize(this.w, this.h); // 描画サイズ\n\n  this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n  // #canvas-containerにレンダラーのcanvasを追加\n\n  var container = document.getElementById(\"canvas-container\");\n  container.appendChild(this.renderer.domElement); // カメラを作成 (視野角, 画面のアスペクト比, カメラに映る最短距離, カメラに映る最遠距離)\n\n  this.camera = new three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"](60, this.w / this.h, 1, 10);\n  this.camera.position.z = 3; // カメラを遠ざける\n  // シーンを作成\n\n  this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"](); // ライトを作成\n\n  this.light = new three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__[\"PointLight\"](0x00ffff);\n  this.light.position.set(2, 2, 2); // ライトの位置を設定\n  // ライトをシーンに追加\n\n  this.scene.add(this.light); // 立方体のジオメトリを作成(幅, 高さ, 奥行き)\n\n  var geo = new three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__[\"BoxGeometry\"](1, 1, 1); // マテリアルを作成\n\n  var mat = new three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__[\"MeshLambertMaterial\"]({\n    color: 0xffffff\n  }); // ジオメトリとマテリアルからメッシュを作成\n\n  this.mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__[\"Mesh\"](geo, mat);\n  this.mesh.rotation.x = Math.PI / 4;\n  this.mesh.rotation.y = Math.PI / 4; // メッシュをシーンに追加\n\n  this.scene.add(this.mesh); // 画面に表示\n\n  this.renderer.render(this.scene, this.camera);\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/01_rendering/Canvas/index.js?");

/***/ }),

/***/ "./src/01_rendering/index.js":
/*!***********************************!*\
  !*** ./src/01_rendering/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page01; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/01_rendering/Canvas/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Page01 = function Page01() {\n  _classCallCheck(this, Page01);\n\n  new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/01_rendering/index.js?");

/***/ }),

/***/ "./src/02_animation/Canvas/index.js":
/*!******************************************!*\
  !*** ./src/02_animation/Canvas/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/PerspectiveCamera */ \"./node_modules/three/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/lights/PointLight */ \"./node_modules/three/src/lights/PointLight.js\");\n/* harmony import */ var three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/geometries/BoxGeometry */ \"./node_modules/three/src/geometries/BoxGeometry.js\");\n/* harmony import */ var three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/MeshLambertMaterial */ \"./node_modules/three/src/materials/MeshLambertMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    // ウィンドウサイズ\n    this.w = window.innerWidth;\n    this.h = window.innerHeight; // レンダラーを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n    this.renderer.setSize(this.w, this.h); // 描画サイズ\n\n    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n    // #canvas-containerにレンダラーのcanvasを追加\n\n    var container = document.getElementById(\"canvas-container\");\n    container.appendChild(this.renderer.domElement); // カメラを作成 (視野角, 画面のアスペクト比, カメラに映る最短距離, カメラに映る最遠距離)\n\n    this.camera = new three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"](60, this.w / this.h, 1, 10);\n    this.camera.position.z = 3; // カメラを遠ざける\n    // シーンを作成\n\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"](); // ライトを作成\n\n    this.light = new three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__[\"PointLight\"](0x00ffff);\n    this.light.position.set(2, 2, 2); // ライトの位置を設定\n    // ライトをシーンに追加\n\n    this.scene.add(this.light); // 立方体のジオメトリを作成(幅, 高さ, 奥行き)\n\n    var geo = new three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__[\"BoxGeometry\"](1, 1, 1); // マテリアルを作成\n\n    var mat = new three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__[\"MeshLambertMaterial\"]({\n      color: 0xffffff\n    }); // ジオメトリとマテリアルからメッシュを作成\n\n    this.mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__[\"Mesh\"](geo, mat); // メッシュをシーンに追加\n\n    this.scene.add(this.mesh); // 描画ループ開始\n\n    this.render();\n  }\n\n  _createClass(Canvas, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      // 次のフレームを要求\n      requestAnimationFrame(function () {\n        _this.render();\n      }); // ミリ秒から秒に変換\n\n      var sec = performance.now() / 1000; // 1秒で45°回転する\n\n      this.mesh.rotation.x = sec * (Math.PI / 4);\n      this.mesh.rotation.y = sec * (Math.PI / 4); // 画面に表示\n\n      this.renderer.render(this.scene, this.camera);\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/02_animation/Canvas/index.js?");

/***/ }),

/***/ "./src/02_animation/index.js":
/*!***********************************!*\
  !*** ./src/02_animation/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page02; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/02_animation/Canvas/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Page02 = function Page02() {\n  _classCallCheck(this, Page02);\n\n  new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/02_animation/index.js?");

/***/ }),

/***/ "./src/03_interaction/Canvas/index.js":
/*!********************************************!*\
  !*** ./src/03_interaction/Canvas/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/PerspectiveCamera */ \"./node_modules/three/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/lights/PointLight */ \"./node_modules/three/src/lights/PointLight.js\");\n/* harmony import */ var three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/geometries/BoxGeometry */ \"./node_modules/three/src/geometries/BoxGeometry.js\");\n/* harmony import */ var three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/MeshLambertMaterial */ \"./node_modules/three/src/materials/MeshLambertMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    // スクロール量\n    this.scrollY = 0; // マウス座標\n\n    this.mouse = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](0, 0); // ウィンドウサイズ\n\n    this.w = window.innerWidth;\n    this.h = window.innerHeight; // レンダラーを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n    this.renderer.setSize(this.w, this.h); // 描画サイズ\n\n    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n    // #canvas-containerにレンダラーのcanvasを追加\n\n    var container = document.getElementById(\"canvas-container\");\n    container.appendChild(this.renderer.domElement);\n    var fov = 60;\n    var fovRad = fov / 2 * (Math.PI / 180); // 視野角をラジアンに変換\n\n    var dist = this.h / 2 / Math.tan(fovRad); // ウィンドウぴったりのカメラ距離\n    // カメラを作成 (視野角, 画面のアスペクト比, カメラに映る最短距離, カメラに映る最遠距離)\n\n    this.camera = new three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"](fov, this.w / this.h, 1, dist * 2);\n    this.camera.position.z = dist; // カメラを遠ざける\n    // シーンを作成\n\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"](); // ライトを作成\n\n    this.light = new three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__[\"PointLight\"](0x00ffff);\n    this.light.position.set(0, 0, 400); // ライトの位置を設定\n    // ライトをシーンに追加\n\n    this.scene.add(this.light); // 立方体のジオメトリを作成(幅, 高さ, 奥行き)\n\n    var geo = new three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__[\"BoxGeometry\"](300, 300, 300); // マテリアルを作成\n\n    var mat = new three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__[\"MeshLambertMaterial\"]({\n      color: 0xffffff\n    }); // ジオメトリとマテリアルからメッシュを作成\n\n    this.mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__[\"Mesh\"](geo, mat);\n    this.mesh.rotation.x = Math.PI / 4;\n    this.mesh.rotation.y = Math.PI / 4; // メッシュをシーンに追加\n\n    this.scene.add(this.mesh); // 描画ループ開始\n\n    this.render();\n  }\n\n  _createClass(Canvas, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      // 次のフレームを要求\n      requestAnimationFrame(function () {\n        _this.render();\n      }); // ミリ秒から秒に変換\n\n      var sec = performance.now() / 1000; // 1秒で45°回転する\n\n      this.mesh.rotation.x = sec * (Math.PI / 4);\n      this.mesh.rotation.y = sec * (Math.PI / 4); // スクロールに追従させる\n\n      this.mesh.position.y = this.scrollY; // this.mesh.position.y = this.scrollY * 0.5;// パララックス\n      // 画面に表示\n\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"mouseMoved\",\n    value: function mouseMoved(x, y) {\n      this.mouse.x = x - this.w / 2; // 原点を中心に持ってくる\n\n      this.mouse.y = -y + this.h / 2; // 軸を反転して原点を中心に持ってくる\n      // ライトの xy座標 をマウス位置にする\n\n      this.light.position.x = this.mouse.x;\n      this.light.position.y = this.mouse.y;\n    }\n  }, {\n    key: \"scrolled\",\n    value: function scrolled(y) {\n      this.scrollY = y;\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/03_interaction/Canvas/index.js?");

/***/ }),

/***/ "./src/03_interaction/index.js":
/*!*************************************!*\
  !*** ./src/03_interaction/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page03; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/03_interaction/Canvas/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Page03 = function Page03() {\n  _classCallCheck(this, Page03);\n\n  var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  canvas.scrolled(window.scrollY);\n  window.addEventListener('mousemove', function (e) {\n    canvas.mouseMoved(e.clientX, e.clientY);\n  });\n  window.addEventListener('scroll', function (e) {\n    canvas.scrolled(window.scrollY);\n  });\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/03_interaction/index.js?");

/***/ }),

/***/ "./src/04_linkWithDOM/Canvas/index.js":
/*!********************************************!*\
  !*** ./src/04_linkWithDOM/Canvas/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/PerspectiveCamera */ \"./node_modules/three/src/cameras/PerspectiveCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/lights/PointLight */ \"./node_modules/three/src/lights/PointLight.js\");\n/* harmony import */ var three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/geometries/BoxGeometry */ \"./node_modules/three/src/geometries/BoxGeometry.js\");\n/* harmony import */ var three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/MeshLambertMaterial */ \"./node_modules/three/src/materials/MeshLambertMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas(elementId) {\n    _classCallCheck(this, Canvas);\n\n    // elementIdのついたDOM要素を取得\n    this.element = document.getElementById(elementId);\n    var rect = this.element.getBoundingClientRect(); // スクロール量\n\n    this.scrollY = window.scrollY; // マウス座標\n\n    this.mouse = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](0, 0); // ウィンドウサイズ\n\n    this.w = window.innerWidth;\n    this.h = window.innerHeight; // レンダラーを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n    this.renderer.setSize(this.w, this.h); // 描画サイズ\n\n    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n    // #canvas-containerにレンダラーのcanvasを追加\n\n    var container = document.getElementById(\"canvas-container\");\n    container.appendChild(this.renderer.domElement);\n    var fov = 60;\n    var fovRad = fov / 2 * (Math.PI / 180); // 視野角をラジアンに変換\n\n    var dist = this.h / 2 / Math.tan(fovRad); // ウィンドウぴったりのカメラ距離\n    // カメラを作成 (視野角, 画面のアスペクト比, カメラに映る最短距離, カメラに映る最遠距離)\n\n    this.camera = new three_src_cameras_PerspectiveCamera__WEBPACK_IMPORTED_MODULE_1__[\"PerspectiveCamera\"](fov, this.w / this.h, 1, dist * 2);\n    this.camera.position.z = dist; // カメラを遠ざける\n    // シーンを作成\n\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"](); // ライトを作成\n\n    this.light = new three_src_lights_PointLight__WEBPACK_IMPORTED_MODULE_3__[\"PointLight\"](0x00ffff);\n    this.light.position.set(0, 0, 400); // ライトの位置を設定\n    // ライトをシーンに追加\n\n    this.scene.add(this.light); // 立方体のジオメトリを作成(幅, 高さ, 奥行き)\n\n    var depth = 300;\n    var geo = new three_src_geometries_BoxGeometry__WEBPACK_IMPORTED_MODULE_4__[\"BoxGeometry\"](rect.width, rect.height, depth); // マテリアルを作成\n\n    var mat = new three_src_materials_MeshLambertMaterial__WEBPACK_IMPORTED_MODULE_5__[\"MeshLambertMaterial\"]({\n      color: 0xffffff\n    }); // ジオメトリとマテリアルからメッシュを作成\n\n    this.mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__[\"Mesh\"](geo, mat); // ウィンドウ中心からDOMRect中心へのベクトルを求めてオフセットする\n\n    var center = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](rect.x + rect.width / 2, rect.y + rect.height / 2);\n    var diff = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](center.x - this.w / 2, center.y - this.h / 2);\n    this.mesh.position.set(diff.x, -(diff.y + this.scrollY), -depth / 2);\n    this.offsetY = this.mesh.position.y; // メッシュをシーンに追加\n\n    this.scene.add(this.mesh); // 描画ループ開始\n\n    this.render();\n  }\n\n  _createClass(Canvas, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      // 次のフレームを要求\n      requestAnimationFrame(function () {\n        _this.render();\n      }); // ミリ秒から秒に変換\n\n      var sec = performance.now() / 1000; // 1秒で45°回転する\n      // this.mesh.rotation.x = sec * (Math.PI / 4);\n      // this.mesh.rotation.y = sec * (Math.PI / 4);\n      // スクロールに追従させる\n\n      this.mesh.position.y = this.offsetY + this.scrollY; // this.mesh.position.y = this.scrollY * 0.5;// パララックス\n      // 画面に表示\n\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"mouseMoved\",\n    value: function mouseMoved(x, y) {\n      this.mouse.x = x - this.w / 2; // 原点を中心に持ってくる\n\n      this.mouse.y = -y + this.h / 2; // 軸を反転して原点を中心に持ってくる\n      // ライトの xy座標 をマウス位置にする\n\n      this.light.position.x = this.mouse.x;\n      this.light.position.y = this.mouse.y;\n    }\n  }, {\n    key: \"scrolled\",\n    value: function scrolled(y) {\n      this.scrollY = y;\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/04_linkWithDOM/Canvas/index.js?");

/***/ }),

/***/ "./src/04_linkWithDOM/index.js":
/*!*************************************!*\
  !*** ./src/04_linkWithDOM/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page04; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/04_linkWithDOM/Canvas/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Page04 = function Page04() {\n  _classCallCheck(this, Page04);\n\n  var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('scroll-container_title');\n  window.addEventListener('mousemove', function (e) {\n    canvas.mouseMoved(e.clientX, e.clientY);\n  });\n  window.addEventListener('scroll', function (e) {\n    canvas.scrolled(window.scrollY);\n  });\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/04_linkWithDOM/index.js?");

/***/ }),

/***/ "./src/05_shader/Canvas/index.js":
/*!***************************************!*\
  !*** ./src/05_shader/Canvas/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/OrthographicCamera */ \"./node_modules/three/src/cameras/OrthographicCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/geometries/PlaneGeometry */ \"./node_modules/three/src/geometries/PlaneGeometry.js\");\n/* harmony import */ var three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/materials/ShaderMaterial */ \"./node_modules/three/src/materials/ShaderMaterial.js\");\n/* harmony import */ var three_src_materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/MeshBasicMaterial */ \"./node_modules/three/src/materials/MeshBasicMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\n/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shaders/shader.vert */ \"./src/05_shader/Canvas/shaders/shader.vert\");\n/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_vert__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaders/shader.frag */ \"./src/05_shader/Canvas/shaders/shader.frag\");\n/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_frag__WEBPACK_IMPORTED_MODULE_9__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n // シェーダーソース\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    // ウィンドウサイズ\n    this.w = window.innerWidth;\n    this.h = window.innerHeight; // レンダラーを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n    this.renderer.setSize(this.w, this.h); // 描画サイズ\n\n    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n    // #canvas-containerにレンダラーのcanvasを追加\n\n    var container = document.getElementById(\"canvas-container\");\n    container.appendChild(this.renderer.domElement); // カメラを作成（背景シェーダーだけならパースいらないので、OrthographicCameraをつかう）\n\n    this.camera = new three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__[\"OrthographicCamera\"](-1, 1, 1, -1, 0, -1); // シーンを作成\n\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"](); // 平面をつくる（幅, 高さ, 横分割数, 縦分割数）\n\n    var geo = new three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_3__[\"PlaneGeometry\"](2, 2, 1, 1); // マウス座標\n\n    this.mouse = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](0.5, 0.5);\n    this.targetRadius = 0.005; // uniform変数を定義\n\n    this.uniforms = {\n      uAspect: {\n        value: this.w / this.h\n      },\n      uTime: {\n        value: 0.0\n      },\n      uMouse: {\n        value: new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_7__[\"Vector2\"](0.5, 0.5)\n      },\n      uRadius: {\n        value: this.targetRadius\n      }\n    }; // uniform変数とシェーダーソースを渡してマテリアルを作成\n\n    var mat = new three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_4__[\"ShaderMaterial\"]({\n      uniforms: this.uniforms,\n      vertexShader: _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_8___default.a,\n      fragmentShader: _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_9___default.a\n    });\n    this.mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_6__[\"Mesh\"](geo, mat); // メッシュをシーンに追加\n\n    this.scene.add(this.mesh); // 描画ループ開始\n\n    this.render();\n  }\n\n  _createClass(Canvas, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      // 次のフレームを要求\n      requestAnimationFrame(function () {\n        _this.render();\n      }); // ミリ秒から秒に変換\n\n      var sec = performance.now() / 1000; // シェーダーに渡す時間を更新\n\n      this.uniforms.uTime.value = sec; // シェーダーに渡すマウスを更新\n\n      this.uniforms.uMouse.value.lerp(this.mouse, 0.2); // シェーダーに渡す半径を更新\n\n      this.uniforms.uRadius.value += (this.targetRadius - this.uniforms.uRadius.value) * 0.2; // 画面に表示\n\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"mouseMoved\",\n    value: function mouseMoved(x, y) {\n      this.mouse.x = x / this.w;\n      this.mouse.y = 1.0 - y / this.h;\n    }\n  }, {\n    key: \"mousePressed\",\n    value: function mousePressed(x, y) {\n      this.mouseMoved(x, y);\n      this.targetRadius = 0.25; // マウスを押したら半径の目標値を大きく\n    }\n  }, {\n    key: \"mouseReleased\",\n    value: function mouseReleased(x, y) {\n      this.mouseMoved(x, y);\n      this.targetRadius = 0.005; // マウスを押したら半径の目標値をデフォルト値に\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/05_shader/Canvas/index.js?");

/***/ }),

/***/ "./src/05_shader/Canvas/shaders/shader.frag":
/*!**************************************************!*\
  !*** ./src/05_shader/Canvas/shaders/shader.frag ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"// fragment shader ( フラグメントシェーダー、ピクセルシェーダー )\\n// このファイルに各ピクセルごとの処理を記述します\\n\\nvarying vec2 vUv;// 頂点シェーダーから varying 変数を受け取る\\n\\nuniform float uAspect;// 画面のアスペクト比\\nuniform float uTime;// 画面のアスペクト比\\nuniform vec2  uMouse;// マウス座標\\nuniform float uRadius;// 半径\\n\\nvoid main() {\\n  vec2 uv = vec2( vUv.x * uAspect, vUv.y );\\n  vec2 center = vec2( uMouse.x * uAspect, uMouse.y );// 画面の中心\\n  float lightness = uRadius / length( uv - center );// 半径を、中心から現在のピクセルへのベクトルの距離で割る\\n  // lightness = clamp( lightness, 0.0, 1.0 );// 値の範囲を 0.0 ~ 1.0 に制限\\n  vec4 color = vec4( vec3( lightness ), 1.0 );\\n\\n  color *= vec4( 0.2, 1.0, 0.5, 1.0 );// グレースケールに着色する\\n\\n  gl_FragColor = color;// gl_FragColor に vec4 型（rgba）の色を入れることでピクセル色を決定する。\\n}\\n\"\n\n//# sourceURL=webpack:///./src/05_shader/Canvas/shaders/shader.frag?");

/***/ }),

/***/ "./src/05_shader/Canvas/shaders/shader.vert":
/*!**************************************************!*\
  !*** ./src/05_shader/Canvas/shaders/shader.vert ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"// vertex shader ( 頂点シェーダー )\\n// このファイルに各頂点ごとの処理を記述します\\n\\nvarying vec2 vUv;// varying: 頂点シェーダーからピクセルシェーダーに変数を送るための装飾子\\n\\nvoid main() {\\n  vUv = uv;// uv: ShaderMaterialで補完される vec2 型(xy)の変数。テクスチャ座標のこと。\\n\\n  vec3 pos = position;// position: ShaderMaterialで補完される vec3 型(xyz)の変数。ジオメトリの頂点のこと。\\n\\n  gl_Position = vec4( pos, 1.0 );\\n}\\n\"\n\n//# sourceURL=webpack:///./src/05_shader/Canvas/shaders/shader.vert?");

/***/ }),

/***/ "./src/05_shader/index.js":
/*!********************************!*\
  !*** ./src/05_shader/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page05; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/05_shader/Canvas/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Page05 = function Page05() {\n  _classCallCheck(this, Page05);\n\n  var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  window.addEventListener('mousemove', function (e) {\n    canvas.mouseMoved(e.clientX, e.clientY);\n  });\n  window.addEventListener('mousedown', function (e) {\n    canvas.mousePressed(e.clientX, e.clientY);\n  });\n  window.addEventListener('mouseup', function (e) {\n    canvas.mouseReleased(e.clientX, e.clientY);\n  });\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/05_shader/index.js?");

/***/ }),

/***/ "./src/06_shader_texture/Canvas/index.js":
/*!***********************************************!*\
  !*** ./src/06_shader_texture/Canvas/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Canvas; });\n/* harmony import */ var three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/src/renderers/WebGLRenderer */ \"./node_modules/three/src/renderers/WebGLRenderer.js\");\n/* harmony import */ var three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/src/cameras/OrthographicCamera */ \"./node_modules/three/src/cameras/OrthographicCamera.js\");\n/* harmony import */ var three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/src/scenes/Scene */ \"./node_modules/three/src/scenes/Scene.js\");\n/* harmony import */ var three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/src/geometries/PlaneGeometry */ \"./node_modules/three/src/geometries/PlaneGeometry.js\");\n/* harmony import */ var three_src_loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/src/loaders/TextureLoader */ \"./node_modules/three/src/loaders/TextureLoader.js\");\n/* harmony import */ var three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/src/materials/ShaderMaterial */ \"./node_modules/three/src/materials/ShaderMaterial.js\");\n/* harmony import */ var three_src_materials_MeshBasicMaterial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/src/materials/MeshBasicMaterial */ \"./node_modules/three/src/materials/MeshBasicMaterial.js\");\n/* harmony import */ var three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/src/objects/Mesh */ \"./node_modules/three/src/objects/Mesh.js\");\n/* harmony import */ var three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three/src/math/Vector2 */ \"./node_modules/three/src/math/Vector2.js\");\n/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shaders/shader.vert */ \"./src/06_shader_texture/Canvas/shaders/shader.vert\");\n/* harmony import */ var _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_vert__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shaders/shader.frag */ \"./src/06_shader_texture/Canvas/shaders/shader.frag\");\n/* harmony import */ var _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shaders_shader_frag__WEBPACK_IMPORTED_MODULE_10__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\n\n\n // シェーダーソース\n\n\n\n\nvar Canvas =\n/*#__PURE__*/\nfunction () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    // ウィンドウサイズ\n    this.w = window.innerWidth;\n    this.h = window.innerHeight; // レンダラーを作成\n\n    this.renderer = new three_src_renderers_WebGLRenderer__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\n    this.renderer.setSize(this.w, this.h); // 描画サイズ\n\n    this.renderer.setPixelRatio(window.devicePixelRatio); // ピクセル比\n    // #canvas-containerにレンダラーのcanvasを追加\n\n    var container = document.getElementById(\"canvas-container\");\n    container.appendChild(this.renderer.domElement); // カメラを作成（背景シェーダーだけならパースいらないので、OrthographicCameraをつかう）\n\n    this.camera = new three_src_cameras_OrthographicCamera__WEBPACK_IMPORTED_MODULE_1__[\"OrthographicCamera\"](-1, 1, 1, -1, 0, -1); // シーンを作成\n\n    this.scene = new three_src_scenes_Scene__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"](); // 平面をつくる（幅, 高さ, 横分割数, 縦分割数）\n\n    var geo = new three_src_geometries_PlaneGeometry__WEBPACK_IMPORTED_MODULE_3__[\"PlaneGeometry\"](2, 2, 1, 1); // マウス座標\n\n    this.mouse = new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_8__[\"Vector2\"](0.5, 0.5);\n    this.targetPercent = 0.0;\n    var loader = new three_src_loaders_TextureLoader__WEBPACK_IMPORTED_MODULE_4__[\"TextureLoader\"](); // テクスチャローダーを作成\n\n    var texture = loader.load('/resource/img/img.jpg'); // テクスチャ読み込み\n    // uniform変数を定義\n\n    this.uniforms = {\n      uAspect: {\n        value: this.w / this.h\n      },\n      uTime: {\n        value: 0.0\n      },\n      uMouse: {\n        value: new three_src_math_Vector2__WEBPACK_IMPORTED_MODULE_8__[\"Vector2\"](0.5, 0.5)\n      },\n      uPercent: {\n        value: this.targetPercent\n      },\n      uFixAspect: {\n        value: this.h / this.w\n      },\n      uTex: {\n        value: texture\n      }\n    }; // uniform変数とシェーダーソースを渡してマテリアルを作成\n\n    var mat = new three_src_materials_ShaderMaterial__WEBPACK_IMPORTED_MODULE_5__[\"ShaderMaterial\"]({\n      uniforms: this.uniforms,\n      vertexShader: _shaders_shader_vert__WEBPACK_IMPORTED_MODULE_9___default.a,\n      fragmentShader: _shaders_shader_frag__WEBPACK_IMPORTED_MODULE_10___default.a\n    });\n    this.mesh = new three_src_objects_Mesh__WEBPACK_IMPORTED_MODULE_7__[\"Mesh\"](geo, mat); // メッシュをシーンに追加\n\n    this.scene.add(this.mesh); // 描画ループ開始\n\n    this.render();\n  }\n\n  _createClass(Canvas, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      // 次のフレームを要求\n      requestAnimationFrame(function () {\n        _this.render();\n      }); // ミリ秒から秒に変換\n\n      var sec = performance.now() / 1000; // シェーダーに渡す時間を更新\n\n      this.uniforms.uTime.value = sec; // シェーダーに渡すマウスを更新\n\n      this.uniforms.uMouse.value.lerp(this.mouse, 0.2); // シェーダーに渡す進捗度を更新\n\n      this.uniforms.uPercent.value += (this.targetPercent - this.uniforms.uPercent.value) * 0.1; // 画面に表示\n\n      this.renderer.render(this.scene, this.camera);\n    }\n  }, {\n    key: \"mouseMoved\",\n    value: function mouseMoved(x, y) {\n      this.mouse.x = x / this.w;\n      this.mouse.y = 1.0 - y / this.h;\n    }\n  }, {\n    key: \"mousePressed\",\n    value: function mousePressed(x, y) {\n      this.mouseMoved(x, y);\n      this.targetPercent = 1.; // マウスを押したら進捗度の目標値を大きく\n    }\n  }, {\n    key: \"mouseReleased\",\n    value: function mouseReleased(x, y) {\n      this.mouseMoved(x, y);\n      this.targetPercent = 0.0; // マウスを押したら進捗度の目標値をデフォルト値に\n    }\n  }]);\n\n  return Canvas;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/06_shader_texture/Canvas/index.js?");

/***/ }),

/***/ "./src/06_shader_texture/Canvas/shaders/shader.frag":
/*!**********************************************************!*\
  !*** ./src/06_shader_texture/Canvas/shaders/shader.frag ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"varying vec2 vUv;\\n\\nuniform sampler2D uTex;\\nuniform float uPercent;\\n\\nvoid main() {\\n  vec3 color = texture2D( uTex, vUv ).rgb;\\n\\n  gl_FragColor = vec4( color, 1.0 );\\n}\\n\\n// invert\\n//------------------------------\\n// varying vec2 vUv;\\n\\n// uniform sampler2D uTex;\\n// uniform float uPercent;\\n\\n// void main() {\\n//   vec3 color = texture2D( uTex, vUv ).rgb;\\n//   vec3 invert = 1. - color;\\n\\n//   color = mix( color, invert, uPercent );\\n\\n//   gl_FragColor = vec4( color, 1.0 );\\n// }\\n\\n\\n// mosaic\\n//------------------------------\\n// varying vec2 vUv;\\n\\n// uniform float uPercent;\\n// uniform sampler2D uTex;\\n\\n// void main() {\\n//   vec2 uv = vUv;\\n\\n//   float moz = uPercent * 0.02;\\n\\n//   if( moz > 0. ) {\\n//     uv = floor( uv / moz ) * moz + ( moz * .5 );\\n//   }\\n\\n//   vec3 color = texture2D( uTex, uv ).rgb;\\n\\n//   gl_FragColor = vec4( color, 1.0 );\\n// }\\n\\n\\n// swing\\n//------------------------------\\n// varying vec2 vUv;\\n\\n// uniform float uTime;\\n// uniform float uPercent;\\n// uniform sampler2D uTex;\\n\\n// void main() {\\n//   vec2 uv = vUv;\\n\\n//   float t = uTime * 6.;\\n//   float amount = uPercent * 0.02;\\n\\n//   vec2 uvOffset = vec2( cos( uv.y * 20. + t ), sin( uv.x * 10. - t ) ) * amount;\\n\\n//   vec3 color = texture2D( uTex, uv + uvOffset ).rgb;\\n\\n//   gl_FragColor = vec4( color, 1.0 );\\n// }\\n\\n\\n\\n\\n// RGB Shift\\n//------------------------------\\n// varying vec2 vUv;\\n\\n// uniform float uPercent;\\n// uniform sampler2D uTex;\\n\\n// void main() {\\n//   float shift = uPercent * .01;\\n\\n//   float r = texture2D( uTex, vUv + vec2( shift, 0.0 ) ).r;\\n//   float g = texture2D( uTex, vUv ).g;\\n//   float b = texture2D( uTex, vUv - vec2( shift, 0.0 ) ).b;\\n\\n//   vec3 color = vec3( r, g, b );\\n\\n//   gl_FragColor = vec4( color, 1.0 );\\n// }\\n\"\n\n//# sourceURL=webpack:///./src/06_shader_texture/Canvas/shaders/shader.frag?");

/***/ }),

/***/ "./src/06_shader_texture/Canvas/shaders/shader.vert":
/*!**********************************************************!*\
  !*** ./src/06_shader_texture/Canvas/shaders/shader.vert ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"varying vec2 vUv;\\n\\nuniform float uFixAspect;\\n\\nvoid main() {\\n  // 余白ができないようにアスペクト補正\\n  vUv = uv - .5;\\n  vUv.y *= uFixAspect;\\n  vUv += .5;\\n\\n  gl_Position = vec4( position, 1.0 );\\n}\\n\\n\\n\\n// mouse\\n//------------------------------\\n// varying vec2 vUv;\\n// varying vec2 vMouse;\\n\\n// uniform float uAspect;\\n// uniform float uFixAspect;\\n// uniform vec2 uMouse;\\n\\n// void main() {\\n//   // 余白ができないようにアスペクト補正\\n//   vUv = uv - .5;\\n//   vUv.y *= uFixAspect;\\n//   vUv += .5;\\n\\n//   vMouse = uMouse - .5;\\n//   vMouse.y *= uFixAspect;\\n//   vMouse += .5;\\n\\n//   gl_Position = vec4( position, 1.0 );\\n// }\\n\"\n\n//# sourceURL=webpack:///./src/06_shader_texture/Canvas/shaders/shader.vert?");

/***/ }),

/***/ "./src/06_shader_texture/index.js":
/*!****************************************!*\
  !*** ./src/06_shader_texture/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page06; });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/06_shader_texture/Canvas/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\nvar Page06 = function Page06() {\n  _classCallCheck(this, Page06);\n\n  var canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  window.addEventListener('mousemove', function (e) {\n    canvas.mouseMoved(e.clientX, e.clientY);\n  });\n  window.addEventListener('mousedown', function (e) {\n    canvas.mousePressed(e.clientX, e.clientY);\n  });\n  window.addEventListener('mouseup', function (e) {\n    canvas.mouseReleased(e.clientX, e.clientY);\n  });\n};\n\n\n;\n\n//# sourceURL=webpack:///./src/06_shader_texture/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _00_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./00_empty */ \"./src/00_empty/index.js\");\n/* harmony import */ var _00_shader_empty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./00_shader_empty */ \"./src/00_shader_empty/index.js\");\n/* harmony import */ var _01_rendering__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./01_rendering */ \"./src/01_rendering/index.js\");\n/* harmony import */ var _02_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./02_animation */ \"./src/02_animation/index.js\");\n/* harmony import */ var _03_interaction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./03_interaction */ \"./src/03_interaction/index.js\");\n/* harmony import */ var _04_linkWithDOM__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./04_linkWithDOM */ \"./src/04_linkWithDOM/index.js\");\n/* harmony import */ var _05_shader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./05_shader */ \"./src/05_shader/index.js\");\n/* harmony import */ var _06_shader_texture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./06_shader_texture */ \"./src/06_shader_texture/index.js\");\n\n\n\n\n\n\n\n // ドキュメントを読み込んだらページごとの処理を実行\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var path = location.pathname;\n  console.log(path);\n  if (path.indexOf('00_empty') >= 0) new _00_empty__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();else if (path.indexOf('00_shader_empty') >= 0) new _00_shader_empty__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();else if (path.indexOf('01_rendering') >= 0) new _01_rendering__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();else if (path.indexOf('02_animation') >= 0) new _02_animation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();else if (path.indexOf('03_interaction') >= 0) new _03_interaction__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();else if (path.indexOf('04_linkWithDOM') >= 0) new _04_linkWithDOM__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();else if (path.indexOf('05_shader') >= 0) new _05_shader__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();else if (path.indexOf('06_shader_texture') >= 0) new _06_shader_texture__WEBPACK_IMPORTED_MODULE_7__[\"default\"]();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });