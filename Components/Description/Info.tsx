import { useState, useEffect, useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { AppContext } from "../AppContext";
import { brandData, StoreItems } from "@/Typess/Typess";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  // Cart Implementation

  if (!localStorage.getItem("cartItem")) {
    localStorage.setItem("cartItem", JSON.stringify([]));
  }

  // Toast

  const notify = () => {
    toast.success("Item Added to cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "#ffb300",
        color: "black",
      },
      theme: "colored",
    });
  };

  function addToCart(val: brandData, priceVal: number) {
    const cart: StoreItems[] = (function () {
      let cartData = localStorage.getItem("cartItem");
      return cartData ? JSON.parse(cartData) : [];
    })();

    if (cart.length === 0) {
      const res: StoreItems = {
        id: val.id,
        name: val.brand + val.model,
        price: priceVal,
        url: val.img_url,
        quantity: 1,
      };
      cart.push(res);
    } else {
      const res = cart.find((elem) => {
        return elem.id === val.id;
      });

      if (res === undefined) {
        const res: StoreItems = {
          id: val.id,
          name: val.brand + " " + val.model,
          price: priceVal,
          url: val.img_url,
          quantity: 1,
        };
        cart.push(res);
      } else {
        cart.find((elem) => {
          if (elem.id === val.id) {
            elem.quantity = elem.quantity + 1;
          }
        });
      }
    }

    console.log("cart items : ", cart);

    localStorage.setItem("cartItem", JSON.stringify(cart));

    console.log("cart items : ", localStorage.getItem("cartItem"));

    notify();
  }

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
                        className=" btn-warning mx-2"
                        onClick={() => addToCart(val, 100000)}
                      >
                        ADD TO CART
                      </Button>

                      <Button className="btn-danger mx-2">
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
        <ToastContainer />
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
