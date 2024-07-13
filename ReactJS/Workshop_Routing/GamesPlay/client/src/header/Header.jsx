export default function Header(){
    return(
        <header>
        {/* <!-- Navigation --> */}
        <h1><a className="home" href="/">GamesPlay</a></h1>
        <nav>
          <a href="/games">All games</a>
          {/* <!-- Logged-in users --> */}
          <div id="user">
            <a href="/games/create">Create Game</a>
            <a href="/logout">Logout</a>
          </div>
          {/* <!-- Guest users --> */}
          <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        </nav>
      </header>
    )
}