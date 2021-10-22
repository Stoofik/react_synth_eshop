import PropTypes from 'prop-types'

const Button = ({bgColor, txtColor, text, onClick}) => {
    return (
        <button className = "btn" style = {{backgroundColor: bgColor, color: txtColor}}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    bgColor: "black",
    txtColor: "white",
    text: "Click!",
    onClick: ()=>{},
}

Button.propTypes = {
    bgColor: PropTypes.string,
    txtColor: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
