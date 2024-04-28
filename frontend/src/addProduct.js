import React, { useState } from "react";

const AddProductView = () => {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
            rate: "",
            count: ""
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "price" || name === "id") {
            setFormData({ ...formData, [name]: parseFloat(value) });
        } else if (name.includes("rating.")) {
            const [parent, child] = name.split(".");
            setFormData({
                ...formData,
                [parent]: {
                    ...formData[parent],
                    [child]: value
                }
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validateForm = () => {
        const allValues = Object.values(formData);
        const allRatingValues = Object.values(formData.rating);
        return allValues.every(value => value !== "") && allRatingValues.every(value => value !== "");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            alert("Please fill in all fields.");
            return;
        }

        const formDataCopy = { ...formData };
        formDataCopy.id = parseInt(formDataCopy.id);
        formDataCopy.price = parseFloat(formDataCopy.price);
        formDataCopy.rating.rate = parseFloat(formDataCopy.rating.rate);
        formDataCopy.rating.count = parseInt(formDataCopy.rating.count);

        fetch("http://localhost:8081/addItem", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Product added successfully:", data);
                alert("Product added!");
                setFormData({
                    id: "",
                    title: "",
                    price: "",
                    description: "",
                    category: "",
                    image: "",
                    rating: {
                        rate: "",
                        count: ""
                    }
                });
            })
            .catch((error) => {
                console.error("Error adding product:", error);
            });
    };

    const handleReset = () => {
        setFormData({
            id: "",
            title: "",
            price: "",
            description: "",
            category: "",
            image: "",
            rating: {
                rate: "",
                count: ""
            }
        });
    };

    return (
        <div className="container mt-3">
            <h2>Create a New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ratingRate">Rating Rate:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="ratingRate"
                        name="rating.rate"
                        value={formData.rating.rate}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ratingCount">Rating Count:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="ratingCount"
                        name="rating.count"
                        value={formData.rating.count}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Product
                </button>
                <button type="button" className="btn btn-secondary ml-2" onClick={handleReset}>
                    Reset Fields
                </button>
            </form>
        </div>
    );
};

export default AddProductView;
