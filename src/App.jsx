import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route element={<Home />}>
            <Route path="/" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/estudios" element={<Estudios />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Authcontext>
  );
}

export default App;
