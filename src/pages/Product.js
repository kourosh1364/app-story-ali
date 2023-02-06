import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row , Col , Image , ListGroup , Button, ListGroupItem }  from 'react-bootstrap';
import products from '../products';

const Product = () => {
  const { id } = useParams();
   const product=  products.find((item)=>{
      return (item._id===id)
    })

    return (
    <div>
      <Link to='/' className='btn btn-light my-3 
      d-flex justify-content-center '>بازگشت به صفحه اصلی
      </Link>
      <Row className='btn  my-3 
      d-flex justify-content-center '>
        <Col  md={6}>
          <Image  src={product.image} fluid></Image>
        </Col>
        <Col  md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              {product.price}
            </ListGroupItem>
            <ListGroupItem>
              {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col  md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <Button className='btn-block' type="button">
                افزودن به سبد خرید
              </Button>
            </ListGroupItem>
          </ListGroup>
          
        </Col>
      </Row>
      
    </div>
  )
}

export default Product
