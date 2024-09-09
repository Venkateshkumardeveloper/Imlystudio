// import React from 'react';
// import shirtImage from "../../assests/Images/Tshrit2.jpg";
// import Shirt2 from "../../assests/Images/Tshrit3.png";
// import Shirt3 from "../../assests/Images/similar product.jpg";
// import Shirt4 from "../../assests/Images/denimjacket.png";
// import Shirt5 from "../../assests/Images/Hoodie.png";
// import Shirt6 from "../../assests/Images/polo.png";
// import jeans from "../../assests/Images/jeans.png";
// import sweatshirt from '../../assests/Images/Sweatshirt.png';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import StatusBadge from './Satus';
// import StatusSwitch from './StatusSwitch';
// import { useState } from 'react';
// import FilterBar from './FilterBar';
// import { PlusIcon } from '@heroicons/react/20/solid';
// import { FaChevronRight} from 'react-icons/fa';
// import StatusUpdateDialog from './StatusUpdateDialog';



// export default function Orders() {
//     const [products, setProducts] = useState([
//         { id: 1, name: 'T-Shirt', price: '₹1000', discount: '10%', size: 'M', stock: 50, image: shirtImage, status: 'Pending' },
//         { id: 2, name: 'Casual Shirt', price: '₹1200', discount: '15%', size: 'L', stock: 30, image: Shirt2, status: 'Pending' },
//         { id: 3, name: 'Formal Shirt', price: '₹1500', discount: '20%', size: 'S', stock: 20, image: Shirt3, status: 'Pending' },
//         { id: 4, name: 'Denim Jacket', price: '₹2500', discount: '25%', size: 'XL', stock: 10, image: Shirt4, status: 'Pending' },
//         { id: 5, name: 'Hoodie', price: '₹2000', discount: '30%', size: 'M', stock: 5, image: Shirt5, status: 'Canceled' },
//         { id: 6, name: 'Polo Shirt', price: '₹800', discount: '35%', size: 'L', stock: 15, image: Shirt6, status: 'Delivered' },
//         { id: 7, name: 'Jeans', price: '₹1800', discount: '40%', size: 'S', stock: 25, image: jeans, status: 'Delivered' },
//         { id: 8, name: 'Sweatshirt', price: '₹1500', discount: '45%', size: 'XL', stock: 35, image: sweatshirt, status: 'Delivered' },
//     ]);
//     const [selectedFilter, setSelectedFilter] = useState('All');
//     const item = { name: 'Product Name', currentStatus: 'Pending' };
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const handleStatusChange = (id, newStatus) => {
//         console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//         setProducts((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, status: newStatus } : item
//             )
//         );
//     };

//     // const handleStatusChange = (id, newStatus) => {
//     //     console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//     //     setProducts((prevItems) =>
//     //         prevItems.map((item) =>
//     //             item.id === id ? { ...item, status: newStatus } : item
//     //         )
//     //     );
//     // };
    
//     const handleCancel = (id) => {
//         // Update the status to 'Canceled'
//         const newStatus = 'Canceled';
//         console.log(`Canceling order with ID ${id}`);
        
//         // Call the function to update the product status
//         handleStatusChange(id, newStatus);
//     };
    

//     const handleFilterChange = (filter) => {
//         setSelectedFilter(filter);
//     };

//     const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);
//     return (
//         <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//             <div className="sm:flex sm:items-center">
//                 <div className="sm:flex-auto">
//                     <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-2 text-custom-heading">Orders</h2>
//                 </div>

//             </div>
//             <div className="flex justify-center mb-4">
//       <div className="flex flex-wrap justify-center space-x-2">
//             <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
//             </div>
//             </div>
//             <div className="mt-8 flow-root">
//                 <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                         <table className="min-w-full divide-y divide-gray-300">
//                             <thead>
//                                 <tr>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Image
//                                     </th>
//                                     <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                                         Product Name
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Price
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Size
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Stock
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Status
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Action
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Operation
//                                     </th>

//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-200">
//                                 {filteredOrders.map((product) => (
//                                     <tr key={product.name}>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <img src={product.image} alt={product.name} className="h-10 w-10 rounded-md" />
//                                         </td>
//                                         <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                                             {product.name}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.price}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.size}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.stock}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <StatusBadge status={product.status} />
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <StatusSwitch key={product.id}
//                                                 id={product.id} status={product.status} onStatusChange={handleStatusChange} />
//                                         </td>
//                                         <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500">
//                                             <button
//                                                 type="button"
//                                                 className={`rounded px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${product.status === "Delivered"
//                                                         ? "bg-gray-300 cursor-not-allowed"
//                                                         : product.status === "Canceled"
//                                                             ? "bg-gray-300 cursor-not-allowed"
//                                                             : "bg-red-500 hover:bg-red-400 focus-visible:outline-red-500"
//                                                     }`}
//                                                 disabled={product.status === "Delivered" || product.status === "Canceled"}
//                                                 key={product.id}
//                                                 id={product.id}
//                                                 onClick={() => handleCancel(product.id)}
//                                             >
//                                                 {product.status === "Delivered" ? 'Already Delivered' : product.status === "Canceled" ? 'Canceled' : 'Cancel Order'}
//                                                 {/* <XMarkIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" /> */}
//                                             </button>
                                          
                                           
//                                         </td>
//                                         <td className="whitespace-nowrap px-1 py-1 text-sm text-gray-500">
//                                         <button
//                                             type="button"
//                                             className="rounded-full  bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                             disabled={product.status === "Canceled"}
//                                             onClick={() => setIsDialogOpen(true)}>
//                                             <FaChevronRight aria-hidden="true" className="h-3 w-3" />
//                                           </button>
//                                         </td>


//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <StatusUpdateDialog
//         isOpen={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         item={item}
//       />
//         </div>
//     );
// }


// import React from 'react';
// import shirtImage from "../../assests/Images/Tshrit2.jpg";
// import Shirt2 from "../../assests/Images/Tshrit3.png";
// import Shirt3 from "../../assests/Images/similar product.jpg";
// import Shirt4 from "../../assests/Images/denimjacket.png";
// import Shirt5 from "../../assests/Images/Hoodie.png";
// import Shirt6 from "../../assests/Images/polo.png";
// import jeans from "../../assests/Images/jeans.png";
// import sweatshirt from '../../assests/Images/Sweatshirt.png';
// import { FaEdit, FaTrash } from 'react-icons/fa';
// import StatusBadge from './Satus';
// import StatusSwitch from './StatusSwitch';
// import { useState } from 'react';
// import FilterBar from './FilterBar';
// import { PlusIcon } from '@heroicons/react/20/solid';
// import { FaChevronRight} from 'react-icons/fa';
// import StatusUpdateDialog from './StatusUpdateDialog';



// export default function Orders() {
//     const [products, setProducts] = useState([
//         { id: 1, name: '1000252',productName:"Rivago", price: '₹1000', discount: '10%', size: 'M', stock: 50000, image: shirtImage, status: 'Pending' },
//         { id: 2, name: '1000251', productName:"Casino",price: '₹1200', discount: '15%', size: 'L', stock: 32000, image: Shirt2, status: 'Pending' },
//         { id: 3, name: '1000249', productName:"ACRILIA",price: '₹1500', discount: '20%', size: 'S', stock: 23000, image: Shirt3, status: 'Pending' },
//         { id: 4, name: '1000248',productName:"ARTEX", price: '₹2500', discount: '25%', size: 'XL', stock: 30000, image: Shirt4, status: 'Pending' },
//         { id: 5, name: '1000244',productName:"LAZZARO", price: '₹2000', discount: '30%', size: 'M', stock: 0, image: Shirt5, status: 'Canceled' },
//         { id: 6, name: '1000241', productName:"Milano",price: '₹800', discount: '35%', size: 'L', stock: 0, image: Shirt6, status: 'Dispatched' },
//         { id: 7, name: '1000238', productName:"Lema",price: '₹1800', discount: '40%', size: 'S', stock: 0, image: jeans, status: 'Dispatched' },
//         { id: 8, name: '1000231', productName:"Elina",price: '₹1500', discount: '45%', size: 'XL', stock: 0, image: sweatshirt, status: 'Dispatched' },
//     ]);
//     const [selectedFilter, setSelectedFilter] = useState('All');
//     const item = { name: 'Product Name', currentStatus: 'Pending' };
//     const [isDialogOpen, setIsDialogOpen] = useState(false);
//     const handleStatusChange = (id, newStatus) => {
//         console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//         setProducts((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, status: newStatus } : item
//             )
//         );
//     };

//     // const handleStatusChange = (id, newStatus) => {
//     //     console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//     //     setProducts((prevItems) =>
//     //         prevItems.map((item) =>
//     //             item.id === id ? { ...item, status: newStatus } : item
//     //         )
//     //     );
//     // };
    
//     const handleCancel = (id) => {
//         // Update the status to 'Canceled'
//         const newStatus = 'Canceled';
//         console.log(`Canceling order with ID ${id}`);
        
//         // Call the function to update the product status
//         handleStatusChange(id, newStatus);
//     };
    

//     const handleFilterChange = (filter) => {
//         setSelectedFilter(filter);
//     };

//     const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);
//     return (
//         <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//             <div className="sm:flex sm:items-center">
//                 <div className="sm:flex-auto">
//                     <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-2 text-custom-heading">Orders</h2>
//                 </div>

//             </div>
//             <div className="flex justify-center mb-4">
//       <div className="flex flex-wrap justify-center space-x-2">
//             <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
//             </div>
//             </div>
//             <div className="mt-8 flow-root">
//                 <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                         <table className="min-w-full divide-y divide-gray-300">
//                             <thead>
//                                 <tr>
//                                     {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Image
//                                     </th> */}
//                                     <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                                         Order Id
//                                     </th>
//                                     <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                                         Product Name
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Price
//                                     </th>
//                                     {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Size
//                                     </th> */}
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Payment Balance
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Status
//                                     </th>
//                                     {/* <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Action
//                                     </th> */}
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Operation
//                                     </th>

//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-200">
//                                 {filteredOrders.map((product) => (
//                                     <tr key={product.name}>
//                                         {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <img src={product.image} alt={product.name} className="h-10 w-10 rounded-md" />
//                                         </td> */}
//                                         <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                                             {product.name}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.productName}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.price}
//                                         </td>
//                                         {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.size}
//                                         </td> */}
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.stock}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <StatusBadge status={product.status} />
//                                         </td>
//                                         {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <StatusSwitch key={product.id}
//                                                 id={product.id} status={product.status} onStatusChange={handleStatusChange} />
//                                         </td> */}
//                                         <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500">
//                                             <button
//                                                 type="button"
//                                                 className={`rounded px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${product.status === "Dispatched"
//                                                         ? "bg-gray-300 cursor-not-allowed"
//                                                         : product.status === "Canceled"
//                                                             ? "bg-gray-300 cursor-not-allowed"
//                                                             : "bg-red-500 hover:bg-red-400 focus-visible:outline-red-500"
//                                                     }`}
//                                                 disabled={product.status === "Dispatched" || product.status === "Canceled"}
//                                                 key={product.id}
//                                                 id={product.id}
//                                                 onClick={() => handleCancel(product.id)}
//                                             >
//                                                 {product.status === "Dispatched" ? 'Already Dispatched' : product.status === "Canceled" ? 'Canceled' : 'Cancel Order'}
//                                                 {/* <XMarkIcon aria-hidden="true" className="-mr-0.5 h-5 w-5" /> */}
//                                             </button>
                                          
                                           
//                                         </td>
//                                         <td className="whitespace-nowrap px-1 py-1 text-sm text-gray-500">
//                                         {/* <button
//                                             type="button"
//                                             className="rounded-full  bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                                             disabled={product.status === "Canceled"}
//                                             onClick={() => setIsDialogOpen(true)}>
//                                             <FaChevronRight aria-hidden="true" className="h-3 w-3" />
//                                           </button> */}
//                                         </td>


//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <StatusUpdateDialog
//         isOpen={isDialogOpen}
//         onClose={() => setIsDialogOpen(false)}
//         item={item}
//       />
//         </div>
//     );
// }



// import React, { useState } from 'react';
// import shirtImage from "../../assests/Images/Tshrit2.jpg";
// import Shirt2 from "../../assests/Images/Tshrit3.png";
// import Shirt3 from "../../assests/Images/similar product.jpg";
// import Shirt4 from "../../assests/Images/denimjacket.png";
// import Shirt5 from "../../assests/Images/Hoodie.png";
// import Shirt6 from "../../assests/Images/polo.png";
// import jeans from "../../assests/Images/jeans.png";
// import sweatshirt from '../../assests/Images/Sweatshirt.png';
// import { FaEdit, FaTrash, FaChevronRight } from 'react-icons/fa';
// import StatusBadge from './Satus';
// import StatusUpdateDialog from './StatusUpdateDialog';
// import FilterBar from './FilterBar';

// export default function Orders() {
//     const [products, setProducts] = useState([
//         { id: 1, name: '1000252', productName: "Rivago", price: '₹1000', discount: '10%', size: 'M', stock: 50000, image: shirtImage, status: 'Pending' },
//         { id: 2, name: '1000251', productName: "Casino", price: '₹1200', discount: '15%', size: 'L', stock: 32000, image: Shirt2, status: 'Pending' },
//         { id: 3, name: '1000249', productName: "ACRILIA", price: '₹1500', discount: '20%', size: 'S', stock: 23000, image: Shirt3, status: 'Pending' },
//         { id: 4, name: '1000248', productName: "ARTEX", price: '₹2500', discount: '25%', size: 'XL', stock: 30000, image: Shirt4, status: 'Pending' },
//         { id: 5, name: '1000244', productName: "LAZZARO", price: '₹2000', discount: '30%', size: 'M', stock: 0, image: Shirt5, status: 'Canceled' },
//         { id: 6, name: '1000241', productName: "Milano", price: '₹800', discount: '35%', size: 'L', stock: 0, image: Shirt6, status: 'Dispatched' },
//         { id: 7, name: '1000238', productName: "Lema", price: '₹1800', discount: '40%', size: 'S', stock: 0, image: jeans, status: 'Dispatched' },
//         { id: 8, name: '1000231', productName: "Elina", price: '₹1500', discount: '45%', size: 'XL', stock: 0, image: sweatshirt, status: 'Dispatched' },
//     ]);

//     const [selectedFilter, setSelectedFilter] = useState('All');
//     const item = { name: 'Product Name', currentStatus: 'Pending' };
//     const [isDialogOpen, setIsDialogOpen] = useState(false);

//     const handleStatusChange = (id, newStatus) => {
//         console.log(`Status of item with ID ${id} changed to: ${newStatus}`);
//         setProducts((prevItems) =>
//             prevItems.map((item) =>
//                 item.id === id ? { ...item, status: newStatus } : item
//             )
//         );
//     };

//     const handleCancel = (id) => {
//         const newStatus = 'Canceled';
//         console.log(`Canceling order with ID ${id}`);
//         handleStatusChange(id, newStatus);
//     };

//     const handleFilterChange = (filter) => {
//         setSelectedFilter(filter);
//     };

//     const handleActionClick = (id) => {
//         console.log(`Action button clicked for order ID: ${id}`);
//         // Add your desired action here, e.g., open a modal or redirect to another page
//     };

//     const filteredOrders = products.filter(product => selectedFilter === 'All' || product.status === selectedFilter);

//     return (
//         <div className="px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto">
//             <div className="sm:flex sm:items-center">
//                 <div className="sm:flex-auto">
//                     <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-2 text-custom-heading">Orders</h2>
//                 </div>
//             </div>
//             <div className="flex justify-center mb-4">
//                 <div className="flex flex-wrap justify-center space-x-2">
//                     <FilterBar selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />
//                 </div>
//             </div>
//             <div className="mt-8 flow-root">
//                 <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                     <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
//                         <table className="min-w-full divide-y divide-gray-300">
//                             <thead>
//                                 <tr>
//                                     <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                                         Order Id
//                                     </th>
//                                     <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
//                                         Product Name
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Price
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Payment Balance
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Status
//                                     </th>
//                                     <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                         Operation
//                                     </th>
//                                 </tr>
//                             </thead>
//                             <tbody className="divide-y divide-gray-200">
//                                 {filteredOrders.map((product) => (
//                                     <tr key={product.name}>
//                                         <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
//                                             {product.name}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.productName}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.price}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             {product.stock}
//                                         </td>
//                                         <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                             <StatusBadge status={product.status} />
//                                         </td>
//                                         <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500">
//                                             <button
//                                                 type="button"
//                                                 className={`rounded px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${product.status === "Dispatched"
//                                                     ? "bg-gray-300 cursor-not-allowed"
//                                                     : product.status === "Canceled"
//                                                         ? "bg-gray-300 cursor-not-allowed"
//                                                         : "bg-red-500 hover:bg-red-400 focus-visible:outline-red-500"
//                                                     }`}
//                                                 disabled={product.status === "Dispatched" || product.status === "Canceled"}
//                                                 key={product.id}
//                                                 id={product.id}
//                                                 onClick={() => handleCancel(product.id)}
//                                             >
//                                                 {product.status === "Dispatched" ? 'Already Dispatched' : product.status === "Canceled" ? 'Canceled' : 'Cancel Order'}
//                                             </button>
//                                         </td>
//                                         <td className="whitespace-nowrap px-1 py-1 text-sm text-gray-500">
//                                             <button
//                                                 type="button"
//                                                 className="rounded-full bg-blue-600 p-2 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//                                                 onClick={() => handleActionClick(product.id)}>
//                                                 <FaChevronRight aria-hidden="true" className="h-4 w-4" />
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//             <StatusUpdateDialog
//                 isOpen={isDialogOpen}
//                 onClose={() => setIsDialogOpen(false)}
//                 item={item}
//             />
//         </div>
//     );
// }


// import { HomeIcon, PrinterIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     id: 1000252,
//     name: "RIVAGO",
//     price: 1000,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000253,
//     name: "CASINO",
//     price: 1200,
//     balance: 50000,
//     status: "dispatched",
//     operation: "Already Dispatched",
//   },
//   {
//     id: 1000254,
//     name: "ACRILIA",
//     price: 1500,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000255,
//     name: "ARTEX",
//     price: 2500,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000256,
//     name: "LAZZARO",
//     price: 2000,
//     balance: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000257,
//     name: "MILANO",
//     price: 800,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000258,
//     name: "LAZZARO",
//     price: 1800,
//     balance: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000259,
//     name: "LEON",
//     price: 1500,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000260,
//     name: "FLIPPO",
//     price: 2000,
//     balance: 50000,
//     status: "dispatched",
//     operation: "Already Dispatched",
//   },
//   {
//     id: 1000261,
//     name: "LUCENTO",
//     price: 1700,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000262,
//     name: "LEON",
//     price: 1000,
//     balance: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000263,
//     name: "LAZZARO",
//     price: 1000,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000264,
//     name: "CASINO",
//     price: 1000,
//     balance: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
// ];

// const UserData = ({ users }) => {
//   const isDispatched = (statusChecker) => {
//     return statusChecker === "dispatched" || statusChecker === "Dispatched";
//   };
//   const isActive = (orderChecker) => {
//     return orderChecker === "Cancel Order" || orderChecker === "cancel order";
//   };


//   const navigate = useNavigate();

//   const handleOrderUpdate = (event, order) => {
//     event.preventDefault();
//     navigate("/update-order", { state: { order } });
//   };
//   return (
//     <>
//       {users.map((curUser) => {
//         const { id, name, price, balance, status, operation } = curUser;

//         return (
//           <tr key={id} className="w-[100%] ">
//             <td className="p-5 border-b-[1px] border-[#33333353] font-bold text-center">
//               {id}
//             </td>
//             <td className="text-center p-5 border-b-[1px] border-[#33333353] text-[#6c7079]">
//               {name}
//             </td>
//             <td className="p-5 text-center border-b-[1px] border-[#33333353] text-[#6c7079]">
//               &#8377;{price}
//             </td>
//             <td className="p-5 text-center border-b-[1px] border-[#33333353] text-[#6c7079]">
//               &#8377;{balance}
//             </td>
//             <td className="p-5 border-b-[1px] text-center border-[#33333353] text-[#6c7079] ">
//               <button
//                 className={`${
//                   isDispatched(status)
//                     ? " text-center font-semibold border-[1px] border-solid border-green-600 text-green-600 bg-[#eefcee] rounded-full pt-[4px] pr-[10px] pb-[4px] pl-[10px] h-[33px]  "
//                     : " text-center font-semibold border-[1px] border-solid border-[#BD2B2B] text-[#BD2B2B] bg-[#FFF3F2] rounded-full pt-[4px] pr-[10px] pb-[4px] pl-[10px] h-[33px] "
//                 }`}
//               >
//                 {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
//               </button>
//             </td>

//             <td className="text-left p-5 border-b-[1px] border-[#33333353] text-[#6c7079]">
//               <button
//                 className={`${
//                   isActive(operation)
//                     ? "bg-[#F04A48] cursor-pointer text-[#FFFEFE] p-[8px] border-none rounded hover:bg-[#ff8c8a]"
//                     : "bg-[#c5c5c5] cursor-pointer text-[#FFFEFE] p-[8px] border-none rounded hover:bg-[#acabab]   "
//                 }`}
//               >
//                 {operation}
//               </button>
//             </td>
//             <td className="p-5 border-b-[1px] border-[#33333353] text-[#6c7079]">
//               <button onClick={(e) => handleOrderUpdate(e, curUser)}  className="bg-[#0059ff] border-none text-white w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer text-s    hover:bg-[#0059ffb1]">
//                 <span className="inline-block font-bold text-xl h-[31px] w-[10px] mt-[3px] ml-[2px]">
//                   &gt;
//                 </span>
//               </button>
//             </td>
//           </tr>
//         );
//       })}
//     </>
//   );
// };

// const OrderPage = () => {
//   return (
//     <div className="order p-4 bg-[#F3F4F6] px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto3 ">
//       <div className="content flex justify-between">
//         <h3 className="text-4xl font-display mb-14 text-[#677749] font-bold bg-[#F3F4F6]">
//           Orders
//         </h3>
//         <div className="button flex">
//           <a href="/AddOrders">
//             <button className="mt-10 mr-2 mb-10 ml-10 bg-[white] cursor-pointer rounded p-[8px] hover:bg-[#ff8c8a]' hover:bg-[#c6c6c6] flex  items-center border-solid border-[1px] border-black">
//               <HomeIcon className="block mr-[10px] h-[18px] w-[19px] font-bold " />
//               Create Order
//             </button>
//           </a>
//           <a href="/create-order">
//             <button className="ml-1 mt-10 mr-10 mb-10 bg-[white] cursor-pointer rounded p-[8px] hover:bg-[#ff8c8a]' hover:bg-[#c6c6c6] flex  items-center border-solid border-[1px] border-black">
//               <PrinterIcon className="block mr-[10px] h-[18px] w-[19px] font-bold " />
//               Export Order
//             </button>
//           </a>
//         </div>
//       </div>
//       <table className="w-full border-collapse">
//         <thead>
//           <tr>
//             <th className="pt-[0px] pr-[15px] pb-[25px] pl-[15px]  border-b-[2px] border-[#33333353] text-center">
//               Order Id
//             </th>
//             <th className="pt-[0px] pr-[15px] pb-[25px] pl-[15px]  border-b-[2px] border-[#33333353] text-center">
//               Product Name
//             </th>
//             <th className="pt-[0px] pr-[15px] pb-[25px] pl-[15px]  border-b-[2px] border-[#33333353] text-center">
//               Price
//             </th>
//             <th className="pt-[0px] pr-[15px] pb-[25px] pl-[15px]  border-b-[2px] border-[#33333353]">
//               Payment Balance
//             </th>
//             <th className="pt-[0px] pr-[15px] pb-[25px] pl-[15px]  border-b-[2px] border-[#33333353] text-center">
//               Status
//             </th>
//             <th className="pt-[0px] pr-[15px] pb-[25px] pl-[35px]  border-b-[2px] border-[#33333353] text-left">
//               Operation
//             </th>
//             <th className="pt-[0px] pr-[15px] pb-[25px] pl-[15px]  border-b-[2px] border-[#33333353] text-center"></th>
//           </tr>
//         </thead>
//         <tbody className="ml-4">
//           <UserData users={data} />
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderPage;


// import { HomeIcon, PrinterIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";

// const data = [
//   {
//     id: 1000252,
//     name: "RIVAGO",
//     price: 1000,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000253,
//     name: "CASINO",
//     price: 1200,
//     balance: 50000,
//     status: "dispatched",
//     operation: "Already Dispatched",
//   },
//   {
//     id: 1000254,
//     name: "ACRILIA",
//     price: 1500,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000255,
//     name: "ARTEX",
//     price: 2500,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000256,
//     name: "LAZZARO",
//     price: 2000,
//     balance: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000257,
//     name: "MILANO",
//     price: 800,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000258,
//     name: "LAZZARO",
//     price: 1800,
//     balance: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000259,
//     name: "LEON",
//     price: 1500,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000260,
//     name: "FLIPPO",
//     price: 2000,
//     balance: 50000,
//     status: "dispatched",
//     operation: "Already Dispatched",
//   },
//   {
//     id: 1000261,
//     name: "LUCENTO",
//     price: 1700,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000262,
//     name: "LEON",
//     price: 1000,
//     balance: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000263,
//     name: "LAZZARO",
//     price: 1000,
//     balance: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000264,
//     name: "CASINO",
//     price: 1000,
//     balance: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
// ];

// const UserData = ({ users }) => {
//   const isDispatched = (statusChecker) => {
//     return statusChecker === "dispatched" || statusChecker === "Dispatched";
//   };
//   const isActive = (orderChecker) => {
//     return orderChecker === "Cancel Order" || orderChecker === "cancel order";
//   };


//   const navigate = useNavigate();

//   const handleOrderUpdate = (event, order) => {
//     event.preventDefault();
//     navigate("/update-order", { state: { order } });
//   };
//   return (

//     <>

//       {users.map((curUser) => {
//         const { id, name, price, balance, status, operation } = curUser;

//         return (
//           <tr key={id} className="w-[100%] ">
//             <td className="p-5 border-b-[1px] border-[#33333353] font-bold text-center">
//               {id}
//             </td>
//             <td className="text-center p-5 border-b-[1px] border-[#33333353] text-[#6c7079]">
//               {name}
//             </td>
//             <td className="p-5 text-center border-b-[1px] border-[#33333353] text-[#6c7079]">
//               &#8377;{price}
//             </td>
//             <td className="p-5 text-center border-b-[1px] border-[#33333353] text-[#6c7079]">
//               &#8377;{balance}
//             </td>
//             <td className="p-5 border-b-[1px] text-center border-[#33333353] text-[#6c7079] ">
//               <button
//                 className={`${
//                   isDispatched(status)
//                     ? " text-center font-semibold border-[1px] border-solid border-green-600 text-green-600 bg-[#eefcee] rounded-full pt-[4px] pr-[10px] pb-[4px] pl-[10px] h-[33px]  "
//                     : " text-center font-semibold border-[1px] border-solid border-[#BD2B2B] text-[#BD2B2B] bg-[#FFF3F2] rounded-full pt-[4px] pr-[10px] pb-[4px] pl-[10px] h-[33px] "
//                 }`}
//               >
//                 {status.charAt(0).toUpperCase() + status.slice(1).toLowerCase()}
//               </button>
//             </td>

//             <td className="text-left p-5 border-b-[1px] border-[#33333353] text-[#6c7079]">
//               <button
//                 className={`${
//                   isActive(operation)
//                     ? "bg-[#F04A48] cursor-pointer text-[#FFFEFE] p-[8px] border-none rounded hover:bg-[#ff8c8a]"
//                     : "bg-[#c5c5c5] cursor-pointer text-[#FFFEFE] p-[8px] border-none rounded hover:bg-[#acabab]   "
//                 }`}
//               >
//                 {operation}
//               </button>
//             </td>
//             <td className="p-5 border-b-[1px] border-[#33333353] text-[#6c7079]">
//               <button onClick={(e) => handleOrderUpdate(e, curUser)}  className="bg-[#003375] border-none text-white w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer text-s    hover:bg-[#003375a7]">
//                 {/* bg-[#0059ff] */}
//                 <span className="inline-block font-bold text-xl h-[36px] w-[10px] mt-[3px] mr-[2px] ">
//                   &gt;
//                 </span>
//               </button>
//             </td>
//           </tr>
//         );
//       })}

//     </>

//   );
// };

// const OrderPage = () => {
//   return (
//      <div className="order p-4 bg-[#F3F4F6] px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto3 ">
// <div className="content flex justify-between">
//         <h3 className="text-4xl font-display mb-14 text-[#677749] font-bold bg-[#F3F4F6]">
//           Orders
//         </h3>
//         <div className="button flex">
//           <a href="/AddOrders">
//             <button className="mt-10 mr-2 mb-10 ml-10 text-white cursor-pointer rounded p-[8px] hover:bg-[#003375a7] flex  items-center  border-none bg-[#003375]">
//               <HomeIcon className="block mr-[10px] h-[18px] w-[19px] font-bold " />
//               Create Order
//             </button>
//           </a>
//           <a href="/AddOrders">
//             <button className="ml-1 mt-10 mr-10 mb-10 text-white cursor-pointer rounded p-[8px] hover:bg-[#003375a7] flex  items-center border-none bg-[#003375]">
//               <PrinterIcon className="block mr-[10px] h-[18px] w-[19px] font-bold " />
//               Export Order
//             </button>
//           </a>
//         </div>
//       </div>
//       <table className="w-full ">
//         <thead className="bg-[#003375] justify-center text-white rounded-lg">
//           <tr>
//             <th className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] text-center rounded-bl-lg rounded-tl-lg">
//               Order Id
//             </th>
//             <th className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] text-center">
//               Product Name
//             </th>
//             <th className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] text-center">
//               Price
//             </th>
//             <th className="pt-[20px] pr-[15px] pb-[20px] pl-[15px]">
//               Payment Balance
//             </th>
//             <th className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] text-center">
//               Status
//             </th>
//             <th className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] text-left">
//               Operation
//             </th>
//             <th className="pt-[20px] pr-[15px] pb-[20px] pl-[15px] text-center rounded-tr-lg rounded-br-lg"></th>
//           </tr>
//         </thead>
//         <tbody className="ml-4">
//           <UserData users={data} />
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default OrderPage;



// import {
//   Edit as EditIcon,
//   Home as HomeIcon,
//   Print as PrinterIcon,
// } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   Box,
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
//   TablePagination,
// } from "@mui/material";
// import React, { useState } from "react";
 
// const data = [
//   {
//     id: 1000252,
//     name: "RIVAGO",
//     balance: 1000,
//     price: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000253,
//     name: "CASINO",
//     balance: 1200,
//     price: 50000,
//     status: "dispatched",
//     operation: "Already Dispatched",
//   },
//   {
//     id: 1000254,
//     name: "ACRILIA",
//     balance: 1500,
//     price: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000255,
//     name: "ARTEX",
//     balance: 2500,
//     price: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000256,
//     name: "LAZZARO",
//     balance: 2000,
//     price: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000257,
//     name: "MILANO",
//     balance: 800,
//     price: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000258,
//     name: "LAZZARO",
//     balance: 1800,
//     price: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000259,
//     name: "LEON",
//     balance: 1500,
//     price: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000260,
//     name: "FLIPPO",
//     balance: 2000,
//     price: 50000,
//     status: "dispatched",
//     operation: "Already Dispatched",
//   },
//   {
//     id: 1000261,
//     name: "LUCENTO",
//     balance: 1700,
//     price: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000262,
//     name: "LEON",
//     balance: 1000,
//     price: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
//   {
//     id: 1000263,
//     name: "LAZZARO",
//     balance: 1000,
//     price: 50000,
//     status: "pending",
//     operation: "Cancel Order",
//   },
//   {
//     id: 1000264,
//     name: "CASINO",
//     balance: 1000,
//     price: 50000,
//     status: "cancelled",
//     operation: "Cancelled",
//   },
// ];
 
// const UserData = ({ users }) => {
//   const navigate = useNavigate();
 
//   const isDispatched = (statusChecker) => {
//     return statusChecker === "dispatched" || statusChecker === "Dispatched";
//   };
 
//   const isActive = (orderChecker) => {
//     return orderChecker === "Cancel Order" || orderChecker === "cancel order";
//   };
 
//   const handleOrderUpdate = (event, order) => {
//     event.preventDefault();
//     navigate("/update-order", { state: { order } });
//   };
 
//   return (
//     <>
//       {users.map((curUser) => {
//         const { id, name, price, balance, status, operation } = curUser;
 
//         return (
//           <TableRow key={id}>
//             <TableCell align="center">
//               <Typography fontWeight="bold">{id}</Typography>
//             </TableCell>
//             <TableCell align="center" sx={{ color: "#6c7079" }}>
//               {name}
//             </TableCell>
//             <TableCell align="center" sx={{ color: "#6c7079" }}>
//               &#8377;{price}
//             </TableCell>
//             <TableCell align="center" sx={{ color: "#6c7079" }}>
//               &#8377;{balance}
//             </TableCell>
//             <TableCell align="center">
//               <Button
//                 disableRipple
//                 variant="contained"
//                 sx={{
//                   borderRadius: "50px",
//                   minWidth: "8vw",
//                   color: isDispatched(status) ? "green" : "#BD2B2B",
//                   backgroundColor: isDispatched(status) ? "#eefcee" : "#FFF3F2",
//                   borderColor: isDispatched(status) ? "green" : "#BD2B2B",
//                   border: 1,
//                   textTransform: "capitalize",
//                   boxShadow: "none",
//                   ":hover": {
//                     color: isDispatched(status) ? "green" : "#BD2B2B",
//                     backgroundColor: isDispatched(status)
//                       ? "#eefcee"
//                       : "#FFF3F2",
//                     borderColor: isDispatched(status) ? "green" : "#BD2B2B",
//                     boxShadow: "none",
//                   },
//                 }}
//               >
//                 {status}
//               </Button>
//             </TableCell>
//             <TableCell align="left">
//               <Button
//                 disableRipple
//                 variant="contained"
//                 sx={{
//                   boxShadow: "none",
//                   backgroundColor: isActive(operation) ? "#F04A48" : "#c5c5c5",
//                   color: "#FFFEFE",
//                   textTransform: "capitalize",
//                   ":hover": {
//                     backgroundColor: isActive(operation)
//                       ? "#ff8c8a"
//                       : "#acabab",
//                     boxShadow: "none",
//                   },
//                 }}
//               >
//                 {operation}
//               </Button>
//             </TableCell>
//             <TableCell align="center">
//               <Button
//                 variant="contained"
//                 startIcon={<EditIcon />}
//                 sx={{
//                   backgroundColor: "#2563eb",
//                   color: "white",
//                   fontSize: "0.75rem",
//                   padding: "4px 8px",
//                   borderRadius: "4px",
//                   boxShadow: "none",
//                   textTransform: "none",
//                   ":hover": {
//                     backgroundColor: "#3b82f6 ",
//                     boxShadow: "none",
//                   },
//                 }}
//               >
//                 Edit
//               </Button>
//             </TableCell>
//           </TableRow>
//         );
//       })}
//     </>
//   );
// };
 
// const OrderPageMui = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
 
//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };
 
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
 
//   const paginatedData = data.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );
 
//   return (
//         <div className="order p-4 bg-[#F3F4F6] px-4 sm:px-6 lg:px-8 pt-4  ml-10 lg:ml-72 w-auto3 ">

//     <Container maxWidth="lg" sx={{ backgroundColor: "#F3F4F6", p: 4 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography variant="h3" fontWeight="bold" color="#677749">
//           Orders
//         </Typography>
//         <Box>
//           <Button
//             variant="contained"
//             disableRipple
//             sx={{
//               backgroundColor: "#003375",
//               color: "white",
//               mx: 1,
//               boxShadow: "none",
//               textTransform: "capitalize",
//               fontSize: "0.925rem",
//               ":hover": {
//                 backgroundColor: "#cadcfc",
//                 color: "#374151",
//                 boxShadow: "none",
//               },
//             }}
//             startIcon={<HomeIcon />}
//             href="/AddOrders"
//           >
//             Create Order
//           </Button>
//           <Button
//             variant="contained"
//             disableRipple
//             sx={{
//               backgroundColor: "#003375",
//               color: "white",
//               mr: 0,
//               boxShadow: "none",
//               textTransform: "capitalize",
//               fontSize: "0.925rem",
//               ":hover": {
//                 backgroundColor: "#cadcfc",
//                 color: "#374151",
//                 boxShadow: "none",
//               },
//             }}
//             startIcon={<PrinterIcon />}
//             href="/Addorders"
//           >
//             Export Order
//           </Button>
//         </Box>
//       </Box>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow sx={{ backgroundColor: "#003375" }}>
//               <TableCell
//                 align="center"
//                 sx={{
//                   color: "white",

//                 }}
//               >
//                 Order Id
//               </TableCell>
//               <TableCell
//                 align="center"
//                 sx={{
//                   color: "white",
//                   fontWeight: "bold",
//                   fontSize: "0.925rem",
//                 }}
//               >
//                 Product Name
//               </TableCell>
//               <TableCell
//                 align="center"
//                 sx={{
//                   color: "white",
//                   fontWeight: "bold",
//                   fontSize: "0.925rem",
//                 }}
//               >
//                 Price
//               </TableCell>
//               <TableCell
//                 align="center"
//                 sx={{
//                   color: "white",
//                   fontWeight: "bold",
//                   fontSize: "0.925rem",
//                 }}
//               >
//                 Payment Balance
//               </TableCell>
//               <TableCell
//                 align="center"
//                 sx={{
//                   color: "white",
//                   fontWeight: "bold",
//                   fontSize: "0.925rem",
//                 }}
//               >
//                 Status
//               </TableCell>
//               <TableCell
//                 align="left"
//                 sx={{
//                   color: "white",
//                   fontWeight: "bold",
//                   fontSize: "0.925rem",
//                 }}
//               >
//                 Operation
//               </TableCell>
//               <TableCell align="center"></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             <UserData users={paginatedData} />
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>
//     </Container>
//     </div>
//   );
// };
 
// export default OrderPageMui;
 



// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Orders = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage] = useState(5);

//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from API
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://imlystudios-backend.onrender.com/api/orders/getAllOrders"
//         );
//         const result = await response.json();
//         setData(result.orders || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Calculate paginated data
//   const paginatedData = data.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   // Handle page change
//   const handlePageChange = (newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <div className="order p-4 bg-gray-100 px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="max-w-7xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between items-center ">
//         <h2 className="text-xl font-semibold">Orders</h2>      
//             <div>
//             <button
//               className="bg-blue-800 text-white px-4 py-2 rounded mx-1 hover:bg-blue-600"
//               onClick={() => navigate("/AddOrders")}
//             >
//               Create Order
//             </button>
//             <button
//               className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-600"
//               onClick={() => navigate("/AddOrders")}
//             >
//               Export Order
//             </button>
//           </div>
//         </div>
//         <div className="mt-6 bg-white shadow-md rounded overflow-hidden">
//           <table className="min-w-full">
//             <thead className="bg-blue-800">
//               <tr>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
//                   Order Id
//                 </th>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
//                   Product Name
//                 </th>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
//                   Price
//                 </th>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
//                   Payment Balance
//                 </th>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider">
//                   Operation
//                 </th>
//                 <th className="py-3 px-6 text-left text-xs font-medium text-white uppercase tracking-wider"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedData.map((order) => (
//                 <tr key={order.OrderID} className="hover:bg-gray-100">
//                   <td className="py-4 px-6 text-sm font-medium text-gray-900">
//                     {order.OrderID}
//                   </td>
//                   <td className="py-4 px-6 text-sm text-gray-500">
//                     {order.Customer?.FirstName || "N/A"}
//                   </td>
//                   <td className="py-4 px-6 text-sm text-gray-500">
//                     &#8377;{order.TotalAmount}
//                   </td>
//                   <td className="py-4 px-6 text-sm text-gray-500">
//                     &#8377;{order.TotalAmount - order.TotalQuantity}
//                   </td>
//                   <td className="py-4 px-6">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         order.OrderStatus === "Shipping"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {order.OrderStatus}
//                     </span>
//                   </td>
//                   <td className="py-4 px-6">
//                     <button
//                       className={`px-2 py-1 rounded ${
//                         order.OrderStatus === "Shipping"
//                           ? "bg-red-600 text-white"
//                           : "bg-gray-400 text-gray-800"
//                       } text-xs`}
//                     >
//                       {order.OrderStatus === "Shipping"
//                         ? "Cancel Order"
//                         : "Already Dispatched"}
//                     </button>
//                   </td>
//                   <td className="py-4 px-6">
//                     <button
//                       onClick={() =>
//                         navigate(`/update-order`, { state: { order } })
//                       }
//                       className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-500"
//                     >
//                       Edit
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="flex justify-between items-center mt-4">
//           <button
//             onClick={() => handlePageChange(page - 1)}
//             disabled={page === 0}
//             className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => handlePageChange(page + 1)}
//             disabled={(page + 1) * rowsPerPage >= data.length}
//             className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import { styled } from "@mui/material/styles";

// // Styled components
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#003375", // Dark blue color
//     color: theme.palette.common.white,
//     fontWeight: "bold",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// const Orders = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch data from API
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://imlystudios-backend.onrender.com/api/orders/getAllOrders"
//         );
//         const result = await response.json();
//         setData(result.orders || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

//   return (
//     <div className="order p-4 bg-gray-100 px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="max-w-7xl mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
//         <div className="flex justify-between items-center">
//           <h2 className="text-xl font-semibold">Orders</h2>
//           <div className="flex gap-6">
//             <button
// class="inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"              onClick={() => navigate("/AddOrders")}
//             >
//               Create Order
//             </button>
//             <button
// class="inline-flex items-center gap-x-1 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700"              onClick={() => navigate("/AddOrders")}
//             >
//               Export Order
//             </button>
//           </div>
//         </div>
//         <TableContainer component={Paper} className="mt-6">
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>Order Id</StyledTableCell>
//                 <StyledTableCell>Product Name</StyledTableCell>
//                 <StyledTableCell>Price</StyledTableCell>
//                 <StyledTableCell>Payment Balance</StyledTableCell>
//                 <StyledTableCell>Status</StyledTableCell>
//                 <StyledTableCell>Operation</StyledTableCell>
//                 <StyledTableCell></StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
//                 <StyledTableRow key={order.OrderID}>
//                   <StyledTableCell class="py-4 px-6 text-sm text-gray-500">{order.OrderID}</StyledTableCell>
//                   <StyledTableCell class="py-4 px-6 text-sm text-gray-500">{order.Customer?.FirstName || "N/A"}</StyledTableCell>
//                   <StyledTableCell class="py-4 px-6 text-sm text-gray-500">&#8377;{order.TotalAmount}</StyledTableCell>
//                   <StyledTableCell class="py-4 px-6 text-sm text-gray-500">
//                     &#8377;{order.TotalAmount - order.TotalQuantity}
//                   </StyledTableCell >
//                   <StyledTableCell class="py-4 px-6 text-sm text-gray-500">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         order.OrderStatus === "Shipping"
//                           ? "bg-green-100 text-green-800"
//                           : "bg-red-100 text-red-800"
//                       }`}
//                     >
//                       {order.OrderStatus}
//                     </span>
//                   </StyledTableCell>
//                   <StyledTableCell class="py-4 px-6 text-sm text-gray-500">
//                     <button
//                       className={`px-2 py-1 rounded ${
//                         order.OrderStatus === "Shipping"
//                           ? "bg-red-600 text-white"
//                           : "bg-gray-400 text-gray-800"
//                       } text-xs`}
//                     >
//                       {order.OrderStatus === "Shipping"
//                         ? "Cancel Order"
//                         : "Already Dispatched"}
//                     </button>
//                   </StyledTableCell>
//                   <StyledTableCell class="py-4 px-6 text-sm text-gray-500">
//                     <button
//                       onClick={() => navigate(`/update-order`, { state: { order } })}
//                       className="px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-500"
//                     >
//                       Edit
//                     </button>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//               {emptyRows > 0 && (
//                 <StyledTableRow style={{ height: 53 * emptyRows }}>
//                   <StyledTableCell colSpan={7} />
//                 </StyledTableRow>
//               )}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                 class="py-4 px-6 text-sm text-gray-500"
//                   rowsPerPageOptions={[5, 10, 25]}
//                   count={data.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   colSpan={7}
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// };

// export default Orders;


// import * as React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import StatusBadge from "./Satus";
// import FilterBar from "./FilterBar";
// import StatusUpdateDialog from "../Orders/StatusUpdateDialog";
// import { TablePagination } from "@mui/material";
// import Box from "@mui/material/Box";
// import { Edit } from "@mui/icons-material";
// import Button from "@mui/material/Button";
// import HomeIcon from "@mui/icons-material/Home";
// import PrinterIcon from "@mui/icons-material/Print";
// import { useContext } from "react";
// import { GlobalContext } from "../../Context/GlobalContext";
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#003375",
//     color: theme.palette.common.white,
//     fontWeight: "bold",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// export default function Orders() {
//   const { products,setProducts, loading, error } = useContext(GlobalContext);
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const navigate = useNavigate();

 

//   const handleStatusChange = (id, newStatus) => {
//     setProducts((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, status: newStatus } : item
//       )
//     );
//   };

//   const handleCancel = (id) => {
//     const newStatus = "Canceled";
//     handleStatusChange(id, newStatus);
//   };

//   const handleOrderUpdate = (event, order) => {
//     event.preventDefault();
//     navigate("/update-order", { state: { order } });
//   };

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//   };

//   const filteredOrders = products.filter(
//     (product) =>
//       selectedFilter === "All" || product.OrderStatus === selectedFilter
//   );

//   const paginatedData = filteredOrders.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h2 className="text-xl mb-5 font-semibold">Orders</h2>
//           </div>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", sm: "row" }, // Stack buttons vertically on small screens
//               alignItems: "center",
//               gap: { xs: 2, sm: 1 }, // Adds gap between buttons, different for small screens
//               mx: "auto",
//             }}
//           >
//             <Button
//               variant="contained"
//               disableRipple
//               sx={{
//                 backgroundColor: "#003375",
//                 color: "white",
//                 mx: { xs: 0, sm: 1 }, // Remove horizontal margin on small screens
//                 mb: { xs: 1, sm: 0 }, // Add margin bottom on small screens for spacing
//                 boxShadow: "none",
//                 textTransform: "capitalize",
//                 fontSize: "0.875rem",
//                 ":hover": {
//                   backgroundColor: "#cadcfc",
//                   color: "#374151",
//                   boxShadow: "none",
//                 },
//                 width: { xs: "100%", sm: "auto" }, // Full width on small screens
//               }}
//               startIcon={<HomeIcon />}
//               href="/AddOrders"
//             >
//               Create Order
//             </Button>
//             <Button
//               variant="contained"
//               disableRipple
//               sx={{
//                 backgroundColor: "#003375",
//                 color: "white",
//                 mr: { xs: 0, sm: 0 }, // Margin-right adjustment for responsiveness
//                 boxShadow: "none",
//                 textTransform: "capitalize",
//                 fontSize: "0.875rem",
//                 ":hover": {
//                   backgroundColor: "#cadcfc",
//                   color: "#374151",
//                   boxShadow: "none",
//                 },
//                 width: { xs: "100%", sm: "auto" }, // Full width on small screens
//               }}
//               startIcon={<PrinterIcon />}
//               href="/create-order"
//             >
//               Export Order
//             </Button>
//           </Box>
//         </div>
//         <div className="flex justify-center md:justify-end mb-4 px-4 md:px-0 mt-6">
//           <div className="flex flex-wrap justify-center space-x-2 md:space-x-2 md:justify-end">
//             <FilterBar
//               selectedFilter={selectedFilter}
//               onFilterChange={handleFilterChange}
//             />
//           </div>
//         </div>

//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>Order Id</StyledTableCell>
//                 <StyledTableCell>Product Name</StyledTableCell>
//                 <StyledTableCell align="center">Price</StyledTableCell>
//                 <StyledTableCell align="center">
//                   Payment Balance
//                 </StyledTableCell>
//                 <StyledTableCell align="center">Status</StyledTableCell>
//                 <StyledTableCell align="center">Update</StyledTableCell>
//                 <StyledTableCell align="center"></StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((product) => (
//                 <StyledTableRow key={product.OrderID}>
//                   <StyledTableCell>{product.OrderID}</StyledTableCell>
//                   <StyledTableCell>
//                     {product.Customer?.CreatedBy || "N/A"}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     &#8377;{product.TotalAmount}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {" "}
//                     &#8377;{product.TotalAmount - product.TotalQuantity}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     <StatusBadge status={product.OrderStatus} />
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     <button
//                       type="button"
//                       className={`rounded-md p-[3px] h-9 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  ${
//                         product.OrderStatus === "Dispatched"
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : product.OrderStatus === "Canceled"
//                           ? "bg-gray-300 cursor-not-allowed"
//                           : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
//                       } whitespace-normal`}
//                       disabled={
//                         product.OrderStatus === "Dispatched" ||
//                         product.OrderStatus === "Canceled"
//                       }
//                       onClick={() => handleCancel(product.OrderID)}
//                     >
//                       {product.OrderStatus === "Dispatched" ? (
//                         <>
//                           Already <br /> Dispatched
//                         </>
//                       ) : product.OrderStatus === "Canceled" ? (
//                         "Canceled"
//                       ) : (
//                         "Cancel Order"
//                       )}
//                     </button>
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     <Button
//                       onClick={(e) => handleOrderUpdate(e, product.OrderID)}
//                       variant="contained"
//                       startIcon={<Edit />}
//                       sx={{
//                         backgroundColor: "#2563eb",
//                         color: "white",
//                         fontSize: "0.75rem",
//                         padding: "4px 8px",
//                         borderRadius: "4px",
//                         boxShadow: "none",
//                         textTransform: "none",
//                         ":hover": {
//                           backgroundColor: "#3b82f6 ",
//                           boxShadow: "none",
//                         },
//                       }}
//                     >
//                       Edit
//                     </Button>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={filteredOrders.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//         <StatusUpdateDialog
//           isOpen={isDialogOpen}
//           onClose={() => setIsDialogOpen(false)}
//           item={{}} // You may need to pass the actual item or update this as needed
//         />
//       </div>
//     </div>
//   );
// }


// import * as React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import StatusBadge from "./Satus"
// import FilterBar from "./FilterBar";
// import StatusUpdateDialog from "../Orders/StatusUpdateDialog";
// import { TablePagination } from "@mui/material";
// import Box from "@mui/material/Box";
// import { Edit } from "@mui/icons-material";
// import Button from "@mui/material/Button";
// import HomeIcon from "@mui/icons-material/Home";
// import PrinterIcon from "@mui/icons-material/Print";
// import { useContext } from "react";
// import { GlobalContext } from "../../Context/GlobalContext";

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#003375",
//     color: theme.palette.common.white,
//     fontWeight: "bold",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));

// export default function Orders() {
//   const { products, setProducts, loading, error } = useContext(GlobalContext);
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const navigate = useNavigate();

//   const handleStatusChange = (id, newStatus) => {
//     setProducts((prevItems) =>
//       prevItems.map((item) =>
//         item.OrderID === id ? { ...item, OrderStatus: newStatus } : item
//       )
//     );
//   };

//   const handleCancel = (id) => {
//     const newStatus = "Canceled";
//     handleStatusChange(id, newStatus);
//   };

//   const handleOrderUpdate = (event, order) => {
//     event.preventDefault();
//     navigate("/update-order", { state: { order } });
//   };

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//   };

//   const filteredOrders = products.filter(
//     (product) =>
//       selectedFilter === "All" || product.OrderStatus === selectedFilter
//   );

//   const paginatedData = filteredOrders.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h2 className="text-xl mb-5 font-semibold">Orders</h2>
//           </div>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", sm: "row" }, // Stack buttons vertically on small screens
//               alignItems: "center",
//               gap: { xs: 2, sm: 1 }, // Adds gap between buttons, different for small screens
//               mx: "auto",
//             }}
//           >
//             <Button
//               variant="contained"
//               disableRipple
//               sx={{
//                 backgroundColor: "#003375",
//                 color: "white",
//                 mx: { xs: 0, sm: 1 }, // Remove horizontal margin on small screens
//                 mb: { xs: 1, sm: 0 }, // Add margin bottom on small screens for spacing
//                 boxShadow: "none",
//                 textTransform: "capitalize",
//                 fontSize: "0.875rem",
//                 ":hover": {
//                   backgroundColor: "#cadcfc",
//                   color: "#374151",
//                   boxShadow: "none",
//                 },
//                 width: { xs: "100%", sm: "auto" }, // Full width on small screens
//               }}
//               startIcon={<HomeIcon />}
//               href="/AddOrders"
//             >
//               Create Order
//             </Button>
//             <Button
//               variant="contained"
//               disableRipple
//               sx={{
//                 backgroundColor: "#003375",
//                 color: "white",
//                 mr: { xs: 0, sm: 0 }, // Margin-right adjustment for responsiveness
//                 boxShadow: "none",
//                 textTransform: "capitalize",
//                 fontSize: "0.875rem",
//                 ":hover": {
//                   backgroundColor: "#cadcfc",
//                   color: "#374151",
//                   boxShadow: "none",
//                 },
//                 width: { xs: "100%", sm: "auto" }, // Full width on small screens
//               }}
//               startIcon={<PrinterIcon />}
//               href="/create-order"
//             >
//               Export Order
//             </Button>
//           </Box>
//         </div>
//         <div className="flex justify-center md:justify-end mb-4 px-4 md:px-0 mt-6">
//           <div className="flex flex-wrap justify-center space-x-2 md:space-x-2 md:justify-end">
//             <FilterBar
//               selectedFilter={selectedFilter}
//               onFilterChange={handleFilterChange}
//             />
//           </div>
//         </div>

//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>Order Id</StyledTableCell>
//                 <StyledTableCell>Created By</StyledTableCell>
//                 <StyledTableCell align="center">Status</StyledTableCell>
//                 <StyledTableCell align="center">Updated By</StyledTableCell>
//                 <StyledTableCell align="center">Created At</StyledTableCell>
//                 <StyledTableCell align="center">Updated At</StyledTableCell>
//                 <StyledTableCell align="center">Action</StyledTableCell>
//                 <StyledTableCell align="center"></StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((product) => (
//                 <StyledTableRow key={product.OrderID}>
//                   <StyledTableCell>{product.OrderID}</StyledTableCell>
//                   <StyledTableCell>{product.CreatedBy}</StyledTableCell>
//                   <StyledTableCell align="center">
//                     <StatusBadge status={product.OrderStatus} />
//                   </StyledTableCell>
//                   <StyledTableCell>{product.UpdatedBy}</StyledTableCell>
//                   <StyledTableCell align="center">
//                     {new Date(product.CreatedAt).toLocaleString()}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {new Date(product.UpdatedAt).toLocaleString()}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     <button
//                       type="button"
//                       className={`rounded-md p-[3px] h-9 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//                         product.OrderStatus === "Dispatched"
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : product.OrderStatus === "Canceled"
//                           ? "bg-gray-300 cursor-not-allowed"
//                           : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
//                       } whitespace-normal`}
//                       disabled={
//                         product.OrderStatus === "Dispatched" ||
//                         product.OrderStatus === "Canceled"
//                       }
//                       onClick={() => handleCancel(product.OrderID)}
//                     >
//                       {product.OrderStatus === "Dispatched" ? (
//                         <>
//                           Already <br /> Dispatched
//                         </>
//                       ) : product.OrderStatus === "Canceled" ? (
//                         "Canceled"
//                       ) : (
//                         "Cancel Order"
//                       )}
//                     </button>
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     <Button
//                       onClick={(e) => handleOrderUpdate(e, product.OrderID)}
//                       variant="contained"
//                       startIcon={<Edit />}
//                       sx={{
//                         backgroundColor: "#2563eb",
//                         color: "white",
//                         fontSize: "0.75rem",
//                         padding: "4px 8px",
//                         borderRadius: "4px",
//                         boxShadow: "none",
//                         textTransform: "none",
//                         ":hover": {
//                           backgroundColor: "#3b82f6 ",
//                           boxShadow: "none",
//                         },
//                       }}
//                     >
//                       Edit
//                     </Button>
//                   </StyledTableCell>
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={filteredOrders.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </TableContainer>
//         <StatusUpdateDialog
//           isOpen={isDialogOpen}
//           onClose={() => setIsDialogOpen(false)}
//           item={{}} // You may need to pass the actual item or update this as needed
//         />
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';
// import { Edit } from '@mui/icons-material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import StatusBadge from './Satus';
// import FilterBar from './FilterBar';
// import TablePagination from '@mui/material/TablePagination';
// import Box from '@mui/material/Box';
// import { useContext, useState } from 'react';
// import { GlobalContext } from '../../Context/GlobalContext';
// import HomeIcon from '@mui/icons-material/Home';
// import PrinterIcon from '@mui/icons-material/Print';
// import { styled } from '@mui/material/styles';
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "#003375",
//     color: theme.palette.common.white,
//     fontWeight: "bold",
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
//   "&:last-child td, &:last-child th": {
//     border: 0,
//   },
// }));
// const handleCancel = (id) => {
//   const newStatus = "Canceled";
//   setProducts((prevItems) =>
//     prevItems.map((item) =>
//       item.OrderID === id ? { ...item, OrderStatus: newStatus } : item
//     )
//   );
// };


// const Orders = () => {
//   const { products, setProducts, loading, error } = useContext(GlobalContext);
//   const [selectedFilter, setSelectedFilter] = useState("All");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const navigate = useNavigate();

//   const handleOrderUpdate = (orderId) => {
//     navigate("/edit-order", { state: { orderId } });
//   };

//   const filteredOrders = products.filter(
//     (product) =>
//       selectedFilter === "All" || product.OrderStatus === selectedFilter
//   );

//   const paginatedData = filteredOrders.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
//       <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
//         <div className="sm:flex sm:items-center">
//           <div className="sm:flex-auto">
//             <h2 className="text-xl mb-5 font-semibold">Orders</h2>
//           </div>
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", sm: "row" },
//               alignItems: "center",
//               gap: { xs: 2, sm: 1 },
//               mx: "auto",
//             }}
//           >
//             <Button
//               variant="contained"
//               disableRipple
//               sx={{
//                 backgroundColor: "#003375",
//                 color: "white",
//                 mx: { xs: 0, sm: 1 },
//                 mb: { xs: 1, sm: 0 },
//                 boxShadow: "none",
//                 textTransform: "capitalize",
//                 fontSize: "0.875rem",
//                 ":hover": {
//                   backgroundColor: "#cadcfc",
//                   color: "#374151",
//                   boxShadow: "none",
//                 },
//                 width: { xs: "100%", sm: "auto" },
//               }}
//               startIcon={<HomeIcon />}
//               href="/AddOrders"
//             >
//               Create Order
//             </Button>
//             <Button
//               variant="contained"
//               disableRipple
//               sx={{
//                 backgroundColor: "#003375",
//                 color: "white",
//                 mr: { xs: 0, sm: 0 },
//                 boxShadow: "none",
//                 textTransform: "capitalize",
//                 fontSize: "0.875rem",
//                 ":hover": {
//                   backgroundColor: "#cadcfc",
//                   color: "#374151",
//                   boxShadow: "none",
//                 },
//                 width: { xs: "100%", sm: "auto" },
//               }}
//               startIcon={<PrinterIcon />}
//               href="/create-order"
//             >
//               Export Order
//             </Button>
//           </Box>
//         </div>
//         <div className="flex justify-center md:justify-end mb-4 px-4 md:px-0 mt-6">
//           <div className="flex flex-wrap justify-center space-x-2 md:space-x-2 md:justify-end">
//             <FilterBar
//               selectedFilter={selectedFilter}
//               onFilterChange={setSelectedFilter}
//             />
//           </div>
//         </div>

//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 700 }} aria-label="customized table">
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>Order Id</StyledTableCell>
//                 <StyledTableCell>Product Name</StyledTableCell>
//                 <StyledTableCell align="center">Price</StyledTableCell>
//                 <StyledTableCell align="center">
//                   Payment Balance
//                 </StyledTableCell>
//                 <StyledTableCell align="center">Status</StyledTableCell>
//                 <StyledTableCell align="center">Update</StyledTableCell>
//                 <StyledTableCell align="center"></StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedData.map((product) => (
//                 <StyledTableRow key={product.OrderID}>
//                   <StyledTableCell>{product.OrderID}</StyledTableCell>
//                   <StyledTableCell>
//                     {product.CreatedBy || "N/A"}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     &#8377;{product.TotalAmount}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {" "}
//                     &#8377;{product.TotalAmount - product.TotalQuantity}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     <StatusBadge status={product.OrderStatus} />
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     <button
//                       type="button"
//                       className={`rounded-md p-[3px] h-9 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  ${
//                         product.OrderStatus === "Dispatched"
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : product.OrderStatus === "Canceled"
//                           ? "bg-gray-300 cursor-not-allowed"
//                           : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
//                       } whitespace-normal`}
//                       disabled={
//                         product.OrderStatus === "Dispatched" ||
//                         product.OrderStatus === "Canceled"
//                       }
//                       onClick={() => handleCancel(product.OrderID)}
//                     >
//                       {product.OrderStatus === "Dispatched" ? (
//                         <>
//                           Already <br /> Dispatched
//                         </>
//                       ) : product.OrderStatus === "Canceled" ? (
//                         "Canceled"
//                       ) : (
//                         "Cancel Order"
                     
//                       )}
//                       </button>
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       <Button
//                         onClick={() => handleOrderUpdate(product.OrderID)}
//                         variant="contained"
//                         startIcon={<Edit />}
//                         sx={{
//                           backgroundColor: "#2563eb",
//                           color: "white",
//                           fontSize: "0.75rem",
//                           padding: "4px 8px",
//                           borderRadius: "4px",
//                           boxShadow: "none",
//                           textTransform: "none",
//                           ":hover": {
//                             backgroundColor: "#3b82f6 ",
//                             boxShadow: "none",
//                           },
//                         }}
//                       >
//                         Edit
//                       </Button>
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//             <TablePagination
//               rowsPerPageOptions={[5, 10, 25]}
//               component="div"
//               count={filteredOrders.length}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onPageChange={handleChangePage}
//               onRowsPerPageChange={handleChangeRowsPerPage}
//             />
//           </TableContainer>
//         </div>
//       </div>
//     );
//     };
 
//     export default Orders;
 


import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PrinterIcon from '@mui/icons-material/Print';
import { Edit } from '@mui/icons-material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import StatusBadge from './Satus';
import FilterBar from './FilterBar';
import { GlobalContext } from '../../Context/GlobalContext';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#003375",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Orders = () => {
  const { products, setProducts } = useContext(GlobalContext);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();

  const handleOrderUpdate = (orderId) => {
    navigate("/edit-order", { state: { orderId } });
  };

  const handleCancel = (id) => {
    const newStatus = "Canceled";
    setProducts((prevItems) =>
      prevItems.map((item) =>
        item.OrderID === id ? { ...item, OrderStatus: newStatus } : item
      )
    );
  };

  const filteredOrders = products.filter(
    (product) =>
      selectedFilter === "All" || product.OrderStatus === selectedFilter
  );

  const paginatedData = filteredOrders.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-72 w-auto">
      <div className="px-4 sm:px-6 lg:px-8 pt-4 w-auto bg-white">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h2 className="text-xl mb-5 font-semibold">Orders</h2>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: { xs: 2, sm: 1 },
              mx: "auto",
            }}
          >
            <Button
              variant="contained"
              disableRipple
              sx={{
                backgroundColor: "#003375",
                color: "white",
                mx: { xs: 0, sm: 1 },
                mb: { xs: 1, sm: 0 },
                boxShadow: "none",
                textTransform: "capitalize",
                fontSize: "0.875rem",
                ":hover": {
                  backgroundColor: "#cadcfc",
                  color: "#374151",
                  boxShadow: "none",
                },
                width: { xs: "100%", sm: "auto" },
              }}
              startIcon={<HomeIcon />}
              href="/AddOrders"
            >
              Create Order
            </Button>
            <Button
              variant="contained"
              disableRipple
              sx={{
                backgroundColor: "#003375",
                color: "white",
                mr: { xs: 0, sm: 0 },
                boxShadow: "none",
                textTransform: "capitalize",
                fontSize: "0.875rem",
                ":hover": {
                  backgroundColor: "#cadcfc",
                  color: "#374151",
                  boxShadow: "none",
                },
                width: { xs: "100%", sm: "auto" },
              }}
              startIcon={<PrinterIcon />}
              href="/create-order"
            >
              Export Order
            </Button>
          </Box>
        </div>
        <div className="flex justify-center md:justify-end mb-4 px-4 md:px-0 mt-6">
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-2 md:justify-end">
            <FilterBar
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          </div>
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Order Id</StyledTableCell>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">
                  Payment Balance
                </StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Update</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((product) => (
                <StyledTableRow key={product.OrderID}>
                  <StyledTableCell>{product.OrderID}</StyledTableCell>
                  <StyledTableCell>
                    {product.CreatedBy || "N/A"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    &#8377;{product.TotalAmount}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    &#8377;{product.TotalAmount - product.TotalQuantity}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <StatusBadge status={product.OrderStatus} />
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <button
                      type="button"
                      className={`rounded-md p-[3px] h-9 text-xs font-semibold text-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2  ${
                        product.OrderStatus === "Dispatched"
                          ? "bg-gray-400 cursor-not-allowed"
                          : product.OrderStatus === "Canceled"
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-500 focus:ring-red-500"
                      } whitespace-normal`}
                      disabled={
                        product.OrderStatus === "Dispatched" ||
                        product.OrderStatus === "Canceled"
                      }
                      onClick={() => handleCancel(product.OrderID)}
                    >
                      {product.OrderStatus === "Dispatched" ? (
                        <>
                          Already <br /> Dispatched
                        </>
                      ) : product.OrderStatus === "Canceled" ? (
                        "Canceled"
                      ) : (
                        "Cancel Order"
                      )}
                    </button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      onClick={() => handleOrderUpdate(product.OrderID)}
                      variant="contained"
                      startIcon={<Edit />}
                      sx={{
                        backgroundColor: "#2563eb",
                        color: "white",
                        fontSize: "0.75rem",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        boxShadow: "none",
                        textTransform: "none",
                        ":hover": {
                          backgroundColor: "#3b82f6 ",
                          boxShadow: "none",
                        },
                      }}
                    >
                      Edit
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredOrders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
    </div>
  );
};

export default Orders;
