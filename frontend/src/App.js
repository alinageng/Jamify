import './App.css';
import Home from "./home";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Search from "./search";
import Login from "./users";
import Profile from "./profile";
import Details from "./details";
import {Provider} from "react-redux";
import store from "./store"
import RootComponent from "./rootComponent";
import Navigation from "./Navigation";
import PostDetails from "./postLists/postDetails";
import Follow from "./profile/follow";

function App() {
  return (
    <Provider store={store}>
      <RootComponent show={true}>
        <HashRouter>
          <Navigation/>
          <div>
            <Routes>
              <Route path="/" element={<Navigate to="home"/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile/:userId" element={<Profile/>}/>
              <Route path="/profile/:userId/:followType" element={<Follow/>}/>
              <Route path="/details" element={<Details/>}/>
              <Route path="/post/:postId" element={<PostDetails/>}/>
            </Routes>
          </div>
        </HashRouter>
      </RootComponent>
    </Provider>
  );
}

export default App;
