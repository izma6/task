import Home from './Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
 <Router>
      
      <Routes> 
        <Route path="/" element={<Home/>} exact/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
