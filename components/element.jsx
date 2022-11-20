import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react'



export default function Element() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {

    setPosition({ x: e.clientX, y: e.clientY })
    console.log(position)
  }
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    position: 'absolute',
    top: `${position.x}px`,
    left: `${position.y}px`,
    height: '300px',
    width: '300px',
    backgroundColor: 'green',
  };

  const handleMouseClick = (e) => {

    console.log(e.clientX);
    console.log(e.clientY);
  }
  const func = (event) => console.log('move', event.type);

  //transform: `translate(${position.x}px, ${position.y}px)`,


  return (

    <>
      <div draggable='true'
        style={styles}
        onDragEnter={handleMouseDown}


        onSelect={func}
      >



      </div>

    </>





  )


}