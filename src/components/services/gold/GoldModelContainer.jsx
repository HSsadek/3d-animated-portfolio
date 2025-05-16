import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Stage } from '@react-three/drei';
import GoldModel from './GoldModel';
import { OrbitControls } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';

const GoldModelContainer = () => {
  return (
    <Canvas>
      <Suspense>
        <Stage environment={'city'} intensity={0.5}>
          <GoldModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 1, 1.8]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};
export default GoldModelContainer;
