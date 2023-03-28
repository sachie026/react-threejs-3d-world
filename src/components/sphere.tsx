import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
// import { useBox } from "@react-three/cannon";
// import "../style/styles.css";
import { BufferGeometry, Mesh } from "three";

function Sphere() {
  const sphereRef = useRef<Mesh<BufferGeometry>>();
  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta;
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
      ref={sphereRef}
      position={[-3, 0, 0]}
    >
      <sphereGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  );
}

export default Sphere;
