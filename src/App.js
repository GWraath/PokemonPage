
import './App.css';
import PokeWelcome from './PokeWelcome';
import PokeDescription from './PokeDescription';
import Navbar from './PokeNavBar';
import PokeBuilder from './PokeBuilder';
import {Routes,Route} from 'react-router-dom';
import { PageNotFound } from './PokePageNotFound';
import { PokeNum } from './PokeNum.js';

function App() {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<PokeWelcome />}/>
            <Route path='builder' element={<PokeBuilder />}/>
            <Route path='description' element={<PokeDescription/>}>
              <Route path=':pokenum' element={<PokeNum/>}/>
            </Route>
            {/* <Route path='profile' element={<Profile/>}/> */}
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  );
}



export default App;