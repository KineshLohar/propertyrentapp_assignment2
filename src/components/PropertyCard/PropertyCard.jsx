import React, { useState } from 'react';
import './propertycard.css';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeart, faBuilding, faBed, faBath, faArrowsUpDownLeftRight} from '@fortawesome/free-solid-svg-icons';


const PropertyCard = ({property}) => {

    const [like, setLike] = useState(false);

  return (
    <div className="propertyCard" >
          <div className='cardHead'>
            <p className='salerent'>{property["saleorrent"]}</p>
            <button className='cardLike' onClick={() => setLike(!like)}>{!like ? <FontAwesomeIcon icon={faHeart}  size='lg'/> : <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} size='lg'/>}</button>
          </div>
          <img src={property['image']} alt="prop img" className='propImage'/>
            {
                property["popular"] === true 
                ?   <div className="popularTag">
                       Popular
                    </div>
                :   null
            }
          
          <div className='streetName'>
          <FontAwesomeIcon icon={faLocationDot} style={{color: "#d6cf00",}} /> {property["street"]}
          </div>

          <h3 className='propertyName'>
          {property["name"]} - {property["address"]}
          </h3>
          <div className='propertyFeatures'>
            <div><FontAwesomeIcon icon={faBuilding} />  <p>{property["beds"]} Bed</p>  </div>
            <div><FontAwesomeIcon icon={faBed} />  <p>{property["baths"]} Bath</p> </div> 
            <div><FontAwesomeIcon icon={faBath} />  <p>{property["rooms"]} room</p> </div> 
            <div><FontAwesomeIcon icon={faArrowsUpDownLeftRight} />  <p>732 sft</p></div> 
          </div>
          <hr className='hrDivider'/>
          <div className='cardFooter'>
            <p className='price'>${property["price"]} <span>/month</span></p>
            <Link className='readMoreButton' to={`/property/${property["id"]}`}>Read More</Link>
          </div>
        </div>
  )
}

export default PropertyCard