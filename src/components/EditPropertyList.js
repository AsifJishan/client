import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProperty, updateProperty } from '../api';

function EditProperty() {
  const { id } = useParams(); // Get the property ID from the URL
  const [property, setProperty] = useState({ name: '', location: '', price: '', type: '', size: '' });
  const navigate = useNavigate();

  // Fetch the existing property details when the component loads
  useEffect(() => {
    fetchProperty(id)
      .then((response) => setProperty(response.data))
      .catch((err) => console.error("Error fetching property:", err));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProperty(id, property)
      .then(() => {
        alert("Property updated successfully!");
        navigate('/'); // Redirect to the main property list
      })
      .catch((err) => console.error("Error updating property:", err));
  };

  return (
    <div className="container mt-4">
      <h2>Edit Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={property.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={property.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={property.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Type</label>
          <select
            className="form-select"
            name="type"
            value={property.type}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Size (sq ft)</label>
          <input
            type="number"
            className="form-control"
            name="size"
            value={property.size}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Update Property</button>
      </form>
    </div>
  );
}

export default EditProperty;
