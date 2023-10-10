import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Brands from './componants/Brands/Brands';
import Home from './componants/Home/Home';
import Layout from './componants/Layout/Layout';
import Products from './componants/Products/Products';
import Login from './componants/Login/Login';
import Register from './componants/Register/Register';
import Cart from './componants/Cart/Cart';
import Notfound from './componants/Notfound/Notfound';
import Categories from './componants/Categories/Categories';
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider, { UserContext } from './Context/UserContext';
import { useContext, useEffect } from 'react';
import ProtectedRoute from './componants/ProtectedRouet/ProtectedRoute';
import ProductDetails from './componants/ProductDetails/ProductDetails';
import { Offline, Online } from "react-detect-offline";
import CartContextProvider, { CartContext } from './Context/CartContext';
import toast, { Toaster } from 'react-hot-toast';
import Address from './componants/address/address';
import Orders from './componants/Orders/Orders';
import WishList from './componants/WishList/WishList';
import ForgetPassword from './componants/ForgetPassword/ForgetPassword';
import VerifyCode from './componants/VerifyCode/VerifyCode';
import ResetPass from './componants/ResetPass/ResetPass';


let routers = createBrowserRouter([
  {Path:'/' , element:<Layout/> , children:[
    {index:true , element:<ProtectedRoute><Home/></ProtectedRoute> },
    {path:'login' , element:<Login/>},
    {path:'register' , element:<Register/>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'address' , element:<ProtectedRoute><Address/></ProtectedRoute>},
    {path:'allorders' , element:<ProtectedRoute><Orders/></ProtectedRoute>},
    {path:'productdetails/:id' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'wishlist' , element:<ProtectedRoute><WishList/></ProtectedRoute>},
    {path:'forgetpassword' , element:<ForgetPassword/>},
    {path:'verifycode' , element:<VerifyCode/>},
    {path:'resetpassword' , element:<ResetPass/>},
    {path:'*' , element:<Notfound/>},
  ]}
])

function App() {
  


  return <>
  <CartContextProvider>
    <UserContextProvider>
    <RouterProvider router={routers}></RouterProvider>
    <div>
          <Offline>
            <div className="offline">
              <i className='fas fa-wifi text-danger'> You Are Offline</i>
            </div>
          </Offline>
    </div>
    <Toaster/>
    </UserContextProvider>
  </CartContextProvider>    
  </>
}

export default App;
