import React from "react";
import {GradientTexture} from '@react-three/drei'


export default function Gradient (){

    return(
        <mesh scale={25}  >
            <planeBufferGeometry  args={[8, 8, 32, 32]} />
            <meshPhysicalMaterial>
                <GradientTexture stops={[0.3, 0.6]} colors={['#85FFBD','#FFFB7D']} size={1000}  />
            </meshPhysicalMaterial>
        </mesh>
    )
}