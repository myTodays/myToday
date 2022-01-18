<template>
    <div id="oceanContainer"></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Water } from "three/examples/jsm/objects/Water.js";
import { Sky } from "three/examples/jsm/objects/Sky.js";
import { PLYLoader } from "three/examples/jsm/loaders/PLYLoader.js";

let bodyContent, camera, scene, renderer, controls, water, sun;
export default {
    name: "x-3d-ocean",
    data() {
        return {};
    },
    mounted() {
        bodyContent = document.getElementById("oceanContainer");
        bodyContent && this.init();
        this.animate();
    },
    methods: {
        init() {
            camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                1,
                10000
            );
            camera.position.set(30, 30, 120);
            scene = new THREE.Scene();
            renderer = new THREE.WebGLRenderer();
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            bodyContent.appendChild(renderer.domElement);
            sun = new THREE.Vector3();

            // 辅助坐标系--------------------------------------------
            // const axisHelper = new THREE.AxisHelper(200);
            // scene.add(axisHelper);

            const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
            let waterNormals = new THREE.TextureLoader().load(
                require("./water.jpg"),
                (texture) => {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                }
            );
            water = new Water(waterGeometry, {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: waterNormals,
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale: 3.7,
                fog: scene.fog !== undefined,
            });
            water.rotation.x = -Math.PI / 2;
            scene.add(water);
            // Skybox
            const sky = new Sky();
            sky.scale.setScalar(10000);
            scene.add(sky);
            const skyUniforms = sky.material.uniforms;
            skyUniforms["turbidity"].value = 10;
            skyUniforms["rayleigh"].value = 2;
            skyUniforms["mieCoefficient"].value = 0.005;
            skyUniforms["mieDirectionalG"].value = 0.8;
            const parameters = {
                elevation: 2,
                azimuth: 180,
            };
            const pmremGenerator = new THREE.PMREMGenerator(renderer);
            function updateSun() {
                const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
                const theta = THREE.MathUtils.degToRad(parameters.azimuth);
                sun.setFromSphericalCoords(1, phi, theta);
                sky.material.uniforms["sunPosition"].value.copy(sun);
                water.material.uniforms["sunDirection"].value
                    .copy(sun)
                    .normalize();
                scene.environment = pmremGenerator.fromScene(sky).texture;
            }
            updateSun();

            // PLY file
            const plyLoader = new PLYLoader();
            // 导入自由女神像
            plyLoader.load(`${process.env.BASE_URL}/3dModels/fish.ply`, (geometry) => {
                geometry.computeVertexNormals();
                const material = new THREE.MeshStandardMaterial({
                    color: 0x0055ff,
                    flatShading: true,
                });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = 0;
                mesh.position.y = 30;
                mesh.position.z = 30;
                mesh.rotation.x = -Math.PI / 2;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                mesh.scale.set(0.05, 0.05, 0.05);
                scene.add(mesh);
            });
            // 导入鱼模型
            plyLoader.load(`${process.env.BASE_URL}/3dModels/lucky.ply`, (geometry) => {
                geometry.computeVertexNormals();
                const material = new THREE.MeshStandardMaterial({
                    color: 0x0055ff,
                    flatShading: true,
                });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.x = 0;
                mesh.position.y = 40;
                mesh.position.z = -20;
                mesh.scale.set(0.05, 0.05, 0.05);
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                scene.add(mesh);
            });
            scene.add(new THREE.HemisphereLight(0x443333, 0x111122));

            controls = new OrbitControls(camera, renderer.domElement);
            controls.maxPolarAngle = Math.PI * 0.495;
            controls.target.set(0, 10, 0);
            controls.minDistance = 40.0;
            controls.maxDistance = 200.0;
            controls.update();
            window.addEventListener("resize", this.onWindowResize);
        },
        onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        },
        animate() {
            requestAnimationFrame(this.animate);
            this.render();
        },
        render() {
            water.material.uniforms["time"].value += 1.0 / 60.0;
            renderer.render(scene, camera);
        },
    },
};
</script>

<style></style>
