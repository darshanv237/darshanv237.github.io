
import Banner from './Components/Home/Banner';
import Navbar from './Components/Home/Navbar';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
        <div className="App">
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
  );
}

export default App;
