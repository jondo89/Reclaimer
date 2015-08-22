function stacker()
{
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
					loader.load( "../models/bogie.js", function(geometry){
						var material = new THREE.MeshLambertMaterial({color: 0x999999});
						bogie = new THREE.Mesh(geometry, material);
						bogie.rotation.x = (180+90)*Math.PI/180;
						bogie.rotation.z = (90)*Math.PI/180;
						bogie.position.set( 0, 0, 0 );
						ParentStacker.add( bogie );
					});

					// Load in the mesh and add it to the scene.
					var loader = new THREE.JSONLoader();
					loader.load( "../models/swivel.js", function(geometry){
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
					loader.load( "../models/boom.js", function(geometry){
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
					loader.load( "../models/bucket.js", function(geometry){
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




ParentStacker.scale.set( 0.0393701, 0.0393701, 0.0393701 )
ParentStacker.position.set( -337,6,-500)
}