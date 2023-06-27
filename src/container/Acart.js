import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProdcutListItem from './components/ProdcutListItem'
import { modifyItem, removeItem } from '../redux/reducer/add';
import {  useNavigate } from 'react-router-dom';
export default function  Acart() {

const list =useSelector((state)=> state.cart.list);
const dispatch=useDispatch();
const navigate=useNavigate();

const incrementItem=(item)=>{
  dispatch(modifyItem({...item, count:item.count +1}));
};
const decrementItem=(item)=>{
  if(item.count===1){
    dispatch(removeItem(item));
  }
  else{
    dispatch(modifyItem({...item,count:item.count -1}));
  }
};
const removeItemfromcart =(item)=>{
  dispatch(removeItem(item));
}
  return (
    <>
    {list.length >0? ( <>{list.map((item)=> <ProdcutListItem {...item}
    key={item.id}
    incrementItem={()=>incrementItem(item)}
    decrementItem={()=>decrementItem(item)}
    removeItem={()=>removeItemfromcart(item)}
    />)}
    <button className='btn btn-dark' onClick={()=> navigate('/Cheackout')}>Cheackout</button>
    </>
  ):(
    <h3 className='no text-algin-center'>NO ITEMS IN THE CART</h3>
  )}
  </>
  )
};



