import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface SphereProps {
  radius?: number;
  color?: string;
}

function Sphere({ radius, color }: SphereProps) {
  const sphereRef = useRef<Mesh>(null!);
  console.log("radius", radius);

  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta;
    sphereRef.current.rotation.x += 1;
    sphereRef.current.rotation.z += 2;
  });

  return (
    <mesh ref={sphereRef} position={[-4, 0, 0]}>
      {/* sphereGeometry args: radius, widthSegments, heightSegments */}
      <sphereGeometry args={[radius, 30, 30]} attach="geometry" />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

export default Sphere;
