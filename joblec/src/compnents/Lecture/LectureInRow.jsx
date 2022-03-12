import React, { useContext } from 'react'
import classes from './LectureInRow.module.css'
import AddJobLecForm from './AddJobLecForm'
import CartContext from '../../store/CartContext'

const LectureInRow = (props) => {
  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (headcount) => {

      const joblec = {
          id : props.id,
          date : props.date,
          lecture : props.lecture,
          mentor : props.mentor,
          headcount : props.headcount,
      }

      cartContext.addItem(joblec);
  }


  return (
    <div className={classes.lecture}>
        <img className={classes.img} src={props.image} alt="Lecture image cap" />
        <div className={classes.lecture__body}>
            <h4>{props.lecture}</h4>
            <h5>{props.mentor} | <span> {props.date}</span></h5>
        </div>
        <AddJobLecForm onAddToCart={addItemToCartHandler} />
    </div>
  )
}

export default LectureInRow