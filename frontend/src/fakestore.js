import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";


export function Store() {
  const [myItems, setMyItems] = useState([]);
  const [productId, setProductId] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/listCatalog")
      .then((response) => response.json())
      .then((myItems) => {
        setMyItems(myItems);
      });
  }, []);

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!productId) {
      alert("Please enter a product ID");
      return;
    }

    fetch(`http://localhost:8081/${productId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((product) => {
        setSelectedProduct(product);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const ShowItems = () => {
    return (
      <div className="container mt-3">
        <div className="row">
          <h2>All Products</h2>
          {myItems.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div className="card">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    <b>ID:</b> {item.id} <br />
                    <b>Price:</b> ${item.price} <br />
                    <b>Category:</b> {item.category} <br />
                    <b>Rating:</b> {item.rating.rate}/5 <br />
                    <b># Of Rates:</b> {item.rating.count} <br />
                    <b>Description: </b>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ProductDetails = () => {
    if (!selectedProduct) return null;

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h2>Product Details</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              style={{ objectFit: "cover", height: "200px", marginBottom: "20px" }}
            />
            <p>
              <b>Title:</b> {selectedProduct.title} <br />
              <b>ID:</b> {selectedProduct.id} <br />
              <b>Price:</b> ${selectedProduct.price} <br />
              <b>Category:</b> {selectedProduct.category} <br />
              <b>Rating:</b> {selectedProduct.rating.rate}/5 <br />
              <b># Of Rates:</b> {selectedProduct.rating.count} <br />
              <b>Description: </b>{selectedProduct.description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    // makes sense to have navbar in a different file and then just call Navbar
    <div>

      <form onSubmit={handleSubmit} className="container mt-3">
        <div className="form-group">
          <label htmlFor="productId">Enter Product ID:</label>
          <input
            type="text"
            className="form-control"
            id="productId"
            value={productId}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      <ProductDetails />
      <ShowItems />
    </div>
  );
}

export default Store;