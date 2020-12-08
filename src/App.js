import './App.css';
import {motion, AnimatePresence} from "framer-motion"
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Landing from './pages/Landing';
import StatPage from './pages/StatPage';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
          <Route path="/transaction">
            <StatPage/>
          </Route>
          <Route path="/">
            <Landing/>
          </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
