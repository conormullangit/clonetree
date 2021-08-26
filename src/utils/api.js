import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://nc-marketplace.herokuapp.com/api'
});

const addItem = (item) => {
  return instance(
    {
      url: "/items",
      method: "POST",
      data: item
    }
  )
}

const deleteItem = (item_id) => {
  return instance(
    {
      url: `/items/${item_id}`,
      method: "delete"
    }).then(() => {console.log("ITEM DELETED")}).catch((err) => {
    console.log(err, "<- ERROR");
  })
}

export { deleteItem, addItem };