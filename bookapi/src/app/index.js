import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../components/Navbar/index";
import Login from '../components/Login';
import SignIn from '../components/SignIn';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path="/" />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/books" />
        </Routes>
    </Router>

  );
}

export default App;
