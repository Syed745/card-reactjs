import React, { useState } from 'react'

function Cart(props) {

  let addToCart = () => {
    alert("you selected this item" + "\n" +props.title + "\n"+"Price " + props.price + "\n"+ props.discription);
   
  
    
    
  };





  return (
    <>
      <div className="card m-3">
        <img src={props.imgSrc} alt="" />
        <h3 className=' p-2'>{props.title}</h3>
        <h3 >Price <span className='fs-5'> {props.price}</span></h3>
        <p className='p-2'>{props.discription}</p>
        <button className='btn btn-primary m-2' onClick={addToCart}>Add To Cart</button>
      </div>
    </>
  )
}

export default Cart