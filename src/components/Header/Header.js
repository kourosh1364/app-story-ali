import React from 'react';
import './Header.css';
import{Container , Nav, Navbar, } from 'react-bootstrap';
import Modal from '../../UI/Modal';
import Home from '../../pages/Home';
import { propTypes } from 'react-bootstrap/esm/Image';
import {LinkContainer} from  'react-router-bootstrap';


function Header(props) {
  return (
    
    <header>
     
     <div className="pb-1">
     <Navbar  className='nav-bg'>
      
        <Container>
          <LinkContainer to='/'>
              <Navbar.Brand >فروشگاه لباس</Navbar.Brand>
          </LinkContainer>

          <Nav  >
          <LinkContainer to='/cart'>
            <Nav.Link >cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to='/account'>
            <Nav.Link >account</Nav.Link>
            </LinkContainer>
            <Nav.Link href='#'></Nav.Link>
            <Nav.Link href='#'></Nav.Link>
            <Nav.Link href='#'></Nav.Link>
            
          </Nav>
        </Container>
     </Navbar>
     </div>
     
     <div className="d-flex  justify-content-center" >
    
      <nav className='align-items-center'>
      <ul>
		<li><a href="#">زنانه</a>
    <ul>
				<li><a href="#">کیف و کفش</a></li>
				<li><a href="#">کت و شلوار</a></li>
			</ul>
    </li>

		<li><a href="#">مردانه</a>
			<ul>
				<li><a href="#">کیف و کفش</a></li>
				<li><a href="#">کت و شلوار</a></li>
				<li><a href="#">اسپرت</a>
					<ul>
						<li><a href="#">HTML</a></li>
						<li><a href="#">CSS</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li><a href="#">بچه گانه</a>
			<ul>
				<li><a href="#">کیف و کفش</a></li>
				<li><a href="#">کت و شلوار</a></li>
			</ul>
		</li>
		<li><a href="#">حراجی</a></li>
	</ul>


      </nav>



     
     </div>
    
     
     


    </header>
  )
}
const butt_menu=()=>{
  return(<div>
   
  </div>)
}

export default Header
