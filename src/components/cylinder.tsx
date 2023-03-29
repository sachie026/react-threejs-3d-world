import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import { useBox } from "@react-three/cannon";
// import "../style/styles.css";
import { Mesh } from "three";

interface CylinderProps {
  height?: number;
  color?: string;
}

function Cylinder({ height, color }: CylinderProps) {
  const cylinderRef = useRef<Mesh>(null!);
  console.log("height", height);

  useFrame((state, delta) => {
    cylinderRef.current.rotation.y = cylinderRef.current.rotation.x += delta;
  });

  return (
    <mesh ref={cylinderRef} position={[4, 0, 0]}>
      {/* cylinderGeometry args: botRad, topRad, height, radialSegments */}
      <cylinderGeometry attach="geometry" args={[1, 1, height, 10]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}

export default Cylinder;
