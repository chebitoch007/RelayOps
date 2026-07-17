"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect the user's OS-level motion preference.
    // Users with vestibular disorders rely on this setting — never animate past it.
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;
    let isVisible = !document.hidden;
    
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 180 };

    class Particle {
      x: number; baseY: number; size: number; speedX: number; speedY: number; 
      angle: number; spin: number; hue: number; alpha: number; targetAlpha: number; y: number; baseX: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x; this.baseY = this.y;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.01;
        this.hue = Math.random() > 0.5 ? 160 : 210;
        this.alpha = 0;
        this.targetAlpha = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.angle += this.spin;
        this.x += this.speedX + Math.cos(this.angle) * 0.15;
        this.y += this.speedY + Math.sin(this.angle) * 0.15;

        if (this.alpha < this.targetAlpha) this.alpha += 0.005;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= (dx / distance) * force * 0.8;
          this.y -= (dy / distance) * force * 0.8;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `hsla(${this.hue}, 85%, 65%, ${this.alpha})`;
        context.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = Math.min(Math.floor((width * height) / 9500), window.innerWidth < 768 ? 35 : 110);
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };

    const resize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      if (ctx) ctx.scale(dpr, dpr);
      init();
    };

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    };

    const render = () => {
      if (!isVisible) return;

      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.fillStyle = "#04060A"; 
      ctx.fillRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }
      animationFrameId = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) render();
    };

    const handleMouseMove = (e: MouseEvent) => { mouse.targetX = e.clientX; mouse.targetY = e.clientY; };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) { mouse.targetX = e.touches[0].clientX; mouse.targetY = e.touches[0].clientY; }
    };
    const handleMouseLeave = () => { mouse.targetX = -1000; mouse.targetY = -1000; };

    window.addEventListener("resize", debouncedResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // If the user enables reduced-motion mid-session (e.g. via OS accessibility settings),
    // stop the loop immediately without requiring a page reload.
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        cancelAnimationFrame(animationFrameId);
        ctx.clearRect(0, 0, width, height);
      } else {
        render();
      }
    };
    motionQuery.addEventListener("change", handleMotionChange);

    resize();
    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout); // prevent debounce timer firing after unmount
      window.removeEventListener("resize", debouncedResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-40 mix-blend-screen bg-transparent"
      aria-hidden="true"
    />
  );
}