import './App.css';
import Home from "./home";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Search from "./search";
import Login from "./login";
import Profile from "./profile";
import Details from "./details";
import {Provider} from "react-redux";
import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>
      </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
