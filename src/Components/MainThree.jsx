import { Canvas } from "@react-three/fiber";
import React from "react";
import Experience from "./Experience";
import { OrbitControls } from "@react-three/drei";

const MainThree = () => {
  return (
    <div className="three-container">
      <Canvas>
        {/* <OrbitControls /> */}
        <Experience />
      </Canvas>
    </div>
  )
}

export default MainThree