import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate} from 'react-router-dom';
import Landing from './Pages/landing/landing';
import Login from './Pages/auth/Login';
import Signup from './Pages/auth/Signup';
import Dashboard from './Pages/dashboard/Dashboard';
import ChatBot from './Pages/chat-bot/chat-bot';
import MoodTracker from './Pages/mood-tracker/Mood-tracker';
import Quotes from './Pages/quotes/Quotes';
import RouteParent from './Pages/route-parent/RouteParent';
function App() {
  return (
    // create react router
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='auth' element={<Navigate to="login"/>} > {/* Does not work now */}
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
      </Route>
      <Route path='app' element={<RouteParent/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path='chat' element={<ChatBot/>}></Route>
        <Route path='mood-tracker' element={<MoodTracker/>}></Route>
        <Route path='quotes' element={<Quotes/>}></Route>
      </Route>
      <Route path='*' element={"404"} ></Route>
    </Routes>
  );
}

export default App;
