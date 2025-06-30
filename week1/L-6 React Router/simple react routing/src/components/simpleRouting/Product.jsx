import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    const {name} = useParams();

  return (
    <div>
      the product you choose is {name}
    </div>
  )
}

export default Product
