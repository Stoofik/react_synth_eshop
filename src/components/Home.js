import { useRef, useState } from 'react';

import ProductCard from './ProductCard';
import NeonButton from "./NeonButton";
import Modal from "./Modal";

import img from "../static/images/synth_bg.jpg";
import synthHoodie  from "../static/images/synth_hoodie.png";
import synthGlasses  from "../static/images/synth_glasses.png";
import synthTShirt  from "../static/images/synth_t-shirt.png";
import synthCap  from "../static/images/synth_cap.png";
import synthShoes  from "../static/images/synth_shoes.png";
import synthBag  from "../static/images/synth_bag.png";
import synthVest  from "../static/images/synth_vest.png";
import synthJacket  from "../static/images/synth_jacket.png";

function Home() {

    // function to scroll the user to products when main button is clicked
    const productSection = useRef();
    const scrollOnClick = () => {
        const scrollHeight = productSection.current.offsetHeight;
        window.scrollTo(0, scrollHeight);
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
        <div className="home-page">
            <Modal title="Product added to shopping cart" subTitle="Do you want to continue shopping?" appear={show} close={handleClose}/>
            <section className="hero">
                <div className="into-text">
                    <div className="intro">
                        <h1>Your synth shop</h1>
                    </div>
                    <img src={img} alt=""/>
                </div>
                <NeonButton text="SHOP NOW" onClick={scrollOnClick}/>
            </section>

            <section ref={productSection} className="products-section">
                <ProductCard title="Synth glasses" image={synthGlasses} price="20$" stock={true} showModal={handleShow}/>
                <ProductCard title="Synth hoodie" image={synthHoodie} price="20$" showModal={handleShow}/>
                <ProductCard title="Synth t-shirt" image={synthTShirt} price="20$" stock={true} showModal={handleShow}/>
                <ProductCard title="Synth cap" image={synthCap} price="15$" showModal={handleShow}/>
                <ProductCard title="Synth shoes" image={synthShoes} price="15$" stock={true} showModal={handleShow}/>
                <ProductCard title="Synth bag" image={synthBag} price="20$" stock={true} showModal={handleShow}/>
                <ProductCard title="Synth jacket" image={synthJacket} price="20$" stock={true} showModal={handleShow}/>
                <ProductCard title="Synth vest" image={synthVest} price="15$" stock={true} showModal={handleShow}/>
            </section>
        </div>
      );
}
export default Home;