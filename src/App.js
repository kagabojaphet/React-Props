import React from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
function App() {
  return ( 
  <Router>
   <Routes>
    <Route path="/" element={<Welcome/>}>

    </Route>
   </Routes>
  </Router>
  );
}

export default App;
