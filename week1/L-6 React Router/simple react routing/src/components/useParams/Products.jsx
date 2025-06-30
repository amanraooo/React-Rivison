import React from 'react'
import { useParams } from 'react-router-dom'
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom';
const Products = () => {
    const productList =[
        {id:1 , name : 'mobile'},
        {id:2 , name : 'laptop'},
        {id:3 , name : 'USB'},
    ]
  return (
    <div>
     <h2>Products are:</h2>
     <ul>
        {
           productList.map(product=>(
            <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                {product.name}
                </Link>
            </li>
           ))
            }
        
     </ul>
    </div>
  )
}

export default Products
