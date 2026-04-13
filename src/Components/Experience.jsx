import { Environment, PresentationControls, useGLTF } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useEffect, useRef } from "react";
import { SRGBColorSpace, TextureLoader } from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const { scene } = useGLTF("./model.glb");
  const [color, normal, roughness] = useLoader(TextureLoader, [
    "./textures/color.jpg",
    "./textures/normal.jpg",
    "./textures/rough.jpg",
  ]);

  const { position, rotation } = useControls("Model Controls", {
    position: {
      value: { x: 0, y: -5.28, z: 0 },
      step: 0.01,
    },
    rotation: {
      value: { x: 0, y: -1.82, z: 0 },
      step: 0.01,
    },
  });

  const modelRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useGSAP(() => {
    if (!modelRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=1000",
        scrub: true,
      },
    });

    tl.to(modelRef.current.position, {
      x: -3,
    });
    tl.to(
      modelRef.current.rotation,
      {
        y: Math.PI / 4,
      },
      "<",
    );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "+=1100",
        end: "+=3800",
        scrub: true,
      },
    });

    tl2.to(modelRef.current.position, {
      x: -7,
      z: -3,
    });
    tl2.to(
      modelRef.current.rotation,
      {
        y: 4.2 * Math.PI,
      },
      "<",
    );

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "+=6400",
        end: "bottom bottom",
        scrub: true,
      },
    });

    tl3.to(modelRef.current.position, {
      x: 4,
      z: 0,
    });
    tl3.to(
      modelRef.current.rotation,
      {
        y: 5.8 * Math.PI,
      },
      "<",
    );
  });

  // Mouse move handler
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Normalize mouse position to -1 to 1 range
      mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

      if (modelRef.current) {
        // Optional: Subtle position shift
        gsap.to(modelRef.current.position, {
          x: modelRef.current.position.x + mousePosition.current.x * 0.1,
          y: modelRef.current.position.y + mousePosition.current.y * 0.1,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    // window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position, rotation]); // Re-run when position/rotation controls change

  useFrame((state, delta) => {
    // You can add additional frame-based animations here if needed
  });

  useEffect(() => {
    color.colorSpace = SRGBColorSpace;

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = color;
        child.material.normalMap = normal;
        child.material.roughnessMap = roughness;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, color, normal, roughness]);

  return (
    <>
      <Environment files="./envMap.hdr" />
      <ambientLight intensity={1} />
      <PresentationControls
        config={{ mass: 4, tension: 220, friction: 32 }}
        snap={true}
      >
        <group
          ref={modelRef}
          scale={15}
          position={[position.x, position.y, position.z]}
          rotation={[rotation.x, rotation.y, rotation.z]}
        >
          <primitive object={scene} />
        </group>
      </PresentationControls>
    </>
  );
};

export default Experience;
