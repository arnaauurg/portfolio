import React, { useRef, useMemo, useEffect, useState , THREE} from "react";
import { useGLTF, Merged, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export default function Dragon({ ...props }) {
  const group = useRef();
  const { nodes, animations } = useGLTF("/Dragon.glb");
  const { actions } = useAnimations(animations, group);


  useEffect(()=> {
    console.log(actions)
    console.log(animations)
    actions.flying.play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null} >
      <group>
        <group name="RootNode0" scale={0.1}>
          <group name="geo1">
            <skinnedMesh
              name="dragon_wings22"
              geometry={nodes.dragon_wings22.geometry}
              material={nodes.dragon_wings22.material}
              skeleton={nodes.dragon_wings22.skeleton}
            />
          </group>
          <group name="skeletal3">
            <primitive object={nodes.root4} />
          </group>
        </group>
      </group>
    </group>
  );
}



useGLTF.preload("/Dragon.glb");

