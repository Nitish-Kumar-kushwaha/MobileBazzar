import { Card, Container } from "react-bootstrap/";
import Brand from "./filter/Brand";
import Ram from "./filter/Ram";
import Price from "./filter/Price";
import { useState } from "react";

const Filter = () => {
  

  

  return (
    <>
      <div className=" p-2">
        <Container>
          <div className="p-md-3 p-sm-3 p-lg-3 ">
            <span>
              {" "}
              <strong>Filter</strong>
            </span>
          </div>
          <div className="p-md-3 p-sm-3 p-lg-3 border ">
            <p>Brand</p>
            <Brand />
          </div>
          <div className="p-md-3 p-sm-3 p-lg-3 border ">
            <p>RAM</p>
            <Ram />
          </div>
          <div className="p-2 border ">
            <p>Price</p>
            <Price />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Filter;
