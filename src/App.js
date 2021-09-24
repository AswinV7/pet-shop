import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Shared/Components/Footer';
import Overview from './Shared/Components/Overview';
import Shop from './Shops/Pages/Shop';
import User from './Users/Pages/User';

const App = () => {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path = "/" component = {Overview} exact />
            <Route path = "/shop" component = {Shop} />
            <Route path = "/user" component = {User} />
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
