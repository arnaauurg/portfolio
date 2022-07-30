import React, { useRef, useFrame } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function LanguageC({ ...props }) {
  const group = useRef();
  
  const { nodes, materials } = useGLTF("/languageC.glb");


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh >
          <mesh
            name="path2"
            castShadow
            receiveShadow
            geometry={nodes.path2.geometry}
            material={materials["SVGMat.010"]}
            position={[0, 0.15395816, 0.07707494]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={32.00386047}
          />
          <mesh
            name="path6"
            castShadow
            receiveShadow
            geometry={nodes.path6.geometry}
            material={materials["SVGMat.012"]}
            position={[0.0152153, 0.15343085, -0.15866221]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={32.00386047}
          />
          <mesh
            name="path8"
            castShadow
            receiveShadow
            geometry={nodes.path8.geometry}
            material={materials["SVGMat.013"]}
            position={[0, 0.15395816, 0.08211458]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={32.00386047}
          />
          </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/languageC.glb");