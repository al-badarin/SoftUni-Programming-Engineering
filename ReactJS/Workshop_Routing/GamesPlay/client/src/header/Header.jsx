import { useContext } from 'react';
import Path from '../paths';
import AuthContext from '../contexts/authContext';

export default function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <header>
      <h1>
        <a className="home" href={Path.Home}>
          GamesPlay
        </a>
      </h1>
      <nav>
        <a href="/games">All games</a>
        {isAuthenticated && (
          <div id="user">
            <a href="/games/create">Create Game</a>
            <a href="/logout">Logout</a>
            <span>| {username}</span>
          </div>
        )}
        {!isAuthenticated && (
          <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        )}
      </nav>
    </header>
  );
}
