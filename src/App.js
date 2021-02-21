import logo from "./logo.svg";
import "./App.css";
import Branch from "./branch/branch";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import branch from "./branch/branch";
import homepage from "./homepage/homepage";
import central from "./central/central";
import downloads from "./downloads/downloads";
import Gallery from "./Gallery/Gallery";
function App() {
  return (
    <div className="App">
      {/* <Branch/> */}
      <BrowserRouter>
        <Switch>
          <Route path="/admin_pages" component={homepage} exact />
          <Route path="/" component={homepage} exact />
          <Route path="/gallery" component={Gallery} exact />
          <Route path="/branchNews" component={branch} exact />
          <Route path="/centralNews" component={central} exact />
          <Route path="/downloads" component={downloads} exact />
        </Switch>
      </BrowserRouter>
      <div className="footer_upcloud">Powered by Upcloud Technology Pvt. Ltd.</div>
    </div>
  );
}

export default App;
