import React from "react";
import { Canvas } from "@react-three/fiber";
import { useBox } from "@react-three/cannon";
import "../style/styles.css";
import { BufferGeometry, Mesh } from "three";

function Cube() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      //   onClick={() => {
      //     api.velocity.set(0, 2, 0);
      //   }}
      //   ref={ref as React.RefObject<Mesh<BufferGeometry>>}
      position={[2, 0, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="yellow" />
    </mesh>
  );
}

export default Cube;
