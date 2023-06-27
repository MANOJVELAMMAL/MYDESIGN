
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProdcutListItem from './components/ProdcutListItem'
import { modifyItem, removeItem } from '../redux/reducer/add';
import {  useNavigate, useParams } from 'react-router-dom';
import { ProductList } from '../Data/ProductList';
export default function  Cheakout() {

const params=useParams();
const list =useSelector((state)=> state.cart.list);
const [state]= useState(params.id ? [{...ProductList.find((element) => element.id === parseInt(params.id)),count:1}]
 : list
 );
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
    {state.length >0? ( <>{state.map((item)=> <ProdcutListItem {...item}
    key={item.id}
    incrementItem={()=>incrementItem(item)} 
    decrementItem={()=>decrementItem(item)}
    removeItem={()=>removeItemfromcart(item)}
    />)}
    <button className='btn btn-dark' onClick={()=> navigate('/success')}>ORDER</button>
    </>
  ):(
    <h3 className='no text-algin-center'>NO ITEMS IN THE CHEAKOUT </h3>
  )}
  </>
  )
};



