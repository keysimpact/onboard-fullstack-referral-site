import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

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
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Site Name
        </Link>
        <ul>
          <CustomLink to="/sign-in">Sign In</CustomLink>
          <CustomLink to="/sign-up">Sign Up</CustomLink>
        </ul>
      </nav>
    )
  }
