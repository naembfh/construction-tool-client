import { useEffect, useState } from "react"

const useToken=(user,gUser)=>{
   
    const [token,setToken]=useState('');
    useEffect(()=>{
        
const email=user?.user?.email;

const gEmail=gUser?.user?.email;

// const displayName=user?.user?.displayName;

const currentUser={email};
const gCurrentUser={gEmail};


if(email ||gEmail){
fetch(`https://polar-shelf-77839.herokuapp.com/user/${email ||gEmail}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
body:JSON.stringify(currentUser ||gCurrentUser)
})
.then(res=>res.json())
.then(data=>{
    // console.log(data.token)
    const accessToken=data.token;
    localStorage.setItem("accessToken",accessToken)
    setToken(accessToken)
})
}
    },[user,gUser])
    return[token,setToken]
}
export default useToken;