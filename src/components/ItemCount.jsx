import { Button } from "react-bootstrap";
import { useState } from "react";
export const ItemCount = ({onAdd, stock}) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrese = () => {
    if (stock > quantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAdd = () => {
    onAdd(quantity);
    setQuantity(1);
  };

  return (
    <>
      <div className="d-flex">
        <button className="butonmema" onClick={handleDecrease} style={{ width: 20 }}>
          -
        </button>
        <input type="number" className="butonmema" value={quantity} readOnly style={{ width: 35 }} />
        <button className="butonmema" onClick={handleIncrese} style={{ width: 20 }}>
          +
        </button>
      </div>
      <Button className="buton" style={{ marginTop: 6 }} onClick={handleAdd}>
        Añadir al carro
      </Button>
    </>
  );
};
