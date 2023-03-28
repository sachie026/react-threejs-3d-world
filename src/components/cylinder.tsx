import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import { useBox } from "@react-three/cannon";
// import "../style/styles.css";
import { BufferGeometry, Mesh } from "three";

function Cylinder() {
  const cylinderRef = useRef<Mesh>(null!);
  useFrame((state, delta) => {
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y += delta;
    }
    console.log("useframe", state, delta);
  });
  //   const [ref] = useBox(() => ({ position: [0, 0, 0] }));
  return (
    <mesh
      //   onClick={() => {
      //     api.velocity.set(0, 2, 0);
      //   }}
      //   ref={cubeRef as React.RefObject<Mesh<BufferGeometry>>}
      ref={cylinderRef}
      position={[0, 1, 0]}
    >
      <cylinderGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="yellow" />
    </mesh>
  );
}

export default Cylinder;
