import * as THREE from 'three';
const scene = new THREE.Scene();
console.log('this is how my dad learned inglish.');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


 
// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
renderer.setClearColor(0xDEADBE, 1);
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);