import { useState } from 'react';
import mondaySdk from 'monday-sdk-js';

const monday = mondaySdk();
monday.setApiVersion("2023-10");
monday.setToken("eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM1NzUxMDA0MSwiYWFpIjoxMSwidWlkIjo2MDczNjc3NiwiaWFkIjoiMjAyNC0wNS0wOVQxMTo1Nzo0MS4yMTZaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjMzNjc1NzgsInJnbiI6ImV1YzEifQ.SmvGP_OoPdXd-Na5xu13dVSvcU7jYWyQZOOfBy7xPmo")
const CreateItem = () => {
  const [itemName, setItemName] = useState('');

  const handleCreateItem = async () => {
    try {
      // Make sure to replace BOARD_ID with the ID of your Monday.com board
    //   const response = await monday.api(`mutation {
    //     create_item(board_id: 1496065280, item_name: "${itemName}") {
    //       id
    //       name
    //     }
    //   }`);

    //   const response = await monday.api(`query { 
    //     boards {
    //       creator {
    //         account {
    //           slug 
    //         }
    //       }
    //     }
    //   }`);
    console.log('Testing 123')
    //   console.log('New item created:', response);
      // You can add further logic here, such as updating state or displaying a success message
    } catch (error) {
      console.error('Error creating item:', error);
      // Handle errors appropriately
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={handleCreateItem}>Create Item</button>
    </div>
  );
};

export default CreateItem;
