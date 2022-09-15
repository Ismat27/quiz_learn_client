import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import SignupForm from './features/auth/SignupForm';
import LoginForm from './features/auth/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardHome from './features/dashboard/pages/DashboardHome';
import DashboardSettings from './features/dashboard/pages/DashBoardSettings';
import './App.css';

function App() {
  const token = localStorage.getItem('token')
  if (!token) {
    console.log('not authenticated');
  }

  return (
   <BrowserRouter>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='login' element={<LoginForm/>}/>
      <Route path='signup' element={<SignupForm/>}/>
      <Route element={<ProtectedRoute user={'abc'}/>}>
        <Route path='dashboard'>
          <Route index element={<DashboardHome/>}/>
          <Route path='settings' element={<DashboardSettings/>}/>
        </Route>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
