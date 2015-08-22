

///////////////
// FUNCTIONS //
///////////////

function init() 
{

	var MainSlewBearing=[];

	///////////
	// SCENE //
	///////////
	scene = new THREE.Scene();

	////////////
	// CAMERA //
	////////////
	console.log("herer")
	// set the view size in pixels (custom or according to window size)
	var SCREEN_WIDTH = 520, SCREEN_HEIGHT = 394;	
	// camera attributes
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 100000;
	// set up camera
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	// add the camera to the scene
	
	// the camera defaults to position (0,0,0)
	// so pull it back (z = 400) and up (y = 100) and set the angle towards the scene origin
	camera.position.set(3000,3000,1000);
	//camera.lookAt(scene.position);	
	
	//////////////
	// RENDERER //
	//////////////
	
	// create and start the renderer; choose antialias setting.
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer(); 
	
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
	
	// attach div element to variable to contain the renderer
	container = document.getElementById( 'ThreeJS' );
	// alternatively: to create the div at runtime, use:
	//   container = document.createElement( 'div' );
	//    document.body.appendChild( container );
	
	// attach renderer to the container div
	container.appendChild( renderer.domElement );
	
	////////////
	// EVENTS //
	////////////

	/*// automatically resize renderer
	THREEx.WindowResize(renderer, camera);
	// toggle full-screen on given key press
	THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });*/
	
	//////////////
	// CONTROLS //
	//////////////

	// move mouse and: left   click to rotate, 
	//                 middle click to zoom, 
	//                 right  click to pan
	controls = new THREE.OrbitControls( camera, renderer.domElement );
	
	///////////
	// STATS //
	///////////
	
/*	// displays current and past frames per second attained by scene
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.bottom = '0px';
	stats.domElement.style.zIndex = 100;
	container.appendChild( stats.domElement );*/
	
	///////////
	// LIGHT //
	///////////
	
	// create a light
	var light = new THREE.PointLight(0xffffff);
	light.position.set(1000,500,1000);
	scene.add(light);
	var ambientLight = new THREE.AmbientLight(0xffffff);
	// scene.add(ambientLight);

	var light1 = new THREE.PointLight(0xffffff);
	light1.position.set(-1000,500,1000);
	scene.add(light1);

	// scene.add(ambientLight);
	
	dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
				dirLight.color.setHSL( 0.1, 1, 0.95 );
				dirLight.position.set( -1, 1.75, 1 );
				dirLight.position.multiplyScalar( 50 );
				scene.add( dirLight );
	//////////////
	// GEOMETRY //
	//////////////

	


	


	stackerMove()




	///////////
	// FLOOR //
	///////////

	// note: 4x4 checkboard pattern scaled so that each square is 25 by 25 pixels.
	var floorTexture = new THREE.ImageUtils.loadTexture( 'models/map.bmp' );
	floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; 
	floorTexture.repeat.set( 1, 1 );
	// DoubleSide: render texture on both sides of mesh
	var floorMaterial = new THREE.MeshBasicMaterial( { map: floorTexture, side: THREE.DoubleSide } );
	var floorGeometry = new THREE.PlaneGeometry(4566, 22701, 1, 1);
	var floor = new THREE.Mesh(floorGeometry, floorMaterial);
	floor.position.y = -0.5;
	floor.position.z = 10000;
	floor.rotation.x = Math.PI / 2;
	scene.add(floor);
	
	/////////
	// SKY //
	/////////
	
	// recommend either a skybox or fog effect (can't use both at the same time) 
	// without one of these, the scene's background color is determined by webpage background

	// make sure the camera's "far" value is large enough so that it will render the skyBox!
	var skyBoxGeometry = new THREE.CubeGeometry( 100000, 100000, 100000 );
	// BackSide: render faces from inside of the cube, instead of from outside (default).
	var skyBoxMaterial = new THREE.MeshBasicMaterial( { color: 0x0099CC, side: THREE.BackSide } );
	var skyBox = new THREE.Mesh( skyBoxGeometry, skyBoxMaterial );
	 //scene.add(skyBox);
	
	// fog must be added to scene before first render
	//scene.fog = new THREE.FogExp2( 0x663300, 0.00025 );
}

function animate() 
{
	requestAnimationFrame( animate );
	render();		
	update();
}

function update()
{
	var delta = clock.getDelta(); // seconds.
	var moveDistance = 200 * delta; // 200 pixels per second
	var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second

	// local coordinates
	//pivot3.rotation.x += -0.01;
	// local transformations

	// move forwards/backwards/left/right
		if ( keyboard.pressed("W") )
			ParentStacker.translateZ( -moveDistance );
		if ( keyboard.pressed("S") )
			ParentStacker.translateZ(  moveDistance );
		if ( keyboard.pressed("Q") )
			pivot2.rotateOnAxis( new THREE.Vector3(1,0,0), -rotateAngle);
		if ( keyboard.pressed("E") )
			pivot2.rotateOnAxis( new THREE.Vector3(1,0,0), rotateAngle);

	// rotate left/right/up/down
	var rotation_matrix = new THREE.Matrix4().identity();
	if ( keyboard.pressed("A") )
		pivot1.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
	if ( keyboard.pressed("D") )
		pivot1.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);
	if ( keyboard.pressed("R") )
		ParentStacker.children[0].rotateOnAxis( new THREE.Vector3(1,0,0), rotateAngle);
	if ( keyboard.pressed("F") )
		ParentStacker.children[0].rotateOnAxis( new THREE.Vector3(1,0,0), -rotateAngle);
	


	controls.update();
	//stats.update();
}

function render() 
{	
	renderer.render( scene, camera );
}


function textArea(){
		// info
	info = document.createElement( 'div' );
	info.style.position = 'absolute';
	info.style.top = '30px';
	info.style.width = '100%';
	info.style.textAlign = 'center';
	info.style.color = '#fff';
	info.style.fontWeight = 'bold';
	info.style.backgroundColor = 'black';
	info.style.zIndex = '1';
	info.style.fontFamily = 'Monospace';
	info.innerHTML = 'Drag mouse to rotate camera; Scroll to zoom   w,a,s,d,q,e,r,f,z to edit directions';
	document.body.appendChild( info );
}

function stackerMove(){




				// Stacker 
				ParentStacker = new THREE.Object3D();
					bogie = new THREE.Object3D();

					ParentStacker.add(bogie)
					ParentStacker.add(camera)



				dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
							dirLight.color.setHSL( 0.1, 1, 0.95 );
							dirLight.position.set( -1, 1.75, 1 );
							dirLight.position.multiplyScalar( 50 );
							ParentStacker.add( dirLight );


						pivot1 = new THREE.Object3D();
						bogie.add(pivot1)
							swivel = new THREE.Object3D();
							pivot1.add(swivel)
								pivot2 = new THREE.Object3D();
								swivel.add(pivot2)
									boom = new THREE.Object3D();
									pivot2.add(boom)
										pivot3 = new THREE.Object3D();
										boom.add(pivot3)
											bucket = new THREE.Object3D();
											pivot3.add(bucket)

				scene.add( ParentStacker );

					// Load in the mesh and add it to the scene.
					var loader = new THREE.JSONLoader();
					loader.load( "models/bogie.js", function(geometry){
						var material = new THREE.MeshLambertMaterial({color: 0x999999});
						bogie = new THREE.Mesh(geometry, material);
						bogie.rotation.x = (180+90)*Math.PI/180;
						bogie.rotation.z = (90)*Math.PI/180;
						bogie.position.set( 0, 0, 0 );
						ParentStacker.add( bogie );
					});

					// Load in the mesh and add it to the scene.
					var loader = new THREE.JSONLoader();
					loader.load( "models/swivel.js", function(geometry){
						var material = new THREE.MeshLambertMaterial({color: 0x999999});
						swivel = new THREE.Mesh(geometry, material);
						swivel.rotation.x = (180+90)*Math.PI/180;
						swivel.rotation.z = (90)*Math.PI/180;
						swivel.position.set( 0, 0, 0 );
						swivel.position.x = 161,08;
						swivel.position.z = 911,3674;
						pivot1.add(swivel)
					});

					// Load in the mesh and add it to the scene.
					var loader = new THREE.JSONLoader();
					loader.load( "models/boom.js", function(geometry){
						var material = new THREE.MeshLambertMaterial({color: 0x999999});
						boom = new THREE.Mesh(geometry, material);
						boom.rotation.x = (180+90)*Math.PI/180;
						boom.rotation.z = (90)*Math.PI/180;
						boom.position.set( 0, 0, 0 );
						boom.position.y = -646,61;
						boom.position.z = 596,53	
						boom.position.x = 161,08;	
						pivot2.add(boom)
					});

					// Load in the mesh and add it to the scene.
					var loader = new THREE.JSONLoader();
					loader.load( "models/bucket.js", function(geometry){
						var material = new THREE.MeshLambertMaterial({color: 0x999999});
						var bucket = new THREE.Mesh( geometry, material );
						bucket.rotation.x = (180+90)*Math.PI/180;
						bucket.rotation.z = (90)*Math.PI/180;
						bucket.position.set( 0, 0, 0 );
						bucket.position.x = 0;
						bucket.position.y = -682,52254;
						bucket.position.z = -1454,47;

						pivot3.add( bucket );
					});

	//add the axis helpers for the Pivots.
	var axes = new THREE.AxisHelper(100);
	pivot1.add( axes );
	var axes = new THREE.AxisHelper(100);
	pivot2.add( axes );
	var axes = new THREE.AxisHelper(100);
	pivot3.add( axes );


//relocate pivots
	pivot1.position.x = -161,08;
	pivot1.position.y = 0;
	pivot1.position.z = -911,3674;
	pivot1.rotation.x = 0;
	pivot1.rotation.y = 0;
	pivot1.rotation.z = 0;

	pivot2.position.x = 0;
	pivot2.position.y = 646,61;
	pivot2.position.z = 314,84;
	pivot2.rotation.x = 0;
	pivot2.rotation.y = 0;
	pivot2.rotation.z = 0;




	pivot3.position.x = 161,08;
	pivot3.position.y = 35,91066;
	pivot3.position.z = 2051,00086;
	pivot3.rotation.x = 0;
	pivot3.rotation.y = 0;
	pivot3.rotation.z = 0;


//relocate geometry
	bogie.position.x = 0;
	bogie.position.y = 0;
	bogie.position.z = 0;
	bogie.rotation.x = 0;
	bogie.rotation.y = 0;
	bogie.rotation.z = 0;

	swivel.position.x = 0;
	swivel.position.y = 0;
	swivel.position.z = 0;
	swivel.rotation.x = 0;
	swivel.rotation.y = 0;
	swivel.rotation.z = 0;

	boom.position.x = 0;
	boom.position.y = 0;
	boom.position.z = 0;
	boom.rotation.x = 0;
	boom.rotation.y = 0;
	boom.rotation.z = 0;


}

