import React, { useState, useEffect } from 'react';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import './styles.css';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/products.json');  
                const data = await response.json(); 
                setProducts(data); 
            } 
            catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); 

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const deleteProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    return (
        <div className="App">
            <header>
                <img id="logo" src="logo.png" alt="Logo" />
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <AddProductForm addProduct={addProduct} /> 
                
                {products.length > 0 ? (
                    <ProductList products={products} deleteProduct={deleteProduct} /> ) : 
                      (<p>Loading products...</p> )}
            </main>

            <footer>
                <p>&copy; 2025 ProductCo</p>
            </footer>
        </div>
    );
}

export default App;
