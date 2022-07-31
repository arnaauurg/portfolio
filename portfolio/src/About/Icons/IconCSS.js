import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/CSS3.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="polygon2989"
          castShadow
          receiveShadow
          geometry={nodes.polygon2989.geometry}
          material={materials["SVGMat.015"]}
          position={[0, 0.05, 0.09]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[23.45, 31.51, 23.45]}
        />
        <mesh
          name="path2999"
          castShadow
          receiveShadow
          geometry={nodes.path2999.geometry}
          material={materials["SVGMat.014"]}
          position={[0, 0.05, 0.01]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[23.45, 31.51, 23.45]}
        />
        <group
          name="polygon3005"
          position={[0, 0.05, -0.07]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[23.45, 31.51, 23.45]}
        >
          <mesh
            name="polygon3005_1"
            castShadow
            receiveShadow
            geometry={nodes.polygon3005_1.geometry}
            material={materials["SVGMat.020"]}
          />
          <mesh
            name="polygon3005_2"
            castShadow
            receiveShadow
            geometry={nodes.polygon3005_2.geometry}
            material={materials["SVGMat.017"]}
          />
          <mesh
            name="polygon3005_3"
            castShadow
            receiveShadow
            geometry={nodes.polygon3005_3.geometry}
            material={materials["SVGMat.018"]}
          />
          <mesh
            name="polygon3005_4"
            castShadow
            receiveShadow
            geometry={nodes.polygon3005_4.geometry}
            material={materials["SVGMat.019"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/CSS3.glb")