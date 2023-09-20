import React, { useState } from 'react';
import img1 from './19-1.jpg'
import img2 from './61va5Pe8DNL._SL1017_-1.jpg'
import img3 from './71xCoqZkdkL._SL1500_.jpg'
import img4 from './A-10kg_large.webp'
import img5 from './happy-dog-naturcroq-chicken-and-rice-dry-dog-food-happy-pet-491603_640x.webp'
import img6 from './Let_sBiteActivePuppyDogFood10Kg_2kgFreeinside_1024x1024.webp';
import './card.css'; 
import PopupForm from '../OrderForm';




function DogProductStore() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  
  const petProducts = [
    { id: img6, name: 'Dog Food', price: 10 },
    { id: img2, name: 'Dog Toy', price: 5 },
    { id: img3, name: 'Dog Bed', price: 20 },
    { id: img2, name: 'Dog Collar', price: 8 },
    { id: img5, name: 'Dog Shampoo', price: 12 },
    { id: img6, name: 'Dog Toy', price: 10 },
    { id: img3, name: 'Dog belt', price: 17 },
    { id: img5, name: 'Dog Shampoo', price: 12 },
    
    
  ];
  
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    const updatedTotal = total + product.price;
    setTotal(updatedTotal);
  };

  const handleCheckout = () => {
   
  };

  return (
    <div>
      <header>
        <h1>Pet Product Store</h1>
      </header>
      
      <main>
        {petProducts.map((product) => (
          <div>
          <div className="product" key={product.id}>
            <img id="img" src={product.id} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button><br/>
            
            <PopupForm/>
            </div>
          </div>
          
        ))}
      </main>
          <center>
      <aside>
        <h2>Shopping Cart</h2>
        <ul id="cart">
          {cart.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
        <p>Total: ${total.toFixed(2)}</p>
        <button id="checkout" onClick={handleCheckout}>
          Checkout
        </button>
      </aside>
      </center>
    </div>
  );
}


export default DogProductStore;