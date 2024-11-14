import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import NotFound from "./components/pages/not-found";
import AprenderSobreVino from "./components/pages/aprender-del-vino.jsx";
import TiposDeVinos from "./components/tipos-de-vinos";

import Login from "./Login.jsx"




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
        <Route path="/aprende-sobre-vino" element={<AprenderSobreVino />}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/TiposDeVinos" element={<TiposDeVinos/>}/>
        <Route path="/enoturismo" element={<enoturismo/>}/>

      </Routes>
    </Router>
  );
}

export default App;

