import React, { useEffect, useState } from 'react';
import './property.css';
import { useParams } from 'react-router-dom';
import PropertyCard from '../PropertyCard/PropertyCard';
import mockData from '../../assets/mockdata.json';

const Property = ({ setCurrentPage }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    setCurrentPage("property");

    // Find the post with the matching ID
    const foundPost = mockData.find((item) => item.id === parseInt(id));

    // Set the found post in the state
    if (foundPost) {
      setPost(foundPost);
    }
  }, [id, setCurrentPage]);

  return (
    <div className="propertyPage">
      {post ? <PropertyCard property={post} /> : <p>Post not found.</p>}
    </div>
  );
};


export default Property;