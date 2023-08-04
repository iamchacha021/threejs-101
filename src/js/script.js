// import threejs
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

// allocate webgl renderer
const renderer = new THREE.WebGLRenderer();

// set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight)

// append the renderer to the body of the document
document.body.appendChild(renderer.domElement)

// setting the scene
const scene = new THREE.Scene();

// setting the camera
const camera = new THREE.PerspectiveCamera(
    75, /* field of view */
    window.innerWidth / window.innerHeight, /* aspect ratio */
    0.1, /* near clicpping plane */
    1500 /* far clipping plane */
);
const orbit = new OrbitControls(camera, renderer.domElement)

// seeing the 3D cartesian plane
const axesHelper = new THREE.AxesHelper(5)

// displaying the cartesian in the scene
scene.add(axesHelper)

// setting the camera position
camera.position.set(2, 2, 8)
orbit.update()

// lets create a box
const boxGeometry = new THREE.BoxGeometry()
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00})
const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)

// we want the box to rotate on its own along the axes

const animate = (time) => {
    box.rotation.x = time / 1000
    box.rotation.y = time / 1000
    box.rotation.z = time / 1000
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)