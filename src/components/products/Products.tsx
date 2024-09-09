import React from 'react'
import { popularProducts } from '../../Data'
import { IpopularProdct } from '../../Data'
import Product from './product/Product'
const Products = () => {
  console.log(popularProducts)
  return (
    <div className='flex  flex-wrap gap-2'>
      
        {
          popularProducts.map((obj:IpopularProdct)=>{
            return(
              <Product obj={obj} key={obj.id} />
            )
          })
        }
    </div>
  )
}

export default Products