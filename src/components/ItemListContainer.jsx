import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let refCollection;
    if (!id) {
      refCollection = collection(db, "Items");
    } else {
      refCollection = query(
        collection(db, "Items"),
        where("categoryId", "==", id)
      );
    }
    getDocs(refCollection).then((snapshot) => {
      setItems(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);

  if (!items) return <div className="loading">loading...</div>;

  return (
    <>
      <Container className="conter">
        <ItemList items={items} />
      </Container>
      <footer>
        <p>Franco Ditella | Proyecto ReactJs | 2024</p>
      </footer>
    </>
  );
};
