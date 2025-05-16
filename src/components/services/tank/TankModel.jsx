/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei';

const TankModel = (props) => {
  const { nodes, materials } = useGLTF('/tankModel.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.DriveWheel1Mtl}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.RTrack1Mtl}
        />
      </group>
    </group>
  );
};
export default TankModel;

useGLTF.preload('/tankModel.glb');
