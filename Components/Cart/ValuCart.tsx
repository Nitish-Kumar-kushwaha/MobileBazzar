//@ts-check

import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { brandData, StoreItems } from "@/Typess/Typess";
import { Button, Card } from "react-bootstrap";

type filterCart = {
  cartItem: brandData;
  count: number;
};

const ValuCart = () => {
  const [cartValue, setCartValue] = useState<StoreItems[]>([]);
  const [changeCart, setChangeCart] = useState(0);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      let cartData = localStorage.getItem("cartItem");
      let parsedCartData = cartData ? JSON.parse(cartData) : [];
      setCartValue(parsedCartData);
    }
  }, [changeCart]);

  // useEffect(() => {
  //   localStorage.setItem("cartItem", JSON.stringify(cartValue));
  // }, [cartValue]);

  console.log(cartValue);

  //cart count functionality

  // remove items from cart

  function removeItems(val: number) {
    let tempData: StoreItems[] = cartValue.filter((res) => {
      if (res.id !== val) {
        return res;
      }
    });

    localStorage.setItem("cartItem", JSON.stringify(tempData));
    setChangeCart(Math.random());
  }

  if (!localStorage.getItem("sortedMap")) {
    localStorage.setItem("sorted", JSON.stringify([]));
  }

  //increment cart values

  function incrementValue(val: number) {
    setChangeCart(Math.random());
    const cart: StoreItems[] = (function () {
      let cartData = localStorage.getItem("cartItem");
      return cartData ? JSON.parse(cartData) : [];
    })();

    cart.find((elem) => {
      if (elem.id === val) {
        elem.quantity = elem.quantity + 1;
      }
    });

    console.log("updated value:", cart);
    localStorage.setItem("cartItem", JSON.stringify(cart));
  }

  // decrement the cart values

  function decrementValue(val: number) {
    setChangeCart(Math.random());

    const cart: StoreItems[] = (function () {
      let cartData = localStorage.getItem("cartItem");
      return cartData ? JSON.parse(cartData) : [];
    })();

    cart.find((elem) => {
      if (elem.id === val && elem.quantity > 1) {
        console.log("item clicked");
        elem.quantity = elem.quantity - 1;
        localStorage.setItem("cartItem", JSON.stringify(cart));
      } else {
        removeItems(elem.id);
      }
    });

    console.log("updated value:", cart);
  }

  function cartItems(val: StoreItems) {
    return (
      <>
        <div className=" mx-4 ">
          <Card
            style={{ width: "18rem" }}
            className="p-3  border shadow mb-5 bg-body "
          >
            <Card.Img variant="top" src={val.url} />
            <Card.Body>
              <Card.Title>{val.name}</Card.Title>
              <div className="d-flex justify-content-around">
                <Button
                  variant="primary"
                  onClick={() => incrementValue(val.id)}
                >
                  <h4>+</h4>
                </Button>
                <h4>{val.quantity} items </h4>
                <Button
                  variant="primary"
                  onClick={() => decrementValue(val.id)}
                >
                  <h4>-</h4>
                </Button>
              </div>

              <br />

              <Button variant="danger" onClick={() => removeItems(val.id)}>
                {" "}
                Remove
              </Button>
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-2">
        <h1 className="display-2">CART</h1>
        <div className=" container-fluid row">
          <div className="col-3 ">
            <div className="d-flex align-items-center">
              {cartValue.map(cartItems)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuCart;
