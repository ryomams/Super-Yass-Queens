//import three
import * as THREE from 'three';
const scene = new THREE.Scene();
console.log('this is how my dad learned inglish.');

//declarations for ease of use
const X_AXIS = new THREE.Vector3(1, 0, 0);
const Y_AXIS = new THREE.Vector3(0, 1, 0);
 
// renderer and camera
const camera = new THREE.PerspectiveCamera(75, 1280 / 720, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(1280, 720);
renderer.setClearColor(0xDEADAD, 1);
document.body.appendChild(renderer.domElement);


renderer.render(scene, camera);