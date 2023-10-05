import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

import Tabbar from './components/Tabbar/Tabbar';
import Home from "./components/Home/Home.jsx";
import Property from './components/Property/Property.jsx';
import Pagination from "./components/Pagination/Pagination";
import mockData from './assets/mockdata.json';

function App() {
  const [currentTab, setCurrentTab] = useState("New York");
  const [data, setData] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState("home");

  const dataLength = data.length;

  const handleCurrentTab = (newTab) => {
    setCurrentTab(newTab);
  };

  const handlePageChange = (currPage) => {
    setCurrentPage(currPage)
  };

  const handlePostsPerPageChange =(p) =>{
    setPostsPerPage(p);
  }

  useEffect(() => {
    const filteredData = mockData.filter((item) => item.city === currentTab);
    setData(filteredData);
  }, [currentTab]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="header">
          <h1 className="heading">Featured Listed Property</h1>
          <p>Real estate can be bought, sold, leased, or rented, and can be a valuable investment opportunity. The value of real estate can be...</p>
        </div>

        <Tabbar onCurrentTabChange={handleCurrentTab} currentTab={currentTab} setPostsPerPage={handlePostsPerPageChange}/>
        <Routes>
          <Route path='/' element={<Home dataList={data} currentTab={currentTab} postsPerPage={postsPerPage} setCurrentPage={handlePageChange}/>} />
          <Route path='/property/:id' element={<Property setCurrentPage={handlePageChange}/>} />
        </Routes>

        {currentPage === "home" 
        ? <Pagination postsPerPage={postsPerPage} setPostsPerPage={setPostsPerPage} dataLength={dataLength}/>
        : null}
        
      </div>
    </BrowserRouter>
  );
}

export default App;