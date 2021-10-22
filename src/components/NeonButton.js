import PropTypes from 'prop-types'

const NeonButton = ( {text, color} ) => {
    return (
        <button className="neonBtn" style = {{ color: color }} >{ text}</button>
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
