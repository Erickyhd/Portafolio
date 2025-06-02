import React from "react";

import { useState, useEffect } from "react";
function CompProyectos({ empresa, fecha, descripcion, tecnologias, imagen }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  });
  return (
    <div
      className={`z-30 backdrop-blur-md bg-white/40 p-6 rounded-lg shadow-lg text-black italic text-2xl transition-all duration-1000 ease-out group relative ${
        visible ? "opacity-90 translate-y-0" : "opacity-0 translate-y-12"
      } max-w-full md:max-w-2xl w-full min-h-[350px]`}
    >
      {/* TEXTO */}
      <section
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center 
               transition-all duration-700 ease-in-out 
               group-hover:opacity-0 group-hover:scale-9 
               opacity-100 scale-100"
      >
        <p className="font-serif font-bold break-words w-full">{empresa}</p>
        <section className="text-base font-semibold mb-2">{fecha}</section>
        <b className="block text-base font-normal mb-2">{descripcion}</b>
        <p className="text-base font-semibold">Tecnologías usadas:</p>
        <span className="text-base">{tecnologias}</span>
      </section>

      {/* IMAGEN */}
      <img
        src={imagen}
        alt="Foto"
        className="absolute inset-0 w-full h-full object-cover 
               transition-all duration-700 ease-in-out 
               rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
      />
    </div>
  );
}

export default CompProyectos;
