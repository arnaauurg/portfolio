import React, { Suspense, useRef } from "react";
import * as THREE from 'three';
import { useLoader } from "@react-three/fiber";
import { useGLTF, Float, useTexture } from "@react-three/drei";


//fragmento de letras blender UX


export default function UX({ ...props }) {
  const group = useRef();
  const { nodes } = useGLTF("/UX.glb");
  const matcap = useLoader(THREE.TextureLoader, "./matcap.png"); //textura plastic blue {this line works}
  /*const[colorMap,normalMap,displacementMap,roughnessMap,aoMap] = useLoader(THREE.TextureLoader, [
    name("COLOR"),
    name("NORM"),
    name("DISP"),
    name("ROUGH"),
    name("OCC")
    ]);
      //buggy as hell not working properly */

  return (
    <group ref={group} {...props} dispose={null} scale={15}>
        <Float>
          <mesh
            
            castShadow
            receiveShadow
            geometry={nodes.Texto.geometry}
            //material={materials.UX} material se puede quitar y poner el que tu quieras a voluntad
            rotation={[1.56483532, 0, 0]}
            scale={[1.89896309, 1.40556395, 1.40556395]}
            >
            <meshMatcapMaterial matcap={matcap}
              />
          </mesh>
        </Float>
    </group>
  );
}

useGLTF.preload("/UX.glb");

/*const colorMap = useLoader(TextureLoader, 'Rock035_4K_Color.jpg')
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
  useLoader(TextureLoader,
      ['Rock035_4K_Color.jpg',
      'Rock035_4K_Displacement.jpg',
      'Rock035_4K_NormalDX.jpg' ,
      'Rock035_4K_Roughness.jpg',
      'Rock035_4K_AmbientOcclusion.jpg'
      ]
    )

  not working passing textures from list fragmented components && TextureLoader
    */
     //const matcap = useLoader(TextureLoader, "./matcap.png"); //textura plastic blue {this line works}
  
  /* const [colorMap, normalMap, roughnessMap, displacementMap, aoMap] = useLoader(TextureLoader, [
    './Lava_005_COLOR.jpg',
    './Lava_005_NORM.jpg',
    './Lava_005_ROUGH.jpg', NOT WORKING BY ARRAYs
    './Lava_005_DISP.png',
    './Lava_005_OCC.jpg',
  ])
  
  */