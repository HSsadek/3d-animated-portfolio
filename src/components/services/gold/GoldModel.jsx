/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei';

const GoldModel = (props) => {
  const { nodes, materials } = useGLTF('/gold.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.goldbar}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};
export default GoldModel;

useGLTF.preload('/gold.glb');
