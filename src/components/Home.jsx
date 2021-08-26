import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    return fetch("https://nc-marketplace.herokuapp.com/api/items")
      .then((response) => response.json())
      .then((data) => {
        setItems(data.items);
      });
  }, []);

  return (
    <section>
      <p>All items here.</p>
      <select name="category" id="category-name">
        <option></option>
      </select>
      <ul className="item-list">
        {items.map((item) => {
          console.log(item);
          return (
            <li key={item.item_id} className="item">
              <Link to={`/api/items/${item.item_id}`}>
                <figure>
                  <img src={item.img_url} alt={item.item_name} />
                  <figcaption>
                    {item.item_name}
                    <span>{item.price}</span>
                  </figcaption>
                </figure>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
