import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import foto from "../img/fondo-dev.webp";
import { useAuth } from "../context/Authcontext";
import { BsLinkedin } from "react-icons/bs";
import { toast, Toaster } from "react-hot-toast";
import { AiOutlineWhatsApp, AiFillGithub } from "react-icons/ai";
import Estudios from "./Estudios";
import Modal from "../../../Appcrud/src/Componentes/Modal";

function SobreMi() {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const { color } = useAuth();
  const [modal, setModal] = useState(false);
  const [dat, setDat] = useState({
    Datos: "",
    Email: "",
    Mensaje: "",
  });

  const DatosCompletos = () => {
    const compl = {
      Datos: dat.Datos,
      Email: dat.Email,
      Mensaje: dat.Mensaje,
    };
    setDat(compl);
    if (dat.Nombre !== "" && dat.Email !== dat.ok && dat.Mensaje !== "") {
      return toast.success("Datos Enviados");
    } else {
      return toast.error("Datos Incompletos");
    }
  };

  const abrirModal = () => {
    setModal(true);
  };
  const cerrarModal = () => {
    setModal(false);
  };

  useEffect(() => {
    setTimeout(() => setVisible(true), 300); // Efecto de entrada con retardo
    setTimeout(() => setVisible2(true), 300);
  }, []);
  return (
    <div
      className={`relative ${color.color} h-screen flex pt-24 z-10 overflow-y-auto flex-col items-center select-none`}
    >
      <div
        className={`z-30 backdrop-blur-md bg-white/20 p-1 md:p-8 m-0 md:mt-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out w-full md:w-1/2 lg:w-1/3 ${
          visible ? "opacity-90 translate-y-0" : "opacity-0 translate-x-50"
        }`}
      >
        <section className="flex flex-col items-center">
          <img
            src={foto}
            alt="foto"
            width={200}
            className="rounded-full select-none hover:cursor-pointer hover:drop-shadow-2xl"
          />
          <section className="flex gap-4 text-4xl py-4 justify-evenly">
            <a
              href="https://www.linkedin.com/in/erick-h-d-404332259/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="hover:cursor-pointer" />
            </a>
            <a
              href="https://github.com/Erickyhd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="hover:cursor-pointer" />
            </a>
            <a
              href="https://wa.me/+51939921701?text=Contacta,%20con%20el%20desarrollador"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp className="hover:cursor-pointer" />
            </a>
          </section>
          <span className="font-mono text-md md:text-2xl lg:text-3xl font-bold justify-items-center text-center text-stone-700">
            Bienvenido :) mi nombre es
            <span
              className={`${color.text} text-2xl md:text-4xl lg:text-5xl font-serif flex py-3`}
            >
              <button
                className="hover:cursor-pointer"
                onClick={abrirModal}
              >{`<Erick />`}</button>
            </span>
            Desarrollador front-end enfocado en crear experiencias digitales
            originales y atractivas.
          </span>
          <article className="font-mono w-full mt-2"></article>
        </section>
      </div>
      <h3
        className={`font-bold font-serif text-center mt-4 ${color.text} text-4xl`}
      >
        {`{ PASATIEMPO E INTERESES }`}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))] gap-4 w-full justify-center ">
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <section className="flex flex-col p-2 rounded-lg justify-center items-center hover:bg-blue-50 hover:text-black transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16M15.311 4.02a.89.89 0 0 1-.453.837l-3.743 2.079a1 1 0 0 1-.243.096l-.387.097l.216 1.511l3.495.7a1 1 0 0 1 .514.276L19 7.47V5.617a1 1 0 0 1 .845-.988a12 12 0 0 0-4.534-.61m-7.53 3.237a11.98 11.98 0 0 0-3.64 6.893l3.167-1.583q.034-.081.084-.156L9.63 9.057a1 1 0 0 1 .568-.41l-.2-1.396l-1.23.307a.99.99 0 0 1-.986-.301m-3.716 7.49Q4 15.363 4 15.995v.01c0 1.364.229 2.676.649 3.898l2.71 3.012a1 1 0 0 1 .324-.256l1.798-.9a1 1 0 0 1 .296-.093l.408-4.891a1 1 0 0 1-.645-.388l-2.115-2.821a1 1 0 0 1-.182-.408zM7.15 23.43l-1.922-2.136a12 12 0 0 0 2.243 3.149a5.4 5.4 0 0 1-.283-.703a.8.8 0 0 1-.038-.31M16 28c2.566 0 4.944-.806 6.895-2.178l.246-1.963a1 1 0 0 1-.345-.015l-3.013-.67a1 1 0 0 1-.537-.32l-4.83 2.23l-.005.04l-.261 1.83c-.021.144-.072.28-.146.4c.439.246.899.454 1.36.63q.315.015.636.016m7.675-4.382l-.224 1.79A12 12 0 0 0 27.7 18.68l-1.463.731a1 1 0 0 1-.074.151l-2.292 3.82a1 1 0 0 1-.196.236m2.606-4.788l1.543-.771Q28 17.054 28 16c0-2.627-.844-5.057-2.276-7.033a1 1 0 0 1-.287.596l-.885.885a1 1 0 0 1-.746.292l.387 5.145a1 1 0 0 1 .263.254l1.663 2.328c.08.11.134.235.162.363m-15.59-2.106l-.416 4.992a1 1 0 0 1 .208.106l3.493 2.328a1 1 0 0 1 .356.421l4.69-2.164a1 1 0 0 1-.022-.21v-4.02a1 1 0 0 1 .091-.418l-4.504-2.627a1 1 0 0 1-.216.12l-3.66 1.463zm4.218-1.983l4.503 2.627a1 1 0 0 1 .217-.12l3.642-1.456a1 1 0 0 1 .409-.071l-.387-5.145l-3.808-2.285a1 1 0 0 1-.338-.335l-4.184 2.092q.037.13.037.272v4.003a1 1 0 0 1-.091.418"
              ></path>
            </svg>
            <p className="font-serif font-bold">Fútbol</p>
          </section>
        </div>
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <section className="flex flex-col p-2 rounded-lg justify-center items-center hover:bg-blue-50 hover:text-black transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></path>
                <path d="M12 12a8 8 0 0 0 8 4M7.5 13.5A12 12 0 0 0 16 20"></path>
                <path d="M12 12a8 8 0 0 0-7.464 4.928m8.415-9.575a12 12 0 0 0-9.88 4.111"></path>
                <path d="M12 12a8 8 0 0 0-.536-8.928m4.085 12.075a12 12 0 0 0 1.38-10.611"></path>
              </g>
            </svg>
            <p className="font-serif font-bold">Vóley</p>
          </section>
        </div>
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <section className="flex flex-col p-2 rounded-lg justify-center items-center hover:bg-blue-50 hover:text-black transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.5 4.318v11.364c0 .763 0 1.144-.136 1.441a1.5 1.5 0 0 1-.74.741C9.326 18 8.944 18 8.182 18c-2.035 0-3.052 0-3.844-.361a4 4 0 0 1-1.977-1.977C2 14.87 2 13.852 2 11.818V8.182c0-2.035 0-3.052.361-3.844a4 4 0 0 1 1.977-1.977C5.13 2 6.148 2 8.182 2c.763 0 1.144 0 1.441.136a1.5 1.5 0 0 1 .741.74c.136.298.136.68.136 1.442M6.25 14h-.009m11.509-4h-.009M6.25 5.5v3M4.75 7h3m5.75 12.682V8.318c0-.763 0-1.144.136-1.441a1.5 1.5 0 0 1 .74-.741C14.675 6 15.057 6 15.819 6c2.035 0 3.052 0 3.844.361a4 4 0 0 1 1.977 1.977c.361.792.361 1.81.361 3.844v3.636c0 2.035 0 3.052-.361 3.844a4 4 0 0 1-1.977 1.977c-.792.361-1.81.361-3.844.361c-.763 0-1.144 0-1.441-.136a1.5 1.5 0 0 1-.741-.74c-.136-.298-.136-.68-.136-1.442M17.75 18.5v-3m1.5 1.5h-3"
                color="currentColor"
              ></path>
            </svg>
            <p className="font-serif font-bold">Videojuegos</p>
          </section>
        </div>
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <section className="flex flex-col p-2 rounded-lg justify-center items-center hover:bg-blue-50 hover:text-black transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2 6s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1zm10 0s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1z"
              ></path>
            </svg>
            <p className="font-serif font-bold">Novelas</p>
          </section>
        </div>
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <section className="flex flex-col p-2 rounded-lg justify-center items-center hover:bg-blue-50 hover:text-black transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              viewBox="0 0 26 26"
            >
              <g fill="currentColor">
                <g transform="translate(3 3)">
                  <path
                    fillRule="evenodd"
                    d="M6.75 3.81a1 1 0 0 1 .906-.996l9-.846a1 1 0 0 1 1.094.996v2.181a1 1 0 0 1-.901.995l-9 .893a1 1 0 0 1-1.099-.995z"
                    clipRule="evenodd"
                  ></path>
                  <ellipse cx={14.75} cy={15} rx={3} ry={2.5}></ellipse>
                  <ellipse cx={5.75} cy={16} rx={3} ry={2.5}></ellipse>
                  <path
                    fillRule="evenodd"
                    d="M15.75 5h2v10h-2zm-9 1h2v10h-2z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <path
                  fillRule="evenodd"
                  d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <p className="font-serif font-bold">Música</p>
          </section>
        </div>
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <section className="flex flex-col p-2 rounded-lg justify-center items-center hover:bg-blue-50 hover:text-black transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m9.983 20.048l-2.09-3.946l-3.966-2.11l1.083-1.077l3.452.587l3.05-3.05L4.01 7.25l1.388-1.38l9.125 1.565l3.12-3.139q.42-.421 1.03-.421t1.03.421q.422.421.422 1.028t-.421 1.028l-3.145 3.125l1.566 9.12l-1.394 1.394l-3.189-7.502l-3.05 3.05l.573 3.427z"
              ></path>
            </svg>
            <p className="font-serif font-bold">Viajar</p>
          </section>
        </div>
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <section className="flex flex-col p-2 rounded-lg justify-center items-center hover:bg-blue-50 hover:text-black transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 7q-.425 0-.712-.288T19 6V5h-1q-.425 0-.712-.288T17 4t.288-.712T18 3h1V2q0-.425.288-.712T20 1t.713.288T21 2v1h1q.425 0 .713.288T23 4t-.288.713T22 5h-1v1q0 .425-.288.713T20 7m-9 10.5q1.875 0 3.188-1.312T15.5 13t-1.312-3.187T11 8.5T7.813 9.813T6.5 13t1.313 3.188T11 17.5m0-2q-1.05 0-1.775-.725T8.5 13t.725-1.775T11 10.5t1.775.725T13.5 13t-.725 1.775T11 15.5M3 21q-.825 0-1.412-.587T1 19V7q0-.825.588-1.412T3 5h3.15L7.4 3.65q.275-.3.663-.475T8.875 3H14q.425 0 .713.288T15 4v1.5q0 .625.438 1.063T16.5 7h.5v.5q0 .625.438 1.063T18.5 9H20q.425 0 .713.288T21 10v9q0 .825-.587 1.413T19 21z"
              ></path>
            </svg>
            <p className="font-serif font-bold">Fotografiar</p>
          </section>
        </div>
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg text-white italic text-2xl transition-all duration-1000 easy-out ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <section className="flex flex-col p-2 rounded-lg justify-center items-center hover:bg-blue-50 hover:text-black transition-all duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M2 7V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v2h-2V5H4v2zm6 14v-2H4q-.825 0-1.412-.587T2 17v-2h2v2h16v-2h2v2q0 .825-.587 1.413T20 19h-4v2zM4.8 11l2.6-2.6L6 7l-4 4l4 4l1.4-1.4zm14.4 0l-2.6 2.6L18 15l4-4l-4-4l-1.4 1.4z"
              ></path>
            </svg>
            <p className="font-serif font-bold">Programar</p>
          </section>
        </div>
      </div>
      <h3 className={`font-bold font-serif text-center ${color.text} text-4xl`}>
        {`{ SKILLS }`}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,500px))] gap-4 w-full justify-center ">
        <div
          className={`z-30 backdrop-blur-md bg-white/50 hover:bg-white hover:cursor-pointer p-8 m-4 rounded-lg shadow-lg italic text-xl transition-all duration-1000 easy-out text-stone-700 ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <h2 className="text-center font-bold font-serif mb-2">
            HABILIDADES BLANDAS Y VALORES
          </h2>
          <section className="grid md:grid-cols-2">
            <span>• Responsabilidad</span>
            <span>• Puntualidad</span>
            <span>• Disciplina</span>
            <span>• Empatia</span>
            <span>• Escucha activa</span>
            <span>• Pensamiento crítico</span>
            <span>• Adaptabilidad</span>
            <span>• Trabajo en equipo</span>
            <span>• Resiliencia</span>
            <span>• Autodidacta</span>
            <span>• Precisión</span>
            <span>• Innovación</span>
            <span>• Resolución de problemas</span>
            <span>••••••••••••</span>
          </section>
        </div>
        <div
          className={`z-30 backdrop-blur-md bg-white/50 hover:bg-white hover:cursor-pointer p-8 m-4 rounded-lg shadow-lg italic text-xl transition-all duration-1000 easy-out text-stone-700 ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <h2 className="text-center font-bold font-serif mb-2 ">
            HABILIDADES TECNICAS
          </h2>
          <section className="grid md:grid-cols-2">
            <span>• JavaScritp</span>
            <span>• React</span>
            <span>• Css - Tailwindcss</span>
            <span>• HTML</span>
            <span>• Scrum - Kamban</span>
            <span>• Git - Github</span>
            <span>• MySQL</span>
            <span>• SQL</span>
            <span>• MongoDB</span>
            <span>• PostgreSQL</span>
            <span>• Dart</span>
            <span>• TypeScript</span>
            <span>• Flutter</span>
            <span>••••••••••••</span>
          </section>
        </div>
      </div>
      <h3 className={`font-bold font-serif text-center ${color.text} text-4xl`}>
        {`{ Contactos }`}
      </h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,500px))] gap-4 w-full justify-center ">
        <div
          className={`z-30 backdrop-blur-md bg-white/20 p-8 m-4 rounded-lg shadow-lg italic text-xl transition-all duration-1000 easy-out text-stone-700 ${
            visible2 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-50"
          }`}
        >
          <h2 className="font-normal font-mono mb-4 not-italic text-justify">
            No dude en ponerse en contacto conmigo enviando el siguiente
            formulario y me pondré en contacto con usted lo antes posible
          </h2>
          <form
            action="https://formsubmit.co/erickyersonhd@gmail.com"
            method="POST"
            className="flex flex-col gap-4 w-full max-w-md bg-white/20 p-8 rounded-lg shadow-lg text-stone-700 hover:cursor-pointer hover:bg-white transition-all duration-1000 ease-in-out"
          >
            <input
              type="text"
              name="Datos"
              placeholder="Tu nombre"
              required
              className="p-2 border rounded-lg not-italic outline-none"
              value={dat.Datos}
              onChange={(e) => setDat({ ...dat, Datos: e.target.value })}
            />
            <input
              type="email"
              name="Email"
              placeholder="Tu correo"
              required
              className="p-2 border rounded-lg not-italic outline-none"
              value={dat.Email}
              onChange={(e) => setDat({ ...dat, Email: e.target.value })}
            />
            <textarea
              name="Mensaje"
              placeholder="Tu mensaje"
              required
              className="p-2 border rounded-lg not-italic outline-none"
              value={dat.Mensaje}
              onChange={(e) => setDat({ ...dat, Mensaje: e.target.value })}
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />
            <button
              type="submit"
              className={`${color.text} backdrop-blur-md bg-white/20 p-2 mx-auto font-bold not-italic font-serif rounded-lg hover:bg-stone-900 hover:text-white hover:shadow-lg transition-all duration-300 cursor-pointer `}
              onClick={DatosCompletos}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right" />
      {modal && <Estudios cerrarModal={cerrarModal} />}
    </div>
  );
}

export default SobreMi;
