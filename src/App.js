
import './App.css';
import Header from "./component/Header/Header"
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import WebFont from "webfontloader";
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from './component/User/LoginSignUp.js';
import store from "./store.js";
import { loadUser} from './actions/userAction.js';
import UserOptions from "./component/layout/Header/UserOptions.js";
import Profile from "./component/User/Profile.js"
import ProtectedRoute from './component/Route/ProtectedRoute.js';
import UpdateProfile from "./component/User/UpdateProfile.js";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./compnent/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder.js";
import Payment from "./component/Cart/Payment.js";
import OrderSuccess from "./component/Cart/OrderSuccess.js";
import MyOrders from "./component/Order/MyOrders.js";
import OrderDetails from "./component/Order/OrderDetails.js";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct.js";
import OrderList from "./component/Admin/OrderList.js";
import ProcessOrder from "./component/Admin/ProcessOrder.js";
import UsersList from "./component/Admin/UsersList.js";
import UpdateUser from "./component/Admin/UpdateUser.js";
import ProductReviews from "./component/Admin/ProductReviews.js";
import Contact from "./component/layout/Contact/Contact.js";
import About from "./component/layout/About/About.js";
import NotFound from "./component/layout/Not Found/NotFound.js";


function App() {

  const {isAuthenticated, user} = useSelector(state => state.user)

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser);
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault()); //to get rid of doing inspect

  return (
    <Router>
    <Header/>
    {isAuthenticated && <UserOptions user={user} /> }

    <Switch>
    <Routes>
    <Route exact path="/" Component={Home} />
    <Route exact path="/product/:id" Component={ProductDetails} />
    <Route exact path="/products" Component={Products} />
    <Route exact path="/products/:keyword" Component={Products} />
    <Route exact path="/search" Component={Search} />
    <Route exact path="/login" Component={LoginSignUp} />
    <Route exact path="/password/forgot" Component={ForgotPassword} />
    <Route exact path="/password/reset/:token" Component={ResetPassword} />
    <Route exact path="/cart" Component={Cart} />
    <ProtectedRoute exact path="/account" Component={Profile} />
    <ProtectedRoute exact path="/me/update" Component={UpdateProfile} />
    <ProtectedRoute exact path="/password/update" Component={UpdatePassword} />
    <ProtectedRoute exact path="/shipping" Component={Shipping} />
    <ProtectedRoute exact path="/order/confirm" Component={ConfirmOrder} />
    <ProtectedRoute exact path="/process/payment" Component={Payment} />
    <ProtectedRoute exact path="/success" Component={OrderSuccess} />
    <ProtectedRoute exact path="/orders" component={MyOrders} />
    <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
    <ProtectedRoute
          isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

        <Route
        component={
          window.location.pathname === "/process/payment" ? null : NotFound
        }
      />
    
    </Routes>

    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
