import PropTypes from 'prop-types'

const ProductCard = ({title, image, price, stock}) => {
    return (
        <div className="product-card">
            <div className="products-title">
                { title }
            </div>
            <div className="products-image-container">
                <img src={ image } alt="" />
            </div>
            <div className="bottom-card-navigation">
                <div className="buy-text-container">
                    <button>Buy</button> 
                </div>
                <div className="detail-text-container">
                    <button><a href="/product">Detail</a></button>
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
