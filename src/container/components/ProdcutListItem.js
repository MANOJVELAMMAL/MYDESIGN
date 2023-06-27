import React from 'react'
import './Header.css'

export default function ProdcutListItem(props) {
  return (
    <div className=' add d-flex m-4  p-2 align-items-center justify-content-center'  >
     <div className='mt-2' >  
        <img src={props.thumbnail}
        height={250}
        width={250}
        className='adimg'
        alt={props.tittle}/> 
     </div>

     <div className='items'>
      
      <h5 className=' pt-5 tittle '>{props.tittle}</h5>
      <h6 className=' m-2 price'>price:{props.price}</h6>
      <div>
        <button className='btn btn-outline-dark m-4' onClick={props.incrementItem}>+</button> 
        <span>Quantity    {props.count}</span>
         <button className='btn btn-outline-dark m-4 ' onClick={props.decrementItem}>-</button> 
         <button className='btn btn-outline-warning m-4'onClick={props.removeItem}>Remove</button>
        
      </div>
     </div>
    </div>
  )
}
