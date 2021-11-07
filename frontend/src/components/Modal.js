import { useHistory } from "react-router";
import Button from "./Button";

const Modal = ({ close, appear, title, subTitle}) => {

    // state to show and hide the modal
    const showHideClassName = appear ? "modal display" : "modal display-none"

    let history = useHistory();
    const goToCart = () => {
        history.push("/cart")
    }

    return (
        <div className={showHideClassName}>
            <div className="info-panel">
                <h2>{ title }</h2>
                <h4>{ subTitle }</h4>
                <div className="button-container">
                    <Button text="Shop" bgColor="rgba(9, 255, 0, 0.8)" onClick={close}/>
                    <Button text="To cart" bgColor="rgba(255, 0, 0, 0.8)" onClick={goToCart}/>
                </div>
            </div>
        </div>
    )
}

export default Modal
