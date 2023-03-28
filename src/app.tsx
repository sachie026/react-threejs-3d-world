import React from "react";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import "./style/styles.css";
import Cube from "./components/cube";
function App() {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.9} />
      <Physics>
        <Cube />
        {/* <Plane /> */}
      </Physics>
    </Canvas>
  );
}
export default App;
