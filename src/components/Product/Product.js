import React from 'react'

import {Card}from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Product = ({product}) => {
  return (
    
    <Card  className='my-3 p-2 rounded'>
      
        <Link to={`/product/${product._id}`}>
            <Card.Img  class="img-fluid w-80"src={product.image} variant='top' />
        </Link>
        <Card.Body class="text-center">
          <Link   class='text-decoration-none'  to={`/product/${product._id}`}>
            <Card.Title as="div">{product.name}</Card.Title>
          </Link>
        </Card.Body>
        <Card.Text as="h3" class="text-center">ریال {product.price}</Card.Text>

    </Card>
  )
}

export default Product
