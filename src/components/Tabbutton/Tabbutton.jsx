import React from 'react';
import './tabbutton.css';
import { useNavigate } from 'react-router-dom';

const Tabbutton = ({ btnTitle, onCurrentTabChange, currentTab, setPostsPerPage }) => {

  const navigate = useNavigate();
  const handleTabChange = (tab) => {
    if (currentTab !== btnTitle) {
      onCurrentTabChange(tab);
      navigate("/");
      setPostsPerPage(6);
    }
  }

  return (
    <button className={currentTab === btnTitle ? 'tabBtn active' : "tabBtn"} onClick={() => { handleTabChange(btnTitle); }}>{btnTitle}</button>
  )
}

export default Tabbutton;