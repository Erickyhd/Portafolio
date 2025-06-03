
import { HashRouter , Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Sidebar from "./pages/Sidebar";
import Proyectos from "./pages/Proyectos";
import SobreMi from "./pages/SobreMi";
import Authcontext from "./context/Authcontext";
import Estudios from "./pages/Estudios";

function App() {
  return (
    <Authcontext>
      <HashRouter >
        <Sidebar />
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/estudios" element={<Estudios />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </HashRouter >
    </Authcontext>
  );
}

export default App;
