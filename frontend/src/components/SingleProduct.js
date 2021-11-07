import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Button from "./Button.js";
import Modal from "./Modal";
import image from "../../static/frontend/images/synth_cap.png";
import image_2 from "../../static/frontend/images/synth_vest.png";
import image_3 from "../../static/frontend/images/synth_glasses.png";


const SingleProduct = ({title, price, inStock}) => {
    

    // function to redirect back to home page
    let history = useHistory();
    const goHome = () => {
        history.push("/");
    }

    // function to enlarge image on click
    const largeImage = useRef();
    const displayClickedImg = (img) => {
        let imgSrc = (img.target.attributes[0].value);
        largeImage.current.src = imgSrc
    }

    // logic to show and hide the modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <div className="single-product-container">
            <Modal title="Product added to shopping cart" subTitle="Do you want to continue shopping?" appear={show} close={handleClose}/>
            <div className="product-header-info-container">
                <legend>
                    <h1>{title}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum quos, dolor minus 
                        suscipit explicabo enim dolores veritatis itaque nihil nesciunt ipsum blanditiis at odio delectus.</p>
                </legend>
            </div>
            <div className="product-image-container">
                <img ref={largeImage} src={image} alt="" />
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
                    <h3>Availible in stock: {inStock ? "Yes" : "No"}</h3>
                </div>
            </div>

            <div className="product-secondary-images-container">
                <img src={image} alt="" onClick={displayClickedImg}/>
                <img src={image_2} alt="" onClick={displayClickedImg}/>
                <img src={image_3} alt="" onClick={displayClickedImg}/>
            </div>
            <div className="product-navigation-container">
                <div className="buttons-container">
                   <Button bgColor="rgba(9, 255, 0, 0.8)" text="Buy" onClick={handleShow}/>
                   <Button bgColor="rgba(255, 0, 0, 0.8)" text="Back" onClick={goHome}/>
                </div>
            </div>
        </div>
    )
}

SingleProduct.defaultProps = {
    title: "Product name displayed",
    price: "1 $",
    inStock: false,
}

SingleProduct.propTypes = {
    title: PropTypes.string,
    price: PropTypes.string,
    inStock: PropTypes.bool,
}

export default SingleProduct
