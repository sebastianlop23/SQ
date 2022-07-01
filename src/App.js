import MainScreen from './MainScreen';
import NavBar from './NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar/>
        <div className="content">
          <Routes>
            <Route exact path="/">
              <MainScreen />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
