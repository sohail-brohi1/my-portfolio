"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Instances, Instance, Float } from "@react-three/drei";
import * as THREE from "three";

export const SkillsBackground = () => {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, Math.cos(t / 10) / 10 + state.pointer.y / 10, 0.1);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, Math.sin(t / 10) / 10 + state.pointer.x / 10, 0.1);
  });

  return (
    <group ref={ref}>
      <Instances range={100}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#00f2ff" roughness={0} metalness={1} wireframe />
        {Array.from({ length: 100 }).map((_, i) => (
          <Float key={i} speed={1} rotationIntensity={2} floatIntensity={2}>
            <Instance
              position={[
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 15,
              ]}
              rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}
            />
          </Float>
        ))}
      </Instances>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f2ff" />
    </group>
  );
};
