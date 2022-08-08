import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin , setAdmin] = useState(false);

    const [adminLoading , setAdminLoading] =useState(true)
    console.log(admin)
    useEffect(() =>{
        const email = user?.email 
        fetch(`https://glacial-headland-03252.herokuapp.com/admin/${email}`,{
            method:"GET",
            headers:{
                authorization :`Bearer ${localStorage.getItem("accessToken")}`

            }
        })
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
            setAdminLoading(false)
        })




    },[user])



    return [
        admin,
        adminLoading
    ]
};

export default useAdmin;