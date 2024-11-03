import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { CHECKOUT } from "../../../utils/const/consts.jsx";

function BottomBar({ info }) {
    const [counter, setCounter] = useState(1);
    const totalPrice = info.price * counter;
    const navigate = useNavigate();

    function numberFormatter(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    }

    const handleAddToBasket = () => {
        const product = {
            name: info.name,
            id: info.id,
            quantity: counter,
            price: info.price,
        };

        // Get the existing basket from localStorage
        const basket = JSON.parse(localStorage.getItem('basket')) || [];

        // Check if the product already exists in the basket
        const existingProductIndex = basket.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Update quantity if product exists
            basket[existingProductIndex].quantity += counter;
        } else {
            // Add new product if it doesn't exist
            basket.push(product);
        }

        // Save the updated basket back to localStorage
        localStorage.setItem('basket', JSON.stringify(basket));
    };

    return (
        <div className='product-details-2'>
            <div className="prise-sale">
                <div>
                    <span>Итог</span>
                </div>
                <div>
                    <b>{numberFormatter(totalPrice)} So'm</b>
                    {/*<span>за шт</span>*/}
                </div>
            </div>

            <div className="button-container">
                <button className="cart-button" onClick={handleAddToBasket}>
                    В корзину
                </button>

                <div className="quantity-control">
                    <button onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}>-</button>
                    <div className="quantity">{counter}</div>
                    <button onClick={() => setCounter(counter + 1)}>+</button>
                </div>
            </div>

            <button className="constructor-button" onClick={() => {
                handleAddToBasket();
                navigate(CHECKOUT);
            }}>
                купить в один клик
            </button>
        </div>
    );
}

export default BottomBar;
