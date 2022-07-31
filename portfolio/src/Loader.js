import React, { useRef, useState } from 'react';
import {useProgress, Html} from '@react-three/drei';
import styled from "styled-components";
import { useSpring, animated, config } from '@react-spring/web';
import Icon from './Navbar/Icon';


const LoadingStyles = styled.div`
  position: static;
  display: block;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  z-index: 100;
  background: rgb(166, 214, 182);
  background: linear-gradient(5deg, rgb(166, 214, 182) 0%, rgb(166, 214, 182) 100%);
`

const LoaderBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: "Aquire-Bold";
  font-size: 2vw;
  color: #001C12;
`

const Fill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`


/*  export default function App() {
  const [open, toggle] = useState(false)
  const [ref, { width }] = useMeasure()
  const props = useSpring({ width: open ? width : 0 })
const props = useSpring({ width: open ? width : 0 })

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
        <animated.div className={styles.fill} style={props} />
        <animated.div className={styles.content}>{props.width.to(x => x.toFixed(0))}</animated.div>
      </div>
    </div>
  )
} 
*/


function Loader() {
  
  const { progress } = useProgress()
  const props = useRef();
  
  return (
    <Html fullscreen={1}>
        <LoadingStyles>
          <LoaderBox>Loading {progress.toFixed(2)}%</LoaderBox>
        </LoadingStyles>
    </Html>

  )
}

export default Loader;

/*<LoopTrue />
        <Msg>Loading... {progress.toFixed(2)}%</Msg>*/ 
