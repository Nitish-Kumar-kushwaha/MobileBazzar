import { useState, useEffect, useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { AppContext } from "../AppContext";
import { brandData } from "@/Typess/Typess";

type infoPro = {
  Data: number;
};

const Info = ({ Data }: infoPro) => {
  const [data, setData] = useState([]);
  const ID = Data;

  console.log("inside info prof id is", ID);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Alucard17/PhoneAPI/master/phones.json"
    )
      .then((response) => response.json())
      .then((dJason) => {
        setData(dJason.mobile.slice());
      })
      .catch((error) => error);
  }, []);

  const { cart, setCart } = useContext(AppContext);

  function show() {
    data.map((res: any) => {
      console.log(res);
    });
  }

  function getRandomInt(): any {
    return Math.floor(Math.random() * 100000);
  }
  let price = getRandomInt();

  const result: brandData[] = data.filter((res: brandData) => res.id == ID);
  // console.log("id is", ID);
  // console.log("result : ", result);
  // console.log(result.map((a: brandData) => a));

  // Cart Implementation

  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  function addToCart() {
    console.log("Cart Triggred");

    // setCart({
    //   cartItems: [...cart.cartItems, result[0]],
    //   cartItemCount: cart.cartItemCount + 1,
    // });

    const cart: brandData[] = (function () {
      let cartData = localStorage.getItem("cart");
      return cartData ? JSON.parse(cartData) : [];
    })();

    console.log("data is pushed");
    cart.push(result[0]);
    localStorage.setItem("cart", JSON.stringify(cart));

    // localStorage.setItem("cart", JSON.stringify(cart.cartItems));
  }

  // console.log("cart Items", cart);
  // console.log("cart count", cart.cartItemCount);
  // console.log("storage", localStorage.getItem("cart"));
  // console.log(localStorage.getItem("cart"));
  // localStorage.clear();

  function infoCard(val: brandData) {
    return (
      <>
        <div className="border shadow p-3 mb-5 bg-body rounded">
          <Container>
            <div className="row">
              <div className="col col-md-4 col-sm-6">
                <Container>
                  <Card.Img src={val.img_url} className="p-3" variant="top" />

                  <div className="flex flex-column flex-wrap justify-content-centre p-3">
                    <div className="d-flex flex-row">
                      <Button
                        className=" btn btn-sm btn-md btn-xl btn-warning mx-2"
                        onClick={addToCart}
                      >
                        ADD TO CART
                      </Button>

                      <Button className=" btn btn-sm btn-danger mx-2">
                        BUY NOW
                      </Button>
                    </div>
                  </div>
                </Container>
              </div>

              <div className="col col-md-8 col-sm-6 ">
                <Container className="p-3">
                  <p>
                    {val.model} {val.brand} {val.network_technology}{" "}
                    {val.primary_camera} {val.internal_memory}{" "}
                    {val.display_size}
                  </p>
                  <ol>
                    <h3>₹ {getRandomInt()}</h3>
                  </ol>
                  <ol>CPU: {val.CPU}</ol>

                  <ol>Chipset: {val.Chipset}</ol>
                  <ol>OS: {val.OS}</ol>
                  <ol>RAM: {val.RAM}</ol>
                  <ol>SIM: {val.SIM}</ol>
                  <ol>battery : {val.battery}</ol>
                  <ol>External : {val.memory_card}</ol>
                  <ol>Speed : {val.network_speed}</ol>
                  <ol>Weight: {val.weight_g} g</ol>
                </Container>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }

  if (ID == undefined) {
    console.log("type is ", typeof ID);
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  } else {
    console.log(ID);
    return (
      <>
        <div className="container">{result.map(infoCard)}</div>
      </>
    );
  }

  //   show();
};

export default Info;
