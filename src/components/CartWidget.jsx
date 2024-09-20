import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.quantity, 0);

  return (
    <Nav.Link className="Links" to="/cart" as={NavLink}>
      <div
        style={{
          width: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <img
          src="https://raw.githubusercontent.com/Frxn09/imgs/0ed374b177dcb4b9728abd65aadd8ed01dbaca70/cart-shopping-solid%20(2).svg"
          alt="CartIcon"
          style={{ width: 30, height: 23 }}
        />
        <span style={{ color: "white" }}>{total}</span>
      </div>
    </Nav.Link>
  );
};
