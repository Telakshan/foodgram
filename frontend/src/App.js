import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import NewItem from './Pages/NewItem/NewItem';
import Login from './Components/Authorization/Login';
import Register from './Components/Authorization/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path="/about" component={About} />
          <Route path='/newitem' component={NewItem} />
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch> 
      </div>
    </BrowserRouter>
  );
}

export default App;
