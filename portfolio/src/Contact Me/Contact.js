import React from 'react'
import Page from '../Page';

import {Canvas} from '@react-three/fiber'
import {Html,GradientTexture} from '@react-three/drei';
/*
  1 pages/
  Whould you like to hire me?
    LinkedIn
    Twitter
    Instagram
    Telegram
    Mail/Gmail
  Iconos 3d de Redes sociales 
*/

function Gradient (){

  return(
      <mesh scale={[25,10,10]}  >
          <planeBufferGeometry  args={[16, 8, 32, 32]}  />
          <meshPhysicalMaterial>
              <GradientTexture stops={[0, 1]} colors={['#85FFBD','#ff8589']} size={1024}  />
          </meshPhysicalMaterial>
      </mesh>
  )
}


function Contact() {
  return (
    <Page>
      <Canvas>
        <Html>
          LinkedIn
          Twitter
          Instagram
          Telegram
          Mail/Gmail
        </Html>
      </Canvas>
    </Page>
  )
}

export default Contact;