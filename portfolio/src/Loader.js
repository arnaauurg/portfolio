import React from 'react';
import {useProgress, Html} from '@react-three/drei';
import styled from "styled-components";


const LoadingStyles = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  z-index: 25;
  background: #232946;
`

const Msg = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  font-family: 'Anton', sans-serif;
  font-size: 30px;
  color: #b8c1ec;
`

function Loader() {
  const { progress } = useProgress()
  return (
    <Html fullscreen={1} >
      <LoadingStyles>
        <Msg>Loading... {progress.toFixed(2)}%</Msg>
      </LoadingStyles>
    </Html>
    
  )
}

export default Loader;

