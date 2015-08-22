
		var pointSize = 5.0 ;
		var pointCountTarget = 5;
		var opacity = 1;
		var pointSizeType = Potree.PointSizeType.ADAPTIVE;
		var pointColorType = Potree.PointColorType.RGB;
		var pointShape = Potree.PointShape.SQUARE;
		var clipMode = Potree.ClipMode.HIGHLIGHT_INSIDE;
		var quality = "Normal";
		var isFlipYZ = false;
		var showStats = false;
		var showBoundingBox = false;
		var fpControls;
		var orbitControls;
		var controls;
		var pointcloudPath = "resources/pointclouds/2/cloud.js";
		var elRenderArea = document.getElementById("ThreeJS");
		var gui;
		var renderer;
		var camera;
		var scene;
		var scenePointCloud;
		var sceneBG, cameraBG;
		var pointcloud;
		var skybox;
		var stats;
		var clock = new THREE.Clock();
		var showSkybox = false;
		var measuringTool;
		var areaTool;
		var volumeTool;
		var transformationTool;
		var referenceFrame;
		

		
		function initThree(){

			var near = 0.1;
			var far = 1000000;
			scene = new THREE.Scene();
			scenePointCloud = new THREE.Scene();
			sceneBG = new THREE.Scene();
			var width = $( "#ThreeJS" ).width();
			var height = $( "#ThreeJS" ).height();

	////////////
	// CAMERA //
	////////////

			camera = new THREE.PerspectiveCamera( 27, width / height, near, far );

			
			cameraBG = new THREE.Camera();
			//camera.rotation.order = 'ZYX';
			
			referenceFrame = new THREE.Object3D();
			scenePointCloud.add(referenceFrame);

			renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.autoClear = false;
			elRenderArea.appendChild(renderer.domElement);

	/////////
	// SKY //
	/////////
			skybox = Potree.utils.loadSkybox("resources/textures/skybox/");

			
	//////////////
	// CONTROLS //
	/////////////


			useOrbitControls();
			
			controls.moveSpeed *= 100;
			
			// enable frag_depth extension for the interpolation shader, if available
			renderer.context.getExtension("EXT_frag_depth");
			

	/////////////////
	// POINT CLOUD //
	////////////////
			POCLoader.load(pointcloudPath, function(geometry){
				pointcloud = new Potree.PointCloudOctree(geometry);
				
				pointcloud.material.pointSizeType = Potree.PointSizeType.ADAPTIVE;
				pointcloud.material.size = pointSize;
				pointcloud.visiblePointsTarget = pointCountTarget * 1000 * 10000;
				
				referenceFrame.add(pointcloud);
				
				referenceFrame.updateMatrixWorld(true);
				var sg = pointcloud.boundingSphere.clone().applyMatrix4(pointcloud.matrixWorld);
				
				referenceFrame.position.copy(sg.center).multiplyScalar(-1);
				referenceFrame.updateMatrixWorld(true);
				
				controls.moveSpeed = pointcloud.boundingSphere.radius / 2;
				
				camera.zoomTo(pointcloud, 1);
				
				flipYZ();
				
				useOrbitControls();
			});
						

				
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

	//////////////
	// GEOMETRY //
	//////////////

			reclaimer();
			window.addEventListener( 'resize', onWindowResize, false );

	//////////////////
	// VISULIZATION //
	//////////////////
			showSkybox=true
			pointColorType = Potree.PointColorType.HEIGHT;
			pointSizeType = Potree.PointSizeType.FIXED;
			window.addEventListener( 'keydown', onKeyDown, false );
		}
		
		function flipYZ(){
			isFlipYZ = !isFlipYZ;
			
			if(isFlipYZ){
				referenceFrame.matrix.copy(new THREE.Matrix4());
				referenceFrame.applyMatrix(new THREE.Matrix4().set(
					1,0,0,0,
					0,0,1,0,
					0,-1,0,0,
					0,0,0,1
				));
				
			}else{
				referenceFrame.matrix.copy(new THREE.Matrix4());
				referenceFrame.applyMatrix(new THREE.Matrix4().set(
					1,0,0,0,
					0,1,0,0,
					0,0,1,0,
					0,0,0,1
				));
			}
			
			referenceFrame.updateMatrixWorld(true);
			pointcloud.updateMatrixWorld();
			var sg = pointcloud.boundingSphere.clone().applyMatrix4(pointcloud.matrixWorld);
			referenceFrame.position.copy(sg.center).multiplyScalar(-1);
			referenceFrame.updateMatrixWorld(true);
			referenceFrame.position.y -= pointcloud.getWorldPosition().y;
			referenceFrame.updateMatrixWorld(true);
		}
		
		function onKeyDown(event){
			//console.log(event.keyCode);
		};
		
		function update(){
			if(pointcloud){
			
				var bbWorld = Potree.utils.computeTransformedBoundingBox(pointcloud.boundingBox, pointcloud.matrixWorld);
				pointcloud.material.clipMode = clipMode;
				pointcloud.material.heightMin = bbWorld.min.y;
				pointcloud.material.heightMax = bbWorld.max.y;
				pointcloud.material.intensityMin = 4;
				pointcloud.material.intensityMax = 5;
				pointcloud.showBoundingBox = showBoundingBox;
				pointcloud.update(camera, renderer);
			}

			var width = $( "#ThreeJS" ).width();
			var height = $( "#ThreeJS" ).height();
			var aspect = width / height;
			renderer.setSize(width, height);
			controls.update(clock.getDelta());

			
		}
				

		
		function useOrbitControls(){
			if(controls){
				controls.enabled = false;
			}
			if(!orbitControls){
				orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
			}
			
			controls = orbitControls;
			controls.enabled = true;
			
			if(pointcloud){
				controls.target.copy(pointcloud.boundingSphere.center.clone().applyMatrix4(pointcloud.matrixWorld));
			}
		}
		
		function render(){


			
			if(pointcloud){
				if(pointcloud.originalMaterial){
					pointcloud.material = pointcloud.originalMaterial;
				}
				
				var bbWorld = Potree.utils.computeTransformedBoundingBox(pointcloud.boundingBox, pointcloud.matrixWorld);
				
				pointcloud.material.size = pointSize;
				pointcloud.visiblePointsTarget = pointCountTarget * 1000 * 1000;
				pointcloud.material.opacity = opacity;
				pointcloud.material.pointColorType = pointColorType;
				pointcloud.material.pointSizeType = pointSizeType;
				pointcloud.material.pointShape = (quality === "Circles") ? Potree.PointShape.CIRCLE : Potree.PointShape.SQUARE;
				pointcloud.material.interpolate = (quality === "Interpolation");
				pointcloud.material.weighted = false;
			}
			
			// render scene
			renderer.render(scene, camera);
			renderer.render(scenePointCloud, camera);
			renderer.clearDepth();

		}
		
	
		var sceneNormalize;
		var depthMaterial, weightedMaterial;
		
	
		function loop() {
			requestAnimationFrame(loop);
			update();
			render();
		};
		
		
		

		
			function onWindowResize() {
				var width = $( "#noteDash" ).width();
				var height = $( "#ThreeJS" ).height();
				camera.aspect = width / height;
				camera.updateProjectionMatrix();
				renderer.setSize( width, height );
			}