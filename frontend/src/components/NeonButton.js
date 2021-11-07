import PropTypes from 'prop-types'

const NeonButton = ( {text, color, onClick} ) => {
    return (
        <button className="neonBtn" style = {{ color: color }} onClick={onClick}>{ text }</button>
    )
}

NeonButton.defaultProps = {
    text: "Click me",
    color: "white",
}

NeonButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default NeonButton
