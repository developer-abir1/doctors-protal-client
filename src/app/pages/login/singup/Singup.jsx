import { Box, Button, Card,  Typography } from '@mui/material';
import TextField from '@mui/joy/TextField';
 
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Layout from '../../../layout/Layout';  
import useToken from '../../../hooks/useToken'; 
import Loading from '../../../shared/loding/Loading';





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

const SingUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError,] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit,   formState: { errors } } = useForm();

    const [updateProfile, updating, uError] = useUpdateProfile(auth);


   const [token ] = useToken(user || gUser) 



    const navigate = useNavigate() ;
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
 

    let singInError;


    if ( token)
    {
        navigate(from, { replace: true });
    }
    if (  loading || gLoading || updating)
    {

        return <Loading /> 

    }
    if (error || gError || uError)
    {
        singInError = <span style={{ color: "red" }}>{error.message || gError.message || uError.message}</span>
    }

    const onSubmit = async (data, e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(data.email, data.password, data.age)
        await updateProfile({ displayName: data.name, });

    };

    return (
        <Layout title="Home" navText="black" bgNav="#F0F8FF">
            <Box sx={{ display: 'flex', justifyContent: "center", my: 5, py: 5 }}>
                <Card style={{ width: 700, height: 700, textAlign: 'center' }}>

                    <Typography variant='h5' sx={{ mt: 2 }}>Create an account</Typography>



                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box width={400} sx={{ my: 3 }} >
                                {/* This is name fild start */}
                                <TextField name="name" type='name' sx={{ mb: 2 }} placeholder='Enter your name *' {...register("name", {
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



                                {singInError}

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

export default SingUp;