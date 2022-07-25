import React from "react";
import {GradientTexture} from '@react-three/drei'


export default function Gradient (){

    return(
        <mesh scale={[25,10,10]}  >
            <planeBufferGeometry  args={[16, 8, 32, 32]}  />
            <meshPhysicalMaterial>
                <GradientTexture stops={[0, 1]} colors={['#85FFBD','#FFFB7D']} size={1024}  />
            </meshPhysicalMaterial>
        </mesh>
    )
}