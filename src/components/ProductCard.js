import PropTypes from 'prop-types';
import { useState } from "react";
import { useHistory } from 'react-router';


const ProductCard = ({title, image, price, stock, showModal}) => {

    // define history to use for redirects
    let history = useHistory();
    const toDetail = () => {
        history.push("/product");
    }


    return (
        <div className="product-card">
            <div className="products-title" >
                { title }
            </div>
            <div className="products-image-container">
                <img src={ image } alt="" onClick={toDetail}/>
            </div>
            <div className="bottom-card-navigation">
                <div className="product-info">
                    <h5>Price: {price}</h5>
                    <h5>Stock: {stock ? "Yes" : "No"}</h5>
                </div>
                <div className="navigation-container">
                    <div className="buy-text-container">
                        <button onClick={showModal}>Buy</button> 
                    </div>
                    <div className="detail-text-container">
                        <button onClick={toDetail}>Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductCard.defaultProps = {
    title: "product",
    price: "1 $",
    stock: false,
}

ProductCard.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.bool,
}

export default ProductCard
