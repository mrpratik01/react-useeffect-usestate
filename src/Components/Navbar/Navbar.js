import './navbar.css'
// import { Link } from "react-router-dom"; 

function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <p>Hey<span>Bikal</span></p>
            </div>
            <div className='bars'>  
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <li>About Us</li>
            </ul>
            </div>


        </nav>
    );
}

export default Navbar;