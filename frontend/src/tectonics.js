import React, { useState } from "react";

function DeleteProductView() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [confirmation, setConfirmation] = useState("");

  const handleInputChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Illegal input validation
    const productIdNumber = parseInt(productId);
    if (isNaN(productIdNumber)) {
      alert("Please enter a valid product ID");
      return;
    }
  
    fetch(`http://localhost:8081/${productId}`)
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        setProduct(product);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  

  const handleDelete = () => {
    if (!confirmation) {
      alert("Please confirm deletion by typing 'DELETE'");
      return;
    }

    if (confirmation.toUpperCase() !== "DELETE") {
      alert("Please type 'DELETE' to confirm deletion");
      return;
    }

    fetch(`http://localhost:8081/deleteItem/${productId}`, {
      method: "DELETE",
    })
      .then(response => {
        
        alert("Product deleted successfully");
        setProductId("");
        setProduct(null);
        setConfirmation("");
        response.json();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoBack = () => {
    setProductId("");
    setProduct(null);
    setConfirmation("");
  };

  return (
    <div className="container mt-3">
      <h2>Delete Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productId">Enter Product ID:</label>
          <input
            type="number"
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

      {product && (
        <div className="mt-3">
          <h3>Product Details</h3>
          <img
            src={product.image}
            alt={product.title}
            style={{ objectFit: "cover", height: "200px", marginBottom: "20px" }}
          />
          <p>
            <b>Title:</b> {product.title} <br />
            <b>ID:</b> {product.id} <br />
            <b>Price:</b> ${product.price} <br />
            <b>Category:</b> {product.category} <br />
            <b>Rating:</b> {product.rating.rate}/5 <br />
            <b># Of Rates:</b> {product.rating.count} <br />
            <b>Description: </b>
            {product.description}
          </p>
          <div className="form-group mt-3">
            <label htmlFor="confirmation">
              Type 'DELETE' to confirm deletion:
            </label>
            <input
              type="text"
              className="form-control"
              id="confirmation"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
            />
          </div>
          <button className="btn btn-danger mr-2" onClick={handleDelete}>
            Delete Product
          </button>
          <button className="btn btn-secondary" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export default DeleteProductView;
