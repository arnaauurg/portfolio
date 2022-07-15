import React from 'react'
import background from "./background.jpeg";
function Background() {
  return (
    <div style={{backgroundImage:`url(${background})` }}>
    </div>
  )
}

export default Background


/*
import React from "react";
import background from "./img/placeholder.png";

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      Hello World
    </div>
  );
}

export default App;
*/