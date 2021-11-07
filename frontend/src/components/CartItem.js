import PropTypes from 'prop-types'

import productImg from "../static/images/synth_shoes.png"

const CartItem = ({quantity, totalProductPrice, minusQuantity, plusQuantity}) => {

    return (
        <div className="item-container">
            <div className="cart-item">
                <div className="product">
                    <img src={productImg} alt="" />
                    <div className="product-name">
                        <h3>Synth Shoe</h3>
                        <small>Cotton made shoe</small>
                    </div>
                </div>
                <div className="price">
                    <h3>13$</h3>
                </div>
                <div className="quantity">
                    <div className="quantity-button">
                        <div className="minus" onClick={minusQuantity}>
                             &#60;
                        </div>
                        <h3>{ quantity > 0 ? quantity : 0  }</h3>
                        <div className="plus" onClick={plusQuantity}>
                            &#62;
                        </div>
                    </div>
                </div>
                <div className="total">
                    <h3>{ totalProductPrice > 0 ? totalProductPrice : 0 }$</h3>
                </div>
            </div>
        </div>
    )
}

CartItem.propTypes = {

}

export default CartItem
