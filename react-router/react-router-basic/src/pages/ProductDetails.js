import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
    const params = useParams()

    
  return (
    <section>
        <h2>Here's the product detail.</h2>
        <p>{params.productId}</p>
    </section>
  )
}

export default ProductDetails