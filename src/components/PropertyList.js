import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProperties, deleteProperty } from '../api';

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties().then((response) => setProperties(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteProperty(id).then(() => {
      setProperties(properties.filter((property) => property._id !== id));
    });
  };

  return (
    <div>
      <Link to="/add" className="btn btn-primary mb-3">Add Property</Link>
      <div className="row">
        {properties.map((property) => (
          <div className="col-md-4" key={property._id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{property.name}</h5>
                <p className="card-text">Location: {property.location}</p>
                <p className="card-text">Price: ${property.price}</p>
                <p className="card-text">Type: {property.type}</p>
                <p className="card-text">Size: {property.size} sq ft</p>
                <Link to={`/edit/${property._id}`} className="btn btn-warning">Edit</Link>
                <button onClick={() => handleDelete(property._id)} className="btn btn-danger ms-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
