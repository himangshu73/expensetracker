import { useState } from "react";

function Items() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [items, setItems] = useState([]);

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setItemQuantity(event.target.value);
  };
  const handlePriceChange = (event) => {
    setItemPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      name: itemName,
      quantity: parseInt(itemQuantity),
      price: parseInt(itemPrice),
    };
    setItems([...items, newItem]);
    setItemName("");
    setItemQuantity("");
    setItemPrice("");
  };

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  return (
    <div className="input-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Item Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={itemName}
          onChange={handleNameChange}
          name="item"
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          placeholder="Enter Quantity"
          value={itemQuantity}
          onChange={handleQuantityChange}
          name="quantity"
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          placeholder="Enter Price"
          value={itemPrice}
          onChange={handlePriceChange}
          name="price"
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Submitted Text Here</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Name: {item.name}, Quantity:{item.quantity}, Price: {item.price}
          </li>
        ))}
      </ul>
      Total Quantity:{totalQuantity}
      Total Price:{totalPrice}
    </div>
  );
}

export default Items;
