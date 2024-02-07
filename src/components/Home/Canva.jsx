import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from './Experience';

const Canva = () => {
  return (
    <div className=" h-screen">
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 25], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full bg-black"
        // Set the initial camera position
      >
        <color attach="background" args={['#151414']} />
        {/* Centering, scaling, and bringing content downwards in 3D space */}
        <group position={[0, -7, 0]} scale={[2, 2, 2]}> {/* Adjust position and scale values as needed */}
          <Experience />
        </group>
      </Canvas>
    </div>
  );
};

export default Canva;
