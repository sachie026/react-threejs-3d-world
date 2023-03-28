import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import { useBox } from "@react-three/cannon";
import "../style/styles.css";
import { BufferGeometry, Mesh } from "three";

function Cube() {
  const cubeRef = useRef<Mesh<BufferGeometry>>();
  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta;
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
      ref={cubeRef}
      //   position={[2, 0, 0]}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="yellow" />
    </mesh>
  );
}

export default Cube;
