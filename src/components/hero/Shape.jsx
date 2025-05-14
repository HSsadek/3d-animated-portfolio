/* eslint-disable react/no-unknown-property */
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
const Shape = () => {
  return (
    <>
      <Sphere scale={2.4} args={[1, 100, 200]}>
        <MeshDistortMaterial
          color="#DB8B9B"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={0.2} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};
export default Shape;
