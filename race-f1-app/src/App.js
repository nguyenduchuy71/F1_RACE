import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Teams from './components/Teams';
import Header from './components/Header';
import Race from './components/Race';
import Drivers from './components/Drivers';

function App() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full 
              h-96 bg-gradient-to-br from-pink-400 to-[#0055D1]
              rounded-md filter blur-3xl opacity-50 -z-50">
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Race />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/drivers" element={<Drivers />} />
      </Routes>
    </>
  );
}

export default App;
