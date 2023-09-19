import React from 'react';
import Navbar from "../../components/molecules/Navbar";
import Banner from '../../components/molecules/Banner';
import MainCard from '../../components/molecules/MainCard';
import AboutLink from '../../components/molecules/AboutLink';
import Footer from '../../components/molecules/Footer';
import Card from '../../components/molecules/Card';
import TextImg from '../../components/molecules/TextImg';    
import Alert from '../../components/molecules/RedisterAlert';
import './index.css'


const Home = () => {
    return (
        <center>
            <div class="body">
           
            <Banner/>
            <Navbar/>
            <Alert/>
            <Card/>
            <TextImg/>
            <MainCard/>
            <Footer/>
            <AboutLink/>
            
        </div>
   </center> );
}

export default Home;






