import { Routes, Route } from 'react-router-dom';
import { Home, About, Service } from './pages';
import { Signup, Login, Forgot } from './auth';
import 'animate.css';
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="browse" element={<About />} />
        <Route path="create" element={<Service />} />
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<Forgot />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App
