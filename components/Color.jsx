import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react'




export default function Color() {

 // i need a color swatch picker here

  const [inputColor, setInputColor] = useState('#ffdb99');

  function colorReducer(colors, action) {
    switch (action.type) {
      case 'addColor': {
        console.log(colors);
        return [...colors, { color: action.color }]
      }
    }
  }


  const [colors, dispatch] = useReducer(colorReducer, []);

  function handleAddColor(color) {
    dispatch({
      type: 'addColor',
      color: color
    })
  }

  const colorElements = colors.map((color) => {
    return(
      <div style = {{backgroundColor: color.color}}>
        {color.color}
      </div>
    )
  })

  return (

    <div>

      <input onChange={(e) => { setInputColor(e.target.value) }} />
      <button onClick={() => { handleAddColor(inputColor) }}>Add Color</button>
      {colorElements}
      <div style = {{'backgroundColor' : inputColor, width: 200, height: 200 }}></div>
    </div >


  );
}