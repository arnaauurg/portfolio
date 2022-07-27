import React from 'react'
import {motion} from "framer-motion/dist/framer-motion";
import { useLocation } from 'react-router';

/* key map? left right? useLocation??
  Hay que migrar a ReactSpring -> documentación:
function AnimatedRoutes() {
  const location = useLocation()
  const transitions = useTransition(location, { definir animacions:
    enter: location => [
      styles applying for entering elements
      +documentación React Spring
    ], 
    leave:[
      styles applying for leaving elements
    ]
    return transitions
    ((props, item) =>
    (
      <animated.div style={width/height al 100%}>
        <Route path ...>
        <Route path ...>
        <Route path ...>
      </animated.div>
    ))
  })


 */
const Page = ({children}) => {

  return (
    <motion.div 
      style={{width: `100%`, height: '100%'}}
      initial= {{width: 0}}
      animate= {{width:'100%'}}
      exit={
        {x: window.innerWidth, transition:{ duration: 0.4}}    
      }
      > 
      {children}
    </motion.div>
  )
}

export default Page;