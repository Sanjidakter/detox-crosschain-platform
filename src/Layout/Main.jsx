import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Home from '../pages/Home/Home/Home';
import Transaction from '../pages/Home/Transactions/Transaction';
import "./Main.css";
import Collaborative from '../pages/Home/Collaborative/Collaborative';
import Token from '../pages/Home/Token/Token';
import Footer from '../Shared/Footer/Footer';
import Focus from '../pages/Home/Focus/Focus';
import WhitePaper from '../pages/Home/WhitePaer/WhitePaper';
import RoadMap from '../pages/Home/RoadMap/RoadMap';

const Main = () => {
    return (
        <div className='main'>
            <Navbar></Navbar>
            <Home></Home>
            <Transaction></Transaction>
            <Collaborative></Collaborative>
            <WhitePaper></WhitePaper>
            <Token></Token>
            <RoadMap></RoadMap>
            <Focus></Focus>
            <Footer></Footer>
        </div>
    );
};

export default Main;