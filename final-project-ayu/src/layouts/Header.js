import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext"


const Header =() =>{
  const [user, setUser] = useContext(UserContext)
  const handleLogout = () =>{
    setUser(null)
    localStorage.removeItem("user")
  }

  return(    
    <header>
      <img id="logo" src="/img/alifyawaw.png" width='65px' alt="Logo brand" />
      <nav>
        <ul>
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/About">About </Link> </li>
          { user && <li><Link to="/Movies">Movie List Editor </Link></li> }
          { user === null && <li><Link to="/Login">Login </Link></li> }
          { user && <li><a style={{cursor: "pointer"}} onClick={handleLogout}>Logout</a></li> }
        </ul>
      </nav>
    </header>
  )
}

export default Header