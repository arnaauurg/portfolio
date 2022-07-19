
import React from 'react';
import { Suspense, useRef, useContext } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Backdrop, Float, OrbitControls, Stage } from '@react-three/drei';

import Loader from '../Loader';
import Page from '../Page';
import Castle from './Castle';
import Cloud from './Cloud';
import Dragon from './Dragon';
import UX from './UX';
import Arnau from './Arnau';
import Character from './Character';
import Smoke from './Smoke';
import Gradient from './Gradient';

//import Background from './Background'; css?? hay que passarlo por threejs scene

//Parte modular para constuir la escena principal HOME

export default function LandingPage() {
    return (
        <Page >
          <Canvas resize={1} dpr={window.devicePixelRatio} camera={{position: [25, 10, 30], fov:45, zoom: 1, near:5, far: 1000}}  > 
              <Suspense fallback={<Loader />}>       
              <Stage>
                <Float floatingRange={0.75}>
                  <Character position={[-25, 2, 10]}  />
                </Float>
                <OrbitControls />
                <Arnau  />
                <Gradient  scale={5} position={[0, 0, 0]}  />
                <Smoke scale={0.20}  position={[-23, -5, 7]} />
                </Stage>
              </Suspense>
            </Canvas>
        </Page>
    );
  }


  //<UX position={[-10, 15, 45]} rotation-y={[ Math.PI /2]} />
/*
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