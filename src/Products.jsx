import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const apiUrl=import.meta.env.VITE_PRODUCTS_API//backend adress

  const [products, setProducts] = useState([]); // to Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // to Store filtered products
  const [searchQuery, setSearchQuery] = useState(''); // it is used to Store search query
  const [error, setError] = useState(null); // it is used to  Handle errors
 
  // Fetch products from the backend database1
  useEffect(() => {
    axios.get(`${apiUrl}/products`)
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); 
      })
      .catch((err) => {
        console.error('Error fetching products:', err.message);
        setError('Failed to fetch products.');
      });
  }, [apiUrl]);

  // Handle search input changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!products.length) {
    return <p>Loading...</p>;
  }

      
  return (
    <div className="container my-4">
      <h1 className="text-center">Product Catalog</h1>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img
                src={`${apiUrl}/images/${product.image}`}//local host3000 change cheythitt apiurl kodukkanam
                className="card-img-top"
                alt={product.name}
                style={{ maxHeight: '200px', objectFit: 'contain' }}
              />
              <center>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>Price:</strong> ₹{product.price}</p>
                <a href="#" className="btn btn-warning">add to cart</a>
              </div>
              </center>
            </div>
          </div>
        ))}
      </div>

      {/* No Products Found */}
      {!filteredProducts.length && (
        <p className="text-center">No products match your search.</p>
      )}
    </div>
  )
}

export default Products