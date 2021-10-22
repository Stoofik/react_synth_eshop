import NeonButton from "./NeonButton"
import img from "../static/images/synth_bg.jpg"

const Hero = () => {
    return (
        <section className="hero">
            <div className="into-text">
                <img src={img} alt=""/>
            </div>
            <NeonButton text="TRAVEL NOW"/>
        </section>
    )
}

export default Hero

