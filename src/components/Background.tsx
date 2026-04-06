import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Three.js Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }

    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 3;

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smoothly follow mouse
      particles.rotation.y += 0.0002;
      particles.rotation.x += (mouseY * 0.05 - particles.rotation.x) * 0.05;
      particles.rotation.z += (mouseX * 0.05 - particles.rotation.z) * 0.05;
      
      renderer.render(scene, camera);
    };
    animate();

    // --- SVG Lines Animation ---
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 3,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2,
        });
      });
    }

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* WebGL Layer */}
      <div ref={containerRef} className="absolute inset-0 opacity-40" />

      {/* SVG Lines Layer */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path d="M0,200 Q250,100 500,200 T1000,200" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <path d="M0,500 Q250,400 500,500 T1000,500" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <path d="M0,800 Q250,700 500,800 T1000,800" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <path d="M200,0 Q100,250 200,500 T200,1000" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <path d="M500,0 Q400,250 500,500 T500,1000" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
        <path d="M800,0 Q700,250 800,500 T800,1000" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
      </svg>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-zinc-950/40" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-zinc-950/30 to-zinc-950" />
    </div>
  );
}
