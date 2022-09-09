import React, { Component } from "react";
import classes from "./Wishlist.module.css";

class Wishlist extends Component {

  
  render() {
    return <div className={classes.cartBox}>
      <h1 className={classes.h1}>Wishlist</h1>
      <div>
        {this.props.wish.map((item, index) => {
          return (
            <h4 className={classes.h4}>
              {item.product} {'/'} {' '}{item.price}
            </h4>
          )
        })}
      </div>
    </div>;
  }
}

export default Wishlist;
