import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();

  return (
    <Router>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Register />} />
      <Route
        path="/login"
        element={user ? <Home/>: <Login />}
      />
      <Route
        path="/register"
        element={user ? <Home/> : <Register />}
      />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
    </Router>
  );
}

export default App;
