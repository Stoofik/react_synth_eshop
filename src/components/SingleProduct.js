import PropTypes from 'prop-types';
import image from "../static/images/synth_cap.png";
import Button from "./Button.js"

const SingleProduct = ({title, price, stock}) => {
    return (
        <div className="single-product-container">
            <div className="product-header-info-container">
                <legend>
                    <h1>{title}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quos, dolor minus 
                        suscipit explicabo enim dolores veritatis itaque nihil nesciunt ipsum blanditiis at odio delectus.</p>
                </legend>
            </div>
            <div className="product-image-container">
                <img src={image} alt="" />
            </div>
            <div className="info-product-container">
                <h2>{title}</h2>
                <div className="description">
                    <h4>Item Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus soluta libero unde magnam ducimus. 
                        Beatae tempore officiis molestiae placeat quaerat odio magnam dolore quam expedita iste, quisquam accusamus 
                        hic molestias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nulla.</p>
                    <h3>Price: {price}</h3>
                    <h3>Availible in stock: {stock.toString()}</h3>
                </div>
            </div>

            <div className="product-secondary-images-container">
                <img src={image} />
                <img src={image} />
                <img src={image} />
            </div>
            <div className="product-navigation-container">
                <div className="buttons-container">
                    <Button bgColor="rgba(9, 255, 0, 0.8)" text="Buy"/>
                    <Button bgColor="rgba(255, 0, 0, 0.7)" text="Back"/>
                </div>
            </div>
        </div>
    )
}

SingleProduct.defaultProps = {
    title: "Product name displayed",
    price: "1 $",
    stock: false,
}

SingleProduct.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.bool,
}

export default SingleProduct
