import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteItem } from "../utils/api";


const Item = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState("");

  useEffect(() => {
    fetch(`https://nc-marketplace.herokuapp.com/api/items/${item_id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.item);
      });
  }, [item_id]);

  if (!item) {
    return <p>Item deleted.</p>
  }

  return (
    <section>
      <p>Item</p>
      <img src={item.img_url} className="single-item-image" alt={item.item_name}/>
      <p>
        {item.item_name}
        <span>{item.price}</span>
      </p>
      <p>{item.category_name}</p>
      <p>{item.description}</p>
      <p>{item.item_id}</p>
      <div>
        <button onClick={() => {deleteItem(item.item_id)}}>Delete</button>
      </div>
    </section>
  );
};

export default Item;
