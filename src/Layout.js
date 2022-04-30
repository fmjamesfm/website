import {React} from 'react';

import './App.css';
import Header from './Header';
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div className="app">
        <div className='app-header'>
        <Header/>  
        </div>
        <div className="app-main-body">
        <Outlet />
        </div>
    </div>
  );
}

export default Layout;
