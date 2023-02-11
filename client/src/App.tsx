import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Root } from '@pages/root';
import { Login } from '@pages/login';
import { Signup } from '@pages/signup';
import { NoPage404 } from '@pages/no-page-404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<NoPage404 />} />
      </Routes>
    </BrowserRouter>
  );
}
