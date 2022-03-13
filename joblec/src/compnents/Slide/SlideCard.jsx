import React, { useEffect, useState } from 'react'
import classes from './SlideCard.module.css'
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
       }, 2000 ||!PrevSlide(true) || !NextSlide(true));
    });

    const NextSlide = () => {
      if (currentSlide >= slideIndex - 1 ) {
        setCurrentSlide(0);
        clearTimeout(currentSlide);
      } else {
        setCurrentSlide(currentSlide + 1);
        clearTimeout(currentSlide);
      }
    };
  
    const PrevSlide = () => {
      // console.log(slideList[0]);
      clearTimeout(currentSlide);
      if (currentSlide === 0) {
        setCurrentSlide(slideIndex - 1);
        clearTimeout(currentSlide);
      } else {
        setCurrentSlide(currentSlide - 1);
        clearTimeout(currentSlide);
      }
    };




  return (
    <div className={classes.topslide}>
      
      {props.Slide[currentSlide]}

      {/* <button onClick={PrevSlide}>Prev</button>
      <button onClick={NextSlide}>Next</button> */}
    </div>
  )
}

export default SlideCard