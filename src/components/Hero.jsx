import { ArrowUpRight, Zap } from "lucide-react"; // Removed ShieldCheck
import { useState } from "react";

const Hero = ({ onScrollToServices }) => {
  const [rotation, setRotation] = useState({ x: -20, y: -30 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge fade-in-up">
            <Zap size={12} className="icon-accent" />
            <span>
              Quality Assured Engineering
            </span>
          </div>

          <h1 className="hero__title fade-in-up delay-100">
            Structural <br />
            <span className="text-accent">Excellence</span> <br />
            Reimagined.
          </h1>

          <p className="hero__description fade-in-up delay-200">
            NovaBuild provides industrial-grade BIM coordination and structural
            master-planning for global projects.
          </p>

          <div className="hero__actions fade-in-up delay-300">
            <button
              onClick={onScrollToServices}
              className="btn btn--primary"
            >
              Our Capability
            </button>
            <button className="btn btn--outline">
              Technical Audit <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Right side visual */}
        <div 
          className="hero__visual"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
           {/* Abstract 3D Model Representation using CSS */}
           <div 
            className="model-3d"
            onMouseDown={handleMouseDown}
            style={{
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              animation: isDragging ? 'none' : 'float3D 6s ease-in-out infinite',
              cursor: isDragging ? 'grabbing' : 'grab',
              transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }}
           >
              <div className="model-3d__face model-3d__face--front">
                <div className="model-3d__grid"></div>
              </div>
              <div className="model-3d__face model-3d__face--right"></div>
              <div className="model-3d__face model-3d__face--top"></div>
              <div className="model-3d__face model-3d__face--left"></div>
              <div className="model-3d__face model-3d__face--bottom"></div>
              <div className="model-3d__face model-3d__face--back"></div>
           </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
