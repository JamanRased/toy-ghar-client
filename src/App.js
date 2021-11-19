import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import NavBar from './Pages/Shared/NavBar/NavBar';
import AddProducts from './Pages/AddProducts/AddProducts';
import Footer from './Pages/Footer/Footer';
import AddReview from './Pages/AddReview/AddReview';
import Booking from './Pages/Booking/Booking';
import ManageAllProducts from './Pages/Admin/ManageAllProducts/ManageAllProducts';
import Admin from './Pages/Admin/Admin/Admin';
import MakeAdmin from './Pages/Admin/MakeAdmin/MakeAdmin';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/Admin/MyOrder/MyOrder';

function App() {
  return (
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/manageallproducts">
              <ManageAllProducts></ManageAllProducts>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/addproducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/addreview">
              <AddReview></AddReview>
            </Route>
            <PrivateRoute exact path="/adminDashboard">
              <Admin></Admin>
            </PrivateRoute>
            <Route exact path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
            </Route>
          </Switch>
          <Footer></Footer>
        </Router> 
      </AuthProvider>
  );
}

export default App;
