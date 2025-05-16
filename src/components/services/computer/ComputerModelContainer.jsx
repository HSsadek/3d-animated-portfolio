import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ComputerModel from './ComputerModel';
import { OrbitControls } from '@react-three/drei';
import { Stage } from '@react-three/drei';
import { PerspectiveCamera } from '@react-three/drei';
const ComputerModelContainer = () => {
  return (
    <Canvas>
      <Suspense>
        <Stage environment={'night'} intensity={0.5}>
          <ComputerModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 1, 1.8]} zoom={0.6} makeDefault />
      </Suspense>
    </Canvas>
  );
};
export default ComputerModelContainer;
