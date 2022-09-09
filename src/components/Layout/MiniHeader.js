import { NavLink } from "react-router-dom";

import classes from "./MiniHeader.module.css";

const MiniHeader = () => {
  return (
    <div className={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink className={classes.link} activeClassName={classes.active} to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink className={classes.text} activeClassName={classes.active} to="/wishlist">Wishlist</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MiniHeader;
