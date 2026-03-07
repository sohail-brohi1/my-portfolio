"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars } from "./Stars";
import { Preload } from "@react-three/drei";

const CanvasScene = () => {
  return (
    <div id="canvas-container" className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default CanvasScene;
