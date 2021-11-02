import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import AddMedicine from './components/AddMedicine/AddMedicine';
import YourOrders from './components/YourOrders/YourOrders';
import AllOrders from './components/AllOrders/AllORders';


function App() {
  return (
    <div className="App">
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/orders/:clientId'>
              <YourOrders></YourOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/allorders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute exact path='/addproduct'>
              <AddMedicine></AddMedicine>
            </PrivateRoute>
            <PrivateRoute path='/medicine/:medicineId/'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
