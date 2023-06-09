import React from 'react'

const Drawer = ({ onClose, items = [] }) => {
    
    return (
        <div className="overlay">
            <div className="drawer">
                <h3 className="mb-30 d-flex justify-between mb-30">
                    Корзина
                    <img onClick={onClose} className="cu-p" src="/img/plus2.svg" alt="Remove" />
                </h3>

                <div className="items">
                {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">

                <div
                style={{ backgroundImage: `url(${obj.imageUrl})`  }}
                className="cartItemImg">
              </div>
              <div className="mr-20">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="remove-Btn" src="/img/plus2.svg" alt="Remove" />
            </div>
              ))}
              
                </div>


                <div className="cartTotalBlock ">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    )
}

export default Drawer