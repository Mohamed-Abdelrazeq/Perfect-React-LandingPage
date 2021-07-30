import '../Styles/app.css';
import Navbar from './Navbar'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom' 
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
