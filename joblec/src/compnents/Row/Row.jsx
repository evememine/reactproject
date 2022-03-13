import React from 'react'
import LectureLists from './LectureLists';
import classes from './Row.module.css'

const Row = (props) => {
   
    return (
    <div className={classes.row}>
        <h2>{props.title}</h2>

        <div className={classes.row__lectures} >
          <LectureLists className={classes.lectures} fetchUrl={props.fetchUrl}/>
        </div>
    </div>
  )
}

export default Row