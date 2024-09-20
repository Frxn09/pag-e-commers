import { Container, Button } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const initialValue = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValue);
  const { clear, items, removeItem } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  const handleChange = (ev) => {
    setValues((prev) => {
      return { ...prev, [ev.target.name]: ev.target.value };
    });
  };
  const handleRemove = (id) => removeItem(id);
  const handleClear = (id) => clear(id);

  const handleSubmit = () => {
    const order = {
      buyer: values,
      items,
      total: total(),
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then(({ id }) => {
        if (id) {
          alert("su orden: " + id + "ah sido completada");
        }
      })
      .finally(() => {
        clear();
        setValues(initialValue);
      });
  };


  return (
    <div id="outconter">
      <Container className="mt-4 cart-conter">
        <h1>Productos en tu carrito</h1>
        {items.map((i) => {
          return (
            <div>
              <table key={i.title} style={{ cellspacing: 30, cellpadding: 60 }}>
                <tr>
                  <th>Producto</th>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                </tr>
                <tr>
                  <td>
                    <img id="produc" src={i.pictureUrl} alt="Producto" />
                  </td>
                  <td>{i.title}</td>
                  <td>{i.quantity}</td>
                  <td>${i.price}</td>
                  <td>
                    <button id="remove" onClick={() => handleRemove(i.id)}>
                      X
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}

        {items?.length > 0 && (
          <div id="totalboton">
            <div id="total">Total: ${total()}</div>
            <Button
              className="buton"
              id="clear"
              type="button"
              onClick={handleClear}
            >
              Vaciar
            </Button>
          </div>
        )}
        {items?.length > 0 && (
          <div>
            <form id="formulario">
              <lablel>Nombre y Apellido: </lablel>
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={handleChange}
              />
              <lablel>Celular: </lablel>
              <input
                type="text"
                value={values.phone}
                name="phone"
                onChange={handleChange}
              />
              <lablel>Email: </lablel>
              <input
                type="email"
                value={values.email}
                name="email"
                onChange={handleChange}
              />
            </form>
            <div>
              <Button
                className="buton"
                id="enviar"
                type="button"
                onClick={handleSubmit}
              >
                Enviar
              </Button>
            </div>
          </div>
        )}
      </Container>
      <footer>
        <p>Franco Ditella | Proyecto ReactJs | 2024</p>
      </footer>
    </div>
  );
};
