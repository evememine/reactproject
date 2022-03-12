import React from 'react'
import classes from './LectureInRow.module.css'

const LectureInRow = (props) => {
  return (
    <div className={classes.lecture}>
        <img className={classes.img} src={props.image} alt="Lecture image cap" />
        <div className={classes.lecture__body}>
            <h4>{props.lecture}</h4>
            <h5>{props.mentor} | <span> {props.date}</span></h5>
        </div>
    </div>
  )
}

export default LectureInRow