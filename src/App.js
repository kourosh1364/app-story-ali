import './App.css';
import {BrowserRouter as Router , Routes, Route} from  'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Modal from './UI/Modal';
import Product from './pages/Product';

function App() {
 
  return (
    <Router  className='head-first'>
      
      <Header />
      <div class="d-xl-flex  justify-content-center">
        <main>
          <Routes>
              <Route path='/' exact element={<Home/>}   />
              <Route path='/product/:id'  element={<Product/>}   />
         </Routes>
        </main>
      </div>
       
      <Footer/>
    </Router>
  );
}
const app1=()=>{



}

export default App;
