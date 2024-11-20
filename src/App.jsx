import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import NotFound from "./components/pages/not-found";
import AprenderSobreVino from "./components/pages/AprenderDeVinos.jsx";
import TiposDeVinos from "./components/TiposDeVinos.jsx";

import Login from "./Login.jsx"
import AprenderDeVinos from "./components/pages/AprenderDeVinos.jsx";




function App() {
  return (
    <Router future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}>
      <Navbar />
      <Routes>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/AprenderDeVinos"  element={<AprenderDeVinos />}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/Login" element={<Login/>}/>

        <Route path="/enoturismo" element={<enoturismo/>}/>
        <Route path="/TiposDeVinos" element={<TiposDeVinos/>} />
      </Routes>
    </Router>
  );
}

export default App;

