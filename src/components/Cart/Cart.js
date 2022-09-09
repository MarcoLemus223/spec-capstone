import React, { Component } from "react";
import classes from "./Cart.module.css";

class Cart extends Component {
  
  render() {
    let total = this.props.cart.reduce((acc, item) => {
      return acc + item.price
    }, 0)
  
    return (
      <div className={classes.cartBox}>
        <h1 className={classes.h1}>Cart</h1>
        <div>
          {this.props.cart.map((item, index) => {
            return (
              <h4 className={classes.h4}>
                {item.product} {"/"} {""}
                {item.price}
              </h4>
            );
          })}
          <div>
            <span className={classes.amount}>Total Amount</span>
            <span className={classes.total}>${total}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
