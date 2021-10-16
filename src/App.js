import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Shared/Components/Footer';
import Overview from './Shared/Components/Overview';
import Shops from './Shops/Pages/Shops';
import User from './Users/Pages/User';
import Pet from './Shops/Pages/Pet';
import Shop from './Shops/Pages/Shop';
import SignUp from './Shops/Pages/SignUp';
import Login from './Shops/Pages/Login';
import AddPets from './Shops/Pages/AddPets';
import Profile from './Shops/Pages/Profile';
import SignIn from './Users/Pages/SignIn';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path = "/" component = {Overview} exact />
            <Route path = "/shops" component = {Shops} exact />
            <Route path = "/user" component = {User} />
            <Route path = "/shops/pets/:petid" component = {Pet} exact />
            <Route path = "/shops/:shopid" component = {Shop} exact/>
            <Route path = "/signup" component = {SignUp} exact />
            <Route path = "/login" component = {Login} exact />
            <Route path = "/add-pet" component = {AddPets} exact />
            <Route path = "/profile" component = {Profile} exact />
            <Route path = "/signin" component = {SignIn} exact />
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
