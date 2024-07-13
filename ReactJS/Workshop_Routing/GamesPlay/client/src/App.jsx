import {Routes, Route} from 'react-router-dom'

import Header from "./header/Header";
import Home from './home/Home';
import GameList from './game-list/GameList';

function App() {
  return (
    <>
      <div id="box">
        <Header />
      </div>

      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/games' element={< GameList/>}/>
        <Route path='' element={< xxx/>}/>
        <Route path='' element={< xxx/>}/>
        <Route path='' element={< xxx/>}/>
        <Route path='' element={< xxx/>}/>
      </Routes>
    </>
  );
}

export default App;
