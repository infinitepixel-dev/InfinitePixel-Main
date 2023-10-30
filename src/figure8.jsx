import { useEffect, useRef } from "react";
import {
  Engine,
  Render,
  World,
  Bodies,
  Mouse,
  MouseConstraint,
  Runner,
} from "matter-js";

const Figure8 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const engine = Engine.create();
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
      },
    });

    // Outer rectangle boundary
    const topBoundary = Bodies.rectangle(400, 2.5, 800, 5, { isStatic: true });
    const bottomBoundary = Bodies.rectangle(400, 597.5, 800, 5, {
      isStatic: true,
    });
    const leftBoundary = Bodies.rectangle(2.5, 300, 5, 600, { isStatic: true });
    const rightBoundary = Bodies.rectangle(797.5, 300, 5, 600, {
      isStatic: true,
    });

    const outerRectTop = Bodies.rectangle(400, 190, 248, 30, {
      isStatic: false,
    });
    const outerRectBottom = Bodies.rectangle(400, 410, 248, 4, {
      isStatic: true,
    });
    const innerRectTop = Bodies.rectangle(400, 194, 240, 4, { isStatic: true });
    const innerRectBottom = Bodies.rectangle(400, 406, 240, 4, {
      isStatic: true,
    });

    World.add(engine.world, [
      topBoundary,
      bottomBoundary,
      leftBoundary,
      rightBoundary,

      outerRectTop,
      outerRectBottom,
      innerRectTop,
      innerRectBottom,
    ]);

    // Add pixels inside figure 8 race track
    for (let i = 0; i < 50; i++) {
      const x = 400 + Math.random() * 240 - 120;
      const y = 300 + Math.random() * 240 - 120;
      const pixel = Bodies.circle(x, y, 2.5);
      World.add(engine.world, pixel);
    }

    const drawText = () => {
      const context = canvasRef.current.getContext("2d");
      const position = outerRectTop.position;

      context.font = "16px Arial";
      context.fillStyle = "black";
      context.fillText("Grab Me", position.x - 40, position.y);

      requestAnimationFrame(drawText);
    };

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        render: {
          visible: false,
        },
      },
    });
    World.add(engine.world, mouseConstraint);

    const runner = Runner.create();
    Runner.run(runner, engine);

    Render.run(render);
    drawText();

    return () => {
      Render.stop(render);
    };
  }, []);

  return (
    <div className="figure-eight-container">
      <canvas ref={canvasRef} width="800" height="600"></canvas>
    </div>
  );
};

export default Figure8;
