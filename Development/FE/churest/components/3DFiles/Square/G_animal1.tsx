/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 g_animal1.glb -t
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { glbs } from '@/public/assets/glb';

type GLTFResult = GLTF & {
  nodes: {
    animal1: THREE.Mesh;
  };
  materials: {
    ['Material.088']: THREE.MeshStandardMaterial;
  };
};

export function G_animal1(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbs.g_animal_1_glb) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.animal1.geometry}
        material={materials['Material.088']}
        position={[-12.56, 1.49, -2.25]}
        rotation={[0, 0.61, 0]}
        scale={0.62}
        castShadow
      />
    </group>
  );
}

useGLTF.preload(glbs.g_animal_1_glb);