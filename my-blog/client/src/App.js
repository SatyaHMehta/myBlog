import Nav from "./componenets/navBar/Nav";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import SinglePostPage from "./pages/singlePostPage/SinglePostPage";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const user = true;
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />}></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/post/:postId" element={<SinglePostPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
