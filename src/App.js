import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appbar from './components/Appbar';
import Farmer from './components/Farmer';
import Customer from './components/Customer';
import CustomerLogin from './components/CustomerLogin';
import FarmerLogin from './components/FarmerLogin';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FarmerHome from './components/FarmerHome';
import Orders from './components/Orders';
import Market from './components/Market';
import Support from './components/Support';
import CustomerHome from './components/CustomerHome';
import Vegetables from './components/Vegetables';
import Dairy from './components/Dairy';
import OrderConfirmation from './components/OrderConfirmation';
import Spices from './components/Spices';
import AdminLogin from './components/AdminLogin';
import AdminHome from './components/AdminHome';
import UserManagement from './components/UserManagement';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import FarmerManagement from './components/FarmerManagement';
import UpdateFarmer from './components/UpdateFarmer';
import DeleteFarmer from './components/DeleteFarmer';
import Product from './components/Product';
import ProductManagement from './components/ProductManagement';
import UpdateProduct from './components/UpdateProduct';
import ViewCustomers from './components/ViewCustomers';
import ViewFarmers from './components/ViewFarmers';
import CustomerProfile from './components/CustomerProfile';
import Payment from './components/Payment';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/appbar' element={<Appbar/>}/>
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/customerlogin" element={<CustomerLogin/>}/>
        <Route path="/farmerlogin" element={<FarmerLogin/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/farmerhome" element={<FarmerHome/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/market" element={<Market/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/customerhome" element={<CustomerHome/>}/>
        <Route path="/vegetables" element={<Vegetables/>}/>
        <Route path="/dairy" element={<Dairy/>}/>
        <Route path="/orderconfirmation" element={<OrderConfirmation/>}/>
        <Route path="/spices" element={<Spices/>}/>
        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/usermanagement" element={<UserManagement/>}/>
        <Route path="/updateuser/:id" element={<UpdateUser/>}/>
        <Route path="/deleteuser/:id" element={<DeleteUser/>} />
        <Route path="/farmermanagement" element={<FarmerManagement/>}/>
        <Route path="/updatefarmer/:farmerId" element={<UpdateFarmer />} />
        <Route path="/deletefarmer/:farmerId" element={<DeleteFarmer />} />
        <Route path="/products" element={<Product/>}/>
        <Route path="/productmanagement" element={<ProductManagement/>}/>
        <Route path="/update/:productId" element={<UpdateProduct />} /> 
        <Route path="/viewallcustomers" element={<ViewCustomers/>}/>
        <Route path="/viewallfarmers" element={<ViewFarmers/>}/>
        <Route path="/customerprofile" element={<CustomerProfile/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
    </Router>
  );
}
