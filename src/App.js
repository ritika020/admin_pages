import logo from './logo.svg';
import './App.css';
import Branch from './branch/branch';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import branch from './branch/branch';
import homepage from './homepage/homepage';
import central from './central/central';
import downloads from './downloads/downloads';
function App() {
  return (
    <div className="App">
     {/* <Branch/> */}
     <BrowserRouter>
        <Switch>
          <Route path="/" component={homepage} exact />
          <Route path="/branchNews" component={branch} exact />
          <Route path="/centralNews" component={central} exact />
          <Route path="/downloadsNews" component={downloads} exact />

 </Switch>
      </BrowserRouter>
     </div>
  );
}

export default App;
