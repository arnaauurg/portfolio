import React, { useRef } from "react";
import { useGLTF} from "@react-three/drei";




export default function Smoke({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/smoke.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Smoke_mat.geometry}
        material={materials.Smoke_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Smoke_mat001.geometry}
        material={materials.Smoke_mat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Smoke_mat002.geometry}
        material={materials.Smoke_mat}
      />
    </group>
  );
}

useGLTF.preload("/smoke.glb");
