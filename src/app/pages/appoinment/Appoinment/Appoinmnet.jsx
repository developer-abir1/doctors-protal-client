import React from 'react';
import Layout from '../../../layout/Layout';
import AppoinmentHeader from '../appoinmentHeader/AppoinmentHeader';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appoinmnet = () => {
const [date, setDate] = React.useState(new Date());


    return (
        <Layout title="Apponment"  bgNav={'#ffffff'} navText="black">

          <AppoinmentHeader date={date} setDate={setDate}/>
          <AvailableAppoinments date={date} setDate={setDate}/>
        </Layout>
         
    );
};

export default Appoinmnet;