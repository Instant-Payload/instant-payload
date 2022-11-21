

import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Instant Payload 
      </Link>
      <ul>
        <CustomLink to="/protein">Protein</CustomLink>
        <CustomLink to="/veggie">Vegetables</CustomLink>
        <CustomLink to="/snacks">Snacks</CustomLink>
        <CustomLink to="/cart">Cart</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
       
      </ul>
    </nav>
  )
}

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