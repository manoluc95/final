import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import Navbar from './components/navbar';
import Contacto from './components/contacto';
import NotFound from "./components/pages/not-found";
import TiposDeVinos from "./components/TiposDeVinos.jsx";
import Login from "./Login.jsx"
import AprenderDeVinos from "./components/pages/AprenderDeVinos.jsx";
import Bodegas from './components/pages/bodegas.jsx';
import Tintos from './components/pages/tintos.jsx';
import Blancos from './components/pages/blancos.jsx';
import Rose from './components/pages/rose.jsx';

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
        <Route path="/TiposDeVinos" element={<TiposDeVinos/>} />
        <Route path="/Bodegas" element={<Bodegas/>} />
        <Route path="/tintos" element={<Tintos/>} />
        <Route path="/blancos" element={<Blancos/>} />
        <Route path="/rose" element={<Rose/>} />
       
      </Routes>
    </Router>
  );
}

export default App;

