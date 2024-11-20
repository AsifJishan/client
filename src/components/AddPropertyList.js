import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProperty } from '../api';

function AddProperty() {
  const [property, setProperty] = useState({ name: '', location: '', price: '', type: '', size: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(property).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" name="name" value={property.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Location</label>
        <input type="text" className="form-control" name="location" value={property.location} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input type="number" className="form-control" name="price" value={property.price} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Type</label>
        <select className="form-select" name="type" value={property.type} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Size (sq ft)</label>
        <input type="number" className="form-control" name="size" value={property.size} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Add Property</button>
    </form>
  );
}

export default AddProperty;
