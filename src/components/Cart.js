import { useState } from 'react'
import PropTypes from 'prop-types'
import CartItem from './CartItem'

const Cart = ({}) => {

    const [quantity, setQuantity] = useState(1);
    const [totalProductPrice, setTotalProductPrice] = useState(13);
    const [tax, setTax] = useState(3);
    const [total, setTotal] = useState(17);

    const minusQuantity = () => {
        setQuantity(quantity - 1);
        setTotalProductPrice(totalProductPrice - 13);
        setTax(tax - 3);
        setTotal(total - totalProductPrice - tax)
    }

    const plusQuantity = () => {
        setQuantity(quantity + 1);
        setTotalProductPrice(totalProductPrice + 13);
        setTax(tax + 3)
        setTotal(total + totalProductPrice + tax)
    }

    return (
        <div className="shopping-cart-container">
            <h1>Shopping cart</h1>
            <section className="cart-items-container">
                <div className="cart-item-legend">
                    <h5>Product</h5>
                    <h5>Price</h5>
                    <h5>Quantity</h5>
                    <h5>Total</h5>
                </div>
                <CartItem quantity={quantity} totalProductPrice={totalProductPrice} minusQuantity={minusQuantity} plusQuantity={plusQuantity}/>
            </section>
            <section className="count-sidebar-container">
                <h2>Order Summary</h2>
                <div className="order-summary-info">
                    <div className="subtotal">
                        <h4>Subtotal: </h4>
                        <h4>{totalProductPrice > 0 ? totalProductPrice : 0}$</h4>
                    </div>
                    <div className="tax">
                        <h4>Total tax:</h4>
                        <h4>{tax > 0 ? tax : 0}$</h4>
                    </div>
                    <div className="shipping">
                        <h4>Shipping fee:</h4>
                        <h4>1$</h4>
                    </div>
                </div>
                <div className="total-price">
                    <h3>Total price:</h3>
                    <h3>{total > 1 ? total : 1}$</h3>
                </div>
            </section>
        </div>
    )
}

Cart.propTypes = {

}

export default Cart
