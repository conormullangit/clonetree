import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState("");

  useEffect(() => {
    fetch(`https://nc-marketplace.herokuapp.com/api/items/${item_id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data.item);
      });
  }, []);

  return (
    <section>
      <p>Item</p>
      <img src={item.img_url} className="single-item-image" />
      <p>
        {item.item_name}
        <span>{item.price}</span>
      </p>
      <p>{item.category_name}</p>
      <p>{item.description}</p>
      <p>{item.item_id}</p>
    </section>
  );
};

export default Item;
