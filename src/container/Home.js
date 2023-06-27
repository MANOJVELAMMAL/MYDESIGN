import React from 'react'
import Header from './components/Header';
import { Route,Routes } from 'react-router-dom';
import Dashbord from './Dashbord';
import Next from './Next';
import ACart from './Acart';
import Cheakout from './Cheakout'
import Buynow from './Buynow';



export default function Home() {
  return (
    <div>
     <Header/>
     <Routes>
      <Route path='/' element={<Dashbord/>}/>
      <Route path= '/Cart/:id' element= {<Next/>} />
       <Route path='/cart' element={<ACart/>}/> 
       <Route path='/Buynow' element={<Buynow/>}/> 
      <Route path='/Cheakout'>
        <Route path='' element={<Cheakout/>}/>
        <Route path='id' element={<Cheakout />}/>
   
        </Route> 

     </Routes>
    </div>
  );
}

