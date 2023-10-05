import React from 'react';
import './pagination.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassStart} from '@fortawesome/free-solid-svg-icons';


const Pagination = ({postsPerPage, setPostsPerPage, dataLength}) => {

  const changePostsPerPage = () => {
    setPostsPerPage(postsPerPage + 3);
  }
  return (
    <div className='pagination'>

      {
        postsPerPage >= dataLength 
        ? "No More Posts" 
        : <button className='showMoreBtn'onClick={() => changePostsPerPage()}><FontAwesomeIcon icon={faHourglassStart} style={{color: "#ffffff",}} /> Show More</button>
      }
      
    </div>
  )
}

export default Pagination