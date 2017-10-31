import React, {Component} from 'react'
import D3 from './D3'

import {Scene, PerspectiveCamera} from 'three'
import {CSS3DObject, CSS3DRenderer} from 'three-renderer-css3d' // also CSS3DSprite

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000)
const renderer = new CSS3DRenderer()
camera.position.z = 3000

let object, object2, d3graph

function init () {
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.domElement.style.position = 'absolute'
  document.getElementById('threeNode').appendChild(renderer.domElement)
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
    // console.log('render')
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

class Three extends Component {
  componentDidMount () {
    init()
    render()
  }
  render () {
    return (
      <div>
        <D3 />
        <div id='threeNode' />
      </div>
    )
  }
  }

export default Three
