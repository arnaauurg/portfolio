import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function IconHTML({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/html5.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.SVGMat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={20.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={20.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve003.geometry}
        material={materials["SVGMat.003"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={20.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve004.geometry}
        material={materials["SVGMat.004"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={20.09}
      />
    </group>
  );
}

useGLTF.preload("/html5.glb");