import React, {useState} from "react";
import * as squatch from "@saasquatch/squatch-js";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Home from "./Home";
import AuthDetails from "../AuthDetails";
import Navbar from "../Navbar";
import { Route, Routes } from "react-router-dom"
import { auth } from "../../firebase";


export default function Main() {

  // window.squatchTenant = "test_afomyz9sbbao3";
  // window.squatchToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoidGVzdHVzZXIiLCJhY2NvdW50SWQiOiJ0ZXN0dXNlciIsImVtYWlsIjoidGVzdHVzZXJAZXhhbXBsZS5jb20ifX0.Twl17DllqZ9wBMCCA7NB6fQoIMiKoB7UKNC59uqRsUk"
    return (
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
          <AuthDetails/>
        </>
      )
}