import { useState } from "react"
import { BACK, TOPIMG } from "../image"
import BottomBar from "./bottom-bar"

function Leftbar() {
    const [akardion, setAkardion] = useState(true)

    return (
        <div className="product-details">
            <h2>Кружка под сублимацию «Стандарт»</h2>
            <div className="product-arct">
                <span>Арт. 1256.60.2</span>
                <span>На складе 2 786 шт</span>
            </div>
            <select className="form-select py-2" id="floatingSelect">
                <option >Цвет</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <select className="form-select py-2" id="floatingSelect">
                <option >Вид</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <div className="filter-top" id="floatingSelect">
                <div onClick={() => (setAkardion(!akardion))} className="down-top">
                    <span>Способ нанесения</span>
                    <img src={TOPIMG} alt="TOPIMG" />
                </div>
                <div className={`${akardion ? "filter-father" : "d-none"}`}>
                    <div className="filter-child">
                        <img src={BACK} alt="" />
                        <span>Без нанесения</span>
                    </div>
                    <div className="filter-child">
                        <img src={BACK} alt="" />
                        <span>Без нанесения</span>
                    </div>
                    <div className="filter-child">
                        <img src={BACK} alt="" />
                        <span>Без нанесения</span>
                    </div>
                </div>
            </div>

            <BottomBar />

            <p>Обратите внимание, что у каждого товара есть минимальное количество для добавления в корзину.</p>



        </div>
    )
}

export default Leftbar