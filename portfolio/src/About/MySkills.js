import { Physics, usePlane, useBox, RigidBody } from '@react-three/cannon'

import React, { useEffect, useState } from 'react'
import {Canvas, useThree} from '@react-three/fiber'
import LanguageC from './IconC';
import IconHTML from './IconHTML'

function Plane ({position}) {
  const [ref] = usePlane(() => ({rotation:[-Math.PI / 2, 0, 0], ...position }))
  return( 
    <mesh ref={ref}  >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhongMaterial attach="material" color="red" />
    </mesh>
  )
}


function Cube({position}){
  const [ref] = useBox(()=> ({ mass:1, ...position}))
  
  return(
    <mesh ref={ref} >
      <boxGeometry args={[2,2,2]}   />
      <meshPhongMaterial attach="material" color="hotpink" />
    </mesh>
  ) 
}

function MySkills() {
  return (
    <>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
          <LanguageC scale={0.1} position={[1,1, 1]} />
          <IconHTML scale={0.2} position={[1,-2, 2]} />
    </>
  )
}

export default MySkills