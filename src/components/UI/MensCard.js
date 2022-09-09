import classes from "./MensCard.module.css";

import raybans1 from "../../assets/raybans1.png";
import gucci from "../../assets/gucci.png";
import louis from "../../assets/Louis-Vuitton.jpg";
import prada from "../../assets/prada.webp";
import burberry from "../../assets/burberrymens.webp";
import oakley from "../../assets/oakley.jpg";

const MensCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes["rayban-1"]}>
          <img src={raybans1} alt="glasses"></img>
        </div>
        <h2 className={classes.h2}>Ray-Ban Wayfarer Black Frame</h2>
        <h5 className={classes.h5}>
          Ray-Ban Wayfarers are the most recognizable frames in the history of
          shades - and a must have basic for any shades collection.
        </h5>
        <h6 className={classes.h6}>$140.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Rayban Wayfarer Black Frame",
                price: 140,
              })
            }
          >
            Add To Cart
          </button>
        </div>
        <div className={classes.wishBtn}>
          <button
            className={classes.wishBtn}
            onClick={() =>
              props.addToWish({
                product: "Rayban Wayfarer Black Frame",
                price: 140,
              })
            }
          >
            Add To Wish List
          </button>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes["gucci"]}>
          <img src={gucci} alt="glasses"></img>
        </div>
        <h2 className={classes.h2}>Gucci Gg0001s-002 Black/Green</h2>
        <h5 className={classes.h5}>
          A strong, shiny and luxurious material made from natural products. The
          detail on this product keeps the sunglasses looking unique and of such
          high quality.
        </h5>
        <h6 className={classes.h6}>$160.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Gucci Gg0001s-002 Black/Green",
                price: 160,
              })
            }
          >
            Add To Cart
          </button>
        </div>
        <div className={classes.wishBtn}>
          <button
            className={classes.wishBtn}
            onClick={() =>
              props.addToWish({
                product: "Gucci Gg0001s-002 Black/Green",
                price: 160,
              })
            }
          >
            Add To Wish List
          </button>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes["louis"]}>
          <img src={louis} alt="glasses"></img>
        </div>
        <h2 className={classes.h2}>Louis Vuitton Millionaire Edition</h2>
        <h5 className={classes.h5}>
          This pair features a deep beveled front and bright contrast color
          thanks to the deatailed gold-color Monogram pattern along the top.
        </h5>
        <h6 className={classes.h6}>$300.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Louis Vuitton Millionaire Edition",
                price: 300,
              })
            }
          >
            Add To Cart
          </button>
        </div>
        <div className={classes.wishBtn}>
          <button
            className={classes.wishBtn}
            onClick={() =>
              props.addToWish({
                product: "Louis Vuitton Millionaire Edition",
                price: 300,
              })
            }
          >
            Add To Wish List
          </button>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes["prada"]}>
          <img src={prada} alt="glasses"></img>
        </div>
        <h2 className={classes.h2}>Prada O1OS Sunglasses 1AB3M1 Black</h2>
        <h5 className={classes.h5}>
          The 010S features the iconic Prada logo inlaid at each temple. All
          sunglasses feature impact resistant Polycarbonate lenses.
        </h5>
        <h6 className={classes.h6}>$110.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Prada 010S Sunglasses 1AB3M1 Black",
                price: 110,
              })
            }
          >
            Add To Cart
          </button>
        </div>
        <div className={classes.wishBtn}>
          <button
            className={classes.wishBtn}
            onClick={() =>
              props.addToWish({
                product: "Prada 010S Sunglasses 1AB3M1 Black",
                price: 110,
              })
            }
          >
            Add To Wish List
          </button>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes["burberry"]}>
          <img src={burberry} alt="glasses"></img>
        </div>
        <h2 className={classes.h2}>Burberry Oliver 3125</h2>
        <h5 className={classes.h5}>
          Classic pilot metal frame mixed with injected rim. This frame features
          unique Burberry logo etched on the brow bar and enamelled icon stripe
          tmeple branding.
        </h5>
        <h6 className={classes.h6}>$220.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Burberry Oliver 3125",
                price: 220,
              })
            }
          >
            Add To Cart
          </button>
        </div>
        <div className={classes.wishBtn}>
          <button
            className={classes.wishBtn}
            onClick={() =>
              props.addToWish({
                product: "Burberry Oliver 3125",
                price: 220,
              })
            }
          >
            Add To Wish List
          </button>
        </div>
      </div>

      <div className={classes.card}>
        <div className={classes["oakley"]}>
          <img src={oakley} alt="glasses"></img>
        </div>
        <h2 className={classes.h2}>Oakley Flak 2.0 Blue</h2>
        <h5 className={classes.h5}>
          Rendered with icon accents that carry the symbolism of that line,
          these Blue Black frames honor those wo protect and serve.
        </h5>
        <h6 className={classes.h6}>$130.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Oakley Flak 2.0 Blue",
                price: 130,
              })
            }
          >
            Add To Cart
          </button>
        </div>
        <div className={classes.wishBtn}>
          <button
            className={classes.wishBtn}
            onClick={() =>
              props.addToWish({
                product: "Oakley Flak 2.0 Blue",
                price: 130,
              })
            }
          >
            Add To Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default MensCard;
