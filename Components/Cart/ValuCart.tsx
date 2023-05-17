//@ts-check

import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { brandData } from "@/Typess/Typess";

const ValuCart = () => {
  const [cartValue, setCartValue] = useState<brandData[]>([]);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      let cartData = localStorage.getItem("cart");
      let parsedCartData = cartData ? JSON.parse(cartData) : [];
      setCartValue(parsedCartData);
    }
  }, []);

  console.log(cartValue);

  // console.log(localStorage.getItem("cart"));

  //cart count functionality

  // function showCount(val : number) { }

  function getCount(val: number): number {
    const count = cartValue.filter((res) => {
      if (res.id == val) {
        return res;
      }
    });

    return count.length;
  }

  // remove items from cart

  function removeItems(val: number) {
    let tempData: brandData[] = cartValue.filter((res) => {
      if (res.id !== val) {
        return res;
      }
    });

    localStorage.setItem("cart", JSON.stringify(tempData));
  }

  function cartItems(val: brandData) {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <div className="card" style={{ width: "6rem" }}>
                <img src={val.img_url} />
              </div>
            </div>
            <div className="col-md-3">
              <div>
                {" "}
                <span>
                  {val.id} {val.brand} {val.model}
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex">
                <button className="btn btn-primary">+</button>
                <span>{getCount(val.id)}</span>
                <button className="btn btn-danger">-</button>
              </div>
            </div>
            <div className="col-md-3">
              <button
                className="btn btn-danger"
                onClick={() => removeItems(val.id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Items in cart</h1>
      <div className="row">
        <div className="col-10">
          <div>{cartValue.map(cartItems)}</div>
        </div>
        <div className="col-2">
          <div>
            <h4>Cart details </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValuCart;
