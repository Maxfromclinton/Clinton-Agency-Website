import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const BookGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cylinderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // NOTE: Amazon links often block external display. 
  // I have replaced them with Unsplash placeholders so you can see the effect.
  // To use your own images: 
  // 1. Put your images in the 'public' folder (e.g., public/books/book1.jpg)
  // 2. Change these URLs to: "/books/book1.jpg"
  const books = [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop", // Book 1
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop", // Book 2
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop", // Book 3
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop", // Book 4
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop", // Book 5
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop", // Duplicate 1
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop", // Duplicate 2
    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop", // Duplicate 3
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop", // Duplicate 4
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop", // Duplicate 5
  ];

  // --- Particle Shader Logic ---
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(15, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    camera.position.z = 20;

    // Config
    const config = {
      particleCount: 200,
      particleSpread: 10,
      speed: 0.1,
      particleBaseSize: 100,
      particleColors: ['#4f46e5', '#818cf8', '#ffffff'], // Indigos and whites
      moveParticlesOnHover: true,
    };

    const hexToRgb = (hex: string) => {
      hex = hex.replace(/^#/, "");
      if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
      const int = parseInt(hex, 16);
      return [((int >> 16) & 255) / 255, ((int >> 8) & 255) / 255, (int & 255) / 255];
    };

    // Shaders
    const vertexShader = `
      attribute vec4 random;
      attribute vec3 color;
      uniform float uTime;
      uniform float uSpread;
      uniform float uBaseSize;
      uniform float uSizeRandomness;
      varying vec4 vRandom;
      varying vec3 vColor;
      void main() {
        vRandom = random;
        vColor = color;
        vec3 pos = position * uSpread;
        pos.z *= 10.0;
        vec4 mPos = modelMatrix * vec4(pos, 1.0);
        float t = uTime;
        mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
        mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
        mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
        vec4 mvPos = viewMatrix * mPos;
        gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5))) / length(mvPos.xyz);
        gl_Position = projectionMatrix * mvPos;
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      varying vec4 vRandom;
      varying vec3 vColor;
      void main() {
        vec2 uv = gl_PointCoord.xy;
        float d = length(uv - vec2(0.5));
        if(d > 0.5) discard;
        gl_FragColor = vec4(vColor + 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28), 1.0);
      }
    `;

    // Particles Data
    const count = config.particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x, y, z, len;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      const col = hexToRgb(config.particleColors[Math.floor(Math.random() * config.particleColors.length)]);
      colors.set(col, i * 3);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('random', new THREE.BufferAttribute(randoms, 4));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: config.particleSpread },
        uBaseSize: { value: config.particleBaseSize },
        uSizeRandomness: { value: 1 },
      },
      transparent: true,
      depthTest: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Interaction
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    if (config.moveParticlesOnHover) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    // Animation Loop
    let animationId: number;
    let elapsed = 0;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animationId = requestAnimationFrame(animate);
      const delta = currentTime - lastTime;
      lastTime = currentTime;
      elapsed += delta * config.speed;

      material.uniforms.uTime.value = elapsed * 0.001;

      if (config.moveParticlesOnHover) {
        particles.position.x = -mouse.x;
        particles.position.y = -mouse.y;
      }
      
      particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
      particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
      particles.rotation.z += 0.01 * config.speed;

      renderer.render(scene, camera);
    };

    animate(performance.now());

    // Cleanup
    const handleResize = () => {
       if (container && renderer) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
       }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, []);

  // --- Gallery Logic ---
  useEffect(() => {
    const cylinder = cylinderRef.current;
    if (!cylinder) return;

    let rotation = 0;
    let dragStart = 0;
    let isDraggingLocal = false;
    const dragFactor = 0.3;

    // Initialize Faces
    const faceCount = books.length;
    // Calculate radius to ensure items are spaced nicely.
    // Mobile needs a slightly wider radius relative to screen to avoid extreme overlap
    const radius = window.innerWidth < 640 ? 290 : 450; 
    const angleStep = 360 / faceCount;

    // Apply initial transforms
    Array.from(cylinder.children).forEach((child, i) => {
        const face = child as HTMLElement;
        face.style.transform = `rotateY(${angleStep * i}deg) translateZ(${radius}px)`;
    });

    // Events
    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      isDraggingLocal = true;
      setIsDragging(true);
      dragStart = 'touches' in e ? e.touches[0].clientX : e.clientX;
      
      // Switch to manual transform
      cylinder.classList.remove('gallery-spinning');
      cylinder.style.animation = 'none';
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDraggingLocal) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - dragStart;
      rotation += deltaX * dragFactor;
      cylinder.style.transform = `rotateY(${rotation}deg)`;
      dragStart = clientX;
    };

    const handleMouseUp = () => {
      isDraggingLocal = false;
      setIsDragging(false);
    };

    cylinder.addEventListener('mousedown', handleMouseDown);
    cylinder.addEventListener('touchstart', handleMouseDown);
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);
    
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    
    // Resize handler for gallery faces
    const handleResizeGallery = () => {
        const newRadius = window.innerWidth < 640 ? 290 : 450;
        Array.from(cylinder.children).forEach((child, i) => {
            const face = child as HTMLElement;
            face.style.transform = `rotateY(${angleStep * i}deg) translateZ(${newRadius}px)`;
        });
    };
    window.addEventListener('resize', handleResizeGallery);

    return () => {
        cylinder.removeEventListener('mousedown', handleMouseDown);
        cylinder.removeEventListener('touchstart', handleMouseDown);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchend', handleMouseUp);
        window.removeEventListener('resize', handleResizeGallery);
    };
  }, [books.length]);

  return (
    <section className="relative w-full h-[800px] bg-neutral-900 overflow-hidden border-t border-neutral-800">
      {/* Background Particles */}
      <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900"></div>
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        <div className="text-center mb-12 pointer-events-none px-6">
            <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 block">Our Authors</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">Best-Sellers We've Built</h2>
            <p className="text-neutral-500 text-sm mt-2 max-w-lg mx-auto">
              Interactive Gallery: Drag to rotate and explore the covers.
            </p>
        </div>

        <div className="gallery-container w-full h-[450px] flex items-center justify-center perspective-1000">
           <div 
             ref={cylinderRef}
             className="gallery-cylinder relative w-full h-full transform-style-3d gallery-spinning"
           >
              {books.map((src, i) => (
                <div 
                   key={i} 
                   className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[240px] aspect-[2/3] group cursor-grab active:cursor-grabbing"
                >
                   {/* Fallback background added so cards aren't invisible if images fail */}
                   <div className="w-full h-full p-2 bg-neutral-800 backdrop-blur-sm border border-white/10 rounded-lg shadow-2xl hover:scale-110 transition-transform duration-300">
                      <img 
                        src={src} 
                        alt={`Book Cover ${i + 1}`} 
                        className="w-full h-full object-cover rounded shadow-lg select-none pointer-events-none" 
                        loading="eager"
                      />
                   </div>
                   {/* Reflection effect */}
                   <div className="absolute top-full left-0 w-full h-full scale-y-[-1] opacity-20 bg-gradient-to-t from-transparent to-white/50 pointer-events-none mask-image-fade"></div>
                </div>
              ))}
           </div>
        </div>
        
        <div className="absolute bottom-12 text-neutral-500 text-xs tracking-widest pointer-events-none animate-pulse">
             {isDragging ? 'DRAGGING...' : 'DRAG TO ROTATE'}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
            perspective: 1200px;
        }
        .transform-style-3d {
            transform-style: preserve-3d;
        }
        .gallery-spinning {
            animation: spinHorizontal 40s linear infinite;
        }
        @keyframes spinHorizontal {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(-360deg); }
        }
        .mask-image-fade {
            mask-image: linear-gradient(to bottom, rgba(0,0,0,1), transparent);
            -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1), transparent);
        }
      `}</style>
    </section>
  );
};

export default BookGallery;