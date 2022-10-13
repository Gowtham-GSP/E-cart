import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './card';
import Cart from './cart';
import { useState } from 'react';

function App() {

  const products =[
    {
      id :1,
      name : "iphone 14 pro max ",
      price : 75000
    },
    { 
      id :2,
      name : "iphone 14 pro ",
      price : 68000
    },
    {
      id :3,
      name : "iphone 13 ",
      price : 60000
    },
    {
      id :4,
      name : "iphone 13 pro max ",
      price : 61000
    },
    {
      id :5,
      name : "iphone 14 pro",
      price : 57000
    },
    {
      id :6,
      name : "iphone 14 ",
      price : 51000
    },
  ]
const [cartItems,setCartItem] = useState([])

  let addToCart = (product) => {
  setCartItem([...cartItems,product ])
  }

  let removeFromCart = (product) =>{
   const indexVal = cartItems.findIndex(obj => obj.id == product.id)
   cartItems.splice(indexVal,1);
   setCartItem([...cartItems])
  }

  return (
    <><div className='container'>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><h3>bootstrap</h3></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </div>
    <div className='container-2'>
     <h1> Shop in style</h1>
     <h4> Buy your future products</h4>
    </div>
    <div className='container'>
     <div className='row'>
      <div className='col-mg-8'>
        <div className='row'>
          {
            products.map((product) =>{
             return <Card product={product} addToCart={addToCart}/>
            })
          }

         </div>
     </div>
    </div>

    <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
    </div>
    </>
  

  );
}

export default App;
