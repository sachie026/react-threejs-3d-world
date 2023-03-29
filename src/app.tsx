import React, { useEffect, useRef, useState } from "react";
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
  const [, setForceUpdate] = useState(Date.now());
  const sizeRef = useRef(DEFAULT_GEOMETRY_SIZE);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedValue = (
        Math.random() *
        (GEOMETRY_MAXIMUM_SIZE - GEOMETRY_MINIMUM_SIZE + GEOMETRY_MAXIMUM_SIZE)
      ).toFixed(4);

      sizeRef.current = parseFloat(updatedValue);
      setForceUpdate(Date.now());
    }, 100);

    return () => clearInterval(intervalId); //This is important
  }, []);

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.5} />

      <Cube color={COLOR} width={sizeRef.current} />
      <Cylinder color={COLOR} height={sizeRef.current} />
      <Sphere color={COLOR} radius={sizeRef.current} />
    </Canvas>
  );
}
export default App;
