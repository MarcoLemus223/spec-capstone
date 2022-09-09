import classes from "./WomensCard.module.css";

import rayban from "../../assets/womensray.jpg";
import gucci from "../../assets/womensgucci.jpg";
import louis from "../../assets/cateye.jpg";
import prada from "../../assets/womensprada.jpg";
import burberry from "../../assets/womensburberry.jpg";
import oakley from "../../assets/womensoakley.png";

const WomensCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes["rayban"]}>
          <img src={rayban} alt="glasses"></img>
        </div>
        <h2 className={classes.h2}>RayBan Square Classic Gold, Brown Lenses</h2>
        <h5 className={classes.h5}>
          The return of a 70s look from the vault, these oversize square metal
          frames know how to turn heads while fitting comfortably and
          confidently.
        </h5>
        <h6 className={classes.h6}>$130.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "RayBan Square Classic Gold, Brown Lenses",
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
                product: "RayBan Square Classic Gold, Brown Lenses",
                price: 130,
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
        <h2 className={classes.h2}>
          Gucci GG0796S 002 Black Red Gradient Lens
        </h2>
        <h5 className={classes.h5}>
          Recognised worldwide for its double G logo, the Gucci brand is
          synonymous with bold fashion design and luxury.
        </h5>
        <h6 className={classes.h6}>$170.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Gucci GG0796S 002 Black and Red Gradient Lens",
                price: 170,
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
                product: "Gucci GG0796S 002 Black and Red Gradient Lens",
                price: 170,
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
        <h2 className={classes.h2}>Louis Vuitton Casino Cat Eye</h2>
        <h5 className={classes.h5}>
          Cat Eye Sunglasses combine oversized cat-eye lenses with a delicate,
          thin frame for bold effect.
        </h5>
        <h6 className={classes.h6}>$250.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Louis Vuitton Casino Cat Eye",
                price: 250,
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
                product: "Louis Vuitton Casino Cat Eye",
                price: 250,
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
        <h2 className={classes.h2}>Prada Swing Pink Frame 17OS/ABOA7</h2>
        <h5 className={classes.h5}>
          Prada 170S Swing are made with the finest materials and superior
          craftsmanship.
        </h5>
        <h6 className={classes.h6}>$160.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Prada Swing Pink Frame 170S/ABOA7",
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
                product: "Prada Swing Pink Frame 170S/ABOA7",
                price: 160,
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
        <h2 className={classes.h2}>
          Burberry BE4344 Daisy Square-Frame Acetate
        </h2>
        <h5 className={classes.h5}>
          Oversized statement frame with pointed edges and exaggerated acetate
          rim. Great styling piece to add to any outfit.
        </h5>
        <h6 className={classes.h6}>$150.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Burberry BE4344 Daisy Square-Frame Acetate",
                price: 150,
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
                product: "Burberry BE4344 Daisy Square-Frame Acetate",
                price: 150,
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
        <h2 className={classes.h2}>Oakley Changeover 002035-03</h2>
        <h5 className={classes.h5}>
          Crafted with a durable acetate front and C5 stems, Changeover shows
          off both materials beautifully with an open design at the hinge.
        </h5>
        <h6 className={classes.h6}>$120.00</h6>
        <div className={classes.cartBtn}>
          <button
            className={classes.cartBtn}
            onClick={() =>
              props.addToCart({
                product: "Oakley Changeover 002035-03",
                price: 120,
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
                product: "Oakley Changeover 002035-03",
                price: 120,
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

export default WomensCard;
