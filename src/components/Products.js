import ProductCard from './ProductCard'
import synthHoodie  from "../static/images/synth_hoodie.png"
import synthGlasses  from "../static/images/synth_glasses.png"
import synthTShirt  from "../static/images/synth_t-shirt.png"
import synthCap  from "../static/images/synth_cap.png"
import synthShoes  from "../static/images/synth_shoes.png"
import synthBag  from "../static/images/synth_bag.png"
import synthVest  from "../static/images/synth_vest.png"
import synthJacket  from "../static/images/synth_jacket.png"


const Products = () => {
    return (
        <section className="products-section">
            <ProductCard title="Synth glasses" image={synthGlasses}/>
            <ProductCard title="Synth hoodie" image={synthHoodie}/>
            <ProductCard title="Synth t-shirt" image={synthTShirt}/>
            <ProductCard title="Synth cap" image={synthCap}/>
            <ProductCard title="Synth shoes" image={synthShoes}/>
            <ProductCard title="Synth bag" image={synthBag}/>
            <ProductCard title="Synth jacket" image={synthJacket}/>
            <ProductCard title="Synth vest" image={synthVest}/>

            
        </section>
    )
}


export default Products
