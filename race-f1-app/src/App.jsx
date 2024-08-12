import "./App.css";
import { Routes, Route } from "react-router-dom";
import Race from "./screens/Race";
import Teams from "./screens/Team";
import TeamInfo from "./screens/TeamInfo";
import Drivers from "./screens/Drivers";
import DriverInfo from "./screens/DriverInfo";
import NotFoundPage from "./screens/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative w-full">
      <div
        className="absolute top-0 left-0 w-full 
              h-96 bg-gradient-to-br from-pink-400 to-[#0055D1]
              rounded-md filter blur-3xl opacity-50 -z-50"
      ></div>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Race />} exact />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/*" element={<TeamInfo />} />
          <Route path="/bikers" element={<Drivers />} />
          <Route path="/bikers/*" element={<DriverInfo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;