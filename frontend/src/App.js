import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Secret from './pages/Secret';

function App() {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route path="/" component={() => ( !user ? <Redirect to="/login"/> : <Home/>)} exact />
        <Route path="/secret/:id" component={() => ( !user ? <Redirect to="/login"/> : <Secret/>)} exact />
        <Route path="/login" component={() => ( user ? <Redirect to="/"/> : <Login/>)} exact />
        <Route path="/register" component={() => ( user ? <Redirect to="/"/> : <Register/>)} exact />
      </Switch>
    </Router>
  );
}

export default App;
