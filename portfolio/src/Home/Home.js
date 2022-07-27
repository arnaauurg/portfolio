import React from 'react';
import {ScrollControls, Scroll, View} from '@react-three/drei';
import { Suspense, useState} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'

import Page from '../Page';
import Scene from './Scene';
import Part2 from './Part2.Js';


export default function Home (){

    return(
        <Page>
            <Canvas>
            </Canvas>
        </Page>
    )
}