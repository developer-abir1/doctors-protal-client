import { Box, Button, Card, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Layout from '../../../layout/Layout';
import TextField from '@mui/joy/TextField';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ClimbingBoxLoader, MoonLoader } from 'react-spinners';
import Looding from '../../../shared/lodding/Looding';


const buttonBg = {
    background: "white",
    width: "80%",
    color: "black",
    marginTop: 40
}
const formBtn = {
    background: "gray",
    width: "80%",
    cursor: "pointer",
    borderRadius: "8px",
    color: 'whitesmoke'
}

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError,] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const { register, handleSubmit,  formState: { errors } } = useForm();




     const navigate = useNavigate() ;
     const location = useLocation()
     let from = location.state?.from?.pathname || "/";




    const onSubmit = (data, e) => {
        e.preventDefault()
        signInWithEmailAndPassword(data.email, data.password);
       
  
    };


  useEffect(() => {
    
   if(user || gUser){
    navigate(from, { replace: true });
   } 

  }, [user, gUser , from , navigate])


    if (loading || gLoading)
    {

        return  <Looding/>

    }


    let signInError;

    if (error || gError)
    {
        signInError = <p style={{ color: "red" }} > <small>{error?.message || gError?.message}</small></p>
    }

    return (
        <Layout navText="black" bgNav="#F0F8FF" title="Login" >


            <Box sx={{ display: 'flex', justifyContent: "center", my: 5, py: 5 }}>
                <Card style={{ width: 700, height: 700, textAlign: 'center' }}>

                    <Typography variant='h5' sx={{ mt: 2 }}>Login </Typography>



                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box width={400} sx={{ my: 3 }} >
                                <TextField sx={{ mb: 2 }} placeholder='Enter your email address ' {...register("email", {
                                    required: { value: true, message: "Email address is required *" },
                                    pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: "Plase right way typeing email address" }

                                })}
                                    fullWidth

                                    label="Enter Email Address "
                                    id="fullWidth"
                                />
                                {errors.email?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.email.message}</Typography>}
                                {errors.email?.type === "pattern" && <Typography sx={{ fontSize: "12px", color: 'red', }}>{errors.email.message}</Typography>}

                                <TextField placeholder='Enter Your password *'  {...register("password", {
                                    required: { value: true, message: "Password  is Must be required *" },
                                    minLength: { value: 6, message: "Password length 6 chareterss" }

                                })} sx={{ mb: 2 }} fullWidth label="Enter Password " id="fullWidth" />
                                {errors.password?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.password.message}</Typography>}
                                {errors.password?.type === "minLength" && <Typography sx={{ fontSize: "12px", color: 'red', }}>{errors.password.message}</Typography>}

                            </Box>

                        </Box>
                        <Typography variant="h6" sx={{ textAlign: "left", my: 3, px: 8, color: 'blue', fontWeight: 400, fontSize: 18 }}>Forget password? </Typography>
                        <Button style={formBtn} type="submit" placeholder="Type in here…" size='sm' variant="contained" >Login</Button>
                        {signInError}

                    </form>


                    <Typography sx={{ mt: 3 }}>New to Doctor portal ? <Link to="/singup" style={{ textDecorationColor: "#0692B4" }}> <Typography variant="caption" sx={{ fontSize: "16px", color: "#0692B4" }} >Creact an account</Typography></Link> </Typography>

                    <Box style={{ display: 'flex', justifyContent: "space-between", marginTop: 40 }}>
                        <hr style={{ width: "40%", height: "1px" }} /> <Typography>OR</Typography> <hr width={"40%"} style={{ height: "1px" }} />
                    </Box>

                    <Button onClick={() => signInWithGoogle()} style={buttonBg} variant="contained" >  Countine with google</Button>



                </Card>
            </Box>



        </Layout>
    );
};

export default Login;