<template>
    <div id="bodyBox"></div>
</template>

<script>
// let mesh = null;
// mesh=  null;
// scene=  null;
// let container=  null;
let scene = null,
    bodyContent = null,
    SEPARATION = 100,
    AMOUNTX = 50,
    AMOUNTY = 50,
    camera = null,
    renderer = null,
    particles = null,
    count = null,
    mouseX = null,
    mouseY = null,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2;
import * as THREE from "three";
export default {
    name: "x-3d-dots",
    data() {
        return {};
    },
    mounted() {
        bodyContent = document.getElementById("bodyBox");
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
            camera.position.z = 1000;
            scene = new THREE.Scene();
            const numParticles = AMOUNTX * AMOUNTY;
            const positions = new Float32Array(numParticles * 3);
            const scales = new Float32Array(numParticles);
            let i = 0,
                j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
                    positions[i + 1] = 0; // y
                    positions[i + 2] =
                        iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z

                    scales[j] = 1;

                    i += 3;
                    j++;
                }
            }
            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(positions, 3)
            );
            geometry.setAttribute(
                "scale",
                new THREE.BufferAttribute(scales, 1)
            );
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    color: { value: new THREE.Color(0x378af0) },
                },
                vertexShader:
                    document.getElementById("vertexshader").textContent,
                fragmentShader:
                    document.getElementById("fragmentshader").textContent,
            });
            particles = new THREE.Points(geometry, material);
            scene.add(particles);
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            bodyContent.appendChild(renderer.domElement);
            bodyContent.style.touchAction = "none";
            window.addEventListener("pointermove", this.onPointerMove);
            window.addEventListener("resize", this.onWindowResize);
        },
        onWindowResize() {
            windowHalfX = window.innerWidth / 2;
            windowHalfY = window.innerHeight / 2;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        },
        onPointerMove(event) {
            if (event.isPrimary === false) return;
            mouseX = event.clientX - windowHalfX;
            mouseY = event.clientY - windowHalfY;
        },
        animate() {
            requestAnimationFrame(this.animate);
            this.render();
        },
        render() {
            camera.position.x += (mouseX - camera.position.x) * 0.05;
            camera.position.y += (-mouseY - camera.position.y) * 0.05;
            // camera.position.x = 300;
            camera.position.y = 500;
            camera.lookAt(scene.position);
            const positions = particles.geometry.attributes.position.array;
            const scales = particles.geometry.attributes.scale.array;
            let i = 0,
                j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i + 1] =
                        Math.sin((ix + count) * 0.3) * 50 +
                        Math.sin((iy + count) * 0.5) * 50;
                    scales[j] =
                        (Math.sin((ix + count) * 0.3) + 1) * 20 +
                        (Math.sin((iy + count) * 0.5) + 1) * 20;

                    i += 3;
                    j++;
                }
            }
            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;
            renderer.render(scene, camera);
            count += 0.1;
        },
    },
};
</script>
<style></style>
