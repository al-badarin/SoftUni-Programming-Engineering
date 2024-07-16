import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import AuthContext from './contexts/authContext';

import Header from './header/Header';
import Home from './home/Home';
import GameList from './game-list/GameList';
import GameCreate from './game-create/GameCreate';
import Login from './login/Login';
import Register from './register/Register';
import GameDetails from './game-details/GameDetails';

function App() {
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div id="box">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
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
