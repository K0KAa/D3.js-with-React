import './App.css';
import Data from "./Data"
import ScatteredData from "./ScatteredData"
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Data />
        </Route>
        <Route path="/scattered">
          <ScatteredData />
        </Route>
      </Router>
    </div>
  );
}

export default App;
