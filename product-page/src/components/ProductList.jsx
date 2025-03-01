import React from 'react';

function ProductList({ products, deleteProduct }) {
    return (
        <div className="product-list">
            {products.map((product, index) => (
                <div key={index} className="product-item">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <button onClick={() => deleteProduct(index)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
