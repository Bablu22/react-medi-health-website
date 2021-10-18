import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Componants/Header/Header';
import Login from './Componants/Login/Login';
import Signup from './Componants/Signup/Signup';
import AuthProvider from './Context/AuthProvider';
import ServiceDetails from './Componants/Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Home from './Componants/Home/Home';
import PagenotFound from './Componants/PageNotFound/PagenotFound';
import Footer from './Componants/Footer/Footer';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:serviceID">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="*">
              <PagenotFound></PagenotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
