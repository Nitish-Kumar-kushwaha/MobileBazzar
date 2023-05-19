import EmptyCart from "@/Components/Cart/EmptyCart";
import ValuCart from "@/Components/Cart/ValuCart";
import NavBar from "@/Components/NavBar";
import { type } from "os";
import { useEffect, useState } from "react";

const Cart = () => {
  const [hasCart, setHasCart] = useState<boolean>(false);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      if (localStorage.getItem("cartItem")) {
        setHasCart(true);
      }
    }
  });

  return (
    <>
      <NavBar />
      {hasCart ? <ValuCart /> : <EmptyCart />}
    </>
  );
};

export default Cart;
