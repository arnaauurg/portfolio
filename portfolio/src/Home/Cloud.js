import React, { useRef, useMemo } from "react";
import { useGLTF, Merged } from "@react-three/drei";

export default function Cloud(props) {
  const { nodes } = useGLTF("/cloud.glb");
  const instances = useMemo(
    () => ({
      PlaneDefault: nodes["Plane001_08_-_Default_0"],
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <Model instances={instances} />}
    </Merged>
  );
}

function Model({ instances, ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/cloud.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.78747559, 0, -5.25891113]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <instances.PlaneDefault />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/cloud.glb");