import React, {useState} from "react";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import AuthDetails from "../AuthDetails";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router-dom"
import { auth } from "../../firebase";


export default function Main() {

    return (
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              {/* <Route path="/about" element={<About />} /> */}
            </Routes>
          </div>
          <AuthDetails/>
        </>
      )
}