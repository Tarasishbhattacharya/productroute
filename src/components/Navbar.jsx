import { Link } from "react-router-dom"
import "./Navbar.css"

export const Navbar=()=>{
    return(
        <div className="nav_cont">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            
        </div>
    )
}