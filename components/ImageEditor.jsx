import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react'

import DiscreteSliderSteps from '@/com/DiscreteSliderSteps'






export default function ImageEditor(props) {



  return (
    <div >
      <DiscreteSliderSteps></DiscreteSliderSteps>



    </div>



  )


}