import './App.css';
import { useState, useEffect } from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import { Login } from './screens/login/Login';
import { Logout } from './screens/logout/Logout'
import {loginUser, registerUser, removeToken, verifyUser} from './services/auth'
import { Register } from './screens/register/Register';
import { MainContainer } from './container/MainContainer';
import { About } from './screens/about/About';



function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null)
  const clearCurrentUser = () => setCurrentUser(null)
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser();
      currentUser ? setCurrentUser(currentUser): setCurrentUser(null)
    }
    handleVerify();
  }, [])



  const handleLogin = async (formData) => {
    try { 
      const currentUser = await loginUser(formData);
      setCurrentUser(currentUser)
      history.push('/')
    } catch (e) {
      setError("invalid login credentials")
    }
  }

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData);
    setCurrentUser(currentUser)
    history.push('/')
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken()

  }
  return (
    
      <Switch>
      <Route path='/review'>
          <h3>Enter</h3>
        </Route>

        <Route path='/login'>
          <Login  handleLogin={handleLogin} currentUser={currentUser}/>
        </Route>

        <Route path='/register'>
          <Register handleRegister={handleRegister} currentUser={currentUser}/>
        </Route>

        <Route path='/logout'>
          <Logout setCurrentUser={setCurrentUser} clearCurrentUser={clearCurrentUser} />
        </Route>

        <Route path='/about'>
          <About currentUser={currentUser} />
        </Route>
        <Route path='/'>
          <MainContainer currentUser={currentUser} />
        </Route>


      </Switch>
    
  );
}

export default App;
