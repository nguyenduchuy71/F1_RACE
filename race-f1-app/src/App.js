import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Teams from './components/Teams';
import Header from './components/Header';
import Race from './components/Race';
import Drivers from './components/Drivers';
import Footer from './components/Footer';
import DriverInfo from './components/DriverInfo';
import TeamInfo from './components/TeamInfo';

function App() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full 
              h-96 bg-gradient-to-br from-pink-400 to-[#0055D1]
              rounded-md filter blur-3xl opacity-50 -z-50">
      </div>
      <Header />
      <Routes>
        <Route path="/" element={<Race />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/*" element={<TeamInfo />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/drivers/*" element={<DriverInfo />} />
      </Routes>
      <Footer className="absolute bottom-0" />
    </div>
  );
}

export default App;
