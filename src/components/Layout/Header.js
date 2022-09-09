import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";
import logoImage from '../../assets/logo.png'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes['logo-image']}>
        <img src={logoImage} alt='Logo'/>
      </div>
      <h1 className={classes.h1}>Sunglasses Pros</h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/mens">Mens</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/womens">Womens</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
