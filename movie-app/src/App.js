import './App.css';
import "./lib/fontawesome/css/all.min.css"
import Header from './Components/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Watchlist from './Components/Watchlist';
import Watched from './Components/Watched';
import Add from './Components/Add';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Watchlist />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
    </GlobalProvider>
    );
}

export default App;
