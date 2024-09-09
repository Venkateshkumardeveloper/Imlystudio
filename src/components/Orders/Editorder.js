// // src/pages/EditOrder.js
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { TextField, Button, Box } from '@mui/material';
// import axios from 'axios';

// const EditOrder = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     // Fetch the order details based on the OrderID
//     const fetchOrderDetails = async () => {
//       try {
//         const { data } = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/orderhistory/order-history/${location.state.orderId}`);
//         setOrder(data.data[0]);
//       } catch (error) {
//         console.error("Error fetching order details:", error);
//       }
//     };
//     fetchOrderDetails();
//   }, [location.state.orderId]);

//   const handleSave = async () => {
//     try {
//       await axios.put(`https://imlystudios-backend-mqg4.onrender.com/api/orderhistory/order-history/${order.OrderID}`, order);
//       navigate("/orders"); // Navigate back to the orders page
//     } catch (error) {
//       console.error("Error updating order:", error);
//     }
//   };

//   if (!order) return <div>Loading...</div>;

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//     <Box sx={{ p: 3 }}>
//       <TextField
//         label="Order ID"
//         value={order.OrderID}
//         fullWidth
//         margin="normal"
//         disabled
//       />
//       <TextField
//         label="Created By"
//         value={order.CreatedBy}
//         fullWidth
//         margin="normal"
//         onChange={(e) => setOrder({ ...order, CreatedBy: e.target.value })}
//       />
//       <TextField
//         label="Order Status"
//         value={order.OrderStatus}
//         fullWidth
//         margin="normal"
//         onChange={(e) => setOrder({ ...order, OrderStatus: e.target.value })}
//       />
//       <Button onClick={handleSave} variant="contained" color="primary">
//         Save
//       </Button>
//     </Box>
//     </div>
//   );
// };

// export default EditOrder;

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Fetch the order details based on the OrderID
    const fetchOrderDetails = async () => {
      try {
        const { data } = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/orderhistory/order-history/${location.state.orderId}`);
        setOrder(data.data[0]);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };
    fetchOrderDetails();
  }, [location.state.orderId]);

  const handleSave = async () => {
    try {
      await axios.post(`https://imlystudios-backend-mqg4.onrender.com/api/orderhistory/order-history/${order.OrderID}`, order);
      navigate("/orders"); // Navigate back to the orders page
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  if (!order) return <div>Loading...</div>;

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Order ID</label>
          <input
            type="text"
            value={order.OrderID}
            disabled
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Created By</label>
          <input
            type="text"
            value={order.CreatedBy}
            onChange={(e) => setOrder({ ...order, CreatedBy: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Order Status</label>
          <select
            value={order.OrderStatus}
            onChange={(e) => setOrder({ ...order, OrderStatus: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="Confirm">Confirm</option>
            <option value="Processed">Processed</option>
          </select>
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditOrder;

