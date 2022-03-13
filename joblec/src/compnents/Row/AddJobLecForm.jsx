import React, {useState, useRef} from 'react'
import classes from './AddJobLecForm.module.css'
import Button from '../Commons/Button'
import _uniqueId from 'lodash/uniqueId';

const AddJobLecForm = (props) => {
    const [id] = useState(_uniqueId('prefix-'));

    const inputRef = useRef();
    // console.log(inputRef);


    // button타입은 submit, onClick이벤트 발생시, 핸들러함수 submitHandler
    // button의 content는 Add

    const submitHandler = (event) => {
      event.preventDefault();
      // console.log(event.target.value);
      // console.log(inputRef.current.value);
      const headCountValue = 1;
      const headCountValueToNumber = +headCountValue;
      // console.log(typeof amountValue); // 숫자 맞는지 확인
      // console.log(typeof amountValueToNumber);
      props.onAddToCart(headCountValueToNumber);
    }

  return (
    <form className={classes.form}>
        <Button type="submit" onClick={submitHandler}>
            신청
        </Button>
    </form>
  )
}

export default AddJobLecForm