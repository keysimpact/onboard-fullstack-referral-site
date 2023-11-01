import React, {useState} from "react";
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
            setEmail("")
            setPassword("")
        }). catch((error) =>{
            console.log(error)
        })

    }
    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <input className="email" type="text" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input className="password" type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type="submit"> Sign Up </button>
            </form>
        </div>
    )
}

export default SignUp;