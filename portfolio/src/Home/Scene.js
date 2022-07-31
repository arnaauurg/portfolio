
import React from 'react';
import { Suspense, useState} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
import { OrbitControls, Stage, ScrollControls, Scroll } from '@react-three/drei';

import Loader from '../Loader';
import Page from '../Page';
import Arnau from './Arnau';
import Character from './Character';
import Smoke from './Smoke';
import Gradient from './Gradient';
import Fragments from './Arnau';

//Parte modular para constuir el landing principal

function Letters(){
  const [click, setClicked] = useState(false)

  return(
    <group>
      <Fragments 
        visible={click}  
        onClick={() => setClicked(true)}
        /* falta poner el hover de interacción- on pointer in||out */ 
        />  
    </group>
  )
}

//* Blop spheres interactivas? */
//<Gradient scale={[5]} position={[0, 10, -200]}  />
export default function Scene() {
  
  return (
      <Page >
        <Canvas  dpr={[1,2]} resize={1} orthographic camera={{zoom:11.1, position: [0,100,100], fov:40}}  > 
            <Suspense fallback={<Loader />}>
              <OrbitControls  
                target={[0,4,0]} 
                enableRotate={false} 
                enableZoom={false} 
                enablePan={false} 
                enableDamping={false}
                />   
                <Stage receiveShadow intensity={0.3} environment="city"  >
                  <Character position={[-22, 7, 20]}  />
                  <Gradient  />                   
                  <Letters />
                  <Smoke scale={0.3}  position={[-23, -5, 15]} rotation-y={[Math.PI/4]} />
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