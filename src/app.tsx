import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as io from "socket.io-client";
import Cube from "./components/cube";
import Cylinder from "./components/cylinder";
import Sphere from "./components/sphere";

import "./style/styles.css";
import {
  COLOR,
  DEFAULT_GEOMETRY_SIZE,
  GEOMETRY_MINIMUM_SIZE,
  GEOMETRY_MAXIMUM_SIZE,
  GEOMETRY_UPDATE_INTERVAL_TIME,
} from "./constants";

const randomNumberGenerator = () => {
  return (
    Math.random() * (GEOMETRY_MAXIMUM_SIZE - GEOMETRY_MINIMUM_SIZE) +
    GEOMETRY_MINIMUM_SIZE
  ).toFixed(3);
};

function App() {
  const [, setForceUpdate] = useState(Date.now());
  const sizeRef = useRef(DEFAULT_GEOMETRY_SIZE);

  const socket = io.connect("https://number-generator-mocha.vercel.app");

  console.log("socket", socket);

  useEffect(() => {
    socket.emit("chat message", "emitting");

    socket.on("chat message", () => {
      console.log("rec chat message");
    });
  }, [socket]);

  useEffect(() => {
    const geometryUpdateIntervalId = setInterval(() => {
      const updatedValue = randomNumberGenerator(); // random number generator between provided MAX - MIN number

      sizeRef.current = parseFloat(updatedValue);
      setForceUpdate(Date.now());
    }, GEOMETRY_UPDATE_INTERVAL_TIME);

    return () => clearInterval(geometryUpdateIntervalId); //This is important
  }, []);

  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 15, 10]} angle={0.5} />

      <Cube color={COLOR} width={sizeRef.current} />
      <Cylinder color={COLOR} height={sizeRef.current} />
      <Sphere color={COLOR} radius={sizeRef.current} />
    </Canvas>
  );
}
export default App;
