import { Box } from '@mui/system';
import React from 'react';
import { MoonLoader } from 'react-spinners';
import Layout from '../../layout/Layout';

const Looding = () => {
    return (
        <Layout navText="black" bgNav="#F0F8FF" title="Lodding Now">
             <Box sx={{ display: "flex", justifyContent: "center" }}>
                <MoonLoader
                    color="#2efaf0"
                    cssOverride={null}
                    loading
                    size={59}
                    speedMultiplier={1}
                />
            </Box>
        </Layout>
    );
};

export default Looding;