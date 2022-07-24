
import React from 'react';
import { Suspense, useState} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import {Float, OrbitControls, Stage, MeshReflectorMaterial, Plane } from '@react-three/drei';

import Loader from '../Loader';
import Page from '../Page';
import Arnau from './Arnau';
import Character from './Character';
import Smoke from './Smoke';
import Gradient from './Gradient';
import Fragments from './Arnau';
import { AmbientLight } from 'three';

//Parte modular para constuir el landing principal

function Letters(){
  const [click, setClicked] = useState(false)

  return(
    <group>
      <Fragments 
        visible={click}  
        onClick={() => setClicked(true)}
        /* falta poner el hover de interacción- on pointer in-out */ 
        />  
    </group>
  )
}


function Suelo(props) {
  return (
    <group {...props} scale={10} >
      <Plane receiveShadow args={[50, 50, 36,36]} rotation-x={-Math.PI / 2} position={[0, -5, 0]} >
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={2048}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#101010"
        metalness={0.5}
          />
      </Plane>
    </group>
  )
}



//<Gradient scale={[5]} position={[0, 10, -200]}  />
export default function MainScene() {
  

  return (
      <Page >
        <Canvas dpr={[1,2]} resize={1} orthographic camera={{fov:35, zoom: 11 }}  > 
            <Suspense fallback={<Loader />}>
              <OrbitControls />   
              <Stage  adjustCamera intensity={0.3} environment="city"  >
                <Float floatingRange={0.5}>
                  <Character position={[-25, 2, 10]}  />
                </Float>                       
                <Letters />
                <Suelo />
                <Smoke scale={0.25}  position={[-23, -5, 7]} />
                </Stage>
            </Suspense>
          </Canvas>
      </Page>
  );
}





















  //<UX position={[-10, 15, 45]} rotation-y={[ Math.PI /2]} />
/* IGNORAR!!
      <Arnau  scale={8} position={[-80, 10, 50]}  rotation-y={[ Math.PI /2]} />
                <Cloud scale={8} position={[5, -30, 15]} rotation-y={[ Math.PI /2]}/>
                <Cloud scale={8} position={[15, -40, -15]} rotation-y={[ Math.PI /2]}/>
                <Cloud scale={16} position={[-50, -30, 15]} rotation-y={[ Math.PI /2]}/>
                <Cloud scale={16} position={[-50, -50, -100]} rotation-y={[ Math.PI /2]}/>
                <Float floatingRange={[1, 10]} >
                  <Dragon scale={18} position={[10, -90, 60]}  rotation-y={[Math.PI/2.5]}  rotation-x={[-Math.PI/9]}/>
                </Float>
                <Castle scale={0.35}  position={[-5, -45, -40]} rotation-y={[1]} />
                <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />

  */