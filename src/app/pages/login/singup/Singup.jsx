import { Box, Button, Card, CircularProgress, Typography } from '@mui/material';
import TextField from '@mui/joy/TextField';

import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Layout from '../../../layout/Layout';





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

const Singup = () => {
    const [signInWithGoogle, gUser, gLoading, gError,] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
console.log(user)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        e.preventDefault()
         
        createUserWithEmailAndPassword(data.email, data.password , data.age)

    };

    console.log(watch("example"));


    if (gUser)
    {
        console.log(gUser)
    }
    if (loading || gLoading)
    {

        return <Layout navText="black" bgNav="#F0F8FF" title="Lodding Now" >
            <Box sx={{ textAlign: "center" }}>
                <CircularProgress disableShrink />;
            </Box>
        </Layout>

    }

    return (
        <Layout title="Home" navText="black" bgNav="#F0F8FF">
            <Box sx={{ display: 'flex', justifyContent: "center", my: 5, py: 5 }}>
                <Card style={{ width: 700, height: 1000, textAlign: 'center' }}>

                    <Typography variant='h5' sx={{ mt: 2 }}>Create an account</Typography>



                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box width={400} sx={{ my: 3 }} >
                                {/* This is name fild start */}
                                <TextField name="name" type='text' sx={{ mb: 2 }} placeholder='Enter your name *' {...register("name", {
                                    required: { value: true, message: "Name is required *" },


                                })}
                                    fullWidth
                                    label="Enter you Name *"
                                    id="fullWidth"
                                />
                                {errors.name?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.name.message}</Typography>}

                                {/* This is Email fild end */}
                                {/* This is Email fild start */}
                                <TextField sx={{ mb: 2 }} placeholder='Enter your email address *' {...register("email", {
                                    required: { value: true, message: "Email address is required *" },
                                    pattern: { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: "Plase right way typeing email address" }

                                })}
                                    fullWidth
                                    label="Enter Email Address *"
                                    id="fullWidth"
                                />
                                {errors.email?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.email.message}</Typography>}
                                {errors.email?.type === "pattern" && <Typography sx={{ fontSize: "12px", color: 'red', }}>{errors.email.message}</Typography>}
                                {/* This is Email fild end */}

                                {/* This is password  fild start */}
                                <TextField placeholder='Enter Your password *'  {...register("password", {
                                    required: { value: true, message: "Password  is Must be required *" },
                                    minLength: { value: 6, message: "Password length 6 chareterss" }

                                })} sx={{ mb: 2 }} fullWidth label="Enter Password *" id="fullWidth" />
                                {errors.password?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.password.message}</Typography>}
                                {errors.password?.type === "minLength" && <Typography sx={{ fontSize: "12px", color: 'red', }}>{errors.password.message}</Typography>}
                                {/* This is password  fild end */}

                                {/* This is conform password  fild start */}
                                <TextField placeholder='Enter Your conform password *'  {...register("conform", {
                                    required: { value: true, message: "Password  is Must be required *" },
                                    minLength: { value: 6, message: "Password length 6 chareterss" }

                                })} sx={{ mb: 2 }} fullWidth label="Enter conform Password *" id="fullWidth" />
                                {errors.conform?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.conform.message}</Typography>}
                                {errors.conform?.type === "minLength" && <Typography sx={{ fontSize: "12px", color: 'red', }}>{errors.conform.message}</Typography>}
                                {/* This is conform password  fild end */}


                                {/* this is gender Feld start */}
                                <Box style={{ textAlign: "left", }}>     <label htmlFor="gender">Gender</label></Box>
                                <select id="gender" style={{ width: "100%", height: "10%", borderRadius: "8px" }} placeholder='Enter Your password *'  {...register("gender", {
                                    required: { value: true, message: "Please select your gender required *" },


                                })}   >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.gender.message}</Typography>}

                                {/* this is gender Feld start */}

                                {/* This is age fild start */}
                                <TextField placeholder='Enter Your age *'  {...register("age", {
                                    required: { value: true, message: "Enter your age required *" },


                                })} sx={{ my: 2 }} fullWidth label="Enter age *" id="fullWidth" />
                                {errors.age?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.age.message}</Typography>}
                                {/* this is age fild  end */}
                           
                                {/* This is age fild start */}
                                <TextField placeholder='Enter Your Mobile Number *'  {...register("phone", {
                                    required: { value: true, message: "Enter your Mobile phon number required *" },
                                  


                                })} sx={{ my: 2 , mb:4}} fullWidth label= " Enter Your Mobile Number*" id="fullWidth" />
                                {errors.phone?.type === "required" && <Typography variant='h6' sx={{ fontSize: "12px", color: 'red', }}>{errors.phone.message}</Typography>}
                                {/* this is age fild  end */}
                            
                            </Box>

                        </Box>
                        <Button style={formBtn} type="submit" placeholder="Type in here…" size='sm' variant="contained" >Creact an Accaount</Button>

                    </form>


                    <Typography sx={{ mt: 3 }}>Alrady have a account ? <Link to="/login" style={{ textDecorationColor: "#0692B4" }}> <Typography variant="caption" sx={{ fontSize: "16px", color: "#0692B4" }} >Plaese Login</Typography></Link> </Typography>

                    <Box style={{ display: 'flex', justifyContent: "space-between", marginTop: 40 }}>
                        <hr style={{ width: "40%", height: "1px" }} /> <Typography>OR</Typography> <hr width={"40%"} style={{ height: "1px" }} />
                    </Box>

                    <Button onClick={() => signInWithGoogle()} style={buttonBg} variant="contained" >  Countine with google</Button>



                </Card>
            </Box>
        </Layout>
    );
};

export default Singup;