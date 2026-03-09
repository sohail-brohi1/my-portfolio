"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Stars } from "./Stars";
import { InteractiveShapes } from "./InteractiveShapes";
import { SkillsBackground } from "./SkillsBackground";
import { Preload } from "@react-three/drei";

const CanvasScene = () => {
  return (
    <div id="canvas-container" className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Stars />
          <InteractiveShapes />
          <SkillsBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default CanvasScene;
