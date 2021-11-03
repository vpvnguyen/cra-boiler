import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <div>Catch all page</div>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
