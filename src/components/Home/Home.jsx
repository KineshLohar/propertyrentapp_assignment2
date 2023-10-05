import React, { useEffect } from 'react';
import './home.css';
import PropertyCard from '../PropertyCard/PropertyCard';

const Home = ({ dataList, setCurrentPage, postsPerPage }) => {

  useEffect(()=>{
    setCurrentPage("home");
  },[])
  return (
    <div className='home'>
      {
        dataList.slice(0, postsPerPage).map((property) => {
          return (
            <PropertyCard property={property} key={property.id} />
          )
        })
      }
    </div>
  )
}

export default Home;