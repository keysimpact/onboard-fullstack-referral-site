import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function Home() {

    window.squatchToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoidGVzdHVzZXIiLCJhY2NvdW50SWQiOiJ0ZXN0dXNlciIsImVtYWlsIjoidGVzdHVzZXJAZXhhbXBsZS5jb20ifX0.Twl17DllqZ9wBMCCA7NB6fQoIMiKoB7UKNC59uqRsUk"

    const [authUser, setAuthUser] = useState(null)

    useEffect (() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
  
        return () => {
            listen();
        }
    }, []);

    console.log(authUser)

  return (
    <>
    {authUser ? (
        <div>
       <h1> Welcome to the store {authUser.email} </h1>
       <squatch-embed widget="p/onboarding-referral-program/w/referrerWidget"><div>Loading...</div></squatch-embed>
      </div>
    ) : (
        <div>
       <h1> Welcome to the store </h1> 
      </div>
    )}

    </>

  );
}