import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './Signup';
import { Login } from './Login';
import { Home } from './Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
