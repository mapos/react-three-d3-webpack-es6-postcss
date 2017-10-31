// CSS styling works for css,sass,scss !
// Also postcss works using postcss.config.js
import './main.css'
import './main.sass'
import './chart.sass'

// import {Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, MeshNormalMaterial, Mesh} from 'three'
import {Scene, PerspectiveCamera} from 'three'
import {CSS3DObject, CSS3DRenderer} from 'three-renderer-css3d' // also CSS3DSprite
import * as d3 from 'd3'
const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
camera.position.z = 3000

const renderer = new CSS3DRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.domElement.style.position = 'absolute'
document.getElementById('app').appendChild(renderer.domElement)

let object, object2, d3graph
var data = [30, 86, 168, 281, 303, 365]

function init () {
  d3.select('.chart')
  .selectAll('div')
  .data(data)
    .enter()
    .append('div')
    .style('width', function (d) { return d + 'px' })
    .text(function (d) { return d })

  var element = document.createElement('div')
  element.className = 'element box'
  element.style.backgroundColor = 'rgba(0,127,127,' + (Math.random() * 0.5 + 0.25) + ')'

  var myText = document.createElement('div')
  myText.className = 'myText'
  myText.innerHTML = 'TEXT DIV TAG FROM <b style="color:red">THREE.js</b> and <b style="color:yellow">CSS3DRenderer</b>'
  element.appendChild(myText)

  object = new CSS3DObject(element)
  d3graph = document.getElementsByClassName('chart')
  object2 = new CSS3DObject(d3graph[0])
  // object2 = new CSS3DObject(d3graph)
  object.position.x = 0
  object.position.y = 1501
  scene.add(object)

  object2.position.z = 2501

  scene.add(object2)
}

function render () {
  // object.rotation.x += 0.03
  object.rotation.z += 0.02

  // object2.rotation.x += 0.02
  object2.rotation.y += 0.02

  renderer.render(scene, camera)

/* requestAnimationFrame is global js function */
/* global requestAnimationFrame */
/* eslint no-undef: "error" */
  requestAnimationFrame(render)
}
init()
render()
