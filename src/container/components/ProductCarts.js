import React from 'react'
import "./product.css";
import { useNavigate } from 'react-router-dom';

export default function Carts(props) {
  const navigate=useNavigate();
  return (
    <div className='card m-4  p-2'  >
     <div >   <img src={props.thumbnail} height={300} width={300} alt={props.tittle} className='img' onClick={()=>navigate(`/Cart/${props.id}`) }/></div>

     <div className='items'>
      
      <h5 className='tittle p-2'>{props.tittle}</h5>
      <h6 className='price'>price:{props.price}</h6>
      <div>
        {props.stock > 3 ? <button className=' btn btn-outline-dark p-2 m-2 ' onClick={()=>navigate('Buynow')} >Buy Now</button> : <button className='btn btn-outline-danger '>Out of Stock</button>}
       <button className=' btn btn-outline-dark p-2 m-2'onClick={()=>navigate('/cart')}> AddCart</button>
      </div>
     </div>
    </div>
  
  )
}
