import React from 'react';
import Layout from '../../../layout/Layout';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';


const Home = () => {
   


   

    return (
        <Layout title="Home"  navText="black" bgNav="#F0F8FF" >
            <Banner/>
            <Services/>
            <AppoinmentBanner/>
           
        </Layout>
    );
};

export default Home;