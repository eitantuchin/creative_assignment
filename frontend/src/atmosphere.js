import React, { useState } from "react";

function UpdateProductView() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState(null);
  const [newPrice, setNewPrice] = useState("");
  const [confirmation, setConfirmation] = useState("");

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
        setProduct(product);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleUpdate = () => {
    if (!product) {
      alert("Please search for a product first");
      return;
    }

    if (!newPrice) {
      alert("Please enter a new price");
      return;
    }

    if (!confirmation) {
      alert("Please confirm update by typing 'UPDATE'");
      return;
    }

    if (confirmation.toUpperCase() !== "UPDATE") {
      alert("Please type 'UPDATE' to confirm update");
      return;
    }

  
    const parsedNewPrice = parseFloat(newPrice);

    if (isNaN(parsedNewPrice)) {
      alert("Please enter a valid price");
      return;
    }

    fetch(`http://localhost:8081/updateItem/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parsedNewPrice }),
    })
      .then((response) => {
        alert("Product updated successfully");
        setProductId("");
        setProduct(null);
        setNewPrice("");
        setConfirmation("");
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
      <h2>Update Product</h2>
      <form onSubmit={handleSubmit}>
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
              <b>Description: </b>{product.description}
           </p>
          <div className="form-group mt-3">
            <label htmlFor="newPrice">Enter New Price:</label>
            <input
              type="number"
              className="form-control"
              id="newPrice"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="confirmation">
              Type 'UPDATE' to confirm update:
            </label>
            <input
              type="text"
              className="form-control"
              id="confirmation"
              value={confirmation}
              onChange={(e) => setConfirmation(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mr-2" onClick={handleUpdate}>
            Update Product
          </button>
          <button className="btn btn-secondary" onClick={handleGoBack}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export default UpdateProductView;