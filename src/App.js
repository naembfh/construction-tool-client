import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';
import Myitem from './Pages/Dashboard/Myitem';
import Users from './Pages/Dashboard/Users';
import AddProduct from './Pages/Dashboard/AddProduct';
import Payment from './Pages/Dashboard/Payment';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Myprofile from './Pages/Dashboard/Myprofile';
import Notfound from './Pages/Shared/Notfound';
import Footer from './Pages/Shared/Footer';
import Blogs from './Pages/Blogs';
import Portfolio from './Pages/Portfolio';
import Products from './Pages/Home/Products';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
        <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route path='myReview' element={<AddReview></AddReview>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='myProfile' element={<Myprofile></Myprofile>}></Route>
          <Route path='manageOrder' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='order/:id' element={<Payment></Payment>}></Route>
          <Route index element={<Myitem></Myitem>}></Route>
        </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
