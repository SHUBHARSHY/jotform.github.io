
import './App.css';
import Newbody from './Newbody';
import Body from './components/Body';
import Subnav from './components/Subnav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Subnav/>
      <Routes>
        <Route path='build' element={<Newbody/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
