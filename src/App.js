import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import Item from './components/Item';
import Basket from './components/Basket';
import MyItems from './components/MyItems';
import MyAccount from './components/MyAccount';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/api/items">
            <Home></Home>
          </Route>
          <Route exact path="/api/items?category_name=:category">
            <Category></Category>
          </Route>
          <Route exact path="/api/items/:item_id">
            <Item></Item>
          </Route>
          <Route exact path="/api/users/:username/basket">
            <Basket></Basket>
          </Route>
          <Route exact path="/"> 
            <MyItems></MyItems>
          </Route>
          <Route exact path="/api/users/:username">
            <MyAccount></MyAccount>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
