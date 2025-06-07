import React from "react";
import { useAuth } from "../context/Authcontext";
import escu from "../img/virgen-carmen.webp";
import cole from "../img/wari-vilca.webp";
import univ from "../img/uncp.webp";
import ingl from "../img/ceid.webp";
function Estudios({ cerrarModal }) {
  const { color } = useAuth();

  return (
    <div className="pt-30 z-70 fixed inset-0 backdrop-blur-sm bg-white/10 rounded-xl flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg mx-auto overflow-x-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))] gap-4 justify-items-center items-center justify-center font-serif ">
          <section
            className={`${color.text} group relative bg-white/20 overflow-hidden rounded flex items-center justify-center w-full max-w-[500px] min-h-[320px]`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-lg transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 px-4 break-words z-10">
              <h2 className="text-center font-bold">EDUCACION PRIMARIA</h2>
              <span className="font-bold">
                Escuela Virgen del Carmen 2005 - 2008
              </span>
              <p>
                Estudie mi nivel primario en la institucion ubicada en el
                distrio de Hayucachi provincia de Huancayo, hasta el 4to grado
              </p>
              <p className="font-bold">Escuela 30201 desde 2009 - 2010</p>
              <p>
                Curse el 5to y 6to grado en la escuela ubicada en el distrito de
                Chupuro y provincia de Huancayo
              </p>
            </div>
            <img
              src={escu}
              alt=""
              className="absolute inset-0 h-full object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 rounded z-0 mx-auto"
            />
          </section>
          <section
            className={`${color.text} group relative bg-white/20 overflow-hidden rounded flex items-center justify-center w-full max-w-[500px] min-h-[320px]`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-lg transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 px-4 break-words z-10">
              <h2 className="text-center font-bold">EDUCACION SECUNDARIA</h2>
              <span className="font-bold">
                Colegio Wari - Vilca 2011 - 2016
              </span>
              <p>
                continue con mis estudios de nivel secundario en la institucion
                educativa ubicada en el distrito de Huayucachi provincia de
                Huancayo
              </p>
            </div>
            <img
              src={cole}
              alt=""
              className="absolute inset-0 h-full object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 rounded z-0 mx-auto"
            />
          </section>
          <section
            className={`${color.text} group relative bg-white/20 overflow-hidden rounded flex items-center justify-center w-full max-w-[500px] min-h-[320px]`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-lg transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 px-4 break-words z-10">
              <h2 className="text-center font-bold">EDUCACION UNIVERSITARIA</h2>
              <span className="font-bold">
                Universidad Nacional del Centro del Perú 2018 - 2023
              </span>
              <p>
                Continué con mi educación superior con la carrera de ingeniería de sistemas egresando satisfactoriamente, la universidad está ubicada en la ciudad Huancayo, departamento de Junín - <span>Perú</span>
              </p>
            </div>
            <img
              src={univ}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 rounded z-0 "
            />
          </section>
          <section
            className={`${color.text} group relative bg-white/20 overflow-hidden rounded flex items-center justify-center w-full max-w-[500px] min-h-[320px]`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-lg transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 px-4 break-words z-10">
              <h2 className="text-center font-bold">EDUCACION IDIOMAS</h2>
              <span className="font-bold">Centro de Idiomas UNCP 2022</span>
              <p>Continué con mi formación del idioma ingles, culminando el nivel básico</p>
            </div>
            <img
              src={ingl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 rounded z-0"
            />
          </section>
        </div>
      </div>
      <button
        onClick={cerrarModal}
        className={`${color.text} bg-white rounded-lg p-2 font-bold font-mono hover:cursor-pointer m-auto`}
      >
        Atras
      </button>
    </div>
  );
}

export default Estudios;
