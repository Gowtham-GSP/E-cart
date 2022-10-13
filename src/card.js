import React from "react";
 function Card({product,addToCart}){
    return(
        <div className='col-lg-4 border mt-12 p-10'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg" alt=""/>
          </div>
          <div className='col-lg-12 text-center'>
            <h3>{product.name}</h3>
            <h4> price Rs {product.price}</h4>
            <button onClick={() => {  
                addToCart(product)}} 
                type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
                add to cart
             </button>
          </div>
        </div>     
      </div>
    );
}

export default Card;