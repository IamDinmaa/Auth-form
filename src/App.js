import "./App.css";
import Register from "./Register Component/Register";
import Dashboard from "./Register Component/Dashboard";
import { Route, Routes } from "react-router";
import Login from "./Register Component/Login";
import { AuthProvider } from "./auth-context component/auth-context";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
