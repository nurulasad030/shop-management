import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from '../Body/Body';
import HeaderNav from '../HeaderNav/HeaderNav';
import SideBar from '../SideBar/SideBar';

const Main = () => {
    return (
        <div className="App grid ">
        <div>
        <SideBar></SideBar>
        </div>
  
       <div>
       <HeaderNav></HeaderNav>
  
      <Outlet></Outlet>
       </div>
      </div>
    );
};

export default Main;