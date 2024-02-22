import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import UserList from "./pages/UserList";
import NavLink from "./components/NavLink";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<NavLink />} />
          <Route index path="/register" element={<Register />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
