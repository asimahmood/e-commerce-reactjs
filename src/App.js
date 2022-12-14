import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
