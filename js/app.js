var renderer, scene, camera, mesh, material;

function init() {

    scene = new THREE.Scene();
    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xdfdfdf, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    geometry = new THREE.BoxGeometry( 5.2, 5.2, 5.2 );
    material = new THREE.MeshNormalMaterial();

	mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

    //renderer.setSize(800, 640); TODO: tamaño fijo
    //camera = new THREE.PerspectiveCamera(30, 800/640, 0.1, 1000);TODO: tamaño fijo
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 15;
    camera.position.y = 16;
    camera.position.z = 13;

    /*var loader = new THREE.ColladaLoader();
    loader.load('../assets/model.dae', function (collada) {
      scene.add(collada.scene);
    } ); */
    castShadow = true
    camera.lookAt(scene.position);    
    document.body.appendChild(renderer.domElement);   
    render();
    animate();
}

function animate() {
	requestAnimationFrame( animate );
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;
	renderer.render( scene, camera );
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

window.onload = init;