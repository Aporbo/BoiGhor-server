import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Header from './components/Header/Header';
import AddBook from './components/Admin/AddBook';
import ManageBook from './components/Admin/ManageBook';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/Privetroute/PrivetRoute';
import Orders from './components/Orders/Orders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
export const UserContext = createContext()
function App() {
 const [logInUser,setLogInUser] = useState({}) 
  return (
    <UserContext.Provider value={[logInUser,setLogInUser]}>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/admin/ManageBook">
          <Admin/>
        </PrivateRoute>
        <Route path="/admin/AddBook">
          <AddBook/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/placeOrder/:ids">
          <PlaceOrder/>
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Orders/>
        </PrivateRoute>
        <PrivateRoute path="/checkout/:id">
          <Checkout/>
        </PrivateRoute>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
