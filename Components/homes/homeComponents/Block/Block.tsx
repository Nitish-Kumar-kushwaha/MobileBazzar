import { Card } from "react-bootstrap";

type blockPros = {
  ImageSrc: string;
  model: string;
  brand: string;
  ram: string;
  cpu: string;
  tech: string;
  price: number;
};

import { AppContext } from "@/Components/AppContext";
import { useContext, useState } from "react";

const Block = ({
  ImageSrc,
  model,
  brand,
  ram,
  cpu,
  tech,
  price,
}: blockPros) => {
  const handleMouseOver = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.color = "#1e88e5";
  };

  const handleMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.color = "black";
  };

  // const handleMouseCardOver = (event: React.MouseEvent<HTMLDivElement>) => {
  //   event.currentTarget.className = "";
  // };

  // const handleMouseCardOut = (event: React.MouseEvent<HTMLDivElement>) => {
  //   event.currentTarget.className = "";
  // };
  const { cart, setCart } = useContext(AppContext);

  return (
    <>
      <div>
        <Card
          style={{ height: "50rem" }}
          className={"border shadow mb-5 bg-body "}
          // onMouseOver={handleMouseCardOver}
          // onMouseOut={handleMouseCardOut}
        >
          <Card.Img variant="top" src={ImageSrc} className="px-3 py-3" style={{height:"30rem"}}/>
          <Card.Body>
            <Card.Title
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <h5 className="display-6">{model}</h5>
            </Card.Title>
            <Card.Text className="p-3">
              <div className="list-group">
                <span className="">Brand: {brand}</span>
                <span className="">Price: ₹{price}</span>
                <span className="">RAM: {ram}</span>
                <span className="">CPU : {cpu}</span>
                <span className="">TECH: {tech}</span>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Block;
