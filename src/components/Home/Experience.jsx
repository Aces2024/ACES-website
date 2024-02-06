import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { ACES } from "./ACES";

export const Experience = () => {
  return (
    <>
       <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={0.8}
        castShadow={true}
      />
      <Suspense fallback={null}>
        <group position={[0, 0, 0]}>
          {/* Adjust the position of the ACES component */}
          <ACES position={[0, 0, 0]} />
        </group>
      </Suspense>
    </>
  );
};
