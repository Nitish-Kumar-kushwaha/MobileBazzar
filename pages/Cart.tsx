import EmptyCart from "@/Components/Cart/EmptyCart";
import ValuCart from "@/Components/Cart/ValuCart";
import NavBar from "@/Components/NavBar";
import { type } from "os";
import { useEffect, useState } from "react";
import { StoreItems } from "@/Typess/Typess";

const Cart = () => {
  const [hasCart, setHasCart] = useState<boolean>(false);
  const [value, setValue] = useState<StoreItems[]>([]);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      let cartData = localStorage.getItem("cartItem");
      let parsedCartData: StoreItems[] = cartData ? JSON.parse(cartData) : [];
      setValue(parsedCartData);

      setHasCart(parsedCartData.length > 0);
    }
  }, [hasCart]);

  return (
    <>
      <NavBar />
      {hasCart ? <ValuCart /> : <EmptyCart />}
    </>
  );
};

export default Cart;
