import { useEffect, useRef } from "react";
import p5 from "p5";
import "../styles/TechWaves.css";

const TechWaves = () => {
  const renderRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(250, 250);
      };

      p.draw = () => {
        p.clear();
        p.noFill();
        p.stroke("#64ffda");
        p.strokeWeight(1.5);

        // Draw multiple offset waves
        for (let i = 0; i < 5; i++) {
          p.beginShape();
          for (let x = 0; x < p.width; x += 10) {
            // Complex sine calculation for organic movement
            let y = p.height / 2 + 
                    p.sin(x * 0.02 + p.frameCount * 0.05 + i) * (40 + i * 5) * p.sin(p.frameCount * 0.01);
            p.vertex(x, y);
          }
          p.endShape();
        }
      };
    };

    const p5Instance = new p5(sketch, renderRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div id="geometric-animation" ref={renderRef}></div>;
};

export default TechWaves;