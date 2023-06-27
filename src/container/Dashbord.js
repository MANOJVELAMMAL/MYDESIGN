import React from 'react'
import Carts from './components/ProductCarts'

import { ProductList } from '../Data/ProductList'

export default function Dashbord() {
  return (
    <div className=' items d-flex flex-wrap justify-content-center p-5 m-2'>
        {ProductList.map((Product)=><Carts {...Product} key={Product.id}/>)}
    </div>
  )
}
