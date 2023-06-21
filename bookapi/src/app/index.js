import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Login from '../components/Login';
import SignIn from '../components/SignIn';
import BookList from '../components/Book';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/book" element={<BookList />}/>
        </Routes>
    </Router>

  );
}

export default App;
