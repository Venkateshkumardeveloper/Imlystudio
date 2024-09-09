

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import {   MdArrowBackIosNew, MdDelete, MdOutlineArrowForwardIos } from "react-icons/md";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import TablePagination from '@mui/material/TablePagination';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { RxCross1 } from "react-icons/rx";
// import { FiUpload } from "react-icons/fi";


// import {
//   Combobox,

// } from '@headlessui/react';
// import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';


// const categories = [
//   { id: 1, name: 'Walk-in', subOptions: ["Newspaper ad"] },
//   { id: 2, name: 'Social Media', subOptions: ['Google', 'Facebook', 'Instagram'] },
//   { id: 3, name: 'Reference', subOptions: ['Existing Client', 'Directors', 'Employee'] },
// ];
// const steps = ['Order Details', 'Design', 'Order Status', "payments"];

// function AddOrders() {
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [page, setPage] = useState(0);
//   const [orders, setOrders] = useState([]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) =>
//         category.name.toLowerCase().includes(query.toLowerCase())
//       );

//   const subOptions = selectedCategory
//     ? categories.find(cat => cat.id === selectedCategory.id)?.subOptions || []
//     : [];
//   const [orderDetails, setOrderDetails] = useState({
//     firstname: '',
//     lastname: '',
//     orderStatus: '',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     address1:"",
//     city:"",
//     state: "",
//     zipcode:"",
//     createdBy: '',
//     design: '',
//     type: '',
//     categories:"",
//     length: '',
//     height: '',
//     width: '',
//     totalAmount:"",
//     advanceAmount:"",
//     comments:"",
//     orderStatusComments:"",
//     startdate:"",
//     enddate:"",
//     paymentstype:"",
//     finalLength:"",
//     finalHeight:"",
//     finalWidth:"",
//     paymentscomments:"",
//   });
//   const handleCategoryChange = (category) => {
//     setQuery('');
//     setSelectedCategory(category);
//     setSelectedSubOption(''); // Reset sub-option when category changes
//     setOrderDetails(prevDetails => ({
//       ...prevDetails,
//       categories: category ? category.name : ''
//     }));
//   };
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);

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



//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (images.length + files.length > 6) {
//       alert('You can only upload up to 6 images.');
//       return;
//     }
//     const newImages = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setImages([...images, ...newImages]);
//     setImagePreviews([...imagePreviews, ...newImages.map((img) => img.preview)]);
//   };

//   const handleImageRemove = (index) => {
//     const newImages = images.filter((_, i) => i !== index);
//     const newPreviews = imagePreviews.filter((_, i) => i !== index);
//     setImages(newImages);
//     setImagePreviews(newPreviews);
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!orderDetails.firstname) newErrors.firstname = 'first name is required';
//     if (!orderDetails.lastname) newErrors.lastname = 'last name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address line1 is required';
//     if (!orderDetails.address1) newErrors.address1 = 'Address line2 is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';
//     // if (!orderDetails.categories) newErrors.categories = 'categories is required';
//     // if (!selectedSubOption) newErrors.subOption = 'Sub-option is required';
//     if (!orderDetails.city) newErrors.city = 'City is required';
//     if (!orderDetails.state) newErrors.state = 'State is required';
//     if (!orderDetails.length) newErrors.length = 'length is required';
//     if (!orderDetails.width) newErrors.width = 'width is required';
//     if (!orderDetails.totalAmount) newErrors.totalAmount = 'TotalAmount is required';
//     if (!orderDetails.advanceAmount) newErrors.advanceAmount = 'Advance Amount is required';
//     if (!orderDetails.comments) newErrors.comments = 'Comments is required';
//     if (!orderDetails. orderStatusComments) newErrors.orderStatusComments = 'Comments is required';
//     if (!orderDetails.startdate) newErrors.startdate = 'StartDate is required';
//     if (!orderDetails.enddate) newErrors.enddate = 'EndDate is required';
//     if (!orderDetails.paymentstype) newErrors.paymentstype = 'Payments Type is required'; 
//     if (!orderDetails.paymentscomments) newErrors.paymentscomments = 'Payments comments Type is required'; 

//     if (!orderDetails.finalLength) newErrors.finalLength = 'Final length is required';
//     if (!orderDetails.finalWidth) newErrors.finalWidth = 'Final Width is required';
//     if (!orderDetails.finalHeight) newErrors.finalHeight = 'Final height is required';


//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       toast.error('Please fill in all required fields.', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//     });
//       return;
//     }

//     setSubmittedDetails({ ...orderDetails, images: imagePreviews, category: selectedCategory?.name || '', subOption: selectedSubOption || ''}); // Store the submitted details including image previews
//     setShowAlert(true);

//     setOrderDetails({
//       firstname: '',
//       lastname: '',
//       orderStatus: '',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       address1: '',
//       city: '',
//       state: '',
//       zipcode:"",
//       createdBy: '',
//       design: '',
//       type: '',
//       categories: '',
//       length: '',
//       height: '',
//       width: '',
//       totalAmount: '',
//       advanceAmount: '',
//       comments:"",
//       orderStatusComments:"",
//       startdate: "",
//       enddate: "",
//       paymentstype: "",
//       finalLength: "",
//       finalHeight: "",
//       finalWidth: "",
//       paymentscomments: "",
//     });
//     setImages([]);
//     setImagePreviews([]);
//     setSelectedSubOption('');

//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   const handleCancel = () => {
//     setOrderDetails({
//       firstname: '',
//       lastname: '',
//       email: '',
//       phone: '',
//       address: '',
//       address1: '',
//       city: '',
//       state: '',
//       zipcode: '',
//       orderStatus: '',
//       createdBy: '',
//       deliveryDate: '',
//       design: '',
//       type: '',
//       categories: '',
//       subOption: '',
//       images: [],
//       length: '',
//       height: '',
//       width: '',
//       totalAmount: '',
//       advanceAmount: '',
//       comments:'',
//       orderStatusComments:'',
//       startdate: '',
//       enddate: '',
//       paymentstype: '',
//       finalHeight:"",
//       finalWidth:"",
//       finalLength: '',
//       pdfPreview :"",
//       paymentscomments: '',
//     });
//     setActiveStep(0); // Optional: Reset to the first step
//   };

//   const amountToBePaid = orderDetails.totalAmount - orderDetails.advanceAmount;
//  const remainder = amountToBePaid / orderDetails.installments;
//  const [showSearchCard, setShowSearchCard] = useState(false);

//  const handleAddOrder = () => {
//   // Validate the form fields
//   const newErrors = {};
//   if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//   if (!orderDetails.createdBy) newErrors.createdBy = 'Assign To is required';
//   if (!orderDetails.startdate) newErrors.startdate = 'Start Date is required';
//   if (!orderDetails.enddate) newErrors.enddate = 'End Date is required';
//   setErrors(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     // Add the order to the orders array
//     setOrders([...orders, orderDetails]);

//     // Clear the form fields
//     setOrderDetails({
//       orderStatus: '',
//       createdBy: '',
//       startdate: '',
//       enddate: '',
//       orderStatusComments: ''
//     });
//   }
// };


//  const handleExistingUserClick = () => {
//      setShowSearchCard(!showSearchCard);
//  };
 
//  const handleAddOrder1 = () => {
//   // Validate the form fields
//   const newErrors = {};
//   if (!orderDetails.totalAmount) newErrors.totalAmount = 'Total amount is required';
//   if (!orderDetails.advanceAmount) newErrors.advanceAmount = 'Advance amountTo is required';
//   if (!orderDetails.paymentstype) newErrors.paymentstype = 'Payments Type is required';
//   if (!orderDetails.paymentscomments) newErrors.paymentscomments = 'Payments comments is required';


//   setErrors(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     // Add the order to the orders array
//     setOrders([...orders, orderDetails]);

//     // Clear the form fields
//     setOrderDetails({
//       totalAmount: '',
//       advanceAmount: '',
//       paymentstype: '',
//       balanceAmount: '',
//       paymentscomments: '',
//     });
//   }
// };

// const [pdfFile, setPdfFile] = useState(null);
//   const [pdfPreview, setPdfPreview] = useState('');
//   const handlePdfChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setPdfFile(file);
//       setPdfPreview(URL.createObjectURL(file));
//     }
//   };

//   const handlePdfRemove = () => {
//     setPdfFile(null);
//     setPdfPreview('');
//   };
//   const [selectedReferralType, setSelectedReferralType] = useState('');
//   const handleReferralTypeChange = (value) => {
//     if (value) {
//       setSelectedReferralType(value);
//     } else {
//       // Handle the case where no value is selected
//       setSelectedReferralType('');
//     }
//   };
//   const [refereeName, setRefereeName] = useState('');
//   const handleRefereeNameChange = (event) => {
//     setRefereeName(event.target.value);
//   };
//   const [selectedSocialMediaPlatform, setSelectedSocialMediaPlatform] = useState('');
//   const handleSocialMediaPlatformChange = (value) => {
//     if (value) {
//       setSelectedSocialMediaPlatform(value);
//     } else {
//       setSelectedSocialMediaPlatform('');
//     }
//   };
      
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile && uploadedFile.type === "application/pdf") {
//       setFile(uploadedFile);
//     } else {
//       alert("Please upload a PDF file.");
//     }
//   };

//   const handleDelete = () => {
//     setFile(null);
//   };

//   const [file1, setFile1] = useState(null);

//   const handleFileChange1 = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile && uploadedFile.type === "application/pdf") {
//       setFile1(uploadedFile);
//     } else {
//       alert("Please upload a PDF file.");
//     }
//   };

//   const handleDelete1 = () => {
//     setFile1(null);
//   };

//   const [selectedReferenceSubOption, setSelectedReferenceSubOption] = useState('');
//   const [error, setError] = useState('');

 

//   const handleReferenceSubOptionChange = (value) => {
//     setSelectedReferenceSubOption(value);
//     if (value) {
//       setRefereeName('');
//     }
//   };

  

//   return (
//     <>
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8   rounded-lg">
//             {/* Button at the top */} <ToastContainer />
            
//             {/* Search Card */}
//             {showSearchCard && (
//                 <div className="mt-4 p-4 border rounded shadow-lg">
//                     <h2 className="text-lg font-bold mb-4">Search User</h2>
//                     <input 
//                         type="text" 
//                         placeholder="Search by email or mobile number" 
//                         className="w-full p-2 border rounded mb-4"
//                     />
//                     <button className="bg-green-500 text-white px-4 py-2 rounded">
//                         Search
//                     </button>
//                 </div>
//             )}
//         </div>
//     <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">

//             <Box sx={{ width: '100%' }}>
//   <Stepper activeStep={activeStep} className="mb-6" alternativeLabel>
//     {steps.map((label, index) => {
//       const stepProps = {};
//       const labelProps = {};
//       if (isStepOptional(index)) {
//         // Optional step logic
//       }
//       if (isStepSkipped(index)) {
//         stepProps.completed = false;
//       }
//       return (
//         <Step key={label} {...stepProps}>
//           <StepLabel {...labelProps}>
//             {label} {/* Label for the step */}
//           </StepLabel>
//         </Step>
//       );
//     })}
//   </Stepper>
//   {activeStep === steps.length ? (
//     <React.Fragment>
//       <Typography className="text-center text-xl mb-4">
//         All steps completed - you're finished
//       </Typography>
//       <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//         <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//           Reset
//         </Button>
//       </Box>
//     </React.Fragment>
//   ) : (
//     <React.Fragment>
//       {/* <Typography className="text-center text-lg mb-4">
//         Step {activeStep + 1}: {steps[activeStep]}
//       </Typography> */}
//       <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           pt: 2 
//         }}
//       >

      
//               {activeStep === 0 && (
//                 <>
//                 <div className='grid'>
//                 <div>
//                     <label className="block text-xs font-medium text-gray-700">First name</label>
//                     <input
//                       type="text"
//                       name="firstname"
//                       value={orderDetails.firstname}
//                       onChange={handleChange}
//                       className={` p-1 mt-2 mb-1 w-full border rounded-md ${errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Last name</label>
//                     <input
//                       type="text"
//                       name="lastname"
//                       value={orderDetails.lastname}
//                       onChange={handleChange}
//                       className={` p-1 mt-2 mb-1 w-full border rounded-md ${errors.lastname ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Email</label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={orderDetails.email}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Phone</label>
//                     <input
//                       type="number"
//                       name="phone"
//                       value={orderDetails.phone}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Type</label>
//                     <select
//                       name="type"
//                       value={orderDetails.type}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                     >
//                       <option value="select a type">Select a Type</option>
//                       <option value="Kitchen">Kitchen</option>
//                       <option value="Wardrobe">Wardrobe</option>
//                       <option value="Living">Living</option>
//                     </select>
//                     {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Expected Delivery Date</label>
//                     <input
//                       type="date"
//                       name="deliveryDate"
//                       value={orderDetails.deliveryDate}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Comments</label>
//                     <input
//                       type="text"
//                       name="comments"
//                       value={orderDetails.comments}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.comments ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.comments && <p className="text-red-500 text-sm mt-1">{errors.comments}</p>}
//                   </div>
//                   {/* <div className="mb-4">
//       <label className="block text-xs font-medium text-gray-700">Referred By</label>
//       <Combobox
//         as="div"
//         value={selectedCategory}
//         onChange={handleCategoryChange}

//       >
//         <div className="relative ">
//           <Combobox.Input
//             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(category) => category?.name}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           {filteredCategories.length > 0 && (
//             <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {filteredCategories.map((category) => (
//                 <Combobox.Option
//                   key={category.id}
//                   value={category}
//                   className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                 >
//                   <span className="block truncate group-data-[selected]:font-semibold">
//                     {category.name}
//                   </span>

//                   <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                   </span>
//                 </Combobox.Option>
//               ))}
//             </Combobox.Options>
//           )}
//         </div>
//       </Combobox>

//       {selectedCategory && subOptions.length > 0 && (
//         <div className="mt-4">
//           <label className="block text-xs font-medium text-gray-700">Sub-Category</label>
//           <Combobox
//             as="div"
//             value={selectedSubOption}
//             onChange={setSelectedSubOption}
//           >
//             <div className="relative ">
//               <Combobox.Input
//                 className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 onChange={(event) => setQuery(event.target.value)}
//                 displayValue={(subOption) => subOption}
//               />
//               <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </Combobox.Button>

//               {subOptions.length > 0 && (
//                 <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                   {subOptions.map((option, index) => (
//                     <Combobox.Option
//                       key={index}
//                       value={option}
//                       className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                     >
//                       <span className="block truncate group-data-[selected]:font-semibold">
//                         {option}
//                       </span>

//                       <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                         <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                       </span>
//                     </Combobox.Option>
//                   ))}
//                 </Combobox.Options>
//               )}
//             </div>
//           </Combobox>
//         </div>
//       )}

//     </div> */}
//     {/* <div className="mb-4">
//   <label className="block text-xs font-medium text-gray-700">Referred By</label>
//   <Combobox
//     as="div"
//     value={selectedReferralType}
//     onChange={handleReferralTypeChange}
//   >
//     <div className="relative">
//       <Combobox.Input
//         className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//         // displayValue={(type) => type}
//         onChange={(event) => setQuery(event.target.value)}
//   displayValue={(type) => type || ''} 
//       />
//       <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//         <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//       </Combobox.Button>

//       <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//         {['Social Media', 'Walk-In', 'Reference'].map((type, index) => (
//           <Combobox.Option
//             key={index}
//             value={type}
//             className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//           >
//             <span className="block truncate group-data-[selected]:font-semibold">
//               {type}
//             </span>

//             <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//               <CheckIcon className="h-5 w-5" aria-hidden="true" />
//             </span>
//           </Combobox.Option>
//         ))}
//       </Combobox.Options>
//     </div>
//   </Combobox>

//   {selectedReferralType === 'Reference' && (
//     <div className="mt-4">
//       <label className="block text-xs font-medium text-gray-700">Referee Name</label>
//       <input
//         type="text"
//         name="refereeName"
//         value={refereeName}
//         onChange={handleRefereeNameChange}
//         className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//       />
//     </div>
//   )}

//   {selectedReferralType === 'Social Media' && (
//     <div className="mt-4">
//       <label className="block text-xs font-medium text-gray-700">Social Media Platform</label>
//       <Combobox
//         as="div"
//         value={selectedSocialMediaPlatform}
//         onChange={handleSocialMediaPlatformChange}
//       >
//         <div className="relative">
//           <Combobox.Input
//             className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             // displayValue={(platform) => platform}
//             onChange={(event) => setQuery(event.target.value)}
//   displayValue={(type) => type || ''} 
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((platform, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={platform}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//               >
//                 <span className="block truncate group-data-[selected]:font-semibold">
//                   {platform}
//                 </span>

//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>
//     </div>
//   )}
// </div>
//  */}
//   <div className="mb-4">
//       <label className="block text-xs font-medium text-gray-700">Referred By</label>
//       <Combobox as="div" value={selectedReferralType} onChange={handleReferralTypeChange}>
//         <div className="relative">
//           <Combobox.Input
//             className="w-full  mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(type) => type || ''}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Social Media', 'Walk-In', 'Reference'].map((type, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={type}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//               >
//                 <span className="block truncate group-data-[selected]:font-semibold">
//                   {type}
//                 </span>

//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>

//       {/* Conditionally render the additional input fields */}
//       {selectedReferralType === 'Reference' && (
//         <div className="mt-4">
//           <label className="block text-xs font-medium text-gray-700">Reference Sub-option</label>
//           <Combobox as="div" value={selectedReferenceSubOption} onChange={handleReferenceSubOptionChange}>
//             <div className="relative">
//               <Combobox.Input
//                 className="w-full  mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 onChange={(event) => setQuery(event.target.value)}
//                 displayValue={(option) => option || ''}
//               />
//               <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </Combobox.Button>

//               <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                 {['Director', 'Employee', 'Existing'].map((option, index) => (
//                   <Combobox.Option
//                     key={index}
//                     value={option}
//                     className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                   >
//                     <span className="block truncate group-data-[selected]:font-semibold">
//                       {option}
//                     </span>

//                     <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   </Combobox.Option>
//                 ))}
//               </Combobox.Options>
//             </div>
//           </Combobox>
//         </div>
//       )}

//       {selectedReferralType === 'Reference' && selectedReferenceSubOption && (
//         <div className="mt-4">
//           <label className="block text-xs font-medium text-gray-700">Referee Name</label>
//           <input
//             type="text"
//             name="refereeName"
//             value={refereeName}
//             onChange={handleRefereeNameChange}
//             className="w-full  mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           />
//         </div>
//       )}

//       {selectedReferralType === 'Social Media' && (
//         <div className="mt-4">
//           <label className="block text-xs font-medium text-gray-700">Social Media Platform</label>
//           <Combobox as="div" value={selectedSocialMediaPlatform} onChange={setSelectedSocialMediaPlatform}>
//             <div className="relative">
//               <Combobox.Input
//                 className="w-full  mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 onChange={(event) => setQuery(event.target.value)}
//                 displayValue={(platform) => platform || ''}
//               />
//               <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </Combobox.Button>

//               <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                 {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((platform, index) => (
//                   <Combobox.Option
//                     key={index}
//                     value={platform}
//                     className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                   >
//                     <span className="block truncate group-data-[selected]:font-semibold">
//                       {platform}
//                     </span>

//                     <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   </Combobox.Option>
//                 ))}
//               </Combobox.Options>
//             </div>
//           </Combobox>
//         </div>
//       )}

//       {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}

   
//     </div>
//     </div>
//     <div className='grid'>

                  
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Address line1</label>
//                     <input
//                       type="text"
//                       name="address"
//                       value={orderDetails.address}
//                       onChange={handleChange}
//                       className={`p-1  mt-2 mb-1 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                   </div>
               
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Address line2</label>
//                     <input
//                       type="text"
//                       name="address1"
//                       value={orderDetails.address1}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.address1 ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
//                   </div>
       
                  
                  
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">City</label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={orderDetails.city}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
//                   </div>
                  
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">State</label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={orderDetails.state}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
//                   </div>
                 
                  
   
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Zipcode</label>
//                     <input
//                       type="number"
//                       name="zipcode"
//                       value={orderDetails.zipcode}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.zipcode ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
//                   </div>
//                   <div>
//        <label className="block text-xs font-medium text-gray-700 mt-1">Total amount</label>
//        <input
//         type="number"
//         name="totalAmount"
//         value={orderDetails.totalAmount}
//         onChange={handleChange}
//         className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
//     </div>
  
//     <div>
//       <label className="block text-xs font-medium text-gray-700 mt-1">Advance amount</label>
      
//       <input 
//         type="number"
//         name="advanceAmount"
//         value={orderDetails.advanceAmount}
//         onChange={handleChange}
//         className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.advanceAmount ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.advanceAmount && <p className="text-red-500 text-sm mt-1">{errors.advanceAmount}</p>}
//     </div>
    
//                   <div>
//       <label className="block text-xs font-medium text-gray-700 mt-1">Balance amount</label>
//       <input
//         type="number"
//         name="balanceAmount"
//         value={orderDetails.totalAmount-orderDetails.advanceAmount}
//         onChange={handleChange}
//         className={`p-1  mt-2 mb-1 w-full border rounded-md`}
//       />
//     </div>

//                   </div>
                 
                 
//                 </>
//               )}
//                      </Box>
//                      <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: '1fr ' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           pt: 2 
//         }}
//       >
//               {activeStep === 1 && (
//                 <>
                 
                  
//                   <div className='flex gap-36 '>
//                     <label className=" text-xs font-medium text-gray-700 mt-2">Designer Name:</label>
//                     <input
//                       type="text"
//                       name="design"
//                       value={orderDetails.design}
//                       onChange={handleChange}
//                       className={` p-1 w-1/3 border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                   </div>


//     {/* <div>
//     <h2 className="text-lg font-semibold text-gray-700 mb-4">Initial Measurement</h2>

//       <label className="block text-sm font-medium text-gray-700">Length (cm)</label>
//       <input
//         type="number"
//         name="length"
//         value={orderDetails.length}
//         onChange={handleChange}
//         className={`mt-1 p-2 w-full border rounded-md ${errors.length ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.length && <p className="text-red-500 text-sm mt-1">{errors.length}</p>}
//     </div>
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mt-11">Height (cm)</label>
//       <input
//         type="number"
//         name="height"
//         value={orderDetails.height}
//         onChange={handleChange}
//         className={`mt-1 p-2 w-full border rounded-md ${errors.height ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
//     </div>
//     <div>
//       <label className="block text-sm font-medium text-gray-700">Width (cm)</label>
//       <input
//         type="number"
//         name="width"
//         value={orderDetails.width}
//         onChange={handleChange}
//         className={`mt-1 p-2 w-full border rounded-md ${errors.width ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width}</p>}
//     </div> */}

// {/* <div className="flex w-full gap-6">
  
//   <div className='flex w-full'>
//     <h2 className="text-lg font-semibold text-gray-700 mb-4">Initial Measurement</h2>

//     <label className="block text-sm font-medium text-gray-700">Length (cm)</label>
//     <input
//       type="number"
//       name="length"
//       value={orderDetails.length}
//       onChange={handleChange}
//       className={`mt-1 p-2 w-full border rounded-md ${errors.length ? 'border-red-500' : 'border-gray-300'}`}
//     />
//     {errors.length && <p className="text-red-500 text-sm mt-1">{errors.length}</p>}

//     <label className="block text-sm font-medium text-gray-700 mt-4">Height (cm)</label>
//     <input
//       type="number"
//       name="height"
//       value={orderDetails.height}
//       onChange={handleChange}
//       className={`mt-1 p-2 w-full border rounded-md ${errors.height ? 'border-red-500' : 'border-gray-300'}`}
//     />
//     {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}

//     <label className="block text-sm font-medium text-gray-700 mt-4">Width (cm)</label>
//     <input
//       type="number"
//       name="width"
//       value={orderDetails.width}
//       onChange={handleChange}
//       className={`mt-1 p-2 w-full border rounded-md ${errors.width ? 'border-red-500' : 'border-gray-300'}`}
//     />
//     {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width}</p>}
//   </div>
//   <br/>

  
  
// </div>
// <div className='flex '>
//     <h2 className="text-lg font-semibold text-gray-700 mb-4">Final Measurement</h2>

//     <label className="block text-sm font-medium text-gray-700">Length (cm)</label>
//     <input
//       type="number"
//       name="finalLength"
//       value={orderDetails.finalLength}
//       onChange={handleChange}
//       className={`mt-1 p-2 w-full border rounded-md ${errors.finalLength ? 'border-red-500' : 'border-gray-300'}`}
//     />
//     {errors.finalLength && <p className="text-red-500 text-sm mt-1">{errors.finalLength}</p>}

//     <label className="block text-sm font-medium text-gray-700 mt-4">Height (cm)</label>
//     <input
//       type="number"
//       name="finalHeight"
//       value={orderDetails.finalHeight}
//       onChange={handleChange}
//       className={`mt-1 p-2 w-full border rounded-md ${errors.finalHeight ? 'border-red-500' : 'border-gray-300'}`}
//     />
//     {errors.finalHeight && <p className="text-red-500 text-sm mt-1">{errors.finalHeight}</p>}

//     <label className="block text-sm font-medium text-gray-700 mt-4">Width (cm)</label>
//     <input
//       type="number"
//       name="finalWidth"
//       value={orderDetails.finalWidth}
//       onChange={handleChange}
//       className={`mt-1 p-2 w-full border rounded-md ${errors.finalWidth ? 'border-red-500' : 'border-gray-300'}`}
//     />
//     {errors.finalWidth && <p className="text-red-500 text-sm mt-1">{errors.finalWidth}</p>}
//   </div> */}

// <div className="flex w-full flex-wrap ">
//   {/* Initial Measurement */}
//   <div className="w-full">
    
//     <div className="flex gap-4">
//     <h2 className="mt-6 text-lg font-semibold text-gray-700 mb-4 mr-2">Initial Measurement </h2>

//       <div >
//         <label className="block text-xs font-medium text-gray-700">Length (cm)</label>
//         <input
//           type="number"
//           name="length"
//           value={orderDetails.length}
//           onChange={handleChange}
//           className={` p-1 w-full border rounded-md ${errors.length ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.length && <p className="text-red-500 text-sm mt-1">{errors.length}</p>}
//       </div>

//       <div >
//         <label className="block text-xs font-medium text-gray-700">Height (cm)</label>
//         <input
//           type="number"
//           name="height"
//           value={orderDetails.height}
//           onChange={handleChange}
//           className={` p-1 w-full border rounded-md ${errors.height ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
//       </div>

//       <div >
//         <label className="block text-xs font-medium text-gray-700">Width (cm)</label>
//         <input
//           type="number"
//           name="width"
//           value={orderDetails.width}
//           onChange={handleChange}
//           className={` p-1 w-full border rounded-md ${errors.width ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.width && <p className="text-red-500 text-sm mt-1">{errors.width}</p>}
//       </div>
//        {!file ? (
//         <div className="mt-4">
//           <input
//             type="file"
//             id="upload"
//             accept="application/pdf"
//             onChange={handleFileChange}
//             className="hidden"
//           />

//           {/* <label
//             htmlFor="upload"
//             className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-600 cursor-pointer hover:text-white"
//           >
//             <FiUpload className="text-lg" /> 
//             <i className="fas fa-upload"></i> 

//   <span>Upload Initial Measurements</span>
//           </label> */}
//             <label
//     htmlFor="upload"
//     className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-600 cursor-pointer hover:text-white flex items-center space-x-2"
//   >
//     <FiUpload className="text-lg" /> 
//     <span>Upload Initial Measurements</span>
//   </label>
//         </div>
//       ) : (
//         <div className="flex items-center">
//           <span className="text-red-600 mr-4">
//             <i className="fas fa-file-pdf"></i> {file.name}
//           </span>
//           <a href={URL.createObjectURL(file)} target="_blank" rel="noopener noreferrer" className="text-blue-600 mr-4">
//             VIEW
//           </a>
//           <button onClick={handleDelete} className="text-red-600">
//             DELETE
//           </button>
//         </div>
//       )}  
//     </div>
   
//   </div>

//   {/* Final Measurement */}
//   <div className="flex w-full flex-wrap">
    
//     <div className="flex gap-5">
//     <h2 className="text-lg font-semibold text-gray-700 mb-4 mt-4">Final Measurement</h2>

//       <div >
//         <label className=" block text-xs font-medium text-gray-700">Length (cm)</label>
//         <input
//           type="number"
//           name="finalLength"
//           value={orderDetails.finalLength}
//           onChange={handleChange}
//           className={` p-1 w-full border rounded-md ${errors.finalLength ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.finalLength && <p className="text-red-500 text-sm mt-1">{errors.finalLength}</p>}
//       </div>

//       <div >
//         <label className="block text-xs font-medium text-gray-700">Height (cm)</label>
//         <input
//           type="number"
//           name="finalHeight"
//           value={orderDetails.finalHeight}
//           onChange={handleChange}
//           className={` p-1 w-full border rounded-md ${errors.finalHeight ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.finalHeight && <p className="text-red-500 text-sm mt-1">{errors.finalHeight}</p>}
//       </div>

//       <div >
//         <label className="block text-xs font-medium text-gray-700">Width (cm)</label>
//         <input
//           type="number"
//           name="finalWidth"
//           value={orderDetails.finalWidth}
//           onChange={handleChange}
//           className={` p-1 w-full border rounded-md ${errors.finalWidth ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.finalWidth && <p className="text-red-500 text-sm mt-1">{errors.finalWidth}</p>}
//       </div>
//       {!file1 ? (
//         <div className="mt-4">
//           <input
//             type="file"
//             id="upload"
//             accept="application/pdf"
//             onChange={handleFileChange1}
//             className="hidden"
//           />
//           <label
//             htmlFor="upload"
//             // className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
//             className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded hover:bg-blue-600 cursor-pointer hover:text-white flex items-center space-x-2"

//           >
//                 <FiUpload className="text-lg" /> 

//             <i className="fas fa-upload"></i> <span> Upload Final Measurements</span>
//           </label>

//         </div>
//       ) : (
//         <div className="flex items-center">
//           <span className="text-red-600 mr-4">
//             <i className="fas fa-file-pdf"></i> {file1.name}
//           </span>
//           <a href={URL.createObjectURL(file1)} target="_blank" rel="noopener noreferrer" className="text-blue-600 mr-4">
//             VIEW
//           </a>
//           <button onClick={handleDelete1} className="text-red-600">
//             DELETE
//           </button>
//         </div>
//       )}  
//     </div>
    
//   </div>
// </div>

  

  
//                   {/* <div>
//                     <label className="block text-sm font-medium text-gray-700">Upload Images</label>
//                     <input
//                       type="file"
//                       multiple
//                       onChange={handleImageChange}
//                       className="mt-1 p-2 w-full border rounded-md"
//                     />
//                     {images.length > 0 && (
//                       <div className="mt-2">
//                         {imagePreviews.map((preview, index) => (
//                           <div key={index} className="relative inline-block mr-2">
//                             <img src={preview} alt={`Preview ${index}`} className="w-24 h-24 object-cover" />
//                             <button
//                               onClick={() => handleImageRemove(index)}
//                               className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
//                             >
//                               x
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div> */}
//                   <div>
//       <label className="block text-xs font-medium text-gray-700">Upload Images (Upto 6 images)</label>
//       <input
//         type="file"
//         multiple
//         onChange={handleImageChange}
//         className="hidden"
//         id="image-upload"
//       />
//       <div className="flex items-center mt-1">
//         <label
//           htmlFor="image-upload"
//           className="flex items-center justify-center w-24 h-24 bg-gray-200 border border-gray-300 text-gray-500 rounded-md cursor-pointer"
//         >
//           <span className="text-3xl">+</span>
//         </label>
//         {images.length > 0 && (
//           <div className="flex mt-2 ml-2">
//             {imagePreviews.map((preview, index) => (
//               <div key={index} className="relative inline-block mr-2">
//                 <img src={preview} alt={`Preview ${index}`} className="w-24 h-24 object-cover" />
//                 <button
//                   onClick={() => handleImageRemove(index)}
//                   className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
//                 >
//                   x
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>

//     <div className='mb-4'>
//         <label className="block text-xs font-medium text-gray-700">Upload whole designPDF</label>
//         <input
//           type="file"
//           accept=".pdf"
//           onChange={handlePdfChange}
//           className="mt-1 p-2 w-1/2 border rounded-md"
//         />
//         {pdfPreview && (
//           <div className="mt-2 flex items-center">
//             <a href={pdfPreview} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//               View PDF
//             </a>
//             <button
//               onClick={handlePdfRemove}
//               className="ml-4 bg-red-500 text-white p-1 rounded-full text-xs"
//             >
//               x
//             </button>
//           </div>
//         )}
//       </div>

//                 </>
//               )}
//               </Box>
//               <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: ' 1fr' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           justifyContent: 'center',
//           alignItems:'center',
//           pt: 2 
//         }}
//       >
//               {activeStep === 2 && (
// //                 <>
// //                 <div className='flex gap-4'>
// //                     <label className=" w-1/3 text-right mt-3 text-sm font-medium text-gray-700">Order Status:</label>
// //                     <select
// //                       name="orderStatus"
// //                       value={orderDetails.orderStatus}
// //                       onChange={handleChange}
// //                       className={`mt-1 w-1/3 p-2  border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
// //                     >
// //                       <option value="">Select a Status</option>
// //                       <option value="Pending">Pending</option>
// //                       <option value="Processed">Processed</option>
// //                     </select>
// //                     {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
// //                   </div>
// //                 <div className='flex gap-4'>
// //                     <label className=" text-sm text-right mt-3 w-1/3  font-medium text-gray-700">Assign To:</label>
// //                     <input
// //                       type="text"
// //                       name="createdBy"
// //                       value={orderDetails.createdBy}
// //                       onChange={handleChange}
// //                       className={`mt-1 p-2 w-1/3 border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
// //                     />
// //                     {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
// //                   </div>
                  
// //                   <div className='flex gap-4'>
// //                     <label className="text-right mt-3 w-1/3 text-sm font-medium text-gray-700">Start Date</label>
// //                     <input
// //                       type="date"
// //                       name="startdate"
// //                       value={orderDetails.startdate}
// //                       onChange={handleChange}
// //                       className={`mt-1 p-2 w-1/3 border rounded-md ${errors.startdate? 'border-red-500' : 'border-gray-300'}`}
// //                     />
// //                     {errors.startdate && <p className="text-red-500 text-sm mt-1">{errors.startdate}</p>}
// //                   </div>
// //                   <div className='flex gap-4'>
// //                     <label className=" text-right mt-3 w-1/3 text-sm font-medium text-gray-700">Expected Completed Date</label>
// //                     <input
// //                       type="date"
// //                       name="enddate"
// //                       value={orderDetails.enddate}
// //                       onChange={handleChange}
// //                       className={`mt-1 p-2 w-1/3 border rounded-md ${errors.enddate? 'border-red-500' : 'border-gray-300'}`}
// //                     />
// //                     {errors.enddate && <p className="text-red-500 text-sm mt-1">{errors.enddate}</p>}
// //                   </div>
// //                   <div className='flex gap-4'>
// //                     <label className="text-right mt-3 w-1/3 text-sm font-medium text-gray-700">Comments</label>
// //                     <input
// //                       type="text"
// //                       name="orderStatusComments"
// //                       value={orderDetails.orderStatusComments}
// //                       onChange={handleChange}
// //                       className={`mt-1 p-2 w-1/3 border rounded-md ${errors.orderStatusComments? 'border-red-500' : 'border-gray-300'}`}
// //                     />
// //                     {errors.orderStatusComments && <p className="text-red-500 text-sm mt-1">{errors.orderStatusComments}</p>}
// //                   </div>
// //                   <button                 className=" w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 "
// //                   > Add  <span className="text-lg"><IoMdAddCircleOutline /> </span> </button>

// // <table className="min-w-full divide-y divide-gray-200">
// //         <thead>
// //           <tr>
// //             <th>Order Status</th>
// //             <th>Assign To</th>
// //             <th>Start Date</th>
// //             <th>Expected Completed Date</th>
// //             <th>Comments</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {orders
// //             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// //             .map((orderDetails, index) => (
// //               <tr key={index}>
// //                 <td>{orderDetails.orderStatus}</td>
// //                 <td>{orderDetails.createdBy}</td>
// //                 <td>{orderDetails.startdate}</td>
// //                 <td>{orderDetails.enddate}</td>
// //                 <td>{orderDetails.orderStatusComments}</td>
// //               </tr>
// //             ))}
// //         </tbody>
// //       </table>

// //       <TablePagination
// //         rowsPerPageOptions={[5, 10, 25]}
// //         component="div"
// //         count={orders.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />
                  
// //                 </>
//  <>
//       <div className='flex gap-32'>
//         <label className="w-1/8 text-left ml-44 mt-3 text-xs font-medium text-gray-700">Order Status:</label>
//         <select
//           name="orderStatus"
//           value={orderDetails.orderStatus}
//           onChange={handleChange}
//           className={` w-1/4 p-1 border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//         >
//           <option value="">Select a Status</option>
//           <option value="Pending">Pending</option>
//           <option value="Processed">Processed</option>
//         </select>
//         {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//       </div>
//       <div className='flex gap-36'>
//         <label className="text-xs text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">Assign To:</label>
//         <input
//           type="text"
//           name="createdBy"
//           value={orderDetails.createdBy}
//           onChange={handleChange}
//           className={` p-1 w-1/4 border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//       </div>
//       <div className='flex gap-36'>
//         <label className="text-left mt-3 w-1/8 ml-44 text-xs font-medium text-gray-700">Start Date:</label>
//         <input
//           type="date"
//           name="startdate"
//           value={orderDetails.startdate}
//           onChange={handleChange}
//           className={` p-1 w-1/4 border rounded-md ${errors.startdate ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.startdate && <p className="text-red-500 text-sm mt-1">{errors.startdate}</p>}
//       </div>
//       <div className='flex gap-14'>
//         <label className="text-left mt-3 w-1/8 ml-44 text-xs font-medium text-gray-700">Expected Completed Date:</label>
//         <input
//           type="date"
//           name="enddate"
//           value={orderDetails.enddate}
//           onChange={handleChange}
//           className={`mt-1 p-1 w-1/4 border rounded-md ${errors.enddate ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.enddate && <p className="text-red-500 text-sm mt-1">{errors.enddate}</p>}
//       </div>
//       <div className='flex gap-36'>
//         <label className="text-left mt-3 w-1/8 ml-44 text-xs font-medium text-gray-700">Comments:</label>
//         <input
//           type="text"
//           name="orderStatusComments"
//           value={orderDetails.orderStatusComments}
//           onChange={handleChange}
//           className={`mt-1 p-1 w-1/4 border rounded-md ${errors.orderStatusComments ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.orderStatusComments && <p className="text-red-500 text-sm mt-1">{errors.orderStatusComments}</p>}
//       </div>
//       {/* <button
//         onClick={handleAddOrder}
//         className="w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//       >
//         Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//       </button> */}
//       <div className="relative">
//   <button
//     onClick={handleAddOrder}
//     className="absolute bottom-2  right-0 w-18 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//   >
//     Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//   </button>
// </div>

//       {orders.length >= 0 && (
//         <>
//           {/* <table className="min-w-full divide-y divide-gray-200 mt-4">
//             <thead>
//               <tr>
//                 <th>Order Status</th>
//                 <th>Assign To</th>
//                 <th>Start Date</th>
//                 <th>Expected Completed Date</th>
//                 <th>Comments</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((order, index) => (
//                   <tr key={index}>
//                     <td>{order.orderStatus}</td>
//                     <td>{order.createdBy}</td>
//                     <td>{order.startdate}</td>
//                     <td>{order.enddate}</td>
//                     <td>{order.orderStatusComments}</td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table> */}

// <table className="min-w-full border-collapse border border-gray-300 mt-4">
//   <thead className='bg-custom-maroon'>
//     <tr className="text-center border-b border-gray-300">
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Order Status</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Assign To</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Start Date</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Expected Completed Date</th>
//       <th className="px-4 py-2 font-normal">Comments</th>
//     </tr>
//   </thead>
//   <tbody>
//     {orders
//       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//       .map((order, index) => (
//         <tr key={index} className="text-center border-b border-gray-300">
//           <td className="px-4 py-2 border-r border-gray-300">{order.orderStatus}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.createdBy}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.startdate}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.enddate}</td>
//           <td className="px-4 py-2">{order.orderStatusComments}</td>
//         </tr>
//       ))}
//   </tbody>
// </table>


//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={orders.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </>
//       )}
//     </>
 
//        )}
//               </Box>
//               <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: '1fr ' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           pt: 2 
//         }}
//       >
//                             {activeStep === 3 && (
//     //                           <>
               
//     //            <div>
//     //   <label className="block text-sm font-medium text-gray-700 mt-1">Total amount</label>
//     //   <input
//     //     type="number"
//     //     name="totalAmount"
//     //     value={orderDetails.totalAmount}
//     //     onChange={handleChange}
//     //     className={`mt-1 p-2 w-full border rounded-md ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'}`}
//     //   />
//     //   {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
//     // </div>
  
//     // <div>
//     //   <label className="block text-sm font-medium text-gray-700 mt-1">Advance amount</label>
      
//     //   <input 
//     //     type="number"
//     //     name="advanceAmount"
//     //     value={orderDetails.advanceAmount}
//     //     onChange={handleChange}
//     //     className={`mt-1 p-2 w-full border rounded-md ${errors.advanceAmount ? 'border-red-500' : 'border-gray-300'}`}
//     //   />
//     //   {errors.advanceAmount && <p className="text-red-500 text-sm mt-1">{errors.advanceAmount}</p>}
//     // </div>
//     // <div>
//     //   <label className="block text-sm font-medium text-gray-700 mt-1">installments (In months)</label>
//     //   <input
//     //     type="number"
//     //     name="installments"
//     //     value={orderDetails.installments}
//     //     onChange={handleChange}
//     //     className={`mt-1 p-2 w-full border rounded-md ${errors.installments ? 'border-red-500' : 'border-gray-300'}`}
//     //   />
//     //   {errors.installments && <p className="text-red-500 text-sm mt-1">{errors.installments}</p>}
//     // </div>
//     //               <div>
//     //   <label className="block text-sm font-medium text-gray-700 mt-1">Balance amount</label>
//     //   <input
//     //     type="number"
//     //     name="balanceAmount"
//     //     value={orderDetails.totalAmount-orderDetails.advanceAmount}
//     //     onChange={handleChange}
//     //     className={`mt-1 p-2 w-full border rounded-md`}
//     //   />
//     // </div>
//     // <div>
//     //                 <label className="block text-sm font-medium text-gray-700"> Payments Type</label>
//     //                 <select
//     //                   name="paymentstype"
//     //                   value={orderDetails.paymentstype}
//     //                   onChange={handleChange}
//     //                   className={`mt-1 p-2 w-full border rounded-md ${errors.paymentstype ? 'border-red-500' : 'border-gray-300'}`}
//     //                 >
//     //                   <option value="select a type">Select a Type</option>
//     //                   <option value="Cash">Cash</option>
//     //                   <option value="UPI">UPI</option>
//     //                   <option value="Card">Card</option>
//     //                 </select>
//     //                 {errors.paymentstype && <p className="text-red-500 text-sm mt-1">{errors.paymentstype}</p>}
//     //               </div>
//     // <div>
//     //   <label className="block text-sm font-medium text-gray-700 mt-1">Installment per month</label>
//     //   <input
//     //     type="number"
//     //     name="installmentPerMonth"
//     //     value={remainder}
//     //     onChange={handleChange}
//     //     className={`mt-1 p-2 w-full border rounded-md`}
//     //   />
//     // </div>
//     //               </>
//     <>
//     <div className='flex '>
//       <label className="text-left  ml-44 w-1/4 mt-3  text-xs font-medium text-gray-700">Payments Type:</label>
//       <select
//                       name="paymentstype"
//                    value={orderDetails.paymentstype}
//                        onChange={handleChange}
//                       className={`p-1 w-1/4 border rounded-md ${errors.paymentstype ? 'border-red-500' : 'border-gray-300'}`}
//                     >
//                       <option value="select a type">Select a Type</option>
//                     <option value="Cash">Cash</option>
//                      <option value="UPI">UPI</option>
//                      <option value="Card">Card</option>
//                     </select>
//                     {errors.paymentstype && <p className="text-red-500 text-sm mt-1">{errors.paymentstype}</p>}
        
//     </div>
//     <div className='flex '>
//       <label className="w-1/4 ml-44 text-left mt-3 text-xs font-medium text-gray-700">Total Amount:</label>
//       <input
//         type="number"
//         name="totalAmount"
//        value={orderDetails.totalAmount}
//       onChange={handleChange}
//  className={` w-1/4 p-1 border rounded-md ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'}`}
//      />
//           {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
//     </div>
//     <div className='flex '>
//       <label className="text-xs text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">Advance Amount:</label>
//       <input 
//          type="number"
//         name="advanceAmount"
//         value={orderDetails.advanceAmount}
//          onChange={handleChange}
//          className={` p-1 w-1/4 border rounded-md ${errors.advanceAmount ? 'border-red-500' : 'border-gray-300'}`}
//        />
//       {errors.advanceAmount && <p className="text-red-500 text-sm mt-1">{errors.advanceAmount}</p>}
     
//     </div>
//     <div className='flex '>
//       <label className="text-xs text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">comments:</label>
//       <input 
//          type="text"
//         name="paymentscomments"
//         value={orderDetails.paymentscomments}
//          onChange={handleChange}
//          className={` p-1 w-1/4 border rounded-md ${errors.paymentscomments ? 'border-red-500' : 'border-gray-300'}`}
//        />
//       {errors.paymentscomments && <p className="text-red-500 text-sm mt-1">{errors.paymentscomments}</p>}
     
//     </div>
//     {/* <div className='flex'>
//       <label className=" text-left mt-3 w-1/4 ml-44 text-sm font-medium text-gray-700">Installments (In months):</label>
//       <input
//          type="number"
//          name="installments"
//          value={orderDetails.installments}
//          onChange={handleChange}
//          className={`mt-1 p-2 w-1/3 border rounded-md  ${errors.installments ? 'border-red-500' : 'border-gray-300'}`}
//       />
//        {errors.installments && <p className="text-red-500 text-sm mt-1">{errors.installments}</p>}
     
//     </div>
//     <div className='flex '>
//       <label className="text-left  ml-44 w-1/4 mt-3  text-sm font-medium text-gray-700">Balance Amount:</label>
//       <input
//         type="number"
//          name="balanceAmount"
//          value={orderDetails.totalAmount-orderDetails.advanceAmount}
//          onChange={handleChange}
//          className={`mt-1 p-2 w-1/3 border rounded-md`}
//       />
     
//     </div>
//     <div className='flex '>
//       <label className="text-left  ml-44 w-1/4 mt-3  text-sm font-medium text-gray-700">Installment to pay per month:</label>
//         <input
//          type="number"
//          name="installmentPerMonth"
//          value={remainder}
//          onChange={handleChange}
//         className={`mt-1 p-2 w-1/3 border rounded-md`}
//       />
//     </div> */}
    
    
//     <div className="relative">
//   <button
//     onClick={handleAddOrder1}
//     className="absolute bottom-3 right-0 w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//   >
//     Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//   </button>
// </div>

//     {orders.length >= 0 && (
//       <>
//         {/* <table className="min-w-full divide-y divide-gray-200 mt-4">
//           <thead>
//             <tr>
//               <th>TotalAmount</th>
//               <th>AdvanceAmount</th>
//               <th> BalanceAmount</th>
//               <th>Installments months</th>
             
//               <th>Installment Per Month Pay</th>
//               <th>Payment Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((order, index) => (
//                 <tr key={index}>
//                   <td>{order.totalAmount}</td>
//                   <td>{order.advanceAmount}</td>
//                   <td>{order.totalAmount-order.advanceAmount}</td>
//                   <td>{order.installments}</td>

//                   <td>{(order.totalAmount-order.advanceAmount)/order.installments}</td>
//                   <td>{order.paymentstype}</td>
//                 </tr>
//               ))}
//           </tbody>
//         </table> */}

// <table className="min-w-full border-collapse border border-gray-300 mt-4">
//   <thead className='bg-custom-maroon'>
//     <tr className="text-center border-b border-gray-300">
//     <th className="px-4 py-2 font-normal border-r">Payment Type</th>

//       <th className="px-4 py-2 font-normal border-r border-gray-300">Total Amount</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Advance Amount</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Balance Amount</th>
//       <th className="px-4 py-2 font-normal">Comments</th>

   
//     </tr>
//   </thead>
//   <tbody>
//     {orders
//       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//       .map((order, index) => (
//         <tr key={index} className="text-center border-b border-gray-300">
//                     <td className="px-4 py-2 border-r">{order.paymentstype}</td>

//           <td className="px-4 py-2 border-r border-gray-300">{order.totalAmount}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.advanceAmount}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.totalAmount - order.advanceAmount}</td>

//           <td className="px-4 py-2">{order.paymentscomments}</td>
//         </tr>
//       ))}
//   </tbody>
// </table>


//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={orders.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </>
//     )}
//   </>
// )}

//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//               {/* <button
//                 color="inherit"
//                 onClick={handleBack}
//                                         className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 "
//                 disabled={activeStep === 0}
//               >
//                           <MdArrowBackIosNew />
//                           Back
//               </button> */}
//               <button
//   color="inherit"
//   onClick={handleBack}
//   className={`inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm ${
//     activeStep === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-custom-lightblue  hover:text-gray-700"
//   }`}
//   disabled={activeStep === 0}
// >
//   <MdArrowBackIosNew />
//   Back
// </button>

//               <Box sx={{ flex: '1 1 auto' }} />
//               <button
//                 variant="contained"
//                 onClick={handleCancel}
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-300  px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover: hover:bg-gray-400 ml-2 mr-4"                ><RxCross1 />

//                 Cancel
//               </button>              <button
//                 variant="contained"
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 "
//                 >

//                 {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
//                 <MdOutlineArrowForwardIos />

//               </button>
//             </Box>
//           </React.Fragment>
//         )}
//         {showAlert && (
//           <div className="fixed top-0 right-0 w-full bg-green-500 text-white p-4 text-center">
//             <span>Order added successfully!</span>
//           </div>
//         )}
//         {submittedDetails && (
//           <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Submitted Order Details:</h3>
//             <p><strong>FirstName:</strong> {submittedDetails.firstname}</p>
//             <p><strong>LastName:</strong> {submittedDetails.lastname}</p>
//             <p><strong>Email:</strong> {submittedDetails.email}</p>
//             <p><strong>Phone:</strong> {submittedDetails.phone}</p>
//             <p><strong>Address:</strong> {submittedDetails.address}</p>
//             <p><strong>City:</strong> {submittedDetails.city}</p>
//             <p><strong>State:</strong> {submittedDetails.state}</p>
//             <p><strong>Zipcode:</strong> {submittedDetails.zipcode}</p>
//             <p><strong>Order Status:</strong> {submittedDetails.orderStatus}</p>
//             <p><strong>Created By:</strong> {submittedDetails.createdBy}</p>
//             <p><strong>Expected Delivery Date:</strong> {submittedDetails.deliveryDate}</p>
//             <p><strong>Design:</strong> {submittedDetails.design}</p>
//             <p><strong>Type:</strong> {submittedDetails.type}</p>
//             <p><strong>Source:</strong> {submittedDetails.categories}</p>
//             <p><strong>Sub-Source:</strong> {submittedDetails.subOption}</p>
//             <p><strong>TotalAmount:</strong> {submittedDetails.totalAmount}</p>
//             <p><strong>AdvanceAmount:</strong> {submittedDetails.advanceAmount}</p>
//             <p><strong>Comments:</strong> {submittedDetails.comments}</p>
//             <p><strong>OrderStatusCommentsComments:</strong> {submittedDetails.orderStatusComments}</p>
//             <p><strong>StartDate:</strong> {submittedDetails.startdate}</p>
//             <p><strong>Expected Completed Date:</strong> {submittedDetails.enddate}</p>
//             <p><strong>Payments Type</strong> {submittedDetails.paymentstype}</p>
//             <p><strong>BalanceAmount:</strong> {submittedDetails.totalAmount-submittedDetails.advanceAmount}</p>
//             <p><strong>Initial Measurement:Length</strong> {submittedDetails.length}</p>
//             <p><strong>Initial Measurement:Height</strong> {submittedDetails.height}</p>
//             <p><strong>Initial Measurement:Width</strong> {submittedDetails.width}</p>
//             <p><strong>Final Measurement:Length</strong> {submittedDetails.finalLength}</p>
//             <p><strong>Final Measurement:Height</strong> {submittedDetails.finalHeight}</p>
//             <p><strong>Final Measurement:Width</strong> {submittedDetails.finalWidth}</p>
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               {submittedDetails.images && submittedDetails.images.map((img, index) => (
//                 <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
//               ))}
//             </div>
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               {submittedDetails.pdfPreview && submittedDetails.pdfPreview.map((img, index) => (
//                 <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
//               ))}
//             </div>
//           </div>
//         )}
//       </Box>
//     </div>
//     </>
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
// import {   MdArrowBackIosNew, MdDelete, MdOutlineArrowForwardIos } from "react-icons/md";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import TablePagination from '@mui/material/TablePagination';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { RxCross1 } from "react-icons/rx";
// import { FiUpload } from "react-icons/fi";


// import {
//   Combobox,

// } from '@headlessui/react';
// import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';


// const categories = [
//   { id: 1, name: 'Walk-in', subOptions: ["Newspaper ad"] },
//   { id: 2, name: 'Social Media', subOptions: ['Google', 'Facebook', 'Instagram'] },
//   { id: 3, name: 'Reference', subOptions: ['Existing Client', 'Directors', 'Employee'] },
// ];
// const steps = ['Order Details',  'Order Status', "payments"];

// function AddOrders() {
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [page, setPage] = useState(0);
//   const [orders, setOrders] = useState([]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) =>
//         category.name.toLowerCase().includes(query.toLowerCase())
//       );

//   const subOptions = selectedCategory
//     ? categories.find(cat => cat.id === selectedCategory.id)?.subOptions || []
//     : [];
//   const [orderDetails, setOrderDetails] = useState({
//     firstname: '',
//     lastname: '',
//     orderStatus: '',
//     email: '',
//     deliveryDate: '',
//     phone: '',
//     address: '',
//     address1:"",
//     city:"",
//     state: "",
//     zipcode:"",
//     createdBy: '',
//     design: '',
//     type: '',
//     categories:"",
//     length: '',
//     height: '',
//     width: '',
//     totalAmount:"",
//     advanceAmount:"",
//     comments:"",
//     orderStatusComments:"",
//     startdate:"",
//     enddate:"",
//     paymentstype:"",
//     finalLength:"",
//     finalHeight:"",
//     finalWidth:"",
//     paymentscomments:"",
//   });
//   const handleCategoryChange = (category) => {
//     setQuery('');
//     setSelectedCategory(category);
//     setSelectedSubOption(''); // Reset sub-option when category changes
//     setOrderDetails(prevDetails => ({
//       ...prevDetails,
//       categories: category ? category.name : ''
//     }));
//   };
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);

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



//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (images.length + files.length > 6) {
//       alert('You can only upload up to 6 images.');
//       return;
//     }
//     const newImages = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setImages([...images, ...newImages]);
//     setImagePreviews([...imagePreviews, ...newImages.map((img) => img.preview)]);
//   };

//   const handleImageRemove = (index) => {
//     const newImages = images.filter((_, i) => i !== index);
//     const newPreviews = imagePreviews.filter((_, i) => i !== index);
//     setImages(newImages);
//     setImagePreviews(newPreviews);
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!orderDetails.firstname) newErrors.firstname = 'first name is required';
//     if (!orderDetails.lastname) newErrors.lastname = 'last name is required';
//     if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//     if (!orderDetails.email) newErrors.email = 'Email is required';
//     if (!orderDetails.deliveryDate) newErrors.deliveryDate = 'Expected Delivery Date is required';
//     if (!orderDetails.phone) newErrors.phone = 'Phone is required';
//     if (!orderDetails.address) newErrors.address = 'Address line1 is required';
//     if (!orderDetails.address1) newErrors.address1 = 'Address line2 is required';
//     if (!orderDetails.createdBy) newErrors.createdBy = 'Created By is required';
//     if (!orderDetails.design) newErrors.design = 'Design is required';
//     if (!orderDetails.type) newErrors.type = 'Type is required';
//     // if (!orderDetails.categories) newErrors.categories = 'categories is required';
//     // if (!selectedSubOption) newErrors.subOption = 'Sub-option is required';
//     if (!orderDetails.city) newErrors.city = 'City is required';
//     if (!orderDetails.state) newErrors.state = 'State is required';
//     if (!orderDetails.length) newErrors.length = 'length is required';
//     if (!orderDetails.width) newErrors.width = 'width is required';
//     if (!orderDetails.totalAmount) newErrors.totalAmount = 'TotalAmount is required';
//     if (!orderDetails.advanceAmount) newErrors.advanceAmount = 'Advance Amount is required';
//     if (!orderDetails.comments) newErrors.comments = 'Comments is required';
//     if (!orderDetails. orderStatusComments) newErrors.orderStatusComments = 'Comments is required';
//     if (!orderDetails.startdate) newErrors.startdate = 'StartDate is required';
//     if (!orderDetails.enddate) newErrors.enddate = 'EndDate is required';
//     if (!orderDetails.paymentstype) newErrors.paymentstype = 'Payments Type is required'; 
//     if (!orderDetails.paymentscomments) newErrors.paymentscomments = 'Payments comments Type is required'; 

//     if (!orderDetails.finalLength) newErrors.finalLength = 'Final length is required';
//     if (!orderDetails.finalWidth) newErrors.finalWidth = 'Final Width is required';
//     if (!orderDetails.finalHeight) newErrors.finalHeight = 'Final height is required';


//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       toast.error('Please fill in all required fields.', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//     });
//       return;
//     }

//     setSubmittedDetails({ ...orderDetails, images: imagePreviews, category: selectedCategory?.name || '', subOption: selectedSubOption || ''}); // Store the submitted details including image previews
//     setShowAlert(true);

//     setOrderDetails({
//       firstname: '',
//       lastname: '',
//       orderStatus: '',
//       email: '',
//       deliveryDate: '',
//       phone: '',
//       address: '',
//       address1: '',
//       city: '',
//       state: '',
//       zipcode:"",
//       createdBy: '',
//       design: '',
//       type: '',
//       categories: '',
//       length: '',
//       height: '',
//       width: '',
//       totalAmount: '',
//       advanceAmount: '',
//       comments:"",
//       orderStatusComments:"",
//       startdate: "",
//       enddate: "",
//       paymentstype: "",
//       finalLength: "",
//       finalHeight: "",
//       finalWidth: "",
//       paymentscomments: "",
//     });
//     setImages([]);
//     setImagePreviews([]);
//     setSelectedSubOption('');

//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   const handleCancel = () => {
//     setOrderDetails({
//       firstname: '',
//       lastname: '',
//       email: '',
//       phone: '',
//       address: '',
//       address1: '',
//       city: '',
//       state: '',
//       zipcode: '',
//       orderStatus: '',
//       createdBy: '',
//       deliveryDate: '',
//       design: '',
//       type: '',
//       categories: '',
//       subOption: '',
//       images: [],
//       length: '',
//       height: '',
//       width: '',
//       totalAmount: '',
//       advanceAmount: '',
//       comments:'',
//       orderStatusComments:'',
//       startdate: '',
//       enddate: '',
//       paymentstype: '',
//       finalHeight:"",
//       finalWidth:"",
//       finalLength: '',
//       pdfPreview :"",
//       paymentscomments: '',
//     });
//     setActiveStep(0); // Optional: Reset to the first step
//   };

//   const amountToBePaid = orderDetails.totalAmount - orderDetails.advanceAmount;
//  const remainder = amountToBePaid / orderDetails.installments;
//  const [showSearchCard, setShowSearchCard] = useState(false);

//  const handleAddOrder = () => {
//   // Validate the form fields
//   const newErrors = {};
//   if (!orderDetails.orderStatus) newErrors.orderStatus = 'Order Status is required';
//   if (!orderDetails.createdBy) newErrors.createdBy = 'Assign To is required';
//   if (!orderDetails.startdate) newErrors.startdate = 'Start Date is required';
//   if (!orderDetails.enddate) newErrors.enddate = 'End Date is required';
//   setErrors(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     // Add the order to the orders array
//     setOrders([...orders, orderDetails]);

//     // Clear the form fields
//     setOrderDetails({
//       orderStatus: '',
//       createdBy: '',
//       startdate: '',
//       enddate: '',
//       orderStatusComments: ''
//     });
//   }
// };


//  const handleExistingUserClick = () => {
//      setShowSearchCard(!showSearchCard);
//  };
 
//  const handleAddOrder1 = () => {
//   // Validate the form fields
//   const newErrors = {};
//   if (!orderDetails.totalAmount) newErrors.totalAmount = 'Total amount is required';
//   if (!orderDetails.advanceAmount) newErrors.advanceAmount = 'Advance amountTo is required';
//   if (!orderDetails.paymentstype) newErrors.paymentstype = 'Payments Type is required';
//   if (!orderDetails.paymentscomments) newErrors.paymentscomments = 'Payments comments is required';


//   setErrors(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     // Add the order to the orders array
//     setOrders([...orders, orderDetails]);

//     // Clear the form fields
//     setOrderDetails({
//       totalAmount: '',
//       advanceAmount: '',
//       paymentstype: '',
//       balanceAmount: '',
//       paymentscomments: '',
//     });
//   }
// };

// const [pdfFile, setPdfFile] = useState(null);
//   const [pdfPreview, setPdfPreview] = useState('');
//   const handlePdfChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setPdfFile(file);
//       setPdfPreview(URL.createObjectURL(file));
//     }
//   };

//   const handlePdfRemove = () => {
//     setPdfFile(null);
//     setPdfPreview('');
//   };
//   const [selectedReferralType, setSelectedReferralType] = useState('');
//   const handleReferralTypeChange = (value) => {
//     if (value) {
//       setSelectedReferralType(value);
//     } else {
//       // Handle the case where no value is selected
//       setSelectedReferralType('');
//     }
//   };
//   const [refereeName, setRefereeName] = useState('');
//   const handleRefereeNameChange = (event) => {
//     setRefereeName(event.target.value);
//   };
//   const [selectedSocialMediaPlatform, setSelectedSocialMediaPlatform] = useState('');
//   const handleSocialMediaPlatformChange = (value) => {
//     if (value) {
//       setSelectedSocialMediaPlatform(value);
//     } else {
//       setSelectedSocialMediaPlatform('');
//     }
//   };
      
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile && uploadedFile.type === "application/pdf") {
//       setFile(uploadedFile);
//     } else {
//       alert("Please upload a PDF file.");
//     }
//   };

//   const handleDelete = () => {
//     setFile(null);
//   };

//   const [file1, setFile1] = useState(null);

//   const handleFileChange1 = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile && uploadedFile.type === "application/pdf") {
//       setFile1(uploadedFile);
//     } else {
//       alert("Please upload a PDF file.");
//     }
//   };

//   const handleDelete1 = () => {
//     setFile1(null);
//   };

//   const [selectedReferenceSubOption, setSelectedReferenceSubOption] = useState('');
//   const [error, setError] = useState('');

 

//   const handleReferenceSubOptionChange = (value) => {
//     setSelectedReferenceSubOption(value);
//     if (value) {
//       setRefereeName('');
//     }
//   };

  

//   return (
//     <>
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8   rounded-lg">
//             {/* Button at the top */} <ToastContainer />
            
//             {/* Search Card */}
//             {showSearchCard && (
//                 <div className="mt-4 p-4 border rounded shadow-lg">
//                     <h2 className="text-lg font-bold mb-4">Search User</h2>
//                     <input 
//                         type="text" 
//                         placeholder="Search by email or mobile number" 
//                         className="w-full p-2 border rounded mb-4"
//                     />
//                     <button className="bg-green-500 text-white px-4 py-2 rounded">
//                         Search
//                     </button>
//                 </div>
//             )}
//         </div>
//     <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">

//             <Box sx={{ width: '100%' }}>
//   <Stepper activeStep={activeStep} className="mb-6" alternativeLabel>
//     {steps.map((label, index) => {
//       const stepProps = {};
//       const labelProps = {};
//       if (isStepOptional(index)) {
//         // Optional step logic
//       }
//       if (isStepSkipped(index)) {
//         stepProps.completed = false;
//       }
//       return (
//         <Step key={label} {...stepProps}>
//           <StepLabel {...labelProps}>
//             {label} {/* Label for the step */}
//           </StepLabel>
//         </Step>
//       );
//     })}
//   </Stepper>
//   {activeStep === steps.length ? (
//     <React.Fragment>
//       <Typography className="text-center text-xl mb-4">
//         All steps completed - you're finished
//       </Typography>
//       <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//         <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//           Reset
//         </Button>
//       </Box>
//     </React.Fragment>
//   ) : (
//     <React.Fragment>
     
//       <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           pt: 2 
//         }}
//       >

      
//               {activeStep === 0 && (
//                 <>
//                 <div className='grid'>
//                 <div>
//                     <label className="block text-xs font-medium text-gray-700">First name</label>
//                     <input
//                       type="text"
//                       name="firstname"
//                       value={orderDetails.firstname}
//                       onChange={handleChange}
//                       className={` p-1 mt-2 mb-1 w-full border rounded-md ${errors.firstname ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.firstname && <p className="text-red-500 text-sm mt-1">{errors.firstname}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Last name</label>
//                     <input
//                       type="text"
//                       name="lastname"
//                       value={orderDetails.lastname}
//                       onChange={handleChange}
//                       className={` p-1 mt-2 mb-1 w-full border rounded-md ${errors.lastname ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.lastname && <p className="text-red-500 text-sm mt-1">{errors.lastname}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Email</label>
//                     <input
//                       type="text"
//                       name="email"
//                       value={orderDetails.email}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Phone</label>
//                     <input
//                       type="number"
//                       name="phone"
//                       value={orderDetails.phone}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Type</label>
//                     <select
//                       name="type"
//                       value={orderDetails.type}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.type ? 'border-red-500' : 'border-gray-300'}`}
//                     >
//                       <option value="select a type">Select a Type</option>
//                       <option value="Kitchen">Kitchen</option>
//                       <option value="Wardrobe">Wardrobe</option>
//                       <option value="Living">Living</option>
//                     </select>
//                     {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Expected Delivery Date</label>
//                     <input
//                       type="date"
//                       name="deliveryDate"
//                       value={orderDetails.deliveryDate}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.deliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.deliveryDate && <p className="text-red-500 text-sm mt-1">{errors.deliveryDate}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Comments</label>
//                     <input
//                       type="text"
//                       name="comments"
//                       value={orderDetails.comments}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.comments ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.comments && <p className="text-red-500 text-sm mt-1">{errors.comments}</p>}
//                   </div>
                 
//   <div className="mb-4">
//       <label className="block text-xs font-medium text-gray-700">Referred By</label>
//       <Combobox as="div" value={selectedReferralType} onChange={handleReferralTypeChange}>
//         <div className="relative">
//           <Combobox.Input
//             className="w-full  mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             onChange={(event) => setQuery(event.target.value)}
//             displayValue={(type) => type || ''}
//           />
//           <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//             <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//           </Combobox.Button>

//           <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {['Social Media', 'Walk-In', 'Reference'].map((type, index) => (
//               <Combobox.Option
//                 key={index}
//                 value={type}
//                 className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//               >
//                 <span className="block truncate group-data-[selected]:font-semibold">
//                   {type}
//                 </span>

//                 <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                   <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                 </span>
//               </Combobox.Option>
//             ))}
//           </Combobox.Options>
//         </div>
//       </Combobox>

//       {/* Conditionally render the additional input fields */}
//       {selectedReferralType === 'Reference' && (
//         <div className="mt-4">
//           <label className="block text-xs font-medium text-gray-700">Reference Sub-option</label>
//           <Combobox as="div" value={selectedReferenceSubOption} onChange={handleReferenceSubOptionChange}>
//             <div className="relative">
//               <Combobox.Input
//                 className="w-full  mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 onChange={(event) => setQuery(event.target.value)}
//                 displayValue={(option) => option || ''}
//               />
//               <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </Combobox.Button>

//               <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                 {['Director', 'Employee', 'Existing'].map((option, index) => (
//                   <Combobox.Option
//                     key={index}
//                     value={option}
//                     className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                   >
//                     <span className="block truncate group-data-[selected]:font-semibold">
//                       {option}
//                     </span>

//                     <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   </Combobox.Option>
//                 ))}
//               </Combobox.Options>
//             </div>
//           </Combobox>
//         </div>
//       )}

//       {selectedReferralType === 'Reference' && selectedReferenceSubOption && (
//         <div className="mt-4">
//           <label className="block text-xs font-medium text-gray-700">Referee Name</label>
//           <input
//             type="text"
//             name="refereeName"
//             value={refereeName}
//             onChange={handleRefereeNameChange}
//             className="w-full  mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//           />
//         </div>
//       )}

//       {selectedReferralType === 'Social Media' && (
//         <div className="mt-4">
//           <label className="block text-xs font-medium text-gray-700">Social Media Platform</label>
//           <Combobox as="div" value={selectedSocialMediaPlatform} onChange={setSelectedSocialMediaPlatform}>
//             <div className="relative">
//               <Combobox.Input
//                 className="w-full  mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 onChange={(event) => setQuery(event.target.value)}
//                 displayValue={(platform) => platform || ''}
//               />
//               <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                 <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//               </Combobox.Button>

//               <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                 {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((platform, index) => (
//                   <Combobox.Option
//                     key={index}
//                     value={platform}
//                     className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                   >
//                     <span className="block truncate group-data-[selected]:font-semibold">
//                       {platform}
//                     </span>

//                     <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   </Combobox.Option>
//                 ))}
//               </Combobox.Options>
//             </div>
//           </Combobox>
//         </div>
//       )}

//       {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}

   
//     </div>
//     </div>
//     <div className='grid'>

                  
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Address line1</label>
//                     <input
//                       type="text"
//                       name="address"
//                       value={orderDetails.address}
//                       onChange={handleChange}
//                       className={`p-1  mt-2 mb-1 w-full border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//                   </div>
               
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Address line2</label>
//                     <input
//                       type="text"
//                       name="address1"
//                       value={orderDetails.address1}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.address1 ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.address1 && <p className="text-red-500 text-sm mt-1">{errors.address1}</p>}
//                   </div>
       
                  
                  
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">City</label>
//                     <input
//                       type="text"
//                       name="city"
//                       value={orderDetails.city}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
//                   </div>
                  
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">State</label>
//                     <input
//                       type="text"
//                       name="state"
//                       value={orderDetails.state}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
//                   </div>
                 
                  
   
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Zipcode</label>
//                     <input
//                       type="number"
//                       name="zipcode"
//                       value={orderDetails.zipcode}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.zipcode ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.zipcode && <p className="text-red-500 text-sm mt-1">{errors.zipcode}</p>}
//                   </div>
//                   <div>
//        <label className="block text-xs font-medium text-gray-700 mt-1">Total amount</label>
//        <input
//         type="number"
//         name="totalAmount"
//         value={orderDetails.totalAmount}
//         onChange={handleChange}
//         className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
//     </div>
  
//     <div>
//       <label className="block text-xs font-medium text-gray-700 mt-1">Advance amount</label>
      
//       <input 
//         type="number"
//         name="advanceAmount"
//         value={orderDetails.advanceAmount}
//         onChange={handleChange}
//         className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.advanceAmount ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.advanceAmount && <p className="text-red-500 text-sm mt-1">{errors.advanceAmount}</p>}
//     </div>
    
//                   <div>
//       <label className="block text-xs font-medium text-gray-700 mt-1">Balance amount</label>
//       <input
//         type="number"
//         name="balanceAmount"
//         value={orderDetails.totalAmount-orderDetails.advanceAmount}
//         onChange={handleChange}
//         className={`p-1  mt-2 mb-1 w-full border rounded-md`}
//       />
//     </div>

//                   </div>
                 
                 
//                 </>
//               )}
//                      </Box>
                    
//               <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: ' 1fr' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           justifyContent: 'center',
//           alignItems:'center',
//           pt: 2 
//         }}
//       >
//               {activeStep === 1 && (
                
                
//  <>
//    <>
                 
                  
//                  <div className='flex gap-36 '>
//                    <label className=" text-xs font-medium text-gray-700 mt-2">Designer Name:</label>
//                    <input
//                      type="text"
//                      name="design"
//                      value={orderDetails.design}
//                      onChange={handleChange}
//                      className={` p-1 w-1/3 border rounded-md ${errors.design ? 'border-red-500' : 'border-gray-300'}`}
//                    />
//                    {errors.design && <p className="text-red-500 text-sm mt-1">{errors.design}</p>}
//                  </div>

 
//                  <div>
//      <label className="block text-xs font-medium text-gray-700">Upload Images (Upto 6 images)</label>
//      <input
//        type="file"
//        multiple
//        onChange={handleImageChange}
//        className="hidden"
//        id="image-upload"
//      />
//      <div className="flex items-center mt-1">
//        <label
//          htmlFor="image-upload"
//          className="flex items-center justify-center w-24 h-24 bg-gray-200 border border-gray-300 text-gray-500 rounded-md cursor-pointer"
//        >
//          <span className="text-3xl">+</span>
//        </label>
//        {images.length > 0 && (
//          <div className="flex mt-2 ml-2">
//            {imagePreviews.map((preview, index) => (
//              <div key={index} className="relative inline-block mr-2">
//                <img src={preview} alt={`Preview ${index}`} className="w-24 h-24 object-cover" />
//                <button
//                  onClick={() => handleImageRemove(index)}
//                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
//                >
//                  x
//                </button>
//              </div>
//            ))}
//          </div>
//        )}
//      </div>
//    </div>

//    <div className='mb-4'>
//        <label className="block text-xs font-medium text-gray-700">Upload whole designPDF</label>
//        <input
//          type="file"
//          accept=".pdf"
//          onChange={handlePdfChange}
//          className="mt-1 p-2 w-1/2 border rounded-md"
//        />
//        {pdfPreview && (
//          <div className="mt-2 flex items-center">
//            <a href={pdfPreview} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//              View PDF
//            </a>
//            <button
//              onClick={handlePdfRemove}
//              className="ml-4 bg-red-500 text-white p-1 rounded-full text-xs"
//            >
//              x
//            </button>
//          </div>
//        )}
//      </div>

//                </>
//       <div className='flex gap-32'>
//         <label className="w-1/8 text-left ml-44 mt-3 text-xs font-medium text-gray-700">Order Status:</label>
//         <select
//           name="orderStatus"
//           value={orderDetails.orderStatus}
//           onChange={handleChange}
//           className={` w-1/4 p-1 border rounded-md ${errors.orderStatus ? 'border-red-500' : 'border-gray-300'}`}
//         >
//           <option value="">Select a Status</option>
//           <option value="Pending">Pending</option>
//           <option value="Processed">Processed</option>
//         </select>
//         {errors.orderStatus && <p className="text-red-500 text-sm mt-1">{errors.orderStatus}</p>}
//       </div>
//       <div className='flex gap-36'>
//         <label className="text-xs text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">Assign To:</label>
//         <input
//           type="text"
//           name="createdBy"
//           value={orderDetails.createdBy}
//           onChange={handleChange}
//           className={` p-1 w-1/4 border rounded-md ${errors.createdBy ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.createdBy && <p className="text-red-500 text-sm mt-1">{errors.createdBy}</p>}
//       </div>
//       <div className='flex gap-36'>
//         <label className="text-left mt-3 w-1/8 ml-44 text-xs font-medium text-gray-700">Start Date:</label>
//         <input
//           type="date"
//           name="startdate"
//           value={orderDetails.startdate}
//           onChange={handleChange}
//           className={` p-1 w-1/4 border rounded-md ${errors.startdate ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.startdate && <p className="text-red-500 text-sm mt-1">{errors.startdate}</p>}
//       </div>
//       <div className='flex gap-14'>
//         <label className="text-left mt-3 w-1/8 ml-44 text-xs font-medium text-gray-700">Expected Completed Date:</label>
//         <input
//           type="date"
//           name="enddate"
//           value={orderDetails.enddate}
//           onChange={handleChange}
//           className={`mt-1 p-1 w-1/4 border rounded-md ${errors.enddate ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.enddate && <p className="text-red-500 text-sm mt-1">{errors.enddate}</p>}
//       </div>
//       <div className='flex gap-36'>
//         <label className="text-left mt-3 w-1/8 ml-44 text-xs font-medium text-gray-700">Comments:</label>
//         <input
//           type="text"
//           name="orderStatusComments"
//           value={orderDetails.orderStatusComments}
//           onChange={handleChange}
//           className={`mt-1 p-1 w-1/4 border rounded-md ${errors.orderStatusComments ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.orderStatusComments && <p className="text-red-500 text-sm mt-1">{errors.orderStatusComments}</p>}
//       </div>
  
//       <div className="relative">
//   <button
//     onClick={handleAddOrder}
//     className="absolute bottom-2  right-0 w-18 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//   >
//     Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//   </button>
// </div>

//       {orders.length >= 0 && (
//         <>
         

// <table className="min-w-full border-collapse border border-gray-300 mt-4">
//   <thead className='bg-custom-maroon'>
//     <tr className="text-center border-b border-gray-300">
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Order Status</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Assign To</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Start Date</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Expected Completed Date</th>
//       <th className="px-4 py-2 font-normal">Comments</th>
//     </tr>
//   </thead>
//   <tbody>
//     {orders
//       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//       .map((order, index) => (
//         <tr key={index} className="text-center border-b border-gray-300">
//           <td className="px-4 py-2 border-r border-gray-300">{order.orderStatus}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.createdBy}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.startdate}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.enddate}</td>
//           <td className="px-4 py-2">{order.orderStatusComments}</td>
//         </tr>
//       ))}
//   </tbody>
// </table>


//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={orders.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </>
//       )}
//     </>
 
//        )}
//               </Box>
//               <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: '1fr ' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           pt: 2 
//         }}
//       >
//                             {activeStep === 2 && (
   
//     <>
//     <div className='flex '>
//       <label className="text-left  ml-44 w-1/4 mt-3  text-xs font-medium text-gray-700">Payments Type:</label>
//       <select
//                       name="paymentstype"
//                    value={orderDetails.paymentstype}
//                        onChange={handleChange}
//                       className={`p-1 w-1/4 border rounded-md ${errors.paymentstype ? 'border-red-500' : 'border-gray-300'}`}
//                     >
//                       <option value="select a type">Select a Type</option>
//                     <option value="Cash">Cash</option>
//                      <option value="UPI">UPI</option>
//                      <option value="Card">Card</option>
//                     </select>
//                     {errors.paymentstype && <p className="text-red-500 text-sm mt-1">{errors.paymentstype}</p>}
        
//     </div>
//     <div className='flex '>
//       <label className="w-1/4 ml-44 text-left mt-3 text-xs font-medium text-gray-700">Total Amount:</label>
//       <input
//         type="number"
//         name="totalAmount"
//        value={orderDetails.totalAmount}
//       onChange={handleChange}
//  className={` w-1/4 p-1 border rounded-md ${errors.totalAmount ? 'border-red-500' : 'border-gray-300'}`}
//      />
//           {errors.totalAmount && <p className="text-red-500 text-sm mt-1">{errors.totalAmount}</p>}
//     </div>
//     <div className='flex '>
//       <label className="text-xs text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">Advance Amount:</label>
//       <input 
//          type="number"
//         name="advanceAmount"
//         value={orderDetails.advanceAmount}
//          onChange={handleChange}
//          className={` p-1 w-1/4 border rounded-md ${errors.advanceAmount ? 'border-red-500' : 'border-gray-300'}`}
//        />
//       {errors.advanceAmount && <p className="text-red-500 text-sm mt-1">{errors.advanceAmount}</p>}
     
//     </div>
//     <div className='flex '>
//       <label className="text-xs text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">comments:</label>
//       <input 
//          type="text"
//         name="paymentscomments"
//         value={orderDetails.paymentscomments}
//          onChange={handleChange}
//          className={` p-1 w-1/4 border rounded-md ${errors.paymentscomments ? 'border-red-500' : 'border-gray-300'}`}
//        />
//       {errors.paymentscomments && <p className="text-red-500 text-sm mt-1">{errors.paymentscomments}</p>}
     
//     </div>

    
    
//     <div className="relative">
//   <button
//     onClick={handleAddOrder1}
//     className="absolute bottom-3 right-0 w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//   >
//     Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//   </button>
// </div>

//     {orders.length >= 0 && (
//       <>
        

// <table className="min-w-full border-collapse border border-gray-300 mt-4">
//   <thead className='bg-custom-maroon'>
//     <tr className="text-center border-b border-gray-300">
//     <th className="px-4 py-2 font-normal border-r">Payment Type</th>

//       <th className="px-4 py-2 font-normal border-r border-gray-300">Total Amount</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Advance Amount</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Balance Amount</th>
//       <th className="px-4 py-2 font-normal">Comments</th>

   
//     </tr>
//   </thead>
//   <tbody>
//     {orders
//       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//       .map((order, index) => (
//         <tr key={index} className="text-center border-b border-gray-300">
//                     <td className="px-4 py-2 border-r">{order.paymentstype}</td>

//           <td className="px-4 py-2 border-r border-gray-300">{order.totalAmount}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.advanceAmount}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.totalAmount - order.advanceAmount}</td>

//           <td className="px-4 py-2">{order.paymentscomments}</td>
//         </tr>
//       ))}
//   </tbody>
// </table>


//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={orders.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </>
//     )}
//   </>
// )}

//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
   
//               <button
//   color="inherit"
//   onClick={handleBack}
//   className={`inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm ${
//     activeStep === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-custom-lightblue  hover:text-gray-700"
//   }`}
//   disabled={activeStep === 0}
// >
//   <MdArrowBackIosNew />
//   Back
// </button>

//               <Box sx={{ flex: '1 1 auto' }} />
//               <button
//                 variant="contained"
//                 onClick={handleCancel}
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-300  px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover: hover:bg-gray-400 ml-2 mr-4"                ><RxCross1 />

//                 Cancel
//               </button>              <button
//                 variant="contained"
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 "
//                 >

//                 {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
//                 <MdOutlineArrowForwardIos />

//               </button>
//             </Box>
//           </React.Fragment>
//         )}
//         {showAlert && (
//           <div className="fixed top-0 right-0 w-full bg-green-500 text-white p-4 text-center">
//             <span>Order added successfully!</span>
//           </div>
//         )}
//         {submittedDetails && (
//           <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
//             <h3 className="text-xl font-bold mb-4">Submitted Order Details:</h3>
//             <p><strong>FirstName:</strong> {submittedDetails.firstname}</p>
//             <p><strong>LastName:</strong> {submittedDetails.lastname}</p>
//             <p><strong>Email:</strong> {submittedDetails.email}</p>
//             <p><strong>Phone:</strong> {submittedDetails.phone}</p>
//             <p><strong>Address:</strong> {submittedDetails.address}</p>
//             <p><strong>City:</strong> {submittedDetails.city}</p>
//             <p><strong>State:</strong> {submittedDetails.state}</p>
//             <p><strong>Zipcode:</strong> {submittedDetails.zipcode}</p>
//             <p><strong>Order Status:</strong> {submittedDetails.orderStatus}</p>
//             <p><strong>Created By:</strong> {submittedDetails.createdBy}</p>
//             <p><strong>Expected Delivery Date:</strong> {submittedDetails.deliveryDate}</p>
//             <p><strong>Design:</strong> {submittedDetails.design}</p>
//             <p><strong>Type:</strong> {submittedDetails.type}</p>
//             <p><strong>Source:</strong> {submittedDetails.categories}</p>
//             <p><strong>Sub-Source:</strong> {submittedDetails.subOption}</p>
//             <p><strong>TotalAmount:</strong> {submittedDetails.totalAmount}</p>
//             <p><strong>AdvanceAmount:</strong> {submittedDetails.advanceAmount}</p>
//             <p><strong>Comments:</strong> {submittedDetails.comments}</p>
//             <p><strong>OrderStatusCommentsComments:</strong> {submittedDetails.orderStatusComments}</p>
//             <p><strong>StartDate:</strong> {submittedDetails.startdate}</p>
//             <p><strong>Expected Completed Date:</strong> {submittedDetails.enddate}</p>
//             <p><strong>Payments Type</strong> {submittedDetails.paymentstype}</p>
//             <p><strong>BalanceAmount:</strong> {submittedDetails.totalAmount-submittedDetails.advanceAmount}</p>
//             <p><strong>Initial Measurement:Length</strong> {submittedDetails.length}</p>
//             <p><strong>Initial Measurement:Height</strong> {submittedDetails.height}</p>
//             <p><strong>Initial Measurement:Width</strong> {submittedDetails.width}</p>
//             <p><strong>Final Measurement:Length</strong> {submittedDetails.finalLength}</p>
//             <p><strong>Final Measurement:Height</strong> {submittedDetails.finalHeight}</p>
//             <p><strong>Final Measurement:Width</strong> {submittedDetails.finalWidth}</p>
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               {submittedDetails.images && submittedDetails.images.map((img, index) => (
//                 <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
//               ))}
//             </div>
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               {submittedDetails.pdfPreview && submittedDetails.pdfPreview.map((img, index) => (
//                 <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
//               ))}
//             </div>
//           </div>
//         )}
//       </Box>
//     </div>
//     </>
//   );
// }

// export default AddOrders;


// import React, { useState, useContext, useEffect } from 'react';
// import {CustomerContext} from "../../Context/customerContext"
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import {   MdArrowBackIosNew, MdDelete, MdOutlineArrowForwardIos } from "react-icons/md";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import TablePagination from '@mui/material/TablePagination';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { RxCross1 } from "react-icons/rx";
// import { FiUpload } from "react-icons/fi";


// import {
//   Combobox,

// } from '@headlessui/react';
// import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
// import axios from 'axios';
// import CustomerSearch from './CustomerSearch'; // Import the new component
// const categories = [
//   { id: 1, name: 'Walk-in', subOptions: ["Newspaper ad"] },
//   { id: 2, name: 'Social Media', subOptions: ['Google', 'Facebook', 'Instagram'] },
//   { id: 3, name: 'Reference', subOptions: ['Existing Client', 'Directors', 'Employee'] },
// ];
// const steps = ['Order Details',  'Order Status', "payments"];

// function AddOrders() {
//   const { customerDetails } = useContext(CustomerContext); // Access the CustomerContext
//   const handleCustomerSelect = (customer) => {
//     setOrderDetails({
//         ...orderDetails,
//         CustomerID: customer.customerId,
//         customerFirstName: customer.customerFirstName,
//         customerLastName: customer.customerLastName,
//         customerEmail: customer.customerEmail,
//         customerPhone: customer.customerPhone,
//     });
// };
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [page, setPage] = useState(0);
//   const [orders, setOrders] = useState([]);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const [activeStep, setActiveStep] = useState(0);
//   const [skipped, setSkipped] = useState(new Set());
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState('');
//   const [selectedSubOption, setSelectedSubOption] = useState('');

//   const filteredCategories = query === ''
//     ? categories
//     : categories.filter((category) =>
//         category.name.toLowerCase().includes(query.toLowerCase())
//       );

//   const subOptions = selectedCategory
//     ? categories.find(cat => cat.id === selectedCategory.id)?.subOptions || []
//     : [];
//     const currentDate = new Date().toISOString().split('T')[0];

//   const [orderDetails, setOrderDetails] = useState({
    
//         TenantID: 1,
//         CustomerID:customerDetails?.customerId || 0,
//         OrderDate: currentDate,
//         TotalQuantity: "",
//         AddressLine1: "",
//         AddressLine2: "",
//         CityID: "",
//         StateID: "",
//         CountryID: "",
//         ZipCode: "",
//         TotalAmount: "",
//         OrderStatus: "",
//         OrderBy: "",
//         Type: "",
//         DeliveryDate: "",
//         customerFirstName: "",
//         customerLastName: "",
//         customerEmail: "",
//         customerPhone: "",
//         PaymentMethod: "",
//         PaymentStatus: "",
//         MaskedCardNumber: "",
//         ExpectedCompleteDate: "",
//         Comments: "",
//         ReferedBy: "walk-in",
//         PaymentComments: "",
//         assginto: "",
//         AdvanceAmount: "",
//         BalenceAmount: "",
//         ExpectedDurationDays: "",
//         DesginerName: "",
//         UploadImages: "",
//         choosefiles: ""
//   });
//   useEffect(() => {
//     if (customerDetails) {
//       setOrderDetails(prevDetails => ({
//         ...prevDetails,
//         CustomerID: customerDetails.customerId,
 
//       }));
//     }
//   }, [customerDetails]);
//   const handleCategoryChange = (category) => {
//     setQuery('');
//     setSelectedCategory(category);
//     setSelectedSubOption(''); // Reset sub-option when category changes
//     setOrderDetails(prevDetails => ({
//       ...prevDetails,
//       categories: category ? category.name : ''
//     }));
//   };
//   const [errors, setErrors] = useState({});
//   const [showAlert, setShowAlert] = useState(false);
//   const [submittedDetails, setSubmittedDetails] = useState(null);
//   const [images, setImages] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);

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



//   const handleReset = () => setActiveStep(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setOrderDetails({ ...orderDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (images.length + files.length > 6) {
//       alert('You can only upload up to 6 images.');
//       return;
//     }
//     const newImages = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setImages([...images, ...newImages]);
//     setImagePreviews([...imagePreviews, ...newImages.map((img) => img.preview)]);
//   };

//   const handleImageRemove = (index) => {
//     const newImages = images.filter((_, i) => i !== index);
//     const newPreviews = imagePreviews.filter((_, i) => i !== index);
//     setImages(newImages);
//     setImagePreviews(newPreviews);
//   };

//   const handleSubmit = async (e) => {
   
//     e.preventDefault();
//     const data = new FormData();

//     // Append all form data to the FormData object
//     for (let key in orderDetails) {
//       if (key !== 'UploadImages' && key !== 'choosefiles') {

//         data.append(key, orderDetails[key]);
//     }
//   }
//   images.forEach((image) => {
//     data.append('UploadImages', image.file); // Appending multiple images with the same key
// });


//   // Append PDF file
//   if (pdfFile) {
//     data.append('choosefiles', pdfFile);
//   }

//     try {
//         const response = await axios.post(
//             'https://imlystudios-backend-mqg4.onrender.com/api/orders/createOrder',
//             data,
//             {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             }
//         );
//         console.log('Order created successfully:', response.data);
//     } catch (error) {
//         console.log('Order created successfully:', data);

//     }
//     const newErrors = {};
//     if (!orderDetails.OrderDate) {
//       newErrors.OrderDate = 'Order Date is required';
//       console.log('Order Date is required');
//   }
//   if (!orderDetails.TotalQuantity) {
//       newErrors.TotalQuantity = 'Total Quantity is required';
//       console.log('Total Quantity is required');
//   }
//   if (!orderDetails.AddressLine1) {
//       newErrors.AddressLine1 = 'Address Line 1 is required';
//       console.log('Address Line 1 is required');
//   }
//   if (!orderDetails.AddressLine2) {
//       newErrors.AddressLine2 = 'Address Line 2 is required';
//       console.log('Address Line 2 is required');
//   }
//   if (!orderDetails.CityID) {
//       newErrors.CityID = 'City ID is required';
//       console.log('City ID is required');
//   }
//   if (!orderDetails.StateID) {
//       newErrors.StateID = 'State ID is required';
//       console.log('State ID is required');
//   }
//   if (!orderDetails.CountryID) {
//       newErrors.CountryID = 'Country ID is required';
//       console.log('Country ID is required');
//   }
//   if (!orderDetails.ZipCode) {
//       newErrors.ZipCode = 'Zip Code is required';
//       console.log('Zip Code is required');
//   }
//   if (!orderDetails.TotalAmount) {
//       newErrors.TotalAmount = 'Total Amount is required';
//       console.log('Total Amount is required');
//   }
//   if (!orderDetails.OrderStatus) {
//       newErrors.OrderStatus = 'Order Status is required';
//       console.log('Order Status is required');
//   }
//   if (!orderDetails.OrderBy) {
//       newErrors.OrderBy = 'Order By is required';
//       console.log('Order By is required');
//   }
//   if (!orderDetails.Type) {
//       newErrors.Type = 'Type is required';
//       console.log('Type is required');
//   }
//   if (!orderDetails.DeliveryDate) {
//       newErrors.DeliveryDate = 'Delivery Date is required';
//       console.log('Delivery Date is required');
//   }
//   if (!orderDetails.customerFirstName) {
//       newErrors.customerFirstName = 'Customer First Name is required';
//       console.log('Customer First Name is required');
//   }
//   if (!orderDetails.customerLastName) {
//       newErrors.customerLastName = 'Customer Last Name is required';
//       console.log('Customer Last Name is required');
//   }
//   if (!orderDetails.customerEmail) {
//       newErrors.customerEmail = 'Customer Email is required';
//       console.log('Customer Email is required');
//   }
//   if (!orderDetails.customerPhone) {
//       newErrors.customerPhone = 'Customer Phone is required';
//       console.log('Customer Phone is required');
//   }
//   if (!orderDetails.PaymentMethod) {
//       newErrors.PaymentMethod = 'Payment Method is required';
//       console.log('Payment Method is required');
//   }
//   if (!orderDetails.PaymentStatus) {
//       newErrors.PaymentStatus = 'Payment Status is required';
//       console.log('Payment Status is required');
//   }
//   if (!orderDetails.MaskedCardNumber) {
//       newErrors.MaskedCardNumber = 'Masked Card Number is required';
//       console.log('Masked Card Number is required');
//   }
//   if (!orderDetails.ExpectedCompleteDate) {
//       newErrors.ExpectedCompleteDate = 'Expected Complete Date is required';
//       console.log('Expected Complete Date is required');
//   }
//   if (!orderDetails.Comments) {
//       newErrors.Comments = 'Comments are required';
//       console.log('Comments are required');
//   }
//   if (!orderDetails.ReferedBy) {
//       newErrors.ReferedBy = 'Referred By is required';
//       console.log('Referred By is required');
//   }
//   if (!orderDetails.PaymentComments) {
//       newErrors.PaymentComments = 'Payment Comments are required';
//       console.log('Payment Comments are required');
//   }
//   if (!orderDetails.assginto) {
//       newErrors.assginto = 'Assigned To is required';
//       console.log('Assigned To is required');
//   }
//   if (!orderDetails.AdvanceAmount) {
//       newErrors.AdvanceAmount = 'Advance Amount is required';
//       console.log('Advance Amount is required');
//   }
//   if (!orderDetails.BalenceAmount) {
//       newErrors.BalenceAmount = 'Balance Amount is required';
//       console.log('Balance Amount is required');
//   }
//   if (!orderDetails.ExpectedDurationDays) {
//       newErrors.ExpectedDurationDays = 'Expected Duration Days is required';
//       console.log('Expected Duration Days is required');
//   }
//   if (!orderDetails.DesginerName) {
//       newErrors.DesginerName = 'Designer Name is required';
//       console.log('Designer Name is required');
//   }
//   if (images.length === 0) {
//       newErrors.UploadImages = 'Upload Images are required';
//       console.log('Upload Images are required');
//   }
//   if (!pdfFile) {
//       newErrors.choosefiles = 'Choose Files is required';
//       console.log('Choose Files is required');
//   }
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       toast.error('Please fill in all required fields.', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//     });
//       return;
//     }

//     setSubmittedDetails({ ...orderDetails, images: imagePreviews, category: selectedCategory?.name || '', subOption: selectedSubOption || ''}); // Store the submitted details including image previews
//     setShowAlert(true);

//     setOrderDetails({
//       TenantID: 1,
//       CustomerID: customerDetails?.customerId || 0,
//       OrderDate: currentDate,
//       TotalQuantity: "",
//       AddressLine1: "",
//       AddressLine2: "",
//       CityID: "",
//       StateID: "",
//       CountryID: "",
//       ZipCode: "",
//       TotalAmount: "",
//       OrderStatus: "",
//       OrderBy: "",
//       Type: "",
//       DeliveryDate: "",
//       customerFirstName: "",
//       customerLastName: "",
//       customerEmail: "",
//       customerPhone: "",
//       PaymentMethod: "",
//       PaymentStatus: "",
//       MaskedCardNumber: "",
//       ExpectedCompleteDate: "",
//       Comments: "",
//       ReferedBy: "walk-in",
//       PaymentComments: "",
//       assginto: "",
//       AdvanceAmount: "",
//       BalenceAmount: "",
//       ExpectedDurationDays: "",
//       DesginerName: "",
//       UploadImages: "",
//       choosefiles: ""
//     });
//     setImages([]);
//     setImagePreviews([]);
//     setSelectedSubOption('');

//     setActiveStep(0);  // Reset stepper to first step
//     setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
//   };

//   const handleCancel = () => {
//     setOrderDetails({
//       TenantID: 1,
//       CustomerID: customerDetails?.customerId || 0,
//       OrderDate: currentDate,
//       TotalQuantity: "",
//       AddressLine1: "",
//       AddressLine2: "",
//       CityID: "",
//       StateID: "",
//       CountryID: "",
//       ZipCode: "",
//       TotalAmount: "",
//       OrderStatus: "",
//       OrderBy: "",
//       Type: "",
//       DeliveryDate: "",
//       customerFirstName: "",
//       customerLastName: "",
//       customerEmail: "",
//       customerPhone: "",
//       PaymentMethod: "",
//       PaymentStatus: "",
//       MaskedCardNumber: "",
//       ExpectedCompleteDate: "",
//       Comments: "",
//       ReferedBy: "walk-in",
//       PaymentComments: "",
//       assginto: "",
//       AdvanceAmount: "",
//       BalenceAmount: "",
//       ExpectedDurationDays: "",
//       DesginerName: "",
//       UploadImages: "",
//       choosefiles: ""
//     });
//     setActiveStep(0); // Optional: Reset to the first step
//   };

//   const amountToBePaid = orderDetails.TotalAmount - orderDetails.AdvanceAmount;
//  const remainder = amountToBePaid / orderDetails.installments;
//  const [showSearchCard, setShowSearchCard] = useState(false);

//  const handleAddOrder = () => {
//   // Validate the form fields
//   const newErrors = {};
//   if (!orderDetails.OrderStatus) newErrors.OrderStatus = 'Order Status is required';
//   if (!orderDetails.assginto) newErrors.assginto = 'Assign To is required';
//   if (!orderDetails.ExpectedDurationDays) newErrors.ExpectedDurationDays = 'Expected Duration (In Days) is required';

//   setErrors(newErrors);

//   if (Object.keys(newErrors).length === 0) {
//     // Add the order to the orders array
//     setOrders([...orders, orderDetails]);

//     // Clear the form fields
//     setOrderDetails({
//       OrderStatus: '',
//       assginto: '',
//       ExpectedDurationDays: ''
//     });
//   }
// };

//  const handleExistingUserClick = () => {
//      setShowSearchCard(!showSearchCard);
//  };

//  const handleAddOrder1 = () => {
//   const newErrors = {};
//   if (!orderDetails.PaymentMethod) newErrors.PaymentMethod = 'PaymentMethod is required';
//   if (!orderDetails.PaymentStatus) newErrors.PaymentStatus = 'PaymentStatus is required';
//   if (!orderDetails.MaskedCardNumber) newErrors.MaskedCardNumber = 'MaskedCardNumber Type is required';
//   if (!orderDetails.PaymentComments) newErrors.PaymentComments = 'PaymentComments comments is required';
//   setErrors(newErrors);
//   if (Object.keys(newErrors).length === 0) {
//     // Add the order to the orders array
//     setOrders([...orders, orderDetails]);

//     // Clear the form fields
//     setOrderDetails({
//       PaymentMethod: '',
//       PaymentStatus: '',
//       MaskedCardNumber: '',
//       PaymentComments: '',
//     });
//   }
// };
// const [pdfFile, setPdfFile] = useState(null);
//   const [pdfPreview, setPdfPreview] = useState('');
//   const handlePdfChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setPdfFile(file);
//       setPdfPreview(URL.createObjectURL(file));
//     }
//   };

//   const handlePdfRemove = () => {
//     setPdfFile(null);
//     setPdfPreview('');
//   };   
//   const [file, setFile] = useState(null);
//   const handleFileChange = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile && uploadedFile.type === "application/pdf") {
//       setFile(uploadedFile);
//     } else {
//       alert("Please upload a PDF file.");
//     }
//   };
//   const handleDelete = () => {
//     setFile(null);
//   };
//   const [file1, setFile1] = useState(null);
//   const handleFileChange1 = (e) => {
//     const uploadedFile = e.target.files[0];
//     if (uploadedFile && uploadedFile.type === "application/pdf") {
//       setFile1(uploadedFile);
//     } else {
//       alert("Please upload a PDF file.");
//     }
//   };
//   const handleDelete1 = () => {
//     setFile1(null);
//   };
//   const [selectedReferralType, setSelectedReferralType] = useState('');
//   const [selectedReferenceSubOption, setSelectedReferenceSubOption] = useState('');
//   const [selectedSocialMediaPlatform, setSelectedSocialMediaPlatform] = useState('');
//   const [error, setError] = useState('');
//   const handleReferralTypeChange = (value) => {
//     setSelectedReferralType(value);
//     setOrderDetails({ ...orderDetails, ReferedBy: value });
//   };
//   const handleReferenceSubOptionChange = (value) => {
//     setSelectedReferenceSubOption(value);
//   };
//   const handleRefereeNameChange = (event) => {
//     setOrderDetails({ ...orderDetails, refereeName: event.target.value });
//   };
//   const handleSocialMediaPlatformChange = (value) => {
//     setSelectedSocialMediaPlatform(value);
//     setOrderDetails({ ...orderDetails, socialMediaPlatform: value });
//   };

//   useEffect(() => {
//     if (customerDetails) {
//       setOrderDetails(prevDetails => ({
//         ...prevDetails,
//         CustomerID: customerDetails.customerId,
//         customerFirstName: customerDetails.customerFirstName,
//         customerLastName: customerDetails.customerLastName,
//         customerEmail: customerDetails.customerEmail,
//         customerPhone: customerDetails.customerPhone,
//       }));
//     }
//   }, [customerDetails]);

//   const handleSearch = async () => {
//     try {
//       if (query.trim()) {
//         const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/customers/getCustomerById/${query}`);
//         setOrderDetails({
//           ...orderDetails,
//           CustomerID: response.data.customerId,
//           customerFirstName: response.data.customerFirstName,
//           customerLastName: response.data.customerLastName,
//           customerEmail: response.data.customerEmail,
//           customerPhone: response.data.customerPhone,
//         });
//         setError(null);
//       } else {
//         setError('Please enter a valid search query.');
//       }
//     } catch (err) {
//       setError('Error fetching customer data.');
//     }
//   };

  
//   return (
//     <>
//     <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8   rounded-lg">
//             {/* Button at the top */} <ToastContainer />
//             <div className="flex justify-end">
//         <button 
//             onClick={handleExistingUserClick} 
//             className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//         >
//             Existing Customer
//         </button>
//         </div>
//                         {showSearchCard && (
//                 <div className="mt-4 p-4 border rounded shadow-lg">
//                     <h2 className="text-lg font-bold mb-4">Search User</h2>
//                     {/* <input 
//                         type="text" 
//                         placeholder="Search by email or mobile number" 
//                         className="w-full p-2 border rounded mb-4"
//                     /> */}
//                     {/* <button className="bg-green-500 text-white px-4 py-2 rounded">
//                         Search
//                     </button> */}
//                     <CustomerSearch onCustomerSelect={handleCustomerSelect} onClick={handleSearch} />

//                 </div>
//             )}
//         </div>
//     <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">
//             <Box sx={{ width: '100%' }}>
//   <Stepper activeStep={activeStep} className="mb-6" alternativeLabel>
//     {steps.map((label, index) => {
//       const stepProps = {};
//       const labelProps = {};
//       if (isStepOptional(index)) {
//         // Optional step logic
//       }
//       if (isStepSkipped(index)) {
//         stepProps.completed = false;
//       }
//       return (
//         <Step key={label} {...stepProps}>
//           <StepLabel {...labelProps}>
//             {label} {/* Label for the step */}
//           </StepLabel>
//         </Step>
//       );
//     })}
//   </Stepper>
//   {activeStep === steps.length ? (
//     <React.Fragment>
//       <Typography className="text-center text-xl mb-4">
//         All steps completed - you're finished
//       </Typography>
//       <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className="justify-center">
//         <Button onClick={handleReset} className="bg-blue-500 text-white hover:bg-blue-700 px-4 py-2 rounded">
//           Reset
//         </Button>
//       </Box>
//     </React.Fragment>
//   ) : (
//     <React.Fragment>
     
//       <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           pt: 2 
//         }}
//       >  
//               {activeStep === 0 && (
//                 <>
//                 <div className='grid'>
//                 <div>
//                     <label className="block text-xs font-medium text-gray-700">First name</label>
//                     <input
//                       type="text"
//                       name="customerFirstName"
//                       value={orderDetails.customerFirstName}
//                       onChange={handleChange}
//                       className={` p-1 mt-2 mb-1 w-full border rounded-md ${errors.customerFirstName ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.customerFirstName && <p className="text-red-500 text-sm mt-1">{errors.customerFirstName}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Last name</label>
//                     <input
//                       type="text"
//                       name="customerLastName"
//                       value={orderDetails.customerLastName}
//                       onChange={handleChange}
//                       className={` p-1 mt-2 mb-1 w-full border rounded-md ${errors.customerLastName ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.customerLastName && <p className="text-red-500 text-sm mt-1">{errors.customerLastName}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Email</label>
//                     <input
//                       type="email"
//                       name="customerEmail"
//                       value={orderDetails.customerEmail}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.customerEmail ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.customerEmail && <p className="text-red-500 text-sm mt-1">{errors.customerEmail}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Phone</label>
//                     <input
//                       type="number"
//                       name="customerPhone"
//                       value={orderDetails.customerPhone}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.customerPhone ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.customerPhone && <p className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>}
//                   </div>
//                   <div>
//   <label className="block text-xs font-medium text-gray-700">Type</label>
//   <select
//     name="Type"
//     value={orderDetails.Type}
//     onChange={handleChange}
//     className={`p-1 mt-2 mb-1 w-full border rounded-md ${errors.Type ? 'border-red-500' : 'border-gray-300'}`}
//   >
//     <option value="select a type">Select a Type</option>
//     <option value="Kitchen">Kitchen</option>
//     <option value="Wardrobe">Wardrobe</option>
//     <option value="Living">Living</option>
//     <option value="2 BHK">2 BHK</option>
//     <option value="3 BHK">3 BHK</option>
//     <option value="Others (TV unit, Crockery, Shoe rack, Vanities)">Others (TV unit, Crockery, Shoe rack, Vanities)</option>
//   </select>
//   {errors.Type && <p className="text-red-500 text-sm mt-1">{errors.Type}</p>}
// </div>
// <div>
//   <label className="block text-xs font-medium text-gray-700">Order Date</label>
//   <input
//     type="date"
//     name="OrderDate"
//     value={orderDetails.OrderDate || currentDate}
//     onChange={handleChange}
//     className={`p-1 mt-2 mb-1 w-full border rounded-md ${errors.OrderDate ? 'border-red-500' : 'border-gray-300'}`}
//   />
//   {errors.OrderDate && <p className="text-red-500 text-sm mt-1">{errors.OrderDate}</p>}
// </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Expected Complete Date</label>
//                     <input
//                       type="date"
//                       name="ExpectedCompleteDate"
//                       value={orderDetails.ExpectedCompleteDate}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.ExpectedCompleteDate ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.ExpectedCompleteDate && <p className="text-red-500 text-sm mt-1">{errors.ExpectedCompleteDate}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Comments</label>
//                     <input
//                       type="text"
//                       name="Comments"
//                       value={orderDetails.Comments}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.Comments ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.Comments && <p className="text-red-500 text-sm mt-1">{errors.Comments}</p>}
//                   </div>
                 
//                   <div className="mb-4">
//         <label className="block text-xs font-medium text-gray-700">Referred By</label>
//         <Combobox as="div" value={selectedReferralType} onChange={handleReferralTypeChange}>
//           <div className="relative">
//             <Combobox.Input
//               className="w-full mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               onChange={(event) => setQuery(event.target.value)}
//               displayValue={(type) => type || ''}
//             />
//             <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//               <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//             </Combobox.Button>

//             <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//               {['Social Media', 'Walk-In', 'Reference'].map((type, index) => (
//                 <Combobox.Option
//                   key={index}
//                   value={type}
//                   className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                 >
//                   <span className="block truncate group-data-[selected]:font-semibold">
//                     {type}
//                   </span>
//                   <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                     <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                   </span>
//                 </Combobox.Option>
//               ))}
//             </Combobox.Options>
//           </div>
//         </Combobox>
//         {/* Conditionally render the additional input fields */}
//         {selectedReferralType === 'Reference' && (
//           <div className="mt-4">
//             <label className="block text-xs font-medium text-gray-700">Reference Sub-option</label>
//             <Combobox as="div" value={selectedReferenceSubOption} onChange={handleReferenceSubOptionChange}>
//               <div className="relative">
//                 <Combobox.Input
//                   className="w-full mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(option) => option || ''}
//                 />
//                 <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </Combobox.Button>

//                 <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                   {['Director', 'Employee', 'Existing'].map((option, index) => (
//                     <Combobox.Option
//                       key={index}
//                       value={option}
//                       className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                     >
//                       <span className="block truncate group-data-[selected]:font-semibold">
//                         {option}
//                       </span>
//                       <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                         <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                       </span>
//                     </Combobox.Option>
//                   ))}
//                 </Combobox.Options>
//               </div>
//             </Combobox>
//           </div>
//         )}
//         {selectedReferralType === 'Reference' && selectedReferenceSubOption && (
//           <div className="mt-4">
//             <label className="block text-xs font-medium text-gray-700">Referee Name</label>
//             <input
//               type="text"
//               name="refereeName"
//               value={orderDetails.refereeName}
//               onChange={handleRefereeNameChange}
//               className="w-full mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//             />
//           </div>
//         )}
//         {selectedReferralType === 'Social Media' && (
//           <div className="mt-4">
//             <label className="block text-xs font-medium text-gray-700">Social Media Platform</label>
//             <Combobox as="div" value={selectedSocialMediaPlatform} onChange={handleSocialMediaPlatformChange}>
//               <div className="relative">
//                 <Combobox.Input
//                   className="w-full mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   onChange={(event) => setQuery(event.target.value)}
//                   displayValue={(platform) => platform || ''}
//                 />
//                 <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
//                   <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//                 </Combobox.Button>

//                 <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                   {['Facebook', 'Instagram', 'Twitter'].map((platform, index) => (
//                     <Combobox.Option
//                       key={index}
//                       value={platform}
//                       className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
//                     >
//                       <span className="block truncate group-data-[selected]:font-semibold">
//                         {platform}
//                       </span>
//                       <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
//                         <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                       </span>
//                     </Combobox.Option>
//                   ))}
//                 </Combobox.Options>
//               </div>
//             </Combobox>
//           </div>
//         )}
//         {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
//       </div>
//       </div>
//     <div className='grid'> 
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Address line1</label>
//                     <input
//                       type="text"
//                       name="AddressLine1"
//                       value={orderDetails.AddressLine1}
//                       onChange={handleChange}
//                       className={`p-1  mt-2 mb-1 w-full border rounded-md ${errors.AddressLine1 ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.AddressLine1 && <p className="text-red-500 text-sm mt-1">{errors.AddressLine1}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Address line2</label>
//                     <input
//                       type="text"
//                       name="AddressLine2"
//                       value={orderDetails. AddressLine2}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors. AddressLine2 ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.AddressLine2 && <p className="text-red-500 text-sm mt-1">{errors.AddressLine2}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">City</label>
//                     <input
//                       type="text"
//                       name="CityID"
//                       value={orderDetails.CityID}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.CityID ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.CityID && <p className="text-red-500 text-sm mt-1">{errors.CityID}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">State</label>
//                     <input
//                       type="text"
//                       name="StateID"
//                       value={orderDetails.StateID}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.StateID ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.StateID && <p className="text-red-500 text-sm mt-1">{errors.StateID}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Country</label>
//                     <input
//                       type="text"
//                       name="CountryID"
//                       value={orderDetails.CountryID}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.CountryID ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.CountryID && <p className="text-red-500 text-sm mt-1">{errors.CountryID}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Zipcode</label>
//                     <input
//                       type="number"
//                       name="ZipCode"
//                       value={orderDetails.ZipCode}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.ZipCode ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.ZipCode && <p className="text-red-500 text-sm mt-1">{errors.ZipCode}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-xs font-medium text-gray-700">Total Quantity</label>
//                     <input
//                       type="number"
//                       name="TotalQuantity"
//                       value={orderDetails.TotalQuantity}
//                       onChange={handleChange}
//                       className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.TotalQuantity ? 'border-red-500' : 'border-gray-300'}`}
//                     />
//                     {errors.TotalQuantity && <p className="text-red-500 text-sm mt-1">{errors.TotalQuantity}</p>}
//                   </div>
//                   <div>
//        <label className="block text-xs font-medium text-gray-700 mt-1">Total amount</label>
//        <input
//         type="number"
//         name="TotalAmount"
//         value={orderDetails.TotalAmount}
//         onChange={handleChange}
//         className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.TotalAmount ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.TotalAmount && <p className="text-red-500 text-sm mt-1">{errors.TotalAmount}</p>}
//     </div>
//     <div>
//       <label className="block text-xs font-medium text-gray-700 mt-1">Advance amount</label>
      
//       <input 
//         type="number"
//         name="AdvanceAmount"
//         value={orderDetails.AdvanceAmount}
//         onChange={handleChange}
//         className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.AdvanceAmount ? 'border-red-500' : 'border-gray-300'}`}
//       />
//       {errors.AdvanceAmount && <p className="text-red-500 text-sm mt-1">{errors.AdvanceAmount}</p>}
//     </div>
//                   <div>
//       <label className="block text-xs font-medium text-gray-700 mt-1">Balance amount</label>
//       <input
//         type="number"
//         name="AdvanceAmount"
//         value={ orderDetails.BalenceAmount=orderDetails.TotalAmount-orderDetails.AdvanceAmount}
//         onChange={handleChange}
//         className={`p-1  mt-2 mb-1 w-full border rounded-md`}
//       />
//     </div>
//                   </div>
//                 </>
//               )}
//                      </Box>
                    
//               <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: ' 1fr' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           justifyContent: 'center',
//           alignItems:'center',
//           pt: 2 
//         }}
//       >
//               {activeStep === 1 && (
 
//  <>
//    <>
//                  <div className='flex gap-36 '>
//                    <label className=" text-xs font-medium text-gray-700 mt-2">Designer Name:</label>
//                    <input
//                      type="text"
//                      name="DesginerName"
//                      value={orderDetails.DesginerName}
//                      onChange={handleChange}
//                      className={` p-1 w-1/3 border rounded-md ${errors.DesginerName ? 'border-red-500' : 'border-gray-300'}`}
//                    />
//                    {errors.DesginerName && <p className="text-red-500 text-sm mt-1">{errors.DesginerName}</p>}
//                  </div>
//                  <div>
//      <label className="block text-xs font-medium text-gray-700">Upload Images (Upto 6 images)</label>
//      <input
//        type="file"
//        multiple
//        onChange={handleImageChange}
//        className="hidden"
//        id="UploadImages"
//      />
//      <div className="flex items-center mt-1">
//        <label
//          htmlFor="UploadImages"
//          className="flex items-center justify-center w-24 h-24 bg-gray-200 border border-gray-300 text-gray-500 rounded-md cursor-pointer"
//        >
//          <span className="text-3xl">+</span>
//        </label>
//        {images.length > 0 && (
//          <div className="flex mt-2 ml-2">
//            {imagePreviews.map((preview, index) => (
//              <div key={index} className="relative inline-block mr-2">
//                <img src={preview} alt={`Preview ${index}`} className="w-24 h-24 object-cover" />
//                <button
//                  onClick={() => handleImageRemove(index)}
//                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
//                >
//                  x
//                </button>
//              </div>
//            ))}
//          </div>
//        )}
//      </div>
//    </div>
//    <div className='mb-4'>
//        <label   htmlFor="choosefiles" className="block text-xs font-medium text-gray-700">Upload whole designPDF</label>
//        <input
//          type="file"
//          accept=".pdf"
//          onChange={handlePdfChange}
//          className="mt-1 p-2 w-1/2 border rounded-md"
//          id='choosefiles'
//        />
//        {pdfPreview && (
//          <div className="mt-2 flex items-center">
//            <a href={pdfPreview} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
//              View PDF
//            </a>
//            <button
//              onClick={handlePdfRemove}
//              className="ml-4 bg-red-500 text-white p-1 rounded-full text-xs"
//            >
//              x
//            </button>
//          </div>
//        )}
//      </div>
//                </>
//       <div className='flex gap-32'>
//         <label className="w-1/8 text-left ml-44 mt-3 text-xs font-medium text-gray-700">Order Status:</label>
//         <select
//           name="OrderStatus"
//           value={orderDetails.OrderStatus}
//           onChange={handleChange}
//           className={` w-1/4 p-1 border rounded-md ${errors.OrderStatus ? 'border-red-500' : 'border-gray-300'}`}
//         >
//           <option value="">Select a Status</option>
//           <option value="Pending">Shipping</option>
//           <option value="Pending">Pending</option>
//           <option value="Processed">Processed</option>
//         </select>
//         {errors.OrderStatus && <p className="text-red-500 text-sm mt-1">{errors.OrderStatus}</p>}
//       </div>
      
//       <div className='flex gap-36'>
//         <label className="text-xs text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">OrderBy</label>
//         <input
//           type="text"
//           name="OrderBy"
//           value={orderDetails.OrderBy}
//           onChange={handleChange}
//           className={` p-1 w-1/4 border rounded-md ${errors.OrderBy ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.OrderBy && <p className="text-red-500 text-sm mt-1">{errors.OrderBy}</p>}
       
//       </div>
//       <div className='flex gap-36'>
//         <label className="text-xs text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">DeliveryDate</label>
//         <input
//           type="date"
//           name="DeliveryDate"
//           value={orderDetails.DeliveryDate}
//           onChange={handleChange}
//           className={` p-1 w-1/4 border rounded-md ${errors.DeliveryDate ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.DeliveryDate && <p className="text-red-500 text-sm mt-1">{errors.DeliveryDate}</p>}
//       </div>
//       <div className='flex gap-36'>
//         <label className="text-xs text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">Assign To:</label>
//         <input
//           type="text"
//           name="assginto"
//           value={orderDetails.assginto}
//           onChange={handleChange}
//           className={` p-1 w-1/4 border rounded-md ${errors.assginto ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.assginto && <p className="text-red-500 text-sm mt-1">{errors.assginto}</p>}
//       </div>
//       <div className='flex gap-12'>
//         <label className="text-left mt-3 w-1/8 ml-44 text-xs font-medium text-gray-700">Expected Duration (In Days)</label>
//         <input
//           type="number"
//           name="ExpectedDurationDays"
//           value={orderDetails.ExpectedDurationDays}
//           onChange={handleChange}
//           className={` p-1 w-1/4 border rounded-md ${errors.ExpectedDurationDays ? 'border-red-500' : 'border-gray-300'}`}
//         />
//         {errors.ExpectedDurationDays && <p className="text-red-500 text-sm mt-1">{errors.ExpectedDurationDays}</p>}
//       </div>
//       <div className="relative">
//   <button
//     onClick={handleAddOrder}
//     className="absolute bottom-2  right-0 w-18 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//   >
//     Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//   </button>
// </div>
//       {orders.length >= 0 && (
//         <>
// <table className="min-w-full border-collapse border border-gray-300 mt-4">
//   <thead className='bg-custom-maroon'>
//     <tr className="text-center border-b border-gray-300">
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Order Status</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Assign To</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Expected Completed (In Days)</th>
//     </tr>
//   </thead>
//   <tbody>
//     {orders
//       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//       .map((order, index) => (
//         <tr key={index} className="text-center border-b border-gray-300">
//           <td className="px-4 py-2 border-r border-gray-300">{order.OrderStatus}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.assginto}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.ExpectedDurationDays}</td>
//         </tr>
//       ))}
//   </tbody>
// </table>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={orders.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={handleChangePage}
//             onRowsPerPageChange={handleChangeRowsPerPage}
//           />
//         </>
//       )}
//     </>
 
//        )}
//               </Box>
//               <Box 
//         sx={{ 
//           display: 'grid', 
//           gridTemplateColumns: { xs: '1fr', sm: '1fr ' }, // Ensure proper grid layout
//           gap: 2, // Adjust spacing between items
//           pt: 2 
//         }}
//       >
//                             {activeStep === 2 && (
   
//     <>
//     <div className='flex '>
//       <label className="text-left  ml-44 w-1/4 mt-3  text-xs font-medium text-gray-700">Payments Type:</label>
//       <select
//                       name="PaymentMethod"
//                    value={orderDetails.PaymentMethod}
//                        onChange={handleChange}
//                       className={`p-1 w-1/4 border rounded-md ${errors.PaymentMethod ? 'border-red-500' : 'border-gray-300'}`}
//                     >
//                       <option value="select a type">Select a Type</option>
//                     <option value="Cash">Cash</option>
//                      <option value="UPI">UPI</option>
//                      <option value="Card">Card</option>
//                     </select>
//                     {errors.PaymentMethod && <p className="text-red-500 text-sm mt-1">{errors.PaymentMethod}</p>}
        
//     </div>
//     <div className='flex '>
//       <label className="text-left  ml-44 w-1/4 mt-3  text-xs font-medium text-gray-700">PaymentStatus</label>
//       <select
//                       name="PaymentStatus"
//                    value={orderDetails.PaymentStatus}
//                        onChange={handleChange}
//                       className={`p-1 w-1/4 border rounded-md ${errors.PaymentStatus ? 'border-red-500' : 'border-gray-300'}`}
//                     >
//                       <option value="select a type">Select a Status</option>
//                     <option value="Cash">Processing</option>
//                      <option value="UPI">Pending</option>
//                      <option value="Card">Completed</option>
//                     </select>
//                     {errors.PaymentStatus && <p className="text-red-500 text-sm mt-1">{errors.PaymentStatus}</p>}
        
//     </div>
   
//     <div className='flex '>
//   <label className="text-xs text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">PaymentsCardNumber:</label>
//   <input
//     type="text"
//     name="MaskedCardNumber"
//     value={orderDetails.MaskedCardNumber ? orderDetails.MaskedCardNumber.replace(/\d(?=\d{4})/g, '*') : ''}
//     onChange={(e) => {
//       const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
//       if (value.length <= 16) {
//         handleChange({ target: { name: 'MaskedCardNumber', value } });
//       }
//     }}
//     className={`p-1 w-1/4 border rounded-md ${errors.MaskedCardNumber ? 'border-red-500' : 'border-gray-300'}`}
//   />
//   {errors.MaskedCardNumber && <p className="text-red-500 text-sm mt-1">{errors.MaskedCardNumber}</p>}
// </div>
//     <div className='flex '>
//       <label className="text-xs text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">PaymentComments:</label>
//       <input 
//          type="text"
//         name="PaymentComments"
//         value={orderDetails.PaymentComments}
//          onChange={handleChange}
//          className={` p-1 w-1/4 border rounded-md ${errors.PaymentComments ? 'border-red-500' : 'border-gray-300'}`}
//        />
//       {errors.PaymentComments && <p className="text-red-500 text-sm mt-1">{errors.PaymentComments}</p>}
     
//     </div>
//     <div className="relative">
//   <button
//     onClick={handleAddOrder1}
//     className="absolute bottom-3 right-0 w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
//   >
//     Add <span className="text-lg"><IoMdAddCircleOutline /></span>
//   </button>
// </div>

//     {orders.length >= 0 && (
//       <>
// <table className="min-w-full border-collapse border border-gray-300 mt-4">
//   <thead className='bg-custom-maroon'>
//     <tr className="text-center border-b border-gray-300">
//     <th className="px-4 py-2 font-normal border-r">Payment Type</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Payments Status</th>
//       <th className="px-4 py-2 font-normal border-r border-gray-300">Payments card number</th>
//       <th className="px-4 py-2 font-normal border-r">Payments commComments</th>
//     </tr>
//   </thead>
//   <tbody>
//     {orders
//       .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//       .map((order, index) => (
//         <tr key={index} className="text-center border-b border-gray-300">
//                     <td className="px-4 py-2 border-r">{order.PaymentMethod}</td>

//           <td className="px-4 py-2 border-r border-gray-300">{order.PaymentStatus}</td>
//           <td className="px-4 py-2 border-r border-gray-300">{order.MaskedCardNumber}</td>

//           <td className="px-4 py-2">{order.PaymentComments}</td>
//         </tr>
//       ))}
//   </tbody>
// </table>
//      <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={orders.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </>
//     )}
//   </>
// )}
//             </Box>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
   
//               <button
//   color="inherit"
//   onClick={handleBack}
//   className={`inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm ${
//     activeStep === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-custom-lightblue  hover:text-gray-700"
//   }`}
//   disabled={activeStep === 0}
// >
//   <MdArrowBackIosNew />
//   Back
// </button>

//               <Box sx={{ flex: '1 1 auto' }} />
//               <button
//                 variant="contained"
//                 onClick={handleCancel}
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-300  px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover: hover:bg-gray-400 ml-2 mr-4"                ><RxCross1 />

//                 Cancel
//               </button>              <button
//                 variant="contained"
//                 onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 "
//                 >

//                 {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
//                 <MdOutlineArrowForwardIos />

//               </button>
//             </Box>
//           </React.Fragment>
//         )}
//         {showAlert && (
//           <div className="fixed top-0 right-0 w-full bg-green-500 text-white p-4 text-center">
//             <span>Order added successfully!</span>
//           </div>
//         )}
//        {submittedDetails && (
//   <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
//     <h3 className="text-xl font-bold mb-4">Submitted Order Details:</h3>
//     <p><strong>Tenant ID:</strong> {submittedDetails.TenantID}</p>
//     <p><strong>Customer ID:</strong> {submittedDetails.CustomerID}</p>
//     <p><strong>Order Date:</strong> {submittedDetails.OrderDate}</p>
//     <p><strong>Total Quantity:</strong> {submittedDetails.TotalQuantity}</p>
//     <p><strong>Address Line 1:</strong> {submittedDetails.AddressLine1}</p>
//     <p><strong>Address Line 2:</strong> {submittedDetails.AddressLine2}</p>
//     <p><strong>City ID:</strong> {submittedDetails.CityID}</p>
//     <p><strong>State ID:</strong> {submittedDetails.StateID}</p>
//     <p><strong>Country ID:</strong> {submittedDetails.CountryID}</p>
//     <p><strong>Zip Code:</strong> {submittedDetails.ZipCode}</p>
//     <p><strong>Total Amount:</strong> {submittedDetails.TotalAmount}</p>
//     <p><strong>Order Status:</strong> {submittedDetails.OrderStatus}</p>
//     <p><strong>Order By:</strong> {submittedDetails.OrderBy}</p>
//     <p><strong>Type:</strong> {submittedDetails.Type}</p>
//     <p><strong>Delivery Date:</strong> {submittedDetails.DeliveryDate}</p>
//     <p><strong>Customer First Name:</strong> {submittedDetails.customerFirstName}</p>
//     <p><strong>Customer Last Name:</strong> {submittedDetails.customerLastName}</p>
//     <p><strong>Customer Email:</strong> {submittedDetails.customerEmail}</p>
//     <p><strong>Customer Phone:</strong> {submittedDetails.customerPhone}</p>
//     <p><strong>Payment Method:</strong> {submittedDetails.PaymentMethod}</p>
//     <p><strong>Payment Status:</strong> {submittedDetails.PaymentStatus}</p>
//     <p><strong>Masked Card Number:</strong> {submittedDetails.MaskedCardNumber}</p>
//     <p><strong>Expected Complete Date:</strong> {submittedDetails.ExpectedCompleteDate}</p>
//     <p><strong>Comments:</strong> {submittedDetails.Comments}</p>
//     <p><strong>Referred By:</strong> {submittedDetails.ReferedBy}</p>
//     <p><strong>Payment Comments:</strong> {submittedDetails.PaymentComments}</p>
//     <p><strong>Assigned To:</strong> {submittedDetails.assginto}</p>
//     <p><strong>Advance Amount:</strong> {submittedDetails.AdvanceAmount}</p>
//     <p><strong>Balance Amount:</strong> {submittedDetails.BalenceAmount}</p>
//     <p><strong>Expected Duration Days:</strong> {submittedDetails.ExpectedDurationDays}</p>
//     <p><strong>Designer Name:</strong> {submittedDetails.DesginerName}</p>
//     <p><strong>Upload Images:</strong> {submittedDetails.UploadImages}</p>
//     <p><strong>Choose Files:</strong> {submittedDetails.choosefiles}</p>
//     <p><strong>Balance Amount (calculated):</strong> {submittedDetails.TotalAmount - submittedDetails.AdvanceAmount}</p>
//     <p><strong>Initial Measurement Length:</strong> {submittedDetails.length}</p>
//     <p><strong>Initial Measurement Height:</strong> {submittedDetails.height}</p>
//     <p><strong>Initial Measurement Width:</strong> {submittedDetails.width}</p>
//     <p><strong>Final Measurement Length:</strong> {submittedDetails.finalLength}</p>
//     <p><strong>Final Measurement Height:</strong> {submittedDetails.finalHeight}</p>
//     <p><strong>Final Measurement Width:</strong> {submittedDetails.finalWidth}</p>
//     <div className="grid grid-cols-3 gap-4 mt-4">
//       {submittedDetails.images && submittedDetails.images.map((img, index) => (
//         <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
//       ))}
//     </div>
//     <div className="grid grid-cols-3 gap-4 mt-4">
//       {submittedDetails.pdfPreview && submittedDetails.pdfPreview.map((img, index) => (
//         <img key={index} src={img} alt={`PDF Preview ${index}`} className="w-full h-36 object-cover border rounded-md" />
//       ))}
//     </div>
//   </div>
// )}

//       </Box>
//     </div>
//     </>
//   );
// }

// export default AddOrders;




import React, { useState, useContext, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {   MdArrowBackIosNew, MdDelete, MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosSearch, IoMdAddCircleOutline } from "react-icons/io";
import TablePagination from '@mui/material/TablePagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross1 } from "react-icons/rx";
import { FiUpload } from "react-icons/fi";


import {
  Combobox,

} from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import CustomerSearch from './CustomerSearch'; // Import the new component
import { CustomerContext } from '../../Context/customerContext';
const categories = [
  { id: 1, name: 'Walk-in', subOptions: ["Newspaper ad"] },
  { id: 2, name: 'Social Media', subOptions: ['Google', 'Facebook', 'Instagram'] },
  { id: 3, name: 'Reference', subOptions: ['Existing Client', 'Directors', 'Employee'] },
];
const steps = ['Order Details',  'Order Status', "payments"];

function AddOrders() {
  const { customerDetails } = useContext(CustomerContext); // Access the CustomerContext
  const handleCustomerSelect = (customer) => {
    setOrderDetails({
        ...orderDetails,
        CustomerID: customer.customerId,
        customerFirstName: customer.customerFirstName,
        customerLastName: customer.customerLastName,
        customerEmail: customer.customerEmail,
        customerPhone: customer.customerPhone,
    });
};
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  const [orders, setOrders] = useState([]);
  const [results, setResults] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const popupRef = useRef(null);

  const fetchData = async (value) => {
    try {
      const response = await axios.get(
        "https://imlystudios-backend-mqg4.onrender.com/api/customers/getAllCustomers",
        {
          params: {
            page: 4,
            pageSize: 1000,
            search: value,
          },
        }
      );

      const filteredUsers = response.data.customers.filter((customer) => {
        return (
          value &&
          customer &&
          customer.FirstName &&
          customer.FirstName.toLowerCase().includes(value.toLowerCase())
        );
      });

      setResults(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleAutoFill = (customer) => {
    console.log("Selected Customer Data:", customer); // Log to inspect the customer object
  
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      CustomerID: customer.CustomerID || 0,  // Assuming customer has a CustomerID
      customerFirstName: customer.FirstName || "",  // Map to the correct field
      customerLastName: customer.LastName || "",
      customerEmail: customer.Email || "",
      customerPhone: customer.PhoneNumber || "",
      AddressLine1: customer.Addresses[0] || "",
      AddressLine2: customer.Addresses[1] || "",
      CityID: customer.Address?.CityID || "",
      StateID: customer.Address?.StateID || "",
      CountryID: customer.Address?.CountryID || "",
      ZipCode: customer.Address?.ZipCode || "",
      TotalAmount: customer.TotalAmount || "",
      OrderStatus: customer.OrderStatus || "",
      OrderBy: customer.OrderBy || "",
      Type: customer.Type || "",
      DeliveryDate: customer.DeliveryDate || "",
      PaymentMethod: customer.PaymentMethod || "",
      PaymentStatus: customer.PaymentStatus || "",
      MaskedCardNumber: customer.MaskedCardNumber || "",
      ExpectedCompleteDate: customer.ExpectedCompleteDate || "",
      Comments: customer.Comments || "",
      ReferedBy: customer.ReferedBy || "walk-in",  // Default to 'walk-in'
      PaymentComments: customer.PaymentComments || "",
      assginto: customer.AssignedTo || "",
      AdvanceAmount: customer.AdvanceAmount || "",
      BalenceAmount: customer.BalenceAmount || "",
      ExpectedDurationDays: customer.ExpectedDurationDays || "",
      DesginerName: customer.DesignerName || "",
      UploadImages: customer.UploadImages || "",
      choosefiles: customer.ChooseFiles || "",
    }));
  
    setIsFocused(false); // Close the popup after autofill
    setSearchValue("");  // Clear the search input after selection
  };
  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    fetchData(value); // Trigger the search based on input value
  };
  useEffect(() => {
    // Hide the popup if clicked outside
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [searchValue, setSearchValue] = useState("");


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');

  const filteredCategories = query === ''
    ? categories
    : categories.filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      );

  const subOptions = selectedCategory
    ? categories.find(cat => cat.id === selectedCategory.id)?.subOptions || []
    : [];
    const currentDate = new Date().toISOString().split('T')[0];

  const [orderDetails, setOrderDetails] = useState({
    
        TenantID: 1,
        CustomerID:customerDetails?.customerId || 0,
        OrderDate: currentDate,
        TotalQuantity: "",
        AddressLine1: "",
        AddressLine2: "",
        CityID: "",
        StateID: "",
        CountryID: "",
        ZipCode: "",
        TotalAmount: "",
        OrderStatus: "",
        OrderBy: "",
        Type: "",
        DeliveryDate: "",
        customerFirstName: "",
        customerLastName: "",
        customerEmail: "",
        customerPhone: "",
        PaymentMethod: "",
        PaymentStatus: "",
        MaskedCardNumber: "",
        ExpectedCompleteDate: "",
        Comments: "",
        ReferedBy: "walk-in",
        PaymentComments: "",
        assginto: "",
        AdvanceAmount: "",
        BalenceAmount: "",
        ExpectedDurationDays: "",
        DesginerName: "",
        UploadImages: "",
        choosefiles: ""
  });
  useEffect(() => {
    if (customerDetails) {
      setOrderDetails(prevDetails => ({
        ...prevDetails,
        CustomerID: customerDetails.customerId,
 
      }));
    }
  }, [customerDetails]);

  console.log(results)
  const handleCategoryChange = (category) => {
    setQuery('');
    setSelectedCategory(category);
    setSelectedSubOption(''); // Reset sub-option when category changes
    setOrderDetails(prevDetails => ({
      ...prevDetails,
      categories: category ? category.name : ''
    }));
  };
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [submittedDetails, setSubmittedDetails] = useState(null);
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

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



  const handleReset = () => setActiveStep(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 6) {
      alert('You can only upload up to 6 images.');
      return;
    }
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...newImages]);
    setImagePreviews([...imagePreviews, ...newImages.map((img) => img.preview)]);
  };

  const handleImageRemove = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
   
    e.preventDefault();
    const data = new FormData();

    // Append all form data to the FormData object
    for (let key in orderDetails) {
      if (key !== 'UploadImages' && key !== 'choosefiles') {

        data.append(key, orderDetails[key]);
    }
  }
  images.forEach((image) => {
    data.append('UploadImages', image.file); // Appending multiple images with the same key
});


  // Append PDF file
  if (pdfFile) {
    data.append('choosefiles', pdfFile);
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
        console.log('Order created successfully:', data);

    }
    const newErrors = {};
    if (!orderDetails.OrderDate) {
      newErrors.OrderDate = 'Order Date is required';
      console.log('Order Date is required');
  }
  if (!orderDetails.TotalQuantity) {
      newErrors.TotalQuantity = 'Total Quantity is required';
      console.log('Total Quantity is required');
  }
  if (!orderDetails.AddressLine1) {
      newErrors.AddressLine1 = 'Address Line 1 is required';
      console.log('Address Line 1 is required');
  }
  if (!orderDetails.AddressLine2) {
      newErrors.AddressLine2 = 'Address Line 2 is required';
      console.log('Address Line 2 is required');
  }
  if (!orderDetails.CityID) {
      newErrors.CityID = 'City ID is required';
      console.log('City ID is required');
  }
  if (!orderDetails.StateID) {
      newErrors.StateID = 'State ID is required';
      console.log('State ID is required');
  }
  if (!orderDetails.CountryID) {
      newErrors.CountryID = 'Country ID is required';
      console.log('Country ID is required');
  }
  if (!orderDetails.ZipCode) {
      newErrors.ZipCode = 'Zip Code is required';
      console.log('Zip Code is required');
  }
  if (!orderDetails.TotalAmount) {
      newErrors.TotalAmount = 'Total Amount is required';
      console.log('Total Amount is required');
  }
  if (!orderDetails.OrderStatus) {
      newErrors.OrderStatus = 'Order Status is required';
      console.log('Order Status is required');
  }
  if (!orderDetails.OrderBy) {
      newErrors.OrderBy = 'Order By is required';
      console.log('Order By is required');
  }
  if (!orderDetails.Type) {
      newErrors.Type = 'Type is required';
      console.log('Type is required');
  }
  if (!orderDetails.DeliveryDate) {
      newErrors.DeliveryDate = 'Delivery Date is required';
      console.log('Delivery Date is required');
  }
  if (!orderDetails.customerFirstName) {
      newErrors.customerFirstName = 'Customer First Name is required';
      console.log('Customer First Name is required');
  }
  if (!orderDetails.customerLastName) {
      newErrors.customerLastName = 'Customer Last Name is required';
      console.log('Customer Last Name is required');
  }
  if (!orderDetails.customerEmail) {
      newErrors.customerEmail = 'Customer Email is required';
      console.log('Customer Email is required');
  }
  if (!orderDetails.customerPhone) {
      newErrors.customerPhone = 'Customer Phone is required';
      console.log('Customer Phone is required');
  }
  if (!orderDetails.PaymentMethod) {
      newErrors.PaymentMethod = 'Payment Method is required';
      console.log('Payment Method is required');
  }
  if (!orderDetails.PaymentStatus) {
      newErrors.PaymentStatus = 'Payment Status is required';
      console.log('Payment Status is required');
  }
  if (!orderDetails.MaskedCardNumber) {
      newErrors.MaskedCardNumber = 'Masked Card Number is required';
      console.log('Masked Card Number is required');
  }
  if (!orderDetails.ExpectedCompleteDate) {
      newErrors.ExpectedCompleteDate = 'Expected Complete Date is required';
      console.log('Expected Complete Date is required');
  }
  if (!orderDetails.Comments) {
      newErrors.Comments = 'Comments are required';
      console.log('Comments are required');
  }
  if (!orderDetails.ReferedBy) {
      newErrors.ReferedBy = 'Referred By is required';
      console.log('Referred By is required');
  }
  if (!orderDetails.PaymentComments) {
      newErrors.PaymentComments = 'Payment Comments are required';
      console.log('Payment Comments are required');
  }
  if (!orderDetails.assginto) {
      newErrors.assginto = 'Assigned To is required';
      console.log('Assigned To is required');
  }
  if (!orderDetails.AdvanceAmount) {
      newErrors.AdvanceAmount = 'Advance Amount is required';
      console.log('Advance Amount is required');
  }
  if (!orderDetails.BalenceAmount) {
      newErrors.BalenceAmount = 'Balance Amount is required';
      console.log('Balance Amount is required');
  }
  if (!orderDetails.ExpectedDurationDays) {
      newErrors.ExpectedDurationDays = 'Expected Duration Days is required';
      console.log('Expected Duration Days is required');
  }
  if (!orderDetails.DesginerName) {
      newErrors.DesginerName = 'Designer Name is required';
      console.log('Designer Name is required');
  }
  if (images.length === 0) {
      newErrors.UploadImages = 'Upload Images are required';
      console.log('Upload Images are required');
  }
  if (!pdfFile) {
      newErrors.choosefiles = 'Choose Files is required';
      console.log('Choose Files is required');
  }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Please fill in all required fields.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
      return;
    }

    setSubmittedDetails({ ...orderDetails, images: imagePreviews, category: selectedCategory?.name || '', subOption: selectedSubOption || ''}); // Store the submitted details including image previews
    setShowAlert(true);

    setOrderDetails({
      TenantID: 1,
      CustomerID: customerDetails?.customerId || 0,
      OrderDate: currentDate,
      TotalQuantity: "",
      AddressLine1: "",
      AddressLine2: "",
      CityID: "",
      StateID: "",
      CountryID: "",
      ZipCode: "",
      TotalAmount: "",
      OrderStatus: "",
      OrderBy: "",
      Type: "",
      DeliveryDate: "",
      customerFirstName: "",
      customerLastName: "",
      customerEmail: "",
      customerPhone: "",
      PaymentMethod: "",
      PaymentStatus: "",
      MaskedCardNumber: "",
      ExpectedCompleteDate: "",
      Comments: "",
      ReferedBy: "walk-in",
      PaymentComments: "",
      assginto: "",
      AdvanceAmount: "",
      BalenceAmount: "",
      ExpectedDurationDays: "",
      DesginerName: "",
      UploadImages: "",
      choosefiles: ""
    });
    setImages([]);
    setImagePreviews([]);
    setSelectedSubOption('');

    setActiveStep(0);  // Reset stepper to first step
    setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
  };

  const handleCancel = () => {
    setOrderDetails({
      TenantID: 1,
      CustomerID: customerDetails?.customerId || 0,
      OrderDate: currentDate,
      TotalQuantity: "",
      AddressLine1: "",
      AddressLine2: "",
      CityID: "",
      StateID: "",
      CountryID: "",
      ZipCode: "",
      TotalAmount: "",
      OrderStatus: "",
      OrderBy: "",
      Type: "",
      DeliveryDate: "",
      customerFirstName: "",
      customerLastName: "",
      customerEmail: "",
      customerPhone: "",
      PaymentMethod: "",
      PaymentStatus: "",
      MaskedCardNumber: "",
      ExpectedCompleteDate: "",
      Comments: "",
      ReferedBy: "walk-in",
      PaymentComments: "",
      assginto: "",
      AdvanceAmount: "",
      BalenceAmount: "",
      ExpectedDurationDays: "",
      DesginerName: "",
      UploadImages: "",
      choosefiles: ""
    });
    setActiveStep(0); // Optional: Reset to the first step
  };

  const amountToBePaid = orderDetails.TotalAmount - orderDetails.AdvanceAmount;
 const remainder = amountToBePaid / orderDetails.installments;
 const [showSearchCard, setShowSearchCard] = useState(false);

 const handleAddOrder = () => {
  // Validate the form fields
  const newErrors = {};
  if (!orderDetails.OrderStatus) newErrors.OrderStatus = 'Order Status is required';
  if (!orderDetails.assginto) newErrors.assginto = 'Assign To is required';
  if (!orderDetails.ExpectedDurationDays) newErrors.ExpectedDurationDays = 'Expected Duration (In Days) is required';

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    // Add the order to the orders array
    setOrders([...orders, orderDetails]);

    // Clear the form fields
    setOrderDetails({
      OrderStatus: '',
      assginto: '',
      ExpectedDurationDays: ''
    });
  }
};

 const handleExistingUserClick = () => {
     setShowSearchCard(!showSearchCard);
 };

 const handleAddOrder1 = () => {
  const newErrors = {};
  if (!orderDetails.PaymentMethod) newErrors.PaymentMethod = 'PaymentMethod is required';
  if (!orderDetails.PaymentStatus) newErrors.PaymentStatus = 'PaymentStatus is required';
  if (!orderDetails.MaskedCardNumber) newErrors.MaskedCardNumber = 'MaskedCardNumber Type is required';
  if (!orderDetails.PaymentComments) newErrors.PaymentComments = 'PaymentComments comments is required';
  setErrors(newErrors);
  if (Object.keys(newErrors).length === 0) {
    // Add the order to the orders array
    setOrders([...orders, orderDetails]);

    // Clear the form fields
    setOrderDetails({
      PaymentMethod: '',
      PaymentStatus: '',
      MaskedCardNumber: '',
      PaymentComments: '',
    });
  }
};
const [pdfFile, setPdfFile] = useState(null);
  const [pdfPreview, setPdfPreview] = useState('');
  const handlePdfChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPdfFile(file);
      setPdfPreview(URL.createObjectURL(file));
    }
  };

  const handlePdfRemove = () => {
    setPdfFile(null);
    setPdfPreview('');
  };   
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile(uploadedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };
  const handleDelete = () => {
    setFile(null);
  };
  const [file1, setFile1] = useState(null);
  const handleFileChange1 = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile && uploadedFile.type === "application/pdf") {
      setFile1(uploadedFile);
    } else {
      alert("Please upload a PDF file.");
    }
  };
  const handleDelete1 = () => {
    setFile1(null);
  };
  const [selectedReferralType, setSelectedReferralType] = useState('');
  const [selectedReferenceSubOption, setSelectedReferenceSubOption] = useState('');
  const [selectedSocialMediaPlatform, setSelectedSocialMediaPlatform] = useState('');
  const [error, setError] = useState('');
  const handleReferralTypeChange = (value) => {
    setSelectedReferralType(value);
    setOrderDetails({ ...orderDetails, ReferedBy: value });
  };
  const handleReferenceSubOptionChange = (value) => {
    setSelectedReferenceSubOption(value);
  };
  const handleRefereeNameChange = (event) => {
    setOrderDetails({ ...orderDetails, refereeName: event.target.value });
  };
  const handleSocialMediaPlatformChange = (value) => {
    setSelectedSocialMediaPlatform(value);
    setOrderDetails({ ...orderDetails, socialMediaPlatform: value });
  };

  useEffect(() => {
    if (customerDetails) {
      setOrderDetails(prevDetails => ({
        ...prevDetails,
        CustomerID: customerDetails.customerId,
        customerFirstName: customerDetails.customerFirstName,
        customerLastName: customerDetails.customerLastName,
        customerEmail: customerDetails.customerEmail,
        customerPhone: customerDetails.customerPhone,
      }));
    }
  }, [customerDetails]);

  const handleSearch = async () => {
    try {
      if (query.trim()) {
        const response = await axios.get(`https://imlystudios-backend-mqg4.onrender.com/api/customers/getCustomerById/${query}`);
        setOrderDetails({
          ...orderDetails,
          CustomerID: response.data.customerId,
          customerFirstName: response.data.customerFirstName,
          customerLastName: response.data.customerLastName,
          customerEmail: response.data.customerEmail,
          customerPhone: response.data.customerPhone,
        });
        setError(null);
      } else {
        setError('Please enter a valid search query.');
      }
    } catch (err) {
      setError('Error fetching customer data.');
    }
  };

  
  return (
    <>
    <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8   rounded-lg">
            {/* Button at the top */} <ToastContainer />
            <div className="flex justify-end">
        <button 
            onClick={handleExistingUserClick} 
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
            Existing Customer
        </button>
        </div>
                        {showSearchCard && (
                <div className="mt-4 p-4 border rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Search User</h2>
                    {/* <input 
                        type="text" 
                        placeholder="Search by email or mobile number" 
                        className="w-full p-2 border rounded mb-4"
                    /> */}
                    {/* <button className="bg-green-500 text-white px-4 py-2 rounded">
                        Search
                    </button> */}
                    <CustomerSearch onCustomerSelect={handleCustomerSelect} onClick={handleSearch} />

                </div>
            )}
        </div>
    <div className="p-6 mr-10 mb-7 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 mt-8 bg-white shadow-lg rounded-lg">
            <Box sx={{ width: '100%' }}>
  <Stepper activeStep={activeStep} className="mb-6" alternativeLabel>
    {steps.map((label, index) => {
      const stepProps = {};
      const labelProps = {};
      if (isStepOptional(index)) {
        // Optional step logic
      }
      if (isStepSkipped(index)) {
        stepProps.completed = false;
      }
      return (
        <Step key={label} {...stepProps}>
          <StepLabel {...labelProps}>
            {label} {/* Label for the step */}
          </StepLabel>
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
     
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          pt: 2 
        }}
      >  
              {activeStep === 0 && (
                <>
                <div className='grid'>
                <div className="flex justify-left items-center h-full">
                        <div className="relative flex flex-col w-[20rem] pb-2">
                          <input
                            id="searchName"
                            type="text"
                            placeholder="Search by Name..."
                            value={searchValue}
                            onChange={handleSearchInput}
                            onFocus={() => setIsFocused(true)}
                            className="mt-1 p-2 pr-10 border border-gray-300 rounded-md"
                          />
                          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <IoIosSearch />
                          </div>
                          <div
                            ref={popupRef} // Attach the ref to the popup div
                            className={`absolute top-full mt-1 border-solid border-2 rounded-lg p-2 w-full bg-white z-10 ${
                              isFocused && results.length ? "block" : "hidden"
                            }`} // Positioning adjusted to stay below input
                          >
                            {results.map((result) => (
                              <div
                                className="cursor-pointer"
                                key={result.CustomerID}
                                onClick={() => handleAutoFill(result)}
                              >
                                {result.FirstName}, {result.PhoneNumber}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                <div>
                    <label className="block text-xs font-medium text-gray-700">First name</label>
                    <input
                      type="text"
                      name="customerFirstName"
                      value={orderDetails.customerFirstName}
                      onChange={handleChange}
                      className={` p-1 mt-2 mb-1 w-full border rounded-md ${errors.customerFirstName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.customerFirstName && <p className="text-red-500 text-sm mt-1">{errors.customerFirstName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Last name</label>
                    <input
                      type="text"
                      name="customerLastName"
                      value={orderDetails.customerLastName}
                      onChange={handleChange}
                      className={` p-1 mt-2 mb-1 w-full border rounded-md ${errors.customerLastName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.customerLastName && <p className="text-red-500 text-sm mt-1">{errors.customerLastName}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="customerEmail"
                      value={orderDetails.customerEmail}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.customerEmail ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.customerEmail && <p className="text-red-500 text-sm mt-1">{errors.customerEmail}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Phone</label>
                    <input
                      type="number"
                      name="customerPhone"
                      value={orderDetails.customerPhone}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.customerPhone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.customerPhone && <p className="text-red-500 text-sm mt-1">{errors.customerPhone}</p>}
                  </div>
                  <div>
  <label className="block text-xs font-medium text-gray-700">Type</label>
  <select
    name="Type"
    value={orderDetails.Type}
    onChange={handleChange}
    className={`p-1 mt-2 mb-1 w-full border rounded-md ${errors.Type ? 'border-red-500' : 'border-gray-300'}`}
  >
    <option value="select a type">Select a Type</option>
    <option value="Kitchen">Kitchen</option>
    <option value="Wardrobe">Wardrobe</option>
    <option value="Living">Living</option>
    <option value="2 BHK">2 BHK</option>
    <option value="3 BHK">3 BHK</option>
    <option value="Others (TV unit, Crockery, Shoe rack, Vanities)">Others (TV unit, Crockery, Shoe rack, Vanities)</option>
  </select>
  {errors.Type && <p className="text-red-500 text-sm mt-1">{errors.Type}</p>}
</div>
<div>
  <label className="block text-xs font-medium text-gray-700">Order Date</label>
  <input
    type="date"
    name="OrderDate"
    value={orderDetails.OrderDate || currentDate}
    onChange={handleChange}
    className={`p-1 mt-2 mb-1 w-full border rounded-md ${errors.OrderDate ? 'border-red-500' : 'border-gray-300'}`}
  />
  {errors.OrderDate && <p className="text-red-500 text-sm mt-1">{errors.OrderDate}</p>}
</div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Expected Complete Date</label>
                    <input
                      type="date"
                      name="ExpectedCompleteDate"
                      value={orderDetails.ExpectedCompleteDate}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.ExpectedCompleteDate ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.ExpectedCompleteDate && <p className="text-red-500 text-sm mt-1">{errors.ExpectedCompleteDate}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Comments</label>
                    <input
                      type="text"
                      name="Comments"
                      value={orderDetails.Comments}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.Comments ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.Comments && <p className="text-red-500 text-sm mt-1">{errors.Comments}</p>}
                  </div>
                 
                  <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700">Referred By</label>
        <Combobox as="div" value={selectedReferralType} onChange={handleReferralTypeChange}>
          <div className="relative">
            <Combobox.Input
              className="w-full mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setQuery(event.target.value)}
              displayValue={(type) => type || ''}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>

            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {['Social Media', 'Walk-In', 'Reference'].map((type, index) => (
                <Combobox.Option
                  key={index}
                  value={type}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                >
                  <span className="block truncate group-data-[selected]:font-semibold">
                    {type}
                  </span>
                  <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </div>
        </Combobox>
        {/* Conditionally render the additional input fields */}
        {selectedReferralType === 'Reference' && (
          <div className="mt-4">
            <label className="block text-xs font-medium text-gray-700">Reference Sub-option</label>
            <Combobox as="div" value={selectedReferenceSubOption} onChange={handleReferenceSubOptionChange}>
              <div className="relative">
                <Combobox.Input
                  className="w-full mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(option) => option || ''}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {['Director', 'Employee', 'Existing'].map((option, index) => (
                    <Combobox.Option
                      key={index}
                      value={option}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                    >
                      <span className="block truncate group-data-[selected]:font-semibold">
                        {option}
                      </span>
                      <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>
          </div>
        )}
        {selectedReferralType === 'Reference' && selectedReferenceSubOption && (
          <div className="mt-4">
            <label className="block text-xs font-medium text-gray-700">Referee Name</label>
            <input
              type="text"
              name="refereeName"
              value={orderDetails.refereeName}
              onChange={handleRefereeNameChange}
              className="w-full mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        )}
        {selectedReferralType === 'Social Media' && (
          <div className="mt-4">
            <label className="block text-xs font-medium text-gray-700">Social Media Platform</label>
            <Combobox as="div" value={selectedSocialMediaPlatform} onChange={handleSocialMediaPlatformChange}>
              <div className="relative">
                <Combobox.Input
                  className="w-full mt-2 mb-1 rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(event) => setQuery(event.target.value)}
                  displayValue={(platform) => platform || ''}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </Combobox.Button>

                <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {['Facebook', 'Instagram', 'Twitter'].map((platform, index) => (
                    <Combobox.Option
                      key={index}
                      value={platform}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                    >
                      <span className="block truncate group-data-[selected]:font-semibold">
                        {platform}
                      </span>
                      <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              </div>
            </Combobox>
          </div>
        )}
        {error && <p className="mt-2 text-red-600 text-xs">{error}</p>}
      </div>
      </div>
    <div className='grid'> 
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Address line1</label>
                    <input
                      type="text"
                      name="AddressLine1"
                      value={orderDetails.AddressLine1}
                      onChange={handleChange}
                      className={`p-1  mt-2 mb-1 w-full border rounded-md ${errors.AddressLine1 ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.AddressLine1 && <p className="text-red-500 text-sm mt-1">{errors.AddressLine1}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Address line2</label>
                    <input
                      type="text"
                      name="AddressLine2"
                      value={orderDetails. AddressLine2}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors. AddressLine2 ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.AddressLine2 && <p className="text-red-500 text-sm mt-1">{errors.AddressLine2}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">City</label>
                    <input
                      type="text"
                      name="CityID"
                      value={orderDetails.CityID}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.CityID ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.CityID && <p className="text-red-500 text-sm mt-1">{errors.CityID}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">State</label>
                    <input
                      type="text"
                      name="StateID"
                      value={orderDetails.StateID}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.StateID ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.StateID && <p className="text-red-500 text-sm mt-1">{errors.StateID}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Country</label>
                    <input
                      type="text"
                      name="CountryID"
                      value={orderDetails.CountryID}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.CountryID ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.CountryID && <p className="text-red-500 text-sm mt-1">{errors.CountryID}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Zipcode</label>
                    <input
                      type="number"
                      name="ZipCode"
                      value={orderDetails.ZipCode}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.ZipCode ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.ZipCode && <p className="text-red-500 text-sm mt-1">{errors.ZipCode}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700">Total Quantity</label>
                    <input
                      type="number"
                      name="TotalQuantity"
                      value={orderDetails.TotalQuantity}
                      onChange={handleChange}
                      className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.TotalQuantity ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.TotalQuantity && <p className="text-red-500 text-sm mt-1">{errors.TotalQuantity}</p>}
                  </div>
                  <div>
       <label className="block text-xs font-medium text-gray-700 mt-1">Total amount</label>
       <input
        type="number"
        name="TotalAmount"
        value={orderDetails.TotalAmount}
        onChange={handleChange}
        className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.TotalAmount ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.TotalAmount && <p className="text-red-500 text-sm mt-1">{errors.TotalAmount}</p>}
    </div>
    <div>
      <label className="block text-xs font-medium text-gray-700 mt-1">Advance amount</label>
      
      <input 
        type="number"
        name="AdvanceAmount"
        value={orderDetails.AdvanceAmount}
        onChange={handleChange}
        className={` p-1  mt-2 mb-1 w-full border rounded-md ${errors.AdvanceAmount ? 'border-red-500' : 'border-gray-300'}`}
      />
      {errors.AdvanceAmount && <p className="text-red-500 text-sm mt-1">{errors.AdvanceAmount}</p>}
    </div>
                  <div>
      <label className="block text-xs font-medium text-gray-700 mt-1">Balance amount</label>
      <input
        type="number"
        name="AdvanceAmount"
        value={ orderDetails.BalenceAmount=orderDetails.TotalAmount-orderDetails.AdvanceAmount}
        onChange={handleChange}
        className={`p-1  mt-2 mb-1 w-full border rounded-md`}
      />
    </div>
                  </div>
                </>
              )}
                     </Box>
                    
              <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: ' 1fr' }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          justifyContent: 'center',
          alignItems:'center',
          pt: 2 
        }}
      >
              {activeStep === 1 && (
 
 <>
   <>
                 <div className='flex gap-36 '>
                   <label className=" text-xs font-medium text-gray-700 mt-2">Designer Name:</label>
                   <input
                     type="text"
                     name="DesginerName"
                     value={orderDetails.DesginerName}
                     onChange={handleChange}
                     className={` p-1 w-1/3 border rounded-md ${errors.DesginerName ? 'border-red-500' : 'border-gray-300'}`}
                   />
                   {errors.DesginerName && <p className="text-red-500 text-sm mt-1">{errors.DesginerName}</p>}
                 </div>
                 <div>
     <label className="block text-xs font-medium text-gray-700">Upload Images (Upto 6 images)</label>
     <input
       type="file"
       multiple
       onChange={handleImageChange}
       className="hidden"
       id="UploadImages"
     />
     <div className="flex items-center mt-1">
       <label
         htmlFor="UploadImages"
         className="flex items-center justify-center w-24 h-24 bg-gray-200 border border-gray-300 text-gray-500 rounded-md cursor-pointer"
       >
         <span className="text-3xl">+</span>
       </label>
       {images.length > 0 && (
         <div className="flex mt-2 ml-2">
           {imagePreviews.map((preview, index) => (
             <div key={index} className="relative inline-block mr-2">
               <img src={preview} alt={`Preview ${index}`} className="w-24 h-24 object-cover" />
               <button
                 onClick={() => handleImageRemove(index)}
                 className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs"
               >
                 x
               </button>
             </div>
           ))}
         </div>
       )}
     </div>
   </div>
   <div className='mb-4'>
       <label   htmlFor="choosefiles" className="block text-xs font-medium text-gray-700">Upload whole designPDF</label>
       <input
         type="file"
         accept=".pdf"
         onChange={handlePdfChange}
         className="mt-1 p-2 w-1/2 border rounded-md"
         id='choosefiles'
       />
       {pdfPreview && (
         <div className="mt-2 flex items-center">
           <a href={pdfPreview} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
             View PDF
           </a>
           <button
             onClick={handlePdfRemove}
             className="ml-4 bg-red-500 text-white p-1 rounded-full text-xs"
           >
             x
           </button>
         </div>
       )}
     </div>
               </>
      <div className='flex gap-32'>
        <label className="w-1/8 text-left ml-44 mt-3 text-xs font-medium text-gray-700">Order Status:</label>
        <select
          name="OrderStatus"
          value={orderDetails.OrderStatus}
          onChange={handleChange}
          className={` w-1/4 p-1 border rounded-md ${errors.OrderStatus ? 'border-red-500' : 'border-gray-300'}`}
        >
          <option value="">Select a Status</option>
          <option value="Pending">Shipping</option>
          <option value="Pending">Pending</option>
          <option value="Processed">Processed</option>
        </select>
        {errors.OrderStatus && <p className="text-red-500 text-sm mt-1">{errors.OrderStatus}</p>}
      </div>
      
      <div className='flex gap-36'>
        <label className="text-xs text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">OrderBy</label>
        <input
          type="text"
          name="OrderBy"
          value={orderDetails.OrderBy}
          onChange={handleChange}
          className={` p-1 w-1/4 border rounded-md ${errors.OrderBy ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.OrderBy && <p className="text-red-500 text-sm mt-1">{errors.OrderBy}</p>}
       
      </div>
      <div className='flex gap-36'>
        <label className="text-xs text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">DeliveryDate</label>
        <input
          type="date"
          name="DeliveryDate"
          value={orderDetails.DeliveryDate}
          onChange={handleChange}
          className={` p-1 w-1/4 border rounded-md ${errors.DeliveryDate ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.DeliveryDate && <p className="text-red-500 text-sm mt-1">{errors.DeliveryDate}</p>}
      </div>
      <div className='flex gap-36'>
        <label className="text-xs text-left mt-3 w-1/8 ml-44 font-medium text-gray-700">Assign To:</label>
        <input
          type="text"
          name="assginto"
          value={orderDetails.assginto}
          onChange={handleChange}
          className={` p-1 w-1/4 border rounded-md ${errors.assginto ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.assginto && <p className="text-red-500 text-sm mt-1">{errors.assginto}</p>}
      </div>
      <div className='flex gap-12'>
        <label className="text-left mt-3 w-1/8 ml-44 text-xs font-medium text-gray-700">Expected Duration (In Days)</label>
        <input
          type="number"
          name="ExpectedDurationDays"
          value={orderDetails.ExpectedDurationDays}
          onChange={handleChange}
          className={` p-1 w-1/4 border rounded-md ${errors.ExpectedDurationDays ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.ExpectedDurationDays && <p className="text-red-500 text-sm mt-1">{errors.ExpectedDurationDays}</p>}
      </div>
      <div className="relative">
  <button
    onClick={handleAddOrder}
    className="absolute bottom-2  right-0 w-18 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
  >
    Add <span className="text-lg"><IoMdAddCircleOutline /></span>
  </button>
</div>
      {orders.length >= 0 && (
        <>
<table className="min-w-full border-collapse border border-gray-300 mt-4">
  <thead className='bg-custom-maroon'>
    <tr className="text-center border-b border-gray-300">
      <th className="px-4 py-2 font-normal border-r border-gray-300">Order Status</th>
      <th className="px-4 py-2 font-normal border-r border-gray-300">Assign To</th>
      <th className="px-4 py-2 font-normal border-r border-gray-300">Expected Completed (In Days)</th>
    </tr>
  </thead>
  <tbody>
    {orders
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((order, index) => (
        <tr key={index} className="text-center border-b border-gray-300">
          <td className="px-4 py-2 border-r border-gray-300">{order.OrderStatus}</td>
          <td className="px-4 py-2 border-r border-gray-300">{order.assginto}</td>
          <td className="px-4 py-2 border-r border-gray-300">{order.ExpectedDurationDays}</td>
        </tr>
      ))}
  </tbody>
</table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={orders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </>
      )}
    </>
 
       )}
              </Box>
              <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', sm: '1fr ' }, // Ensure proper grid layout
          gap: 2, // Adjust spacing between items
          pt: 2 
        }}
      >
                            {activeStep === 2 && (
   
    <>
    <div className='flex '>
      <label className="text-left  ml-44 w-1/4 mt-3  text-xs font-medium text-gray-700">Payments Type:</label>
      <select
                      name="PaymentMethod"
                   value={orderDetails.PaymentMethod}
                       onChange={handleChange}
                      className={`p-1 w-1/4 border rounded-md ${errors.PaymentMethod ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="select a type">Select a Type</option>
                    <option value="Cash">Cash</option>
                     <option value="UPI">UPI</option>
                     <option value="Card">Card</option>
                    </select>
                    {errors.PaymentMethod && <p className="text-red-500 text-sm mt-1">{errors.PaymentMethod}</p>}
        
    </div>
    <div className='flex '>
      <label className="text-left  ml-44 w-1/4 mt-3  text-xs font-medium text-gray-700">PaymentStatus</label>
      <select
                      name="PaymentStatus"
                   value={orderDetails.PaymentStatus}
                       onChange={handleChange}
                      className={`p-1 w-1/4 border rounded-md ${errors.PaymentStatus ? 'border-red-500' : 'border-gray-300'}`}
                    >
                      <option value="select a type">Select a Status</option>
                    <option value="Cash">Processing</option>
                     <option value="UPI">Pending</option>
                     <option value="Card">Completed</option>
                    </select>
                    {errors.PaymentStatus && <p className="text-red-500 text-sm mt-1">{errors.PaymentStatus}</p>}
        
    </div>
   
    <div className='flex '>
  <label className="text-xs text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">PaymentsCardNumber:</label>
  <input
    type="text"
    name="MaskedCardNumber"
    value={orderDetails.MaskedCardNumber ? orderDetails.MaskedCardNumber.replace(/\d(?=\d{4})/g, '*') : ''}
    onChange={(e) => {
      const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
      if (value.length <= 16) {
        handleChange({ target: { name: 'MaskedCardNumber', value } });
      }
    }}
    className={`p-1 w-1/4 border rounded-md ${errors.MaskedCardNumber ? 'border-red-500' : 'border-gray-300'}`}
  />
  {errors.MaskedCardNumber && <p className="text-red-500 text-sm mt-1">{errors.MaskedCardNumber}</p>}
</div>
    <div className='flex '>
      <label className="text-xs text-left mt-3 w-1/4 ml-44 font-medium text-gray-700">PaymentComments:</label>
      <input 
         type="text"
        name="PaymentComments"
        value={orderDetails.PaymentComments}
         onChange={handleChange}
         className={` p-1 w-1/4 border rounded-md ${errors.PaymentComments ? 'border-red-500' : 'border-gray-300'}`}
       />
      {errors.PaymentComments && <p className="text-red-500 text-sm mt-1">{errors.PaymentComments}</p>}
     
    </div>
    <div className="relative">
  <button
    onClick={handleAddOrder1}
    className="absolute bottom-3 right-0 w-16 inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
  >
    Add <span className="text-lg"><IoMdAddCircleOutline /></span>
  </button>
</div>

    {orders.length >= 0 && (
      <>
<table className="min-w-full border-collapse border border-gray-300 mt-4">
  <thead className='bg-custom-maroon'>
    <tr className="text-center border-b border-gray-300">
    <th className="px-4 py-2 font-normal border-r">Payment Type</th>
      <th className="px-4 py-2 font-normal border-r border-gray-300">Payments Status</th>
      <th className="px-4 py-2 font-normal border-r border-gray-300">Payments card number</th>
      <th className="px-4 py-2 font-normal border-r">Payments commComments</th>
    </tr>
  </thead>
  <tbody>
    {orders
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((order, index) => (
        <tr key={index} className="text-center border-b border-gray-300">
                    <td className="px-4 py-2 border-r">{order.PaymentMethod}</td>

          <td className="px-4 py-2 border-r border-gray-300">{order.PaymentStatus}</td>
          <td className="px-4 py-2 border-r border-gray-300">{order.MaskedCardNumber}</td>

          <td className="px-4 py-2">{order.PaymentComments}</td>
        </tr>
      ))}
  </tbody>
</table>
     <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={orders.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    )}
  </>
)}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
   
              <button
  color="inherit"
  onClick={handleBack}
  className={`inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm ${
    activeStep === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-custom-lightblue  hover:text-gray-700"
  }`}
  disabled={activeStep === 0}
>
  <MdArrowBackIosNew />
  Back
</button>

              <Box sx={{ flex: '1 1 auto' }} />
              <button
                variant="contained"
                onClick={handleCancel}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-gray-300  px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover: hover:bg-gray-400 ml-2 mr-4"                ><RxCross1 />

                Cancel
              </button>              <button
                variant="contained"
                onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 "
                >

                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                <MdOutlineArrowForwardIos />

              </button>
            </Box>
          </React.Fragment>
        )}
        {showAlert && (
          <div className="fixed top-0 right-0 w-full bg-green-500 text-white p-4 text-center">
            <span>Order added successfully!</span>
          </div>
        )}
       {submittedDetails && (
  <div className="mt-4 bg-gray-100 p-4 rounded shadow-lg">
    <h3 className="text-xl font-bold mb-4">Submitted Order Details:</h3>
    <p><strong>Tenant ID:</strong> {submittedDetails.TenantID}</p>
    <p><strong>Customer ID:</strong> {submittedDetails.CustomerID}</p>
    <p><strong>Order Date:</strong> {submittedDetails.OrderDate}</p>
    <p><strong>Total Quantity:</strong> {submittedDetails.TotalQuantity}</p>
    <p><strong>Address Line 1:</strong> {submittedDetails.AddressLine1}</p>
    <p><strong>Address Line 2:</strong> {submittedDetails.AddressLine2}</p>
    <p><strong>City ID:</strong> {submittedDetails.CityID}</p>
    <p><strong>State ID:</strong> {submittedDetails.StateID}</p>
    <p><strong>Country ID:</strong> {submittedDetails.CountryID}</p>
    <p><strong>Zip Code:</strong> {submittedDetails.ZipCode}</p>
    <p><strong>Total Amount:</strong> {submittedDetails.TotalAmount}</p>
    <p><strong>Order Status:</strong> {submittedDetails.OrderStatus}</p>
    <p><strong>Order By:</strong> {submittedDetails.OrderBy}</p>
    <p><strong>Type:</strong> {submittedDetails.Type}</p>
    <p><strong>Delivery Date:</strong> {submittedDetails.DeliveryDate}</p>
    <p><strong>Customer First Name:</strong> {submittedDetails.customerFirstName}</p>
    <p><strong>Customer Last Name:</strong> {submittedDetails.customerLastName}</p>
    <p><strong>Customer Email:</strong> {submittedDetails.customerEmail}</p>
    <p><strong>Customer Phone:</strong> {submittedDetails.customerPhone}</p>
    <p><strong>Payment Method:</strong> {submittedDetails.PaymentMethod}</p>
    <p><strong>Payment Status:</strong> {submittedDetails.PaymentStatus}</p>
    <p><strong>Masked Card Number:</strong> {submittedDetails.MaskedCardNumber}</p>
    <p><strong>Expected Complete Date:</strong> {submittedDetails.ExpectedCompleteDate}</p>
    <p><strong>Comments:</strong> {submittedDetails.Comments}</p>
    <p><strong>Referred By:</strong> {submittedDetails.ReferedBy}</p>
    <p><strong>Payment Comments:</strong> {submittedDetails.PaymentComments}</p>
    <p><strong>Assigned To:</strong> {submittedDetails.assginto}</p>
    <p><strong>Advance Amount:</strong> {submittedDetails.AdvanceAmount}</p>
    <p><strong>Balance Amount:</strong> {submittedDetails.BalenceAmount}</p>
    <p><strong>Expected Duration Days:</strong> {submittedDetails.ExpectedDurationDays}</p>
    <p><strong>Designer Name:</strong> {submittedDetails.DesginerName}</p>
    <p><strong>Upload Images:</strong> {submittedDetails.UploadImages}</p>
    <p><strong>Choose Files:</strong> {submittedDetails.choosefiles}</p>
    <p><strong>Balance Amount (calculated):</strong> {submittedDetails.TotalAmount - submittedDetails.AdvanceAmount}</p>
    <p><strong>Initial Measurement Length:</strong> {submittedDetails.length}</p>
    <p><strong>Initial Measurement Height:</strong> {submittedDetails.height}</p>
    <p><strong>Initial Measurement Width:</strong> {submittedDetails.width}</p>
    <p><strong>Final Measurement Length:</strong> {submittedDetails.finalLength}</p>
    <p><strong>Final Measurement Height:</strong> {submittedDetails.finalHeight}</p>
    <p><strong>Final Measurement Width:</strong> {submittedDetails.finalWidth}</p>
    <div className="grid grid-cols-3 gap-4 mt-4">
      {submittedDetails.images && submittedDetails.images.map((img, index) => (
        <img key={index} src={img} alt={`Final ${index}`} className="w-full h-36 object-cover border rounded-md" />
      ))}
    </div>
    <div className="grid grid-cols-3 gap-4 mt-4">
      {submittedDetails.pdfPreview && submittedDetails.pdfPreview.map((img, index) => (
        <img key={index} src={img} alt={`PDF Preview ${index}`} className="w-full h-36 object-cover border rounded-md" />
      ))}
    </div>
  </div>
)}

      </Box>
    </div>
    </>
  );
}

export default AddOrders;
