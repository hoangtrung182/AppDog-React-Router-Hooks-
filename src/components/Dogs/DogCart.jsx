import React, { useState, useContext } from 'react'
import './dogs.css';
import { CartContext } from "../../Context/CartContext";

const DogCart = (props) => {
    const { id, name, breed, desc, price, imageUrl} = props;
    const [isAdded, setAdded] = useState(false);
    const {addToCart, setTotal} = useContext(CartContext);


    const handleClick = () => {
        setAdded(true);
        const newItem = {
            name, 
            price,
            imageUrl,
        };
        addToCart((item) => [...item,newItem])
        setTotal((total) => (total += Number(price)));
    }
  return (
    <section className="dogs">
        <div className="dogs-info" >
            <p>{name}</p>
            <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
            <img  className="dog-img" src={imageUrl} alt={`picture of ${name}`} />
        </div>
        <div className="dogs-desc">{desc}</div>
        <div className="dogs-price">{price} $</div>

        {isAdded && <button className="dogs-btn" disabled onClick={handleClick}>ADDED</button>}
        {!isAdded && <button className="dogs-btn" onClick={handleClick}>ADD TO CART</button>}
    </section>
  )
}

export default DogCart