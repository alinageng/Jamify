import './App.css';
import HomePage from "./homepage";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </div>
    </HashRouter>

  );
}

export default App;
