import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function Home() {
   
    const [authUser, setAuthUser] = useState(null)

    useEffect (() => {
        const listen =  onAuthStateChanged(auth, (user) => {
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
    setTimeout(() => {
        // console.log(authUser.accessToken)
    })
    window.squatchTenant = "test_afomyz9sbbao3";

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