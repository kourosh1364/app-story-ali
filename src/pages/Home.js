import React from 'react'
import products from '../products';
import{Col , Row} from 'react-bootstrap';
import Product from '../components/Product/Product';
import './Home.css'
import Modal from '../UI/Modal';

const Home = (props) => {
  return (
   
    <div>
       {console.log('props.home===' + props.home)} 
        
        <div className="d-flex  justify-content-center">
            <h1>محصولات</h1>
            
        </div>
        
        <Row >
            {products.map((item)=>{
                return(
                    <Col key={item._id} sm={12}  sl={6} lg={4}>
                        <Product product={item}/>
                    </Col>
                )
                
            })}
        </Row>
       
    </div>
  )
}

export default Home
