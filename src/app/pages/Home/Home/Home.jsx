import React from 'react';
import Layout from '../../../layout/Layout';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
   
    

    const bgColor ={
        background:  "#37F7"
    }


    return (
        <Layout title="Home"  navText="black" bgNav="white" >
            <Banner/>
            <Services/>
            <AppoinmentBanner/>
            <AppoinmentBanner/>
            <AppoinmentBanner/>
            <AppoinmentBanner/>
            <AppoinmentBanner/>
            <AppoinmentBanner/>
            <AppoinmentBanner/>
            <AppoinmentBanner/>
        </Layout>
    );
};

export default Home;