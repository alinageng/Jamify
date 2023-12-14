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
import Signup from './users/signup';
import UserTable from './users/table';
import EditProfile from './profile/editProfile';
import DisplaySearchResults from "./search/displaySearchResults";
import SearchMusic from "./search/searchMusic";

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
              <Route path="/search-music" element={<DisplaySearchResults/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile/:userId" element={<Profile/>}/>
              <Route path="/profile/:userId/:followType" element={<Follow/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/edit-profile" element={<EditProfile/>}/>
              <Route path="/details" element={<Details/>}/>
              <Route path="/post/:postId" element={<PostDetails/>}/>
              <Route path="/admin" element={<UserTable />} />
            </Routes>
          </div>
        </HashRouter>
      </RootComponent>
    </Provider>
  );
}

export default App;
