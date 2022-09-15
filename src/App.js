import HomePage from './features/home/HomePage';
import SignupForm from './features/auth/SignupForm';
import LoginForm from './features/auth/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='login' element={<LoginForm/>}/>
      <Route path='signup' element={<SignupForm/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
