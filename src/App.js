import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import SignupForm from './features/auth/SignupForm';
import LoginForm from './features/auth/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './features/dashboard/DashBoard';
import DashboardHome from './features/dashboard/pages/DashboardHome';
import ReferralHistory from './features/dashboard/pages/ReferralHistory';
import Spin from './features/dashboard/pages/Spin';
import Quiz from './features/dashboard/pages/Quiz';
import EarningHistory from './features/dashboard/pages/EarningHistory';
import LeaderBoard from './features/dashboard/pages/LeaderBoard';
import Payment from './features/dashboard/pages/Payment';
import Skill from './features/dashboard/pages/Skill';
import Profile from './features/dashboard/pages/Profile';
import NewQuestion from './features/admin/pages/NewQuestion';
import './App.css';

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route path='' element={<HomePage/>}/>
      <Route path='login' element={<LoginForm/>}/>
      <Route path='signup' element={<SignupForm/>}/>
      <Route element={<ProtectedRoute />}>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route index element={<DashboardHome/>}/>
          <Route path='skill' element={<Skill/>}/>
          <Route path='quiz' element={<Quiz/>}/>
          <Route path='spin' element={<Spin/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='payment' element={<Payment/>}/>
          <Route path='leaderboard' element={<LeaderBoard/>}/>
          <Route path='referral' element={<ReferralHistory/>}/>
          <Route path='earning' element={<EarningHistory/>}/>
        </Route>
      </Route>
      <Route path='set-question' element={<NewQuestion/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
