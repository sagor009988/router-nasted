
import {  NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div >
         
           <nav  >
             <span>my Web page:</span>
             <NavLink className="header" to='/posts'>Posts</NavLink>
            <NavLink className="header" to='/users'>Users</NavLink>
            
           <a className="header"  href="/products">Products</a>
           <a href="/about">About</a>
           </nav>
        </div>
    );
};

export default Header;