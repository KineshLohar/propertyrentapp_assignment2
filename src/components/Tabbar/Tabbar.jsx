import React from 'react';
import './tabbar.css';
import Tabbutton from '../Tabbutton/Tabbutton';

const Tabbar = ({ onCurrentTabChange, currentTab , setPostsPerPage}) => {
  return (
    <div className='tabbar'>
      <Tabbutton btnTitle="New York" onCurrentTabChange={onCurrentTabChange} currentTab={currentTab} setPostsPerPage={setPostsPerPage}/>
      <Tabbutton btnTitle="Mumbai" onCurrentTabChange={onCurrentTabChange} currentTab={currentTab}  setPostsPerPage={setPostsPerPage} />
      <Tabbutton btnTitle="Paris" onCurrentTabChange={onCurrentTabChange} currentTab={currentTab}   setPostsPerPage={setPostsPerPage}/>
      <Tabbutton btnTitle="London" onCurrentTabChange={onCurrentTabChange} currentTab={currentTab}   setPostsPerPage={setPostsPerPage}/>
    </div>
  )
}

export default Tabbar;