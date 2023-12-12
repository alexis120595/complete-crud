import './App.css';
import Home from './views/home/home';
import LandingPage from './views/landingPage/landingPage';
import Form from './views/form/form';
import Detail from './views/detail/detail';
import { Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
     <Route exact path="/" element={<LandingPage/>}/>
     <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/form" element={<Form/>}/>
      <Route exact path="/detail" element={<Detail/>}/>+
  
      </Routes>


    </div>
  );
}

export default App;
