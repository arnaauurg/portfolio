import React from 'react'
import Page from '../Page';
import {Presentation, blink, Text, Title} from './Components';
import {Html, GradientTexture} from '@react-three/drei';
import {Canvas} from '@react-three/fiber'

/*
  2-3 pages/
  /Who am I -> Carta de presentación + foto (compressed for deploy)
  My Skills: onlick -> Iconos 3D de mis Skills (Ak python, Java, C, Blender...)
  My Studies

*/

function Gradient (){ /* buscar otra modo de color backgrounds, tooo much memory use*/

  return(
      <mesh scale={[25,10,10]}  >
          <planeBufferGeometry  args={[16, 8, 32, 32]}  />
          <meshPhysicalMaterial>
              <GradientTexture stops={[0, 1]} colors={['#85FFBD','#fb85ff']} size={1024}  />
          </meshPhysicalMaterial>
      </mesh>
  )
}

function AboutMe() {

  return (
    <Page >
      <Canvas dpr={[1,2]} resize={1} orthographic camera={{zoom:12, position: [0,0,100], fov:45}} >
        <ambientLight />
        <Gradient attach="background"  />
        <Html fullscreen >
          <Title>
            <blink>/WHOAMI</blink>
          </Title>
            
          <Presentation>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci. Nulla facilisi etiam dignissim diam quis. Ipsum suspendisse ultrices gravida dictum fusce ut. Nibh mauris cursus mattis molestie a iaculis at. Lacus luctus accumsan tortor posuere ac ut. Eget velit aliquet sagittis id consectetur purus. Cras adipiscing enim eu turpis egestas pretium. Bibendum neque egestas congue quisque egestas. Id aliquet risus feugiat in ante metus.
            Ac felis donec et odio pellentesque diam. Odio pellentesque diam volutpat commodo sed. Eget arcu dictum varius duis. Senectus et netus et malesuada fames ac turpis egestas. Volutpat commodo sed egestas egestas. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Fermentum odio eu feugiat pretium nibh ipsum. Tincidunt praesent semper feugiat nibh sed pulvinar. Nulla aliquet enim tortor at. In nulla posuere sollicitudin aliquam. Lacus vestibulum sed arcu non. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Mattis enim ut tellus elementum sagittis vitae et leo duis. Non consectetur a erat nam at lectus. Massa id neque aliquam vestibulum morbi blandit cursus risus. Nisi quis eleifend quam adipiscing vitae proin sagittis. Dolor morbi non arcu risus.
            Vel fringilla est ullamco</Text>
          </Presentation>
        </Html>
      </Canvas>
    </Page>
  )
}

export default AboutMe;