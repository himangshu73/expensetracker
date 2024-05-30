import { useState } from "react";

function Items() {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState();
  const [itemUnit, setItemUnit] = useState("");
  const [itemPrice, setItemPrice] = useState();
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };
  const handleQuantityChange = (event) => {
    setItemQuantity(event.target.value);
  };
  const handlePriceChange = (event) => {
    setItemPrice(event.target.value);
  };
  const handleUnitChange = (event) => {
    setItemUnit(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemName || !itemQuantity || !itemUnit || !itemPrice) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      name: itemName,
      quantity: parseInt(itemQuantity),
      unit: itemUnit,
      price: parseInt(itemPrice),
      date: new Date().toLocaleDateString(),
    };
    setItems([...items, newItem]);
    setItemName("");
    setItemQuantity("");
    setItemUnit("");
    setItemPrice("");
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredItemQuantity = filteredItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const filterItemPrice = filteredItems.reduce(
    (total, item) => total + item.price,
    0
  );
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
        <br />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          placeholder="Enter Quantity"
          value={itemQuantity}
          onChange={handleQuantityChange}
          name="quantity"
        />
        <label htmlFor="">
          <input
            type="radio"
            value="KG"
            checked={itemUnit === "KG"}
            onChange={handleUnitChange}
          />
          KG
        </label>

        <label htmlFor="">
          <input
            type="radio"
            value="Ltr"
            checked={itemUnit === "Ltr"}
            onChange={handleUnitChange}
          />
          Ltr
        </label>

        <label htmlFor="">
          <input
            type="radio"
            value="Piece"
            checked={itemUnit === "Piece"}
            onChange={handleUnitChange}
          />
          Piece
        </label>
        <br />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          placeholder="Enter Price"
          value={itemPrice}
          onChange={handlePriceChange}
          name="price"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Submitted Text Here</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            Name: {item.name}, Quantity:{item.quantity}
            {item.unit}, Price: {item.price}, Date:{item.date}
          </li>
        ))}
      </ul>
      <p>Total Expense:{totalPrice}</p>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        placeholder="serach by name.."
        value={searchQuery}
        onChange={handleSearch}
      />
      <h2>Searched Items</h2>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            Quantity; {item.quantity}
            {item.unit}
            Price: {item.price}
            Date:{item.date}
          </li>
        ))}
      </ul>
      <p>Quantity:{filteredItemQuantity}</p>
      <p>Cost:{filterItemPrice}</p>
    </div>
  );
}

export default Items;
