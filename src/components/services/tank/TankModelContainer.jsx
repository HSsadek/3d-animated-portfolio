import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import TankModel from './TankModel';
import { OrbitControls } from '@react-three/drei';
import { Stage } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';

const TankModelContainer = () => {
  return (
    <Canvas>
      <Suspense>
        <Stage environment={'city'} intensity={1.5}>
          <TankModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 1, 1.8]} zoom={0.7} makeDefault />
      </Suspense>
    </Canvas>
  );
};
export default TankModelContainer;
