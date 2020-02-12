var renderer;
var scene;
var camera;

function init() {

    scene = new THREE.Scene();
    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xdfdfdf, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    //renderer.setSize(800, 640); TODO: tamaño fijo
    
    //camera = new THREE.PerspectiveCamera(30, 800/640, 0.1, 1000);TODO: tamaño fijo

    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.x = 15;
    camera.position.y = 16;
    camera.position.z = 13;

    var box = new THREE.BoxGeometry(3,2,3);
    var material = new THREE.MeshBasicMaterial({color: 0xff0000})
    var cube = new THREE.Mesh(box, material);
    cube.castShadow = true;
    scene.add(cube);

    camera.lookAt(scene.position);    
    document.body.appendChild(renderer.domElement);    
    render();    

}

function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

window.onload = init;