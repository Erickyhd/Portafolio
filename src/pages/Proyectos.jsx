import { useAuth } from "../context/Authcontext";
import { BsCloudDownloadFill } from "react-icons/bs";
import foto from "../img/fondo-dev.webp";
import bienestar from "../img/bienestar.webp";
import ian from "../img/ian.webp";
import solintels from "../img/solintels.webp";
import CompProyectos from "../components/CompProyectos";
function Proyectos() {
  const { color } = useAuth();
  return (
    <div
      className={`relative ${color.color} h-screen flex pt-24 z-10 overflow-y-auto flex-col items-center select-none p-2 `}
    >
      <h3
        className={`font-bold font-serif text-center my-4 ${color.text} text-4xl`}
      >
        {`{ 2021 - 2022 }`}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,700px))] gap-4 w-full justify-center m-0">
        <CompProyectos
          empresa="Bienestar-Farma"
          fecha="Oct - Nov 2021"
          descripcion={
            "Implementé un sistema farmacéutico para una botica, encargándome del diseño de la base de datos y el desarrollo del frontend para optimizar y controlar el proceso de venta de medicamentos."
          }
          tecnologias={"PHP, MySQL, JavaScript, HTML, CSS, GitHub, XP, Laragon"}
          imagen={bienestar}
        />
        <CompProyectos
          empresa="JOY"
          fecha="Ener - Febr 2022"
          descripcion={
            "Diseñé e implemente un sistema de control de ventas para la empresa JOY (venta de prendas de vestir) Huancayo."
          }
          tecnologias={"PHP, MySQL, JavaScript, HTML, CSS, GitHub, XP, Laragon"}
          imagen={foto}
        />
      </div>
      <h3
        className={`font-bold font-serif text-center my-4 ${color.text} text-4xl`}
      >
        {`{ 2023 - 2024 }`}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,700px))] gap-4 w-full justify-center m-0">
        <CompProyectos
          empresa="Robocom"
          fecha="Ener - Abr 2023"
          descripcion={
            "Diseñé e una página web que apoye al área administrativa en las capacitaciones a los trabajadores de la mina Andaychagua"
          }
          tecnologias={"GoogleSites"}
          imagen={foto}
        />
        <CompProyectos
          empresa="SolintELS"
          fecha="Febr - Nov 2024"
          descripcion={
            "Desempeñé el cargo de QA, encargándome de realizar pruebas manuales a los requerimiento para asegurar un software de calidad que cumpla con las expectativas del usuario."
          }
          tecnologias={"C#, SQL, SQL Profiler, Visual Studio, GitHub, SCRUM, Postman, Office"}
          imagen={solintels}
        />
      </div>
      <h3
        className={`font-bold font-serif text-center my-4 ${color.text} text-4xl`}
      >
        {`{ 2025 - •••••• }`}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,700px))] gap-4 w-full justify-center m-0">
        <CompProyectos
          empresa="Ian-Farma"
          fecha="Ener - Febr 2025"
          descripcion={
            "Diseñé e implementé un sistema web que agilicen los procesos de registro, venta y control de sus productos farmaceuticos."
          }
          tecnologias={"MySQL, NodeJS, React, Express, HMTL, Tailwindcss, GitHub, SCRUM, MongoDB"}
          imagen={ian}
        />
        <CompProyectos
          empresa="KAZONA"
          fecha="Mar - May 2025"
          descripcion={
            "Diseñé e implementé un sistema web que ayuden al control de stock y ventas de los sus platos de comida."
          }
          tecnologias={"PostgreSQL, Express, NodeJS, HTML, React, Tailwindcss, GitHub, CSS"}
          imagen={foto}
        />
      </div>
      <section className="backdrop-blur-md bg-white/40 p-2 m-4 rounded-lg shadow-lg text-black flex flex-col items-center italic text-2xl transition-all duration-1000 ease-out group relative">
        <button className="pointer flex flex-col items-center justify-center rounded-lg">
          <a
            href="../../public/cv.pdf"
            download={true}
            className="p-2 flex flex-col items-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300 rounded-lg"
          >
            Descargar CV
            <BsCloudDownloadFill className="text-2xl md:text-4xl justify-items-center my-2"/>
          </a>
        </button>
      </section>
    </div>
  );
}

export default Proyectos;
