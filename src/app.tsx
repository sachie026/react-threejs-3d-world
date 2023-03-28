import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import "./style/styles.css";

import Cube from "./components/cube";
import Cylinder from "./components/cylinder";
import Sphere from "./components/sphere";

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.9} />

      <Cube />
      <Cylinder />
      <Sphere />
    </Canvas>
  );
}
export default App;
