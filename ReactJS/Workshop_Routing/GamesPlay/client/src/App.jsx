import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from './header/Header';
import Home from './home/Home';
import GameList from './game-list/GameList';
import GameCreate from './game-create/GameCreate';
import Login from './login/Login';
import Register from './register/Register';
import GameDetails from './game-details/GameDetails';

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    username: auth.username || auth.email,
    email: auth.email,
    isAuthenticated: !!auth.email,
  };

  return (
    <AuthContext.Provider value={values}>
      <div id="box">
        <Header />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path="/games" element={<GameList />} />
          <Route path="/games/:gameId" element={<GameDetails />} />
          <Route path="/games/create" element={<GameCreate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
