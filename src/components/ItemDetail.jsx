import { Container } from "react-bootstrap";
import { ItemCount } from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);

  const add = (quantity) => {
    addItem(item, quantity);
  };
  return (
    <div>
      <Container className="mt-4 details">
        <h1>{item.title}</h1>
        <img className="imgs" src={item.pictureUrl} alt="brazaletes" />
        <aside>
          <p id="descrip">{item.dDescription}</p>
          <br />
          <p>{`Precio: $${item.price}`}</p>
          <br />
        </aside>
        <div id="medios">
          <p>Medios de pago</p>
          <img
            className="pago pago1"
            src="https://raw.githubusercontent.com/Frxn09/imgs/cd637ee80cb6a8a572031f4e153d8163fced7330/efectivo.svg"
            alt=" efectivo"
            style={{ width: 42 }}
          />
          <img
            className="pago pago2"
            src="https://raw.githubusercontent.com/Frxn09/imgs/cd637ee80cb6a8a572031f4e153d8163fced7330/mastercard.svg"
            alt="mastercard"
            style={{ width: 40 }}
          />
          <img
            className="pago pago3"
            src="https://raw.githubusercontent.com/Frxn09/imgs/cd637ee80cb6a8a572031f4e153d8163fced7330/paypal.svg"
            alt="paypal"
            style={{ width: 40 }}
          />
          <img
            className="pago pago4"
            src="https://raw.githubusercontent.com/Frxn09/imgs/cd637ee80cb6a8a572031f4e153d8163fced7330/visa.svg"
            alt="visa"
            style={{ width: 40 }}
          />
          <p>{`Stock: ${item.stock}`}</p>
          <ItemCount stock={item.stock} onAdd={add} />
        </div>
        <div>
          <h3 id="dtitle">Caracteristicas del Producto</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nihil
            dolore accusantium blanditiis nam possimus ipsam totam corporis? Sed
            optio dolore quis odit repellendus nostrum reiciendis, quam, qui aut
            expedita sint tenetur incidunt est modi doloremque ducimus odio.
            Architecto, ipsam!
          </p>
        </div>
      </Container>
      <footer>
        <p>Franco Ditella | Proyecto ReactJs | 2024</p>
      </footer>
    </div>
  );
};
