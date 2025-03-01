import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formData);
        setFormData({ name: '', description: '', price: '', image: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Product Description"
                value={formData.description}
                onChange={handleInputChange}
                required
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleInputChange}
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
}

export default AddProductForm;
