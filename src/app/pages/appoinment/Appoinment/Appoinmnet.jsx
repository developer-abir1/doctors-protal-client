import React from 'react';
import Layout from '../../../layout/Layout';
import Services from '../../Home/Services/Services';
import AppoinmentHeader from '../appoinmentHeader/AppoinmentHeader';

const Appoinmnet = () => {
    return (
        <Layout title="Apponment"  bgNav={'#ffffff'} navText="black">
          <AppoinmentHeader/>
        </Layout>
         
    );
};

export default Appoinmnet;