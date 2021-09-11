import React from 'react';
import './Product.css';
import { useHistory } from 'react-router';
import {useStateValue} from "./StateProvider"
function Product({id,title,price,rating,image}) {
    const history = useHistory();
    const [{user},dispatch] = useStateValue();
    
    const addToBasket =()=>{
        //If user is not logged in
        if(!user)
        {
            history.push('/login');
        }
        //dispatch the action
        dispatch({
            type:"ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="produt__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) =>(
                        <p>🌟</p>
                    ))}
                    
                    
                </div>
            </div>
            <img src={image} alt={title}/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
