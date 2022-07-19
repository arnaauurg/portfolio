import React, { useRef, useFrame } from "react";
import {useGLTF, Edges} from "@react-three/drei";
import { LayerMaterial, Depth, Fresnel } from 'lamina';
import { useControls } from 'leva';
import Smoke from "./Smoke";

export default function Arnau({ ...props }) {

  const ref = useRef();
  const { nodes } = useGLTF("/arnauet.gltf");
  //const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } });
 
  return (
    <group  {...props} 
      dispose={null} 
      scale={0.2} 
      rotation={[0, -Math.PI/6, 0]} 
      position={[0, 5, 4]} 
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Shape_0.geometry}
          position={[-39.43888855, 86.69881439, -6.16834641]}
          
        />
          <mesh
            geometry={nodes.Shape_1.geometry}
            position={[11.44011307, 86.69881439, -6.15834618]}
          />
          <mesh
            geometry={nodes.Shape_2.geometry}
            position={[59.09611511, 86.69881439, -6.14834642]}
          />
          <mesh
            geometry={nodes.Shape_3.geometry}
            position={[106.55711365, 86.69881439, -6.1383462]}
          />
          <mesh
            geometry={nodes.Shape_4.geometry}
            position={[156.41111755, 86.69881439, -6.12834644]}
          />
    </group>
  );
}

useGLTF.preload("/arnauet.gltf");
