"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

const Shape = ({ position, color, speed, distort }: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    // Subtle movement based on pointer
    const { x, y } = state.pointer;
    mesh.current.position.x = THREE.MathUtils.lerp(mesh.current.position.x, position[0] + x * 0.5, 0.1);
    mesh.current.position.y = THREE.MathUtils.lerp(mesh.current.position.y, position[1] + y * 0.5, 0.1);
    
    // Smooth rotation
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.z += 0.01;
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <mesh
        ref={mesh}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? "#00f2ff" : color}
          speed={speed}
          distort={distort}
          radius={1}
        />
      </mesh>
    </Float>
  );
};

export const InteractiveShapes = () => {
  return (
    <group>
      <Shape position={[-4, 2, -5]} color="#7000ff" speed={2} distort={0.4} />
      <Shape position={[5, -3, -10]} color="#00f2ff" speed={1.5} distort={0.5} />
      <Shape position={[-6, -4, -8]} color="#ff00e5" speed={3} distort={0.3} />
      
      {/* Ambient lighting for the shapes */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
    </group>
  );
};
