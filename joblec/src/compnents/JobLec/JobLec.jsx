import React, { useContext } from 'react'
import CartContext from '../../store/CartContext'
import AddJobLecForm from './AddJobLecForm'; 
import classes from './JobLec.module.css'

const JobLec = (props) => {
  
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
        <li className={classes.joblec}>
        <div className={classes.joblec__info}>
          <h3>{props.lecture} - <span className={classes.mentor}>{props.mentor}</span></h3>
          <div className={classes.date}>{props.date}</div>
          <div className={classes.headcount}>신청인원:{props.headcount}명</div>
        </div>
        <AddJobLecForm onAddToCart={addItemToCartHandler} />
      </li>
  )
}

export default JobLec