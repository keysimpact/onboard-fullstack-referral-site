import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }


export default function Navbar() {
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

    return (
      <>
      {authUser ? (<div>
        <nav className="nav">
      <Link to="/" className="site-title">
        Home
      </Link>
      <ul>
        <CustomLink to="/sign-in">Sign In</CustomLink>
      </ul>
    </nav>
      </div> ) : (
      <nav className="nav">
      <Link to="/" className="site-title">
        Site Name
      </Link>
      <ul>
        <CustomLink to="/sign-in">Sign In</CustomLink>
        <CustomLink to="/sign-up">Sign Up</CustomLink>
      </ul>
    </nav>
      )}

    </>
    )
  }
