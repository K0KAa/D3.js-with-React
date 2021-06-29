import './App.css';
import Data from "./Data"
import ScatteredData from "./ScatteredData"
import LineData from './LineChart/LineData';
import Home from './Home';
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/barchart">
          <Data />
        </Route>
        <Route path="/scattered">
          <ScatteredData />
        </Route>
        <Route path="/linedata">
          <LineData />
        </Route>
      </Router>
    </div>
  );
}

export default App;
