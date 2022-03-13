import React, { useEffect, useState } from 'react'

const SlideCard = (props) => {
  let slideIndex = 4;
  
  const slideList = props.Slide;
  const [currentSlide, setCurrentSlide] = useState(0);
  
  
    useEffect(()=>{
      let timer = setTimeout(()=>{
        if(currentSlide >= slideIndex - 1 ){
          setCurrentSlide(0);
          // console.log(currentSlide);
        }else{
          setCurrentSlide(currentSlide + 1);
          // console.log(currentSlide);
        }
       }, 2000);
    });

  const NextSlide = () => {
    if (currentSlide >= slideIndex - 1 ) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    console.log(slideList[0]);
    
    if (currentSlide === 0) {
      setCurrentSlide(slideIndex - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };



  return (
    <div>
      
      {props.Slide[currentSlide]}
      <button onClick={PrevSlide}>Prev</button>
      <button onClick={NextSlide}>Next</button>
    </div>
  )
}

export default SlideCard