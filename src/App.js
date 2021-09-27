import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Shared/Components/Footer';
import Overview from './Shared/Components/Overview';
import Shops from './Shops/Pages/Shops';
import User from './Users/Pages/User';
import Pet from './Shops/Pages/Pet';
import Shop from './Shops/Pages/Shop';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path = "/" component = {Overview} exact />
            <Route path = "/shop" component = {Shops} exact />
            <Route path = "/user" component = {User} />
            <Route path = "/shops/:shopid/:petid" component = {Pet} exact />
            <Route path = "/shops/:shopid" component = {Shop} exact/>
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
