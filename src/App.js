// import React from 'react';
// // import ProductPage from './components/ProductsPage/ProductPage';
// import Navigation from './components/Navigation/Navigation';
// import Layout from './components/Layout/Layout';
// import AddProduct from './components/Addproduct/AddProduct';
// import './index.css';
// import {Routes, Route} from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <Navigation/>
//       {/* <ProductPage /> */}
//       <Layout>
//         <AddProduct/>
//       </Layout>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import {  Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
// import AddProduct from './components/Addproduct/AddProduct';
// import ProductPage from './components/ProductsPage/ProductPage';
// import './index.css';
// import Overview from './components/Overview/Overview';

// function App() {
//   return (
//     <div className="App">
//         <Navigation />
//           <Routes>
//             <Route path="/product" element={<ProductPage />} />
//             <Route path="/" element={<AddProduct />} />
//             <Route path="/overview" element={<Overview />} />

//             {/* Add more routes as needed */}
//           </Routes>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
// import AddProduct from './components/Addproduct/AddProduct';
// import ProductPage from './components/ProductsPage/ProductPage';
// import './index.css';
// import Overview from './components/Overview/Overview';
// import User from './components/User/User';
// import Dashboard from './components/Dashboard/Dashboard';
// import Login from './components/Login/Login';

// function App() {
//   return (
//     <>    <Routes>
//     <Route path="/" element={<Login/>} />
//     </Routes>
//     <div className="App flex flex-col min-h-screen">
       

//       <Navigation />
//       <main className="flex-grow p-4">
//         <Routes>
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/products" element={<AddProduct />} />
//           <Route path="/overview" element={<Overview />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/dashboard" element={<Dashboard />} />



//         </Routes>
//       </main>
//     </div>
//     </>

//   );
// }

// export default App;


// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
// import AddProduct from './components/Addproduct/AddProduct';
// import ProductPage from './components/ProductsPage/ProductPage';
// import './index.css';
// import User from './components/User/User';
// import Dashboard from './components/Dashboard/Dashboard';
// import Login from './components/Login/Login';
// import AddEditProduct from './components/AddEditProduct/AddEditProduct';
// import Orders from './components/Orders/Orders';
// import AddOrders from './components/Orders/AddOrders';
// import Stores from './components/Stores/Stores'
// import Reports from './components/Reports/Reports';
// import Payments from './components/Payments/Payments';
// import ReportsStatic from './components/Reports/ReportsStatic';
// import Customer from './components/Customer/Customer'
// import UserRoleForm from './components/User/UserRole';
// import Returns from './components/Returns/Returns'
// import Production from './components/Production/Production'
// import CreateOrder from './components/Orders/CreateOrder';
// function App() {
//   const location = useLocation();
//   const showNavigation = location.pathname !== '/';

//   return (
//     <div className="App flex flex-col min-h-screen">
//       {showNavigation && <Navigation />}
//       <main className="flex-grow p-0gi bg-gray-100">
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/products" element={<AddProduct />} />
//           <Route path="/user" element={<User />} />
//           <Route path="/Orders" element={<Orders />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/add-product" element={<AddEditProduct />} />
//           <Route path="/AddOrders" element={<AddOrders />} />
//           <Route path="/Stores" element={<Stores/>} />
//           <Route path="/Reports" element={<Reports/>} />
//           <Route path="/Reportsstatic" element={<ReportsStatic/>} />

//           <Route path="/Payments" element={<Payments/>} />
//           <Route path="/Customer" element={<Customer/>} />
//           <Route path="/userrole" element={<UserRoleForm/>} />
//           <Route path="/Returns" element={<Returns/>} />
//           <Route path="/Production" element={<Production/>} />
//           <Route path="/createorder" element={<CreateOrder/>} />


//         </Routes>
//       </main>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import AddProduct from './components/Addproduct/AddProduct';
import ProductPage from './components/ProductsPage/ProductPage';
import './index.css';
import User from './components/User/User';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import AddEditProduct from './components/AddEditProduct/AddEditProduct';
import Orders from './components/Orders/Orders';
import AddOrders from './components/Orders/AddOrders';
import Stores from './components/Stores/Stores'
import Reports from './components/Reports/Reports';
import Payments from './components/Payments/Payments';
import Customer from './components/Customer/Customer';
import UserRole from './components/User/UserRole';
import Userform from './components/User/Userform';
import Storeform from './components/Stores/Storeform';
import Customerform from './components/Customer/Customerform';
import { UserProvider } from './Context/userContext';
import {StoreProvider} from './Context/storeContext';
import {CustomerProvider} from './Context/customerContext';
import EditOrder from './components/Orders/Editorder';

function App() {
  const location = useLocation();
  const showNavigation = location.pathname !== '/';

  return (
    <div className="App flex flex-col min-h-screen">
      {showNavigation && <Navigation />}
      <main className="flex-grow p-0gi bg-gray-100">
        <UserProvider>
          <StoreProvider>
            <CustomerProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products" element={<AddProduct />} />

          {/* <Route path="/user" element={  <UserProvider> <User /> </UserProvider>} /> */}

          <Route path="/user" element={  <User />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-product" element={<AddEditProduct />} />
          <Route path="/AddOrders" element={<AddOrders />} />
          <Route path="/Stores" element={<Stores/>} />
          <Route path="/Reports" element={<Reports/>} />
          <Route path="/Payments" element={<Payments/>} />
          <Route path="/User-roleform" element={<UserRole/>} />

          <Route path="/Userform" element={<Userform/>} />
          <Route path="/Storeform" element={<Storeform/>} />
          <Route path="/Customerform" element={<Customerform/>} />
          <Route path="/edit-order" element={<EditOrder />} />

        </Routes>
        </CustomerProvider>
        </StoreProvider>
          </UserProvider>
      </main>
    </div>
  );
}

export default App;

