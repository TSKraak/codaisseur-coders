import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import PostPage from "./components/PostPage";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { useDispatch } from "react-redux";
import { bootstrapLoginState } from "./store/auth/actions";
import { useEffect } from "react";
import Profile from "./pages/Profile";

const NotFound = () => {
  return <h3>Oops, sorry. Page doesn't exist.</h3>;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
