import { Container } from "@material-ui/core";
import "./App.css";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import store from "./redux/store";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Container maxWidth="sm">
              <Route path="/" exact component={Login} />
              <ProtectedRoutes component={Home} />
            </Container>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
