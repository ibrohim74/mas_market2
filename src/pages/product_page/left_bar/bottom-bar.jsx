import React, { useState } from 'react'

function BottomBar() {
    const [counter, setCounter] = useState(1)
    return (
        <div className='product-details-2'>
            <div className="prise-sale">
                <div>
                    <span>Итог</span>
                    <del>206₽</del>
                </div>
                <div>
                    <b>147₽</b>
                    <span>за шт</span>
                </div>
            </div>

            <div className="button-container">
                <button className="cart-button">В корзину</button>

                <div className="quantity-control">
                    <button onClick={() => (setCounter(counter > 1 ? counter - 1 : 1))}>-</button>
                    <div className="quantity">{counter}</div>
                    <button onClick={() => (setCounter(counter + 1))}>+</button>
                </div>

            </div>
            <button className="constructor-button">Открыть в конструкторе</button>
        </div>
    )
}

export default BottomBar