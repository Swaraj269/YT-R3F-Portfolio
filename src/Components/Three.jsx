import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";

const Three = () => {
  return (
    <div className="three-container">
      <Canvas>
        {/* <OrbitControls /> */}
        <Experience />
      </Canvas>
    </div>
  );
};

export default Three;
