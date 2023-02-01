import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SignUp } from './signup/SignUp';
import { Login } from './login/LoginHandler';
import { Home } from './home/Home';

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
