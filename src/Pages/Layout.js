import {React, useState, useEffect } from 'react';
import  Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ReservoirApp from './ResevoirApp';
import MainNavbar from '../NavbarMain';
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    
    <div className="App">
        <MainNavbar/>  
        
        <Outlet/>
    </div>
  );
}

export default Layout;
