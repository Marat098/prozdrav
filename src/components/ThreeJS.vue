<template>
	<div :id='id' class="main">
	</div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { OBB } from 'three/examples/jsm/math/OBB.js';
import { mapGetters, mapActions } from 'vuex';
import Vue from 'vue';
import $ from 'jquery'
export default {
	props: {
		bodyWidth: {
			type: Number,
			default: 1000
		},
		bodyHeight: {
			type: Number,
			default: 1000
		},
		bodyDepth: {
			type: Number,
			default: 1000
		}
	},
	data () {
		return {
			id: `three3d_${Math.floor(Math.random() * (100000 - 10000 + 1) + 10000)}`,
			cameraPersp: undefined,
			cameraOrtho: undefined,
			currentCamera: undefined,
			scene: undefined,
			raycaster: undefined,
			renderer: undefined,
			collisionDetect: false,
			orbit: undefined,
			mouse: undefined,
			mainMesh: {},
			objects: {},
			intersectedObject: undefined,
			mouseIntersectedObject: null
		};
	},
	computed: {
		...mapGetters([
			'boxes',
			'speed'
		])
	},
	watch: {
		boxes () {
			this.renderBoxes();
			this.removeBoxes();
		}
	},
	mounted () {
		this.init();
		this.render();
		window.addEventListener('mousemove', event => {
			event.preventDefault();
			const rect = this.renderer.domElement.getBoundingClientRect();
			this.mouse.x = ((event.clientX - rect.left) / (rect.right - rect.left)) * 2 - 1;
			this.mouse.y = -((event.clientY - rect.top) / (rect.bottom - rect.top)) * 2 + 1;
			this.render();
		});
		window.addEventListener('click', event => {
			if (this.mouseIntersectedObject) {
				this.mainMesh.material.opacity = 1;
				this.mainMesh = this.mouseIntersectedObject;
				this.mainMesh.material.opacity = 0.6;
				for (const i in this.objects) {
					if (this.mainMesh === this.objects[i]) {
						this.changeSelectedBoxId(i);
					}
				}
			}
			this.render();
		}, false);
	},
	methods: {
		...mapActions([
			'addBox',
			'removeBox',
			'changeIntersection',
			'changeSelectedBoxId'
		]),
		init () {
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight);
			this.renderer.setClearColor(0xffffff, 1);
			document.querySelector(`#${this.id}`).appendChild(this.renderer.domElement);

			const aspect = 1.5;
			const gridSize = this.bodyWidth > this.bodyDepth ? this.bodyWidth : this.bodyDepth;

			this.cameraPersp = new THREE.PerspectiveCamera(50, aspect, 0.01, 30000);
			this.cameraOrtho = new THREE.OrthographicCamera(-600 * aspect, 600 * aspect, 600, -600, 0.01, 30000);
			this.currentCamera = this.cameraPersp;

			this.currentCamera.position.set((this.bodyWidth), this.bodyHeight / 2, -(this.bodyDepth * 1.5));
			this.currentCamera.lookAt(0, 0, 0);

			this.scene = new THREE.Scene();
			this.scene.add(new THREE.GridHelper(gridSize * 2.5, 20, 0xcfcdcd, 0xcfcdcd));

			this.raycaster = new THREE.Raycaster();
			this.mouse = new THREE.Vector3();
			this.renderWalls();

			const light = new THREE.AmbientLight(0xFFFFFF, 1);
			this.scene.add(light);

			this.orbit = new OrbitControls(this.currentCamera, this.renderer.domElement);
			this.orbit.update();
			this.orbit.addEventListener('change', this.render);

			this.cameraPersp.zoom = 1.5;
			this.cameraOrtho.zoom = 1.5;

			this.renderBoxes();

			document.body.addEventListener('keydown', event => {
				switch (event.keyCode) {
				case 37: // left
					event.preventDefault();
					this.translateModel(this.speed, 0, 0);
					break;
				case 39: // right
					event.preventDefault();
					this.translateModel(-this.speed, 0, 0);
					break;
				case 38: // up
					event.preventDefault();
					if (event.shiftKey) {
						this.translateModel(0, 0, this.speed);
					} else {
						this.translateModel(0, this.speed, 0);
					}
					break;
				case 40: // down
					event.preventDefault();
					if (event.shiftKey) {
						this.translateModel(0, 0, -this.speed);
					} else {
						this.translateModel(0, -this.speed, 0);
					}
					break;
				}
			});
			window.addEventListener('resize', this.onWindowResize);
		},
		getBoxesCoordinates () {
			const objCoords = {};
			for (const i in this.objects) {
				objCoords[i] = {
					x: this.objects[i].position.x,
					y: this.objects[i].position.y,
					z: this.objects[i].position.z
				};
			}
			return objCoords;
		},
		getFullnesOfBodyVolume () {
			const volumes = { fullnessOfBody: 0, bodyVolume: 0 };
			let volume = 0;
			for (const i in this.objects) {
				const item = this.objects[i].geometry.parameters;
				volume = item.depth * item.height * item.width;
				volumes.fullnessOfBody += volume;
			}
			volumes.bodyVolume = this.bodyWidth * this.bodyHeight * this.bodyDepth;
			return volumes;
		},
		renderBoxes () {
			const texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/crate.gif', this.render);
			texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();

			for (const i in this.boxes) {
				if (!this.objects[i]) {
					const box = this.boxes[i];
					const size = new THREE.Vector3(Number(box.size.width), Number(box.size.height), Number(box.size.depth));
					const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
					geometry.userData.obb = new OBB();
					geometry.userData.obb.halfSize.copy(size).multiplyScalar(0.5);
					const material = new THREE.MeshLambertMaterial({ map: texture, transparent: true });
					const mesh = new THREE.Mesh(geometry, material);
					mesh.userData.obb = new OBB();
					mesh.position.x = (box.coords && Number(box.coords.x)) || 0;
					mesh.position.y = (box.coords && Number(box.coords.y)) || size.y / 2;
					mesh.position.z = (box.coords && Number(box.coords.z)) || -(0.75 * this.bodyDepth);
					this.scene.add(mesh);
					if (this.mainMesh.material) { this.mainMesh.material.opacity = 1; }
					this.mainMesh = mesh;
					mesh.material.opacity = 0.6;
					this.changeSelectedBoxId(i);
					Vue.set(this.objects, i, mesh);
				}
			}
		},
		removeBoxes () {
			for (const i in this.objects) {
				if (!this.boxes[i]) {
					this.objects[i].geometry.dispose();
					this.objects[i].material.dispose();
					this.scene.remove(this.objects[i]);
					this.renderer.renderLists.dispose();
					Vue.delete(this.objects, i);
				}
			}
		},
		translateModel (x, y, z) {
			let currentXPosition = this.mainMesh.position.x;
			let currentYPosition = this.mainMesh.position.y;
			let currentZPosition = this.mainMesh.position.z;
			const objectDepth = this.mainMesh.geometry.parameters.depth;
			const objectHeight = this.mainMesh.geometry.parameters.height;
			const objectWidth = this.mainMesh.geometry.parameters.width;

			currentXPosition += x;
			currentYPosition += y;
			currentZPosition += z;
			if (!this.collisionDetect) {
				this.mainMesh.position.x += x;
				this.mainMesh.position.y += y;
				this.mainMesh.position.z += z;
			}

			if (currentXPosition < -(this.bodyWidth / 2) + (objectWidth / 2)) {
				this.mainMesh.position.x = -(this.bodyWidth / 2) + (objectWidth / 2);
			} else if (currentXPosition > (this.bodyWidth / 2) - (objectWidth / 2)) {
				this.mainMesh.position.x = (this.bodyWidth / 2) - (objectWidth / 2);
			} else if (currentYPosition < 0 + (objectHeight / 2)) {
				this.mainMesh.position.y = 0 + (objectHeight / 2);
			} else if (currentYPosition > (this.bodyHeight) - (objectHeight / 2)) {
				this.mainMesh.position.y = (this.bodyHeight) - (objectHeight / 2);
			} else if (currentZPosition > (this.bodyDepth / 2) - (objectDepth / 2)) {
				this.mainMesh.position.z = (this.bodyDepth / 2) - (objectDepth / 2);
			}

			if (this.intersectedObject && this.collisionDetect) {
				const object = this.intersectedObject;
				const staticObjectBounds = {
					xMin: object.position.x - object.geometry.parameters.width / 2,
					xMax: object.position.x + object.geometry.parameters.width / 2,
					yMin: object.position.y - object.geometry.parameters.height / 2,
					yMax: object.position.y + object.geometry.parameters.height / 2,
					zMin: object.position.z - object.geometry.parameters.depth / 2,
					zMax: object.position.z + object.geometry.parameters.depth / 2
				};
				const movedObjectBounds = {
					xMin: this.mainMesh.position.x - this.mainMesh.geometry.parameters.width / 2,
					xMax: this.mainMesh.position.x + this.mainMesh.geometry.parameters.width / 2,
					yMin: this.mainMesh.position.y - this.mainMesh.geometry.parameters.height / 2,
					yMax: this.mainMesh.position.y + this.mainMesh.geometry.parameters.height / 2,
					zMin: this.mainMesh.position.z - this.mainMesh.geometry.parameters.depth / 2,
					zMax: this.mainMesh.position.z + this.mainMesh.geometry.parameters.depth / 2
				};

				if (movedObjectBounds.xMin <= staticObjectBounds.xMax && movedObjectBounds.xMax > staticObjectBounds.xMax && x < 0) {
					this.mainMesh.position.x = staticObjectBounds.xMax + this.mainMesh.geometry.parameters.width / 2 + 0.0001;
				} else if (movedObjectBounds.xMax >= staticObjectBounds.xMin && movedObjectBounds.xMin < staticObjectBounds.xMax && x > 0) {
					this.mainMesh.position.x = staticObjectBounds.xMin - this.mainMesh.geometry.parameters.width / 2 - 0.0001;
				} else if (movedObjectBounds.yMin <= staticObjectBounds.yMax && movedObjectBounds.yMax > staticObjectBounds.yMax && y < 0) {
					this.mainMesh.position.y = staticObjectBounds.yMax + this.mainMesh.geometry.parameters.height / 2 + 0.0001;
				} else if (movedObjectBounds.yMax >= staticObjectBounds.yMin && movedObjectBounds.yMin < staticObjectBounds.yMin && y > 0) {
					this.mainMesh.position.y = staticObjectBounds.yMin - this.mainMesh.geometry.parameters.height / 2 - 0.0001;
				} else if (movedObjectBounds.zMin <= staticObjectBounds.zMax && movedObjectBounds.zMax > staticObjectBounds.zMax && z < 0) {
					this.mainMesh.position.z = staticObjectBounds.zMax + this.mainMesh.geometry.parameters.depth / 2 + 0.0001;
				} else if (movedObjectBounds.zMax >= staticObjectBounds.zMin && movedObjectBounds.zMin < staticObjectBounds.zMin && z > 0) {
					this.mainMesh.position.z = staticObjectBounds.zMin - this.mainMesh.geometry.parameters.depth / 2 - 0.0001;
				}
			}

			this.collisionDetect = false;
			this.changeIntersection(false);
			this.render();
		},
		render () {
			this.collisionDetection();
			this.renderer.render(this.scene, this.currentCamera);
		},
		onWindowResize () {
			const aspect = this.$el.clientWidth / this.$el.clientHeight;

			this.cameraPersp.aspect = aspect;
			this.cameraPersp.updateProjectionMatrix();

			this.cameraOrtho.left = this.cameraOrtho.bottom * aspect;
			this.cameraOrtho.right = this.cameraOrtho.top * aspect;
			this.cameraOrtho.updateProjectionMatrix();

			this.renderer.setSize(this.$el.clientWidth, this.$el.clientHeight);

			this.render();
		},
		collisionDetection () {
			for (const i in this.objects) {
				const object = this.objects[i];

				object.updateMatrix();
				object.updateMatrixWorld();
				object.userData.obb.copy(object.geometry.userData.obb);
				object.userData.obb.applyMatrix4(object.matrixWorld);
				object.material.color.setHex(0xffffff);
			}
			const objectsArr = Object.values(this.objects);

			for (let i = 0, il = objectsArr.length; i < il; i++) {
				const object = objectsArr[i];
				const obb = object.userData.obb;
				for (let j = i + 1, jl = objectsArr.length; j < jl; j++) {
					const objectToTest = objectsArr[j];
					const obbToTest = objectToTest.userData.obb;
					if (obb.intersectsOBB(obbToTest) === true) {
						object.material.color.setHex(0xff0000);
						objectToTest.material.color.setHex(0xff0000);
						this.collisionDetect = true;
						this.changeIntersection(true);
						if (this.mainMesh === object) {
							this.intersectedObject = objectToTest;
						} else {
							this.intersectedObject = object;
						}
					}
				}
			}

			this.raycaster.setFromCamera(this.mouse, this.cameraPersp);

			const intersects = this.raycaster.intersectObjects(Object.values(this.objects));
			if (intersects.length > 0) {
				if (this.mouseIntersectedObject !== intersects[0].object) {
					if (this.mouseIntersectedObject) { this.mouseIntersectedObject.material.emissive.setHex(this.mouseIntersectedObject.currentHex); }

					this.mouseIntersectedObject = intersects[0].object;
					this.mouseIntersectedObject.currentHex = this.mouseIntersectedObject.material.emissive.getHex();
					this.mouseIntersectedObject.material.emissive.setHex(0xff0000);
				}
			} else {
				if (this.mouseIntersectedObject) { this.mouseIntersectedObject.material.emissive.setHex(this.mouseIntersectedObject.currentHex); }
				this.mouseIntersectedObject = null;
			}
		},
		renderWalls () {
			const opacityMaterial = new THREE.MeshBasicMaterial({ color: 0x2194ce, opacity: 0.4, transparent: true, side: THREE.DoubleSide });
			const wireframeMaterial = new THREE.MeshBasicMaterial({	color: 0x2194ce, wireframe: true, side: THREE.DoubleSide });

			const floorGeometry = new THREE.PlaneBufferGeometry(this.bodyWidth, this.bodyDepth);
			const floor = new THREE.Mesh(floorGeometry, opacityMaterial);
			floor.rotateX(-Math.PI / 2);
			floor.position.y = 0;
			this.scene.add(floor);

			const rightWallGeometry = new THREE.PlaneBufferGeometry(this.bodyDepth, this.bodyHeight);
			const rightWall = new THREE.Mesh(rightWallGeometry, wireframeMaterial);
			rightWall.position.x = this.bodyWidth / 2;
			rightWall.position.y = this.bodyHeight / 2;
			rightWall.rotateY(-Math.PI / 2);
			this.scene.add(rightWall);

			const leftWallGeometry = new THREE.PlaneBufferGeometry(this.bodyDepth, this.bodyHeight);
			const leftWall = new THREE.Mesh(leftWallGeometry, wireframeMaterial);
			leftWall.position.x = -(this.bodyWidth / 2);
			leftWall.position.y = this.bodyHeight / 2;
			leftWall.rotateY(-Math.PI / 2);
			this.scene.add(leftWall);

			const frontWallGeometry = new THREE.PlaneBufferGeometry(this.bodyWidth, this.bodyHeight);
			const frontWall = new THREE.Mesh(frontWallGeometry, opacityMaterial);
			frontWall.position.z = this.bodyDepth / 2;
			frontWall.position.y = this.bodyHeight / 2;
			this.scene.add(frontWall);

			const ceilingGeometry = new THREE.PlaneBufferGeometry(this.bodyWidth, this.bodyDepth);
			const ceiling = new THREE.Mesh(ceilingGeometry, opacityMaterial);
			ceiling.rotateX(Math.PI / 2);
			ceiling.position.y = this.bodyHeight;
			this.scene.add(ceiling);
		}
	}
};
</script>
<style scoped>
	.main{
		height: 100%;
		width: 100%
	}
</style>