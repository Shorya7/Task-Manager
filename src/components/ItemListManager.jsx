import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoCloseCircleOutline } from "react-icons/io5";

function ItemListManager() {
  const [items, setItems] = useState([]); // State to store the list of items
  const [inputValue, setInputValue] = useState(''); // State to store the input value

  // Function to handle input field changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle adding a new item to the list
  const handleAddItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') { // Check if input is not empty
      toast.success('Item added successfully!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }); // Show success toast message
      setItems([...items, inputValue]); // Add new item to the list
      setInputValue(''); // Clear the input field
    }
  };

  // Function to handle removing an item from the list
  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index); // Remove item by index
    toast.error('Item removed successfully!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
    setItems(updatedItems);
  };

  return (
    <div style={{
      width: '90%',
      maxWidth: '300px',
      margin: '100px auto 25px',
      textAlign: 'center',
      fontFamily: 'Arial',
    }}>
      <form onSubmit={handleAddItem} style={{ marginBottom: '40px' }}>
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          required
          onChange={handleInputChange}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontWeight: '500',
            fontSize: '16px',
            backgroundColor: '#eff2f3',
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            width: '90%',
            padding: '10px 0',
            backgroundColor: '#189d42',
            color: 'white',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            fontSize: '16px',
            margin: '10px 0',
            boxShadow: '0px 4px 6px rgba(0, 128, 0, 0.3)', // Green box shadow
          }}
        >
          Add Item
        </button>
      </form>
      {items.length > 0 && <h2 style={{ textAlign: 'left', margin: '10px 5px' }}>Tasks List</h2>}
      <ul style={{ listStyleType: 'none', padding: '5px' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '10px',
              marginBottom: '5px',
              border: '1px solid #ddd',
              borderRadius: '5px',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>{item}</span>
            <IoCloseCircleOutline
              style={{ fontSize: '18px', color: 'red', cursor: 'pointer' }}
              onClick={() => handleRemoveItem(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
