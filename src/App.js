import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Write from "./components/pages/write/Write";
import TopBar from "./components/topbar/TopBar";
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  const user =false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register" element={user ? <Home/>:<Register />}/>
        <Route path="/login" element={user ? <Home/>:<Login />}/>
        <Route path="/write" element={user ? <Write />: <Register/>}/>
        <Route path="/settings" element={user ?<Settings/>:<Register/>}/>
        <Route path="/post/:postId" element={<Single />}/>
      </Routes>
    </Router>
  );
}

export default App;
