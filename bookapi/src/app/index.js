import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Login from '../components/Login';
import SignIn from '../components/SignIn';
import BookList from '../components/Book';
import NewBook from '../components/NewBook';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/book" element={<BookList />}/>
            <Route path="/book" element={<NewBook/>}/>
            <Route path="/newbook" element={<NewBook />}/>
        </Routes>
    </Router>

  );
}

export default App;
