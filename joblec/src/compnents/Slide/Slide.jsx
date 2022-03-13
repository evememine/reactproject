import React from 'react'
import SlideLists from './SlideLists'



const Slide = (props) => {

  return (
    <SlideLists fetchUrl={props.fetchUrl} />
  )
}

export default Slide