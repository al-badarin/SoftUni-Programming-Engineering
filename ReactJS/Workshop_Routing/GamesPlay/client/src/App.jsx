import {Routes, Route} from 'react-router-dom'

import Header from "./header/Header";
import Home from './home/Home';

function App() {
  return (
    <>
      <div id="box">
        <Header />
      </div>

      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='' element={< xxx/>}/>
        <Route path='' element={< xxx/>}/>
        <Route path='' element={< xxx/>}/>
        <Route path='' element={< xxx/>}/>
        <Route path='' element={< xxx/>}/>
      </Routes>
    </>
  );
}

export default App;
