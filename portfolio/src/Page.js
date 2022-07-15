import React from 'react'
import {motion} from "framer-motion/dist/framer-motion";

// key map? left right?


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