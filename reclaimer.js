function  detectBrowser(location){
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
    // At least Safari 3+: "[object HTMLElementConstructor]"
var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6

var output = '<div style="height:400px"><div class="alert alert-danger" role="alert">This application will not work on <strong>Internet Explorer , use Chrome or Firefox</strong></div><div>Contact : jdavies@shiftbulk.com for more details.</div></div>';
if (isChrome==false) {
$( "#"+location ).html( output );
} else{};
}

//////////  
// MAIN //
//////////
var container, scene, camera, renderer, controls, stats;
var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();
var counter=0
var temp=[];
var CSVstring = [];



/////////////////////
// INTIALIZE PAGE  //
/////////////////////
function three(){
	
	// initialization
	initThree();
	//initGUI();
	loop();
}



/////////////////////
//   LOAD MODELS   //
/////////////////////
function reclaimer()
{
// Stacker 

//the point cloud map is ofset as the reclaimer does not run North south

			runningRails = new THREE.Object3D();
				ParentStacker = new THREE.Object3D();
					bogie = new THREE.Object3D();

					runningRails.add(ParentStacker)
					ParentStacker.add(bogie)
					ParentStacker.add(camera)

				dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
							dirLight.color.setHSL( 0.1, 1, 0.95 );
							dirLight.position.set( -100, 175, 1000 );
							dirLight.position.multiplyScalar( 500 );
							ParentStacker.add( dirLight );

				dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
							dirLight.color.setHSL( 0.1, 1, 0.95 );
							dirLight.position.set( -1000, 750, -1000 );
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

				scene.add( runningRails );

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

var overAllScale = 0.4
//set the starting location of the camera


runningRails.rotation.y = 0.06;
ParentStacker.scale.set( 0.0393701*overAllScale , 0.0393701*overAllScale, 0.0393701*overAllScale )
runningRails.position.set( -355,9.7,-700)
camera.position.set(-2,2,2);
}