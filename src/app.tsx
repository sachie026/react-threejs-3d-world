import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import Cube from "./components/cube";
import Cylinder from "./components/cylinder";
import Sphere from "./components/sphere";

import "./style/styles.css";
import {
  COLOR,
  DEFAULT_GEOMETRY_SIZE,
  GEOMETRY_MINIMUM_SIZE,
  GEOMETRY_MAXIMUM_SIZE,
} from "./constants";

function App() {
  const [sizeValue, setSizeValue] = useState(DEFAULT_GEOMETRY_SIZE);
  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedValue = (
        Math.random() *
        (GEOMETRY_MAXIMUM_SIZE - GEOMETRY_MINIMUM_SIZE + GEOMETRY_MAXIMUM_SIZE)
      ).toFixed(4);
      console.log("updatedValue", parseFloat(updatedValue));
      setSizeValue(parseFloat(updatedValue));
    }, 100);
    return () => clearInterval(intervalId); //This is important
  }, []);

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.5} />

      <Cube color={COLOR} width={sizeValue} />
      <Cylinder color={COLOR} height={sizeValue} />
      <Sphere color={COLOR} radius={sizeValue} />
    </Canvas>
  );
}
export default App;
