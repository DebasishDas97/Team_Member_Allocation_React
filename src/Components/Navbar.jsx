import { NavLink } from "react-router-dom"

export default function Navbar() {
  return(
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink className={({isActive}) => isActive ? "link active" : "link"}             to="/">Home</NavLink>
     <NavLink to="/GroupedTeamMembers" className={({isActive}) => isActive ?         "link active" : "link"}>Teams</NavLink>
      </nav>
      </div>
  )
}