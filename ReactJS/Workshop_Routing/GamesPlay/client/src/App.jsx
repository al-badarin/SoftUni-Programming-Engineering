import { Routes, Route } from 'react-router-dom';

import { useState } from 'react';

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
    <>
      <div id="box">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameList />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
        <Route path="/games/create" element={<GameCreate />} />
        <Route
          path="/login"
          element={<Login loginSubmitHandler={loginSubmitHandler} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
