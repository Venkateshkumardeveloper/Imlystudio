// import React from 'react';

// function AddOrders() {
//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-red-600 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-orange-600 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block font-semibold mb-2">Name</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Order Status</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Email</label>
//             <input type="email" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Exp Delivery Date</label>
//             <input type="date" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Phone</label>
//             <input type="tel" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Address</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Created By</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//           <div>
//             <label className="block font-semibold mb-2">Design</label>
//             <input type="text" className="w-full border-gray-300 rounded-md shadow-sm" />
//           </div>

//         </div>

//         <div className="mt-6">
//           <label className="block font-semibold mb-2">Type</label>
//           <p className="text-sm font-semibold">1. Kitchen, Wardrobe, Living</p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default AddOrders;


// import React from 'react';

// function AddOrders() {
//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-red-600 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-orange-600 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input type="email" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input type="date" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input type="tel" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input type="text" className="mt-1 p-2 w-full border rounded-md" />
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <p className="text-sm font-semibold">1. Kitchen, Wardrobe, Living</p>
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-700">
//             Add Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';

// function AddOrders() {
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: '',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: '1. Kitchen, Wardrobe, Living',
//   });

//   const [submittedDetails, setSubmittedDetails] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     setSubmittedDetails(orderDetails);
//     // Reset the form (optional)
//     setOrderDetails({
//       name: '',
//       orderStatus: '',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: '1. Kitchen, Wardrobe, Living',
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-red-600 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-orange-600 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={orderDetails.name}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <input
//               type="text"
//               name="orderStatus"
//               value={orderDetails.orderStatus}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={orderDetails.email}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input
//               type="date"
//               name="deliveryDate"
//               value={orderDetails.deliveryDate}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={orderDetails.phone}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={orderDetails.address}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input
//               type="text"
//               name="createdBy"
//               value={orderDetails.createdBy}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input
//               type="text"
//               name="design"
//               value={orderDetails.design}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <p className="text-sm font-semibold">{orderDetails.type}</p>
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleSubmit}
//             className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-700"
//           >
//             Add Order
//           </button>
//         </div>
//       </div>

//       {/* Display Submitted Details */}
//       {submittedDetails && (
//         <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Order Details</h3>
//           <ul className="list-disc pl-6">
//             <li><strong>Name:</strong> {submittedDetails.name}</li>
//             <li><strong>Order Status:</strong> {submittedDetails.orderStatus}</li>
//             <li><strong>Email:</strong> {submittedDetails.email}</li>
//             <li><strong>Exp Delivery Date:</strong> {submittedDetails.deliveryDate}</li>
//             <li><strong>Phone:</strong> {submittedDetails.phone}</li>
//             <li><strong>Address:</strong> {submittedDetails.address}</li>
//             <li><strong>Created By:</strong> {submittedDetails.createdBy}</li>
//             <li><strong>Design:</strong> {submittedDetails.design}</li>
//             <li><strong>Type:</strong> {submittedDetails.type}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;



// import React, { useState } from 'react';

// function AddOrders() {
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: '',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: '',
//   });

//   const [submittedDetails, setSubmittedDetails] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     setSubmittedDetails(orderDetails);
//     // Reset the form (optional)
//     setOrderDetails({
//       name: '',
//       orderStatus: 'Pending',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'Kitchen, Wardrobe, Living',
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={orderDetails.name}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <select
//               name="orderStatus"
//               value={orderDetails.orderStatus}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             >
//               <option value="Pending">Pending</option>
//               <option value="Processed">Processed</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={orderDetails.email}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input
//               type="date"
//               name="deliveryDate"
//               value={orderDetails.deliveryDate}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={orderDetails.phone}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={orderDetails.address}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input
//               type="text"
//               name="createdBy"
//               value={orderDetails.createdBy}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input
//               type="text"
//               name="design"
//               value={orderDetails.design}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border rounded-md"
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <select
//             name="type"
//             value={orderDetails.type}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           >
//             <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//             <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//           </select>
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleSubmit}
//             className="bg-custom-blue text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700"
//           >
//             Add Order
//           </button>
//         </div>
//       </div>

//       {/* Display Submitted Details */}
//       {submittedDetails && (
//         <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Order Details</h3>
//           <ul className="list-disc pl-6">
//             <li><strong>Name:</strong> {submittedDetails.name}</li>
//             <li><strong>Order Status:</strong> {submittedDetails.orderStatus}</li>
//             <li><strong>Email:</strong> {submittedDetails.email}</li>
//             <li><strong>Exp Delivery Date:</strong> {submittedDetails.deliveryDate}</li>
//             <li><strong>Phone:</strong> {submittedDetails.phone}</li>
//             <li><strong>Address:</strong> {submittedDetails.address}</li>
//             <li><strong>Created By:</strong> {submittedDetails.createdBy}</li>
//             <li><strong>Design:</strong> {submittedDetails.design}</li>
//             <li><strong>Type:</strong> {submittedDetails.type}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';

// function AddOrders() {
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: 'Pending',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: 'Kitchen, Wardrobe, Living',
//   });

//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     // Validate all fields
//     const newErrors = {};
//     if (!orderDetails.name) newErrors.name = 'Name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';

//     // If there are errors, set the error state and return
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // If no errors, submit the form
//     setSubmittedDetails(orderDetails);
//     setErrors({});

//     // Reset the form (optional)
//     setOrderDetails({
//       name: '',
//       orderStatus: 'select a status',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'select a type',
//     });
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Add Order</h2>
      
//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Details</h3>
        
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={orderDetails.name}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : ''}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <select
//               name="orderStatus"
//               value={orderDetails.orderStatus}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : ''}`}
//             >
//                               <option value="Select a status">Select a Status</option>

//               <option value="Pending">Pending</option>
//               <option value="Processed">Processed</option>
//             </select>
//             {errors.orderStatus && <p className="text-red-500 text-sm">{errors.orderStatus}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={orderDetails.email}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input
//               type="date"
//               name="deliveryDate"
//               value={orderDetails.deliveryDate}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : ''}`}
//             />
//             {errors.deliveryDate && <p className="text-red-500 text-sm">{errors.deliveryDate}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={orderDetails.phone}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={orderDetails.address}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : ''}`}
//             />
//             {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input
//               type="text"
//               name="createdBy"
//               value={orderDetails.createdBy}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : ''}`}
//             />
//             {errors.createdBy && <p className="text-red-500 text-sm">{errors.createdBy}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input
//               type="text"
//               name="design"
//               value={orderDetails.design}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : ''}`}
//             />
//             {errors.design && <p className="text-red-500 text-sm">{errors.design}</p>}
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <select
//             name="type"
//             value={orderDetails.type}
//             onChange={handleChange}
//             className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : ''}`}
//           >
//                         <option value="Select a type">Select a type</option>

//             <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//             <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//           </select>
//           {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleSubmit}
//             className="bg-custom-brown text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700"
//           >
//             Add Order
//           </button>
//         </div>
//       </div>

//       {/* Display Submitted Details */}
//       {submittedDetails && (
//         <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Order Details</h3>
//           <ul className="list-disc pl-6">
//             <li><strong>Name:</strong> {submittedDetails.name}</li>
//             <li><strong>Order Status:</strong> {submittedDetails.orderStatus}</li>
//             <li><strong>Email:</strong> {submittedDetails.email}</li>
//             <li><strong>Exp Delivery Date:</strong> {submittedDetails.deliveryDate}</li>
//             <li><strong>Phone:</strong> {submittedDetails.phone}</li>
//             <li><strong>Address:</strong> {submittedDetails.address}</li>
//             <li><strong>Created By:</strong> {submittedDetails.createdBy}</li>
//             <li><strong>Design:</strong> {submittedDetails.design}</li>
//             <li><strong>Type:</strong> {submittedDetails.type}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

// function AddOrders() {
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: 'Pending',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: 'Kitchen, Wardrobe, Living',
//   });

//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!orderDetails.name) newErrors.name = 'Name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setSubmittedDetails(orderDetails);
//     setErrors({});
//     setShowAlert(true);

//     setOrderDetails({
//       name: '',
//       orderStatus: 'Pending',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'Kitchen, Wardrobe, Living',
//     });
//   };

//   return (
//     <div className="max-w-6xl mx-auto ml-80 mt-10 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-bold text-gray-700 mb-6">Create Order</h2>

//       {/* Success Alert */}
//       {showAlert && (
//         <div className="rounded-md bg-green-50 p-4 mb-4">
//           <div className="flex">
//             <div className="flex-shrink-0">
//               <CheckCircleIcon aria-hidden="true" className="h-5 w-5 text-green-400" />
//             </div>
//             <div className="ml-3">
//               <p className="text-sm font-medium text-green-800">Order successfully added!</p>
//             </div>
//             <div className="ml-auto pl-3">
//               <button
//                 onClick={() => setShowAlert(false)}
//                 className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
//               >
//                 <span className="sr-only">Dismiss</span>
//                 <XMarkIcon aria-hidden="true" className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="border p-6 rounded-lg">
//         <h3 className="text-lg font-semibold text-gray-700 mb-4">Customer Details</h3>

//         <div className="grid grid-cols-2 gap-6">
//           {/* Form Fields */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={orderDetails.name}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : ''}`}
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Order Status</label>
//             <select
//               name="orderStatus"
//               value={orderDetails.orderStatus}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : ''}`}
//             >
//               <option value="Select a status">Select a Status</option>
//               <option value="Pending">Pending</option>
//               <option value="Processed">Processed</option>
//             </select>
//             {errors.orderStatus && <p className="text-red-500 text-sm">{errors.orderStatus}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={orderDetails.email}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : ''}`}
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Exp Delivery Date</label>
//             <input
//               type="date"
//               name="deliveryDate"
//               value={orderDetails.deliveryDate}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : ''}`}
//             />
//             {errors.deliveryDate && <p className="text-red-500 text-sm">{errors.deliveryDate}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={orderDetails.phone}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : ''}`}
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Address</label>
//             <input
//               type="text"
//               name="address"
//               value={orderDetails.address}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : ''}`}
//             />
//             {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Created By</label>
//             <input
//               type="text"
//               name="createdBy"
//               value={orderDetails.createdBy}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : ''}`}
//             />
//             {errors.createdBy && <p className="text-red-500 text-sm">{errors.createdBy}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Design</label>
//             <input
//               type="text"
//               name="design"
//               value={orderDetails.design}
//               onChange={handleChange}
//               className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : ''}`}
//             />
//             {errors.design && <p className="text-red-500 text-sm">{errors.design}</p>}
//           </div>
//         </div>

//         <div className="mt-6">
//           <label className="block text-sm font-medium text-gray-700">Type</label>
//           <select
//             name="type"
//             value={orderDetails.type}
//             onChange={handleChange}
//             className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : ''}`}
//           >
//             <option value="Select a type">Select a type</option>
//             <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//             <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//           </select>
//           {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
//         </div>

//         {/* Add Order Button */}
//         <div className="mt-8">
//           <button
//             onClick={handleSubmit}
//             className="bg-custom-darkblue text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-custom-lightblue"
//           >
//             Create Order
//           </button>
//         </div>
//       </div>

//       {/* Display Submitted Details */}
//       {submittedDetails && (
//         <div className="mt-10 p-6 bg-gray-100 shadow rounded-lg">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Order Details</h3>
//           <ul className="list-disc pl-6">
//             <li><strong>Name:</strong> {submittedDetails.name}</li>
//             <li><strong>Order Status:</strong> {submittedDetails.orderStatus}</li>
//             <li><strong>Email:</strong> {submittedDetails.email}</li>
//             <li><strong>Exp Delivery Date:</strong> {submittedDetails.deliveryDate}</li>
//             <li><strong>Phone:</strong> {submittedDetails.phone}</li>
//             <li><strong>Address:</strong> {submittedDetails.address}</li>
//             <li><strong>Created By:</strong> {submittedDetails.createdBy}</li>
//             <li><strong>Design:</strong> {submittedDetails.design}</li>
//             <li><strong>Type:</strong> {submittedDetails.type}</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;









// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: 'Pending',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: 'Kitchen, Wardrobe, Living',
//     decreaseCircleAddNumber: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!orderDetails.name) newErrors.name = 'Name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';
//     if (!orderDetails.decreaseCircleAddNumber) newErrors.decreaseCircleAddNumber = 'Decrease Circle Add Number is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setShowAlert(true);
//     console.log("Form Submitted:", orderDetails);
//     setOrderDetails({
//       name: '',
//       orderStatus: 'Pending',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'Kitchen, Wardrobe, Living',
//       decreaseCircleAddNumber: '',
//     });
//     setActiveStep(0);
//   };

//   return (
//     <Box sx={{ width: '100%' }} className="p-4 ml-72 ">
//       <Stepper activeStep={activeStep} className="mb-4 w-1/2">
//         {steps.map((label, index) => {
//           const stepProps = {};
//           const labelProps = {};
//           if (isStepOptional(index)) {
//             labelProps.optional = <Typography variant="caption">Optional</Typography>;
//           }
//           if (isStepSkipped(index)) {
//             stepProps.completed = false;
//           }
//           return (
//             <Step key={label} {...stepProps}>
//               <StepLabel {...labelProps}>{label}</StepLabel>
//             </Step>
//           );
//         })}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }} className="text-center text-xl w-1/2">
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//             <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//               Reset
//             </Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }} className="text-center text-lg">
//             Step {activeStep + 1}
//           </Typography>
//           <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//             {activeStep === 0 && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={orderDetails.name}
//                   onChange={handleChange}
//                   className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                 {/* Add other fields for Customer Details */}
//               </div>
//             )}
//             {activeStep === 1 && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                 <select
//                   name="orderStatus"
//                   value={orderDetails.orderStatus}
//                   onChange={handleChange}
//                   className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                 >
//                   <option value="Select a status">Select a Status</option>
//                   <option value="Pending">Pending</option>
//                   <option value="Processed">Processed</option>
//                 </select>
//                 {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                 {/* Add other fields for Order Details */}
//               </div>
//             )}
//             {activeStep === 2 && (
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Type</label>
//                 <select
//                   name="type"
//                   value={orderDetails.type}
//                   onChange={handleChange}
//                   className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                 >
//                   <option value="Select a type">Select a Type</option>
//                   <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                 </select>
//                 {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                 <label className="block text-sm font-medium text-gray-700">Decrease Circle Add Number</label>
//                 <input
//                   type="text"
//                   name="decreaseCircleAddNumber"
//                   value={orderDetails.decreaseCircleAddNumber}
//                   onChange={handleChange}
//                   className={`mt-1 p-2 w-full border rounded-md ${errors.decreaseCircleAddNumber ? 'border-red-500' : 'border-gray-300'}`}
//                 />
//                 {errors.decreaseCircleAddNumber && <p className="text-red-500 text-sm mt-1">{errors.decreaseCircleAddNumber}</p>}
//               </div>
//             )}
//           </Box>
//           <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-4">
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//               className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: '1 1 auto' }} />
//             {isStepOptional(activeStep) && (
//               <Button
//                 color="inherit"
//                 onClick={handleSkip}
//                 sx={{ mr: 1 }}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Skip
//               </Button>
//             )}
//             <Button
//               onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//               className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//             >
//               {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//     </Box>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: 'Pending',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: 'Kitchen, Wardrobe, Living',
//     decreaseCircleAddNumber: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!orderDetails.name) newErrors.name = 'Name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';
//     if (!orderDetails.decreaseCircleAddNumber) newErrors.decreaseCircleAddNumber = 'Decrease Circle Add Number is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setShowAlert(true);
//     console.log("Form Submitted:", orderDetails);
//     setOrderDetails({
//       name: '',
//       orderStatus: 'Pending',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'Kitchen, Wardrobe, Living',
//       decreaseCircleAddNumber: '',
//     });
//     setActiveStep(0);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               labelProps.optional = <Typography variant="caption">Optional</Typography>;
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   {/* Add other fields for Customer Details */}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="Select a status">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   {/* Add other fields for Order Details */}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="Select a type">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700 mt-4">Decrease Circle Add Number</label>
//                   <input
//                     type="text"
//                     name="decreaseCircleAddNumber"
//                     value={orderDetails.decreaseCircleAddNumber}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.decreaseCircleAddNumber ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.decreaseCircleAddNumber && <p className="text-red-500 text-sm mt-1">{errors.decreaseCircleAddNumber}</p>}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-4">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   sx={{ mr: 1 }}
//                   className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: 'Pending',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: 'Kitchen, Wardrobe, Living',
//   });
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!orderDetails.name) newErrors.name = 'Name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setShowAlert(true);
//     console.log("Form Submitted:", orderDetails);
//     setOrderDetails({
//       name: '',
//       orderStatus: 'Pending',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'Kitchen, Wardrobe, Living',
//     });
//     setActiveStep(0);
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               labelProps.optional = <Typography variant="caption">Optional</Typography>;
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
                
                
                
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   {/* Add other fields for Order Details */}
//                   <label className="block text-sm font-medium text-gray-700">DeliveryDate</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <input
//                     type="text"
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">createdBy</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-4">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   sx={{ mr: 1 }}
//                   className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//     </div>
//   );
// }

// export default AddOrders;


// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Customer Details', 'Order Details', 'Product Type'];

// function AddOrders() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [orderDetails, setOrderDetails] = useState({
//     name: '',
//     orderStatus: 'Pending',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     createdBy: '',
//     design: '',
//     type: 'Kitchen, Wardrobe, Living',
//   });
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);

//   const isStepOptional = (step) => step === 1;
//   const isStepSkipped = (step) => skipped.has(step);

//   const handleNext = () => {
//     let newSkipped = skipped;
//     if (isStepSkipped(activeStep)) {
//       newSkipped = new Set(newSkipped.values());
//       newSkipped.delete(activeStep);
//     }
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped(newSkipped);
//   };

//   const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

//   const handleSkip = () => {
//     if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSkipped((prevSkipped) => {
//       const newSkipped = new Set(prevSkipped.values());
//       newSkipped.add(activeStep);
//       return newSkipped;
//     });
//   };

//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!orderDetails.name) newErrors.name = 'Name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setShowAlert(true);
//     console.log("Form Submitted:", orderDetails);

//     setOrderDetails({
//       name: '',
//       orderStatus: 'Pending',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       createdBy: '',
//       design: '',
//       type: 'Kitchen, Wardrobe, Living',
//     });
//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
//       <Box sx={{ width: '100%' }}>
//         <Stepper activeStep={activeStep} className="mb-6">
//           {steps.map((label, index) => {
//             const stepProps = {};
//             const labelProps = {};
//             if (isStepOptional(index)) {
//               labelProps.optional = <Typography variant="caption">Optional</Typography>;
//             }
//             if (isStepSkipped(index)) {
//               stepProps.completed = false;
//             }
//             return (
//               <Step key={label} {...stepProps}>
//                 <StepLabel {...labelProps}>{label}</StepLabel>
//               </Step>
//             );
//           })}
//         </Stepper>
//         {activeStep === steps.length ? (
//           <React.Fragment>
//             <Typography className="text-center text-xl mb-4">
//               All steps completed - you're finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//               <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//                 Reset
//               </Button>
//             </Box>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <Typography className="text-center text-lg mb-4">
//               Step {activeStep + 1}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
//               {activeStep === 0 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={orderDetails.name}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Email</label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={orderDetails.email}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Phone</label>
//                   <input
//                     type="number"
//                     name="phone"
//                     value={orderDetails.phone}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                 </div>
//               )}
//               {activeStep === 1 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Order Status</label>
//                   <select
//                     name="orderStatus"
//                     value={orderDetails.orderStatus}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Status</option>
//                     <option value="Pending">Pending</option>
//                     <option value="Processed">Processed</option>
//                   </select>
//                   {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
//                   <input
//                     type="date"
//                     name="deliveryDate"
//                     value={orderDetails.deliveryDate}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={orderDetails.address}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                 </div>
//               )}
//               {activeStep === 2 && (
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">Type</label>
//                   <select
//                     name="type"
//                     value={orderDetails.type}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                   >
//                     <option value="">Select a Type</option>
//                     <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
//                     <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
//                   </select>
//                   {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Design</label>
//                   <input
//                     type="text"
//                     name="design"
//                     value={orderDetails.design}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   <label className="block text-sm font-medium text-gray-700">Created By</label>
//                   <input
//                     type="text"
//                     name="createdBy"
//                     value={orderDetails.createdBy}
//                     onChange={handleChange}
//                     className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//                   />
//                   {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//                 </div>
//               )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-4">
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//                 className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isStepOptional(activeStep) && (
//                 <Button
//                   color="inherit"
//                   onClick={handleSkip}
//                   sx={{ mr: 1 }}
//                   className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
//                 >
//                   Skip
//                 </Button>
//               )}
//               <Button
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded"
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </Box>
//           </React.Fragment>
//         )}
//       </Box>
//       {showAlert && (
//         <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
//           <Typography>Order successfully added!</Typography>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AddOrders;


import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Customer Details', 'Order Details', 'Product Type'];

function AddOrders() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    orderStatus: 'Pending',
    email: '',
    deliveryDate: '',
    phone: '',
    address: '',
    createdBy: '',
    design: '',
    type: 'Kitchen, Wardrobe, Living',
  });
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState(null);

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) throw new Error("You can't skip a step that isn't optional.");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => setActiveStep(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!orderDetails.name) newErrors.name = 'Name is required';
    if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
    if (!orderDetails.email) newErrors.email = 'Email is required';
    if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
    if (!orderDetails.phone) newErrors.phone = 'Phone is required';
    if (!orderDetails.address) newErrors.address = 'Address is required';
    if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
    if (!orderDetails.design) newErrors.design = 'Design is required';
    if (!orderDetails.type) newErrors.type = 'Type is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmittedDetails(orderDetails); // Store the submitted details
    setShowAlert(true);

    setOrderDetails({
      name: '',
      orderStatus: 'Pending',
      email: '',
      deliveryDate: '',
      phone: '',
      address: '',
      createdBy: '',
      design: '',
      type: 'Kitchen, Wardrobe, Living',
    });
    setActiveStep(0);  // Reset stepper to first step
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} className="mb-6">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
      
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography className="text-center text-xl mb-4">
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
              <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
                Reset
              </Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography className="text-center text-lg mb-4">
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', pt: 2 }} className="space-y-4">
              {activeStep === 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={orderDetails.name}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={orderDetails.email}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={orderDetails.phone}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              )}
              {activeStep === 1 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Order Status</label>
                  <select
                    name="orderStatus"
                    value={orderDetails.orderStatus}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select a Status</option>
                    <option value="Pending">Pending</option>
                    <option value="Processed">Processed</option>
                  </select>
                  {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
                  <label className="block text-sm font-medium text-gray-700">Delivery Date</label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={orderDetails.deliveryDate}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
                  <label className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={orderDetails.address}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
              )}
              {activeStep === 2 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type</label>
                  <select
                    name="type"
                    value={orderDetails.type}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
                  >
                    <option value="">Select a Type</option>
                    <option value="Kitchen, Wardrobe, Living">Kitchen, Wardrobe, Living</option>
                    <option value="Bedroom, Dining, Office">Bedroom, Dining, Office</option>
                  </select>
                  {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                  <label className="block text-sm font-medium text-gray-700">Design</label>
                  <input
                    type="text"
                    name="design"
                    value={orderDetails.design}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
                  <label className="block text-sm font-medium text-gray-700">Created By</label>
                  <input
                    type="text"
                    name="createdBy"
                    value={orderDetails.createdBy}
                    onChange={handleChange}
                    className={`mt-1 p-2 w-full border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
                  />
                  {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
                </div>
              )}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-between mt-6">
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded"
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button
                  color="inherit"
                  onClick={handleSkip}
                  className="text-blue-500 hover:text-blue-700 px-4 py-2 rounded"
                >
                  Skip
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button onClick={handleSubmit} className="bg-green-500 text-white hover:bg-green-700 px-4 py-2 rounded">
                  Finish
                </Button>
              ) : (
                <Button onClick={handleNext} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
                  Next
                </Button>
              )}
            </Box>
          </React.Fragment>
        )}
        {showAlert && (
          <div className="mt-4 text-green-700 bg-green-100 p-3 rounded">
            Order submitted successfully!
          </div>
        )}
        {submittedDetails && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
            <Typography variant="h6" className="text-center mb-4">
              Submitted Order Details
            </Typography>
            <Typography><strong>Name:</strong> {submittedDetails.name}</Typography>
            <Typography><strong>Email:</strong> {submittedDetails.email}</Typography>
            <Typography><strong>Phone:</strong> {submittedDetails.phone}</Typography>
            <Typography><strong>Order Status:</strong> {submittedDetails.orderStatus}</Typography>
            <Typography><strong>Delivery Date:</strong> {submittedDetails.deliveryDate}</Typography>
            <Typography><strong>Address:</strong> {submittedDetails.address}</Typography>
            <Typography><strong>Created By:</strong> {submittedDetails.createdBy}</Typography>
            <Typography><strong>Design:</strong> {submittedDetails.design}</Typography>
            <Typography><strong>Type:</strong> {submittedDetails.type}</Typography>
          </div>
        )}
      </Box>
    </div>
  );
}

export default AddOrders;
