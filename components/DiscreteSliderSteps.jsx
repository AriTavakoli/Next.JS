import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react'
import Draggable from 'react-draggable';


export default function DiscreteSliderSteps() {
  const [keyFrame, setKeyFrame] = useState(0);

  const [keyFrameList, setKeyFrameList] = useState([]);




  const [position, setPosition] = useState({ x: 0, y: 0 });

  function valuetext(number) {
    setKeyFrame(number);
    return `${number}`;
  }

  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };



  const handleAddKeyFrame = (currentPosition) => {

    const newKeyFrame = (<Draggable
      key={Math.random(1, 10000000)}
      axis='x'
      onDrag={(e, data) => trackPos(data)}
      bounds='parent'
    >
      <div className="box">
        <div></div>
        <div>
          x: {position.x.toFixed(0)}
        </div>
      </div>
    </Draggable>)


    setKeyFrameList([...keyFrameList, newKeyFrame])
    console.log(keyFrameList)
  }



  return (
    <div className="timelineContainer">
      <Box sx={{ width: '100%', paddingLeft: '10px', marginLeft: '0px' }}>
        <Slider
          aria-label="Small steps"
          defaultValue={0}
          getAriaValueText={valuetext}
          step={10}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </Box>



      <button onClick={handleAddKeyFrame}>button</button>
      {keyFrameList}
    </div >
  );
}