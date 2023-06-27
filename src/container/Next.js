import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { ProductList } from '../Data/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/reducer/add'



export default function Next() {
    const params=useParams()
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const props=ProductList.find((element)=> element.id===parseInt(params.id));

    const list=useSelector((state)=>state.cart.list)
    
    const element =list.find((item)=>item.id===props.id)
 const AddToCart=()=>{
    dispatch(addItem(props))
 }
  return (
   
      <div className=' ccard m-2'>
        <div className=' mt-2' >
          <img  src={props.thumbnail} height={250}
          width={300}
          alt={props.tittle}
          className='cimg' />
          </div>
          <div className='items'>
      
      <h5 className='tittle p-2'>{props.tittle}</h5>
      <h6 className='price'>price:{props.price}</h6>
      <div>
        {props.stock > 3 ? (
          <>
       <button className='btn btn-outline-dark '>Buy Now</button>
       {element?.count > 0 ?  (  
          <button 
          className=' m-4 btn btn-outline-warning'
           onClick={()=>navigate('/Cart')}
           >GoToCart </button>):  
      (  <button className=' m-4 btn btn-outline-warning' onClick={AddToCart}>AddToCart</button> )
      
}
</>
         ):(
         <button className='btn btn-outline-danger'>Out of Stock</button>
)}
        </div>
      </div>
      </div>
  )
}
