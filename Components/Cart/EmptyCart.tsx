//@ts-check

import { Button } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";

const EmptyCart = () => {
  return (
    <>
      <div className="container">
        <div
          className=" d-flex align-items-center justify-content-center  not-found-container"
          style={{ minHeight: "60vh" }}
        >
          <BsCart3 size={400} className="text-primary" />
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="display-4 ">Your cart is Empty !!!!</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <h1 className="display-6 ">Add something to begin Shopping</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Button className="display-5 btn-warning btn-md" href="/">
            {" "}
            Continue Shopping
          </Button>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
