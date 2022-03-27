import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateSecret from './pages/PrivateSecret';
import PublicSecret from './pages/PublicSecret';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.baseURL = `${document.location.origin}/api/`;
const token  =  localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))?.accessToken 

if(token){
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}else {
  axios.defaults.headers.common['Authorization'] = null;
}

function App() {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => ( !user ? <Redirect to="/login"/> : <Home/>)} exact />
        <Route path="/secret/:id" component={() => ( !user ? <Redirect to="/login"/> : <PrivateSecret/>)} exact />
        <Route path="/share/:id" component={PublicSecret} exact />
        <Route path="/login" component={() => ( user ? <Redirect to="/"/> : <Login/>)} exact />
        <Route path="/register" component={() => ( user ? <Redirect to="/"/> : <Register/>)} exact />
      </Switch>
    </Router>
  );
}

export default App;
