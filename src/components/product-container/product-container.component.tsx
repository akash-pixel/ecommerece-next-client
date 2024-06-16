"use client"


import "./style.css"

interface IProps {
    products: any[]
}

function ProductContainer({ products }: IProps) {


    return (
        <div className="product-container">
            {products.map((product, index) => <ProductCard key={index} product={product} />)}
        </div>
    );
}


const ProductCard = ({ product }: any) => {
    return (
        <div className="product-card">
            <div className="image-wrapper">
                <img className="product-card-img" src={product.Image} alt={product.Name} />
            </div>
            <div className="product-detail">
                <h4 className="product-title">{product.Name}</h4>
                <p className="product-subtitle">{product.Description}</p>
                <span className="product-price">Rp {product.Price}</span>
            </div>
        </div>
    );
}

export default ProductContainer;