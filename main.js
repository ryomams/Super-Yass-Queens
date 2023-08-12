//import three
import * as THREE from 'three';
const scene = new THREE.Scene();
console.log('this is how my dad learned inglish.');

//declarations for ease of use
const X_AXIS = new THREE.Vector3(1, 0, 0);
const Y_AXIS = new THREE.Vector3(0, 1, 0);
const TARGET_HEIGHT = 720
const TARGET_WIDTH = 1280
 
// renderer and camera
const camera = new THREE.PerspectiveCamera(90, TARGET_WIDTH / TARGET_HEIGHT, 0.1, 1000);
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(TARGET_WIDTH, TARGET_HEIGHT);
renderer.setClearColor(0x280A8C, 1);
document.body.appendChild(renderer.domElement);


//stuff to draw
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
//let poopie = 0;
/*
class env_box {
    constructor(in_size, in_pos){
        this.Size = in_size;
        this.Geometry = new THREE.BoxGeometry(this.Size.x, this.Size.y, this.Size.z);
        this.Material = new THREE.MeshPhongMaterial({ color: 0xDEADBE });
        this.Body = new THREE.Mesh(this.Geometry, this.Material);
        this.Body.position.x += in_pos.x;
        this.Body.position.y += in_pos.y;
        this.Body.position.z += in_pos.z;
        scene.add(this.Body);
    }
}

let box = new env_box(new THREE.Vector3(1, 1, 1), new THREE.Vector3(0, 0, 0))
*/

const material2 = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry2 = new THREE.BufferGeometry().setFromPoints( points );
const line = new THREE.Line( geometry2, material2 );
scene.add( line );

//animate function ...could you tell? 
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
    //console.log(poopie);
    //poopie++;
}
animate();