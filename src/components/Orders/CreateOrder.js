// import React, { useState } from 'react';

// const CreateOrder = () => {
//   const [formData, setFormData] = useState({
//     TenantID: 1,
//     CustomerID: 0,
//     OrderDate: '',
//     TotalQuantity: '',
//     AddressLine1: '',
//     AddressLine2: '',
//     CityID: '',
//     StateID: '',
//     CountryID: '',
//     ZipCode: '',
//     TotalAmount: '',
//     OrderStatus: '',
//     OrderBy: '',
//     DeliveryDate: '',
//     customerFirstName: '',
//     customerLastName: '',
//     customerEmail: '',
//     customerPhone: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         'https://imlystudios-backend.onrender.com/api/orders/createOrder',
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         }
//       );
//       const result = await response.json();
//       console.log('Order created:', result);
//     } catch (error) {
//       console.error('Error creating order:', error);
//     }
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
//         <h1 className="text-2xl font-bold mb-6 text-gray-800">Create Order</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="OrderDate" className="block text-sm font-medium text-gray-700">
//                 Order Date
//               </label>
//               <input
//                 type="date"
//                 id="OrderDate"
//                 name="OrderDate"
//                 value={formData.OrderDate}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="TotalQuantity" className="block text-sm font-medium text-gray-700">
//                 Total Quantity
//               </label>
//               <input
//                 type="number"
//                 id="TotalQuantity"
//                 name="TotalQuantity"
//                 value={formData.TotalQuantity}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="AddressLine1" className="block text-sm font-medium text-gray-700">
//                 Address Line 1
//               </label>
//               <input
//                 type="text"
//                 id="AddressLine1"
//                 name="AddressLine1"
//                 value={formData.AddressLine1}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="AddressLine2" className="block text-sm font-medium text-gray-700">
//                 Address Line 2
//               </label>
//               <input
//                 type="text"
//                 id="AddressLine2"
//                 name="AddressLine2"
//                 value={formData.AddressLine2}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//               />
//             </div>
//             <div>
//               <label htmlFor="CityID" className="block text-sm font-medium text-gray-700">
//                 City ID
//               </label>
//               <input
//                 type="text"
//                 id="CityID"
//                 name="CityID"
//                 value={formData.CityID}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="StateID" className="block text-sm font-medium text-gray-700">
//                 State ID
//               </label>
//               <input
//                 type="text"
//                 id="StateID"
//                 name="StateID"
//                 value={formData.StateID}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="CountryID" className="block text-sm font-medium text-gray-700">
//                 Country ID
//               </label>
//               <input
//                 type="text"
//                 id="CountryID"
//                 name="CountryID"
//                 value={formData.CountryID}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="ZipCode" className="block text-sm font-medium text-gray-700">
//                 Zip Code
//               </label>
//               <input
//                 type="text"
//                 id="ZipCode"
//                 name="ZipCode"
//                 value={formData.ZipCode}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="TotalAmount" className="block text-sm font-medium text-gray-700">
//                 Total Amount
//               </label>
//               <input
//                 type="number"
//                 id="TotalAmount"
//                 name="TotalAmount"
//                 value={formData.TotalAmount}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 step="0.01"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="OrderStatus" className="block text-sm font-medium text-gray-700">
//                 Order Status
//               </label>
//               <input
//                 type="text"
//                 id="OrderStatus"
//                 name="OrderStatus"
//                 value={formData.OrderStatus}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="OrderBy" className="block text-sm font-medium text-gray-700">
//                 Order By
//               </label>
//               <input
//                 type="text"
//                 id="OrderBy"
//                 name="OrderBy"
//                 value={formData.OrderBy}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="DeliveryDate" className="block text-sm font-medium text-gray-700">
//                 Delivery Date
//               </label>
//               <input
//                 type="date"
//                 id="DeliveryDate"
//                 name="DeliveryDate"
//                 value={formData.DeliveryDate}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="customerFirstName" className="block text-sm font-medium text-gray-700">
//                 Customer First Name
//               </label>
//               <input
//                 type="text"
//                 id="customerFirstName"
//                 name="customerFirstName"
//                 value={formData.customerFirstName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="customerLastName" className="block text-sm font-medium text-gray-700">
//                 Customer Last Name
//               </label>
//               <input
//                 type="text"
//                 id="customerLastName"
//                 name="customerLastName"
//                 value={formData.customerLastName}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700">
//                 Customer Email
//               </label>
//               <input
//                 type="email"
//                 id="customerEmail"
//                 name="customerEmail"
//                 value={formData.customerEmail}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">
//                 Customer Phone
//               </label>
//               <input
//                 type="tel"
//                 id="customerPhone"
//                 name="customerPhone"
//                 value={formData.customerPhone}
//                 onChange={handleChange}
//                 className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex justify-end mt-6">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
//             >
//               Submit Order
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateOrder;



import React, { useState } from 'react';
import axios from 'axios';

const CreateOrderForm = () => {
    const [formData, setFormData] = useState({
        TenantID: 1,
        CustomerID: 2,
        OrderDate: "2024-08-24",
        TotalQuantity: 4,
        AddressLine1: "",
        AddressLine2: "",
        CityID: "",
        StateID: "",
        CountryID: "",
        ZipCode: "",
        TotalAmount: 0,
        OrderStatus: "Shipping",
        OrderBy: "",
        Type: "Living Room",
        DeliveryDate: "2024-08-30",
        customerFirstName: "",
        customerLastName: "",
        customerEmail: "",
        customerPhone: "",
        PaymentMethod: "Credit Card",
        PaymentStatus: "Completed",
        MaskedCardNumber: "",
        ExpectedCompleteDate: "2024-09-10",
        Comments: "",
        ReferedBy: "",
        PaymentComments: "Good",
        assginto: "Designer ram",
        AdvanceAmount: "",
        BalenceAmount: "",
        ExpectedDurationDays: "10",
        DesginerName: "Designer krish",
        UploadImages: "",
        choosefiles: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();

        // Append all form data to the FormData object
        for (let key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const response = await axios.post(
                'https://imlystudios-backend-mqg4.onrender.com/api/orders/createOrder',
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            );
            console.log('Order created successfully:', response.data);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Create Order</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Customer Information */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Customer First Name</label>
                    <input
                        type="text"
                        name="customerFirstName"
                        value={formData.customerFirstName}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Customer Last Name</label>
                    <input
                        type="text"
                        name="customerLastName"
                        value={formData.customerLastName}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Customer Email</label>
                    <input
                        type="email"
                        name="customerEmail"
                        value={formData.customerEmail}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Customer Phone</label>
                    <input
                        type="text"
                        name="customerPhone"
                        value={formData.customerPhone}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Address Information */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Address Line 1</label>
                    <input
                        type="text"
                        name="AddressLine1"
                        value={formData.AddressLine1}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Address Line 2</label>
                    <input
                        type="text"
                        name="AddressLine2"
                        value={formData.AddressLine2}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">City ID</label>
                    <input
                        type="text"
                        name="CityID"
                        value={formData.CityID}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">State ID</label>
                    <input
                        type="text"
                        name="StateID"
                        value={formData.StateID}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Country ID</label>
                    <input
                        type="text"
                        name="CountryID"
                        value={formData.CountryID}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Zip Code</label>
                    <input
                        type="text"
                        name="ZipCode"
                        value={formData.ZipCode}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Order Information */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Total Quantity</label>
                    <input
                        type="number"
                        name="TotalQuantity"
                        value={formData.TotalQuantity}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Total Amount</label>
                    <input
                        type="number"
                        name="TotalAmount"
                        value={formData.TotalAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Order Status</label>
                    <select
                        name="OrderStatus"
                        value={formData.OrderStatus}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    >
                        <option value="Shipping">Shipping</option>
                        <option value="Pending">Pending</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Order By</label>
                    <input
                        type="text"
                        name="OrderBy"
                        value={formData.OrderBy}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Order Type</label>
                    <select
                        name="Type"
                        value={formData.Type}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    >
                        <option value="Living Room">Living Room</option>
                        <option value="Bedroom">Bedroom</option>
                        <option value="Kitchen">Kitchen</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Delivery Date</label>
                    <input
                        type="date"
                        name="DeliveryDate"
                        value={formData.DeliveryDate}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Payment Information */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Payment Method</label>
                    <select
                        name="PaymentMethod"
                        value={formData.PaymentMethod}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    >
                        <option value="Credit Card">Credit Card</option>
                        <option value="Debit Card">Debit Card</option>
                        <option value="Net Banking">Net Banking</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Advance Amount</label>
                    <input
                        type="number"
                        name="AdvanceAmount"
                        value={formData.AdvanceAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Balance Amount</label>
                    <input
                        type="number"
                        name="BalenceAmount"
                        value={formData.BalenceAmount}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Masked Card Number</label>
                    <input
                        type="text"
                        name="MaskedCardNumber"
                        value={formData.MaskedCardNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                        required
                    />
                </div>

                {/* Additional Information */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Comments</label>
                    <textarea
                        name="Comments"
                        value={formData.Comments}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Refered By</label>
                    <input
                        type="text"
                        name="ReferedBy"
                        value={formData.ReferedBy}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Payment Comments</label>
                    <textarea
                        name="PaymentComments"
                        value={formData.PaymentComments}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Assign To</label>
                    <input
                        type="text"
                        name="assginto"
                        value={formData.assginto}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Designer Name</label>
                    <input
                        type="text"
                        name="DesginerName"
                        value={formData.DesginerName}
                        onChange={handleChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>

                {/* File Uploads */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Upload Images</label>
                    <input
                        type="file"
                        name="UploadImages"
                        onChange={handleFileChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Choose Files</label>
                    <input
                        type="file"
                        name="choosefiles"
                        onChange={handleFileChange}
                        className="mt-1 block w-full p-2 border rounded"
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Create Order
                </button>
            </form>
        </div>
    );
};

export default CreateOrderForm;
