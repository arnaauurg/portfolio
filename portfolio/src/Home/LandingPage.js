
import React from 'react';
import { Suspense, useRef, useContext } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, SpotLight } from '@react-three/drei';

import Loader from '../Loader';
import Page from '../Page';
import Castle from './Castle';
import Cloud from './Cloud';
import Dragon from './Dragon';
import UX from './UX';
//import Background from './Background'; css?? hay que passarlo por threejs scene

//Parte modular para constuir la escena principal HOME




export default function LandingPage() {
    return (
        <Page >
          <Canvas resize={1} shadowMap dpr={[1, 2]} camera={{position: [100, 0, 30], fov:45, zoom: 1, near:5, far: 2000}}  >
            <ambientLight intensity={0.2} color='#4296f5' />
            <ambientLight intensity={0.1} color='#fcfdff' />
            <SpotLight
              intensity={3}
              distance={145}
              angle={0.85}
              attenuation={1}
              anglePower={0.1} 
              position={[50,30,80]}
              color="#6b0606"
              shadow={true}
              />
            <pointLight
              intensity={0.3}
              position={[20, 0, 55]}
              color="#f5dd42"
              shadow={true}
            />
            <pointLight
              intensity={0.1}
              position={[100, 100, 100]}
              color="#f1ffa8"
              shadow={true}
            />
            <pointLight
              intensity={1.4}
              position={[-100, -100, -100]}
              color="#0a0a08"
              shadow={true}
            />
              <Suspense fallback={<Loader />}>
                <UX position={[-10, 15, 45]} rotation-y={[ Math.PI /2]} />
                <Cloud scale={8} position={[5, -30, 15]} rotation-y={[ Math.PI /2]}/>
                <Cloud scale={8} position={[15, -40, -15]} rotation-y={[ Math.PI /2]}/>
                <Cloud scale={16} position={[-50, -30, 15]} rotation-y={[ Math.PI /2]}/>
                <Cloud scale={16} position={[-50, -50, -100]} rotation-y={[ Math.PI /2]}/>
                <Float floatingRange={[1, 10]} >
                  <Dragon scale={18} position={[10, -90, 60]}  rotation-y={[Math.PI/2.5]}  rotation-x={[-Math.PI/9]}/>
                </Float>
                <Castle scale={0.45}  position={[-5, -45, -40]} rotation-y={[1]} />
                <ContactShadows frames={1} rotation-x={[Math.PI / 2]} position={[0, -0.33, 0]} far={0.4} width={2} height={2} blur={4} />
              </Suspense>
            </Canvas>
        </Page>
    );
  }