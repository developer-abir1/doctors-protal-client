import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import Layout from '../../../layout/Layout';
import Appoinmnet from '../../appoinment/Appoinment/Appoinmnet';
import Services from '../../Home/Services/Services';
import TextField from '@mui/joy/TextField'; 
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useForm } from "react-hook-form";
const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

if(user){
    console.log(user)
}
 
    const buttonBg = {
        background: "#19D3AE"
    }
    const formBtn = {
        background: "gray",
        width:  "80%", 
        cursor:"pointer",  
         borderRadius: "8px" , 
          color:'whitesmoke'
    }
    const inputFrom  ={
          width: "80%",
          border:"1px solid #e2e2e2bb", 
         borderRadius: "8px" ,
         margin:"10px"
    }
    
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example"));
    
   
    return (
        <Layout navText="black" bgNav="white" title="Login" >


            <Box sx={{ display: 'flex', justifyContent: "center" , my:5, py:5  }}>
                <Card style={{ width: 700,  height:500, textAlign: 'center' }}>

                    <Typography variant='h5' sx={{ mt: 2 }}>Login</Typography>
                   

                       <form action="">
                       <Box sx={{ my: 5, display: 'flex', justifyContent: "center", flexDirection: 'column', alignItems: 'center' }}>
                       <TextField {...register("email")}   style={inputFrom} placeholder="Enter Email" size='sm' variant="soft" />
                        <TextField {...register("name")}  style={inputFrom} placeholder="Type in here…" size='sm' variant="soft" />
                        <TextField {...register("password")} style={inputFrom} placeholder="Type in here…" size='sm' variant="soft" />
                        <TextField {...register("password")} style={inputFrom} placeholder="Type in here…" size='sm' variant="soft" />
                        <Button   style={formBtn}   type="submit" placeholder="Type in here…" size='sm' variant="contained" >Creact an Accaount</Button>
                        </Box>
                       </form>

               

                    <Box style={{ display: 'flex', justifyContent: "space-between", }}>
                        <hr style={{ width: "40%", height: "1px" }} /> <Typography>OR</Typography> <hr width={"40%"} style={{ height: "1px" }} />
                    </Box>

                    <Button onClick={()=>signInWithGoogle()} style={buttonBg} variant="contained" >Countine with google</Button>
                     


                </Card>
            </Box>



        </Layout>
    );
};

export default Login;