import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

const NotFound = () => {
  return <h3>Oops, sorry. Page doesn't exist.</h3>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/about/:language?">
          <About />
        </Route>
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
