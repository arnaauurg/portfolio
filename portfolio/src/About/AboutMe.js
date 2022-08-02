import React, { Suspense, useRef } from 'react'
import Page from '../Page';
import * as THREE from 'three';
import {Presentation, blink, Text, Title} from './Components';
import {Html, Image, ScrollControls, Scroll, OrbitControls} from '@react-three/drei';
import {Canvas, useFrame, useThree} from '@react-three/fiber'

/*
  2-3 pages/
  /Who am I -> Carta de presentación + foto (compressed for deploy)
  My Skills: onlick -> Iconos 3D de mis Skills (Ak python, Java, C, Blender...)
  My Studies... (?)

*/

import MySkills from './MySkills';



function Scroller({scroll, children}){
  const {viewport} = useThree()
  const group = useRef()

  useFrame((state,delta)=> {
    group.current.position.y = 
      THREE.MathUtils.damp(group.current.position.y, viewport.height * scroll.current, 4, delta)
  })

  return <group ref={group}>{children}</group>
}

function AboutMe() {

  const scrollRef = useRef()
  const scroll = useRef(0)

  return (
    <Page >
    <Title>/WHOAMI</Title>
      <img src='./foto1.jpeg' />
      <Presentation>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci. Nulla facilisi etiam dignissim diam quis. Ipsum suspendisse ultrices gravida dictum fusce ut. Nibh mauris cursus mattis molestie a iaculis at. Lacus luctus accumsan tortor posuere ac ut. Eget velit aliquet sagittis id consectetur purus. Cras adipiscing enim eu turpis egestas pretium. Bibendum neque egestas congue quisque egestas. Id aliquet risus feugiat in ante metus.
        Ac felis donec et odio pellentesque diam. Odio pellentesque diam volutpat commodo sed. Eget arcu dictum varius duis. Senectus et netus et malesuada fames ac turpis egestas. Volutpat commodo sed egestas egestas. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Fermentum odio eu feugiat pretium nibh ipsum. Tincidunt praesent semper feugiat nibh sed pulvinar. Nulla aliquet enim tortor at. In nulla posuere sollicitudin aliquam. Lacus vestibulum sed arcu non. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Mattis enim ut tellus elementum sagittis vitae et leo duis. Non consectetur a erat nam at lectus. Massa id neque aliquam vestibulum morbi blandit cursus risus. Nisi quis eleifend quam adipiscing vitae proin sagittis. Dolor morbi non arcu risus.
        Vel fringilla est ullamco</Text>
      </Presentation>
    <Canvas 
      dpr={[1,2]} resize={1} gl={{alpha: false }} camera={{ position: [0, 0, 10], fov: 50 }}
      onCreated={(state) => state.events.connect(scrollRef.current)}
      raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
      >
      <ambientLight intensity={1} />
      <Suspense>
        <Scroller scroll={scroll}>
            <MySkills />
          </Scroller> 
        </Suspense>
    </Canvas>
    <div
      ref={scrollRef}
      onScroll={(e) => (scroll.current = e.target.scrollTop / (e.target.scrollHeight - e.target.clientHeight))}
      className="scroll">
      <div style={{ height: `200vh`, pointerEvents: 'none' }}></div>
    </div>
    </Page>
  )
}

export default AboutMe;