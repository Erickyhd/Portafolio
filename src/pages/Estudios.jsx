import React from "react";
import { useAuth } from "../context/Authcontext";

function Estudios({ cerrarModal }) {
  const { color } = useAuth();
  const escuela =
    "https://scontent.flim19-1.fna.fbcdn.net/v/t39.30808-6/451223817_122101778774412934_9087071544349700761_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEJE0TOI8hokt1cRtkMjhVftje2iozhu8i2N7aKjOG7yBAf8zwzu-RtYy9ioXE7OJJf6YZVm3rfLEjIUEIKxl-i&_nc_ohc=AnGH7FdsGpQQ7kNvwGDJqgb&_nc_oc=Adk61SeVo0cYFUwgRVdAwCzrNAzS6Ui68-q_Q1m4nmYlCOpTiZvdGxR4USz27ikSafU&_nc_zt=23&_nc_ht=scontent.flim19-1.fna&_nc_gid=Ar5579dbtL17KaZ6CjQLOQ&oh=00_AfJSBjbbgVogbttXRsroGvywZuwI_CwV7ZqJwmFWBWckUQ&oe=6843A691";
  const colegio =
    "https://scontent.flim19-1.fna.fbcdn.net/v/t39.30808-6/430068773_1143008293699794_7885144961450237148_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFoFyTtP4ASIJf7bf83-UG5YeRNGZLwKVZh5E0ZkvApVmNqkSDVtoDpmy6IirxLEoRlaWWbCvw4UTMYj2Pp9khj&_nc_ohc=CyJlQn3YhhUQ7kNvwFcER0G&_nc_oc=AdmT0f7K3PWGVplbTuxqKWMbqNa01g6p2YYDo_d-cvkpf5tPACpazrDWpg3fYfROshw&_nc_zt=23&_nc_ht=scontent.flim19-1.fna&_nc_gid=TFyjejFe2uLbK4wvhtCeWQ&oh=00_AfJcV42zDNLvzhZNYo2OROeUFnPaHeFmsb1ZwW9iDvwpRQ&oe=6843AD8C";
    const universidad ="https://scontent.flim19-1.fna.fbcdn.net/v/t39.30808-6/489568995_1069551205210999_6179195293979733220_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHK3AqFwi1rEnXbATo7JmaI4uM2UHgbeCji4zZQeBt4KB3vu7e7M3_QQfsmmI5gxW2YH307JQn5a1JSIjPWERZ-&_nc_ohc=oSD4bLJyqeMQ7kNvwH8qjq8&_nc_oc=AdmiEIV_1m3XmJZwfnMVScoWRvDfSnAg5jbu4Xy9RRClN5fJJEcVrly6dypLw6eLGas&_nc_zt=23&_nc_ht=scontent.flim19-1.fna&_nc_gid=XCcVcLHy5-DCdgYXM_dGtQ&oh=00_AfLBWkVxfH0SujWgqhyVbX3trRu5ITvTf5ATZDTb5Zr1JQ&oe=684385F4";
    const ceid = "https://scontent.flim19-1.fna.fbcdn.net/v/t39.30808-6/301515363_109149585253899_4965364983474463299_n.png?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHc30gyh8o1XtzDzA1Ia4Ptqpbf4rOGw5yqlt_is4bDnFfBGartTQB9OP5tZ7STF_M2UH2IL9ZgqH5grSFEGaIC&_nc_ohc=u9IcyG4qOngQ7kNvwFsiUnh&_nc_oc=AdlNeEnlNGc8jCwt_schzoMx7_DpiHtj_LC250-Ucj8MKdA9bizdDSZqGdB5wUQPyKE&_nc_zt=23&_nc_ht=scontent.flim19-1.fna&_nc_gid=18_USYQPE6mUr8lHJnxd9A&oh=00_AfJR8PXUtQXMFfRBbtmXljKOswA91PRFa3ndJNAHw8RhxQ&oe=684393AA";
  return (
    <div className="pt-30 z-70 fixed inset-0 backdrop-blur-sm bg-white/10 rounded-xl flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg mx-auto overflow-x-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,400px))] gap-4 justify-items-center items-center justify-center">
          <section
            className={`${color.text} group relative bg-white/20 overflow-hidden rounded flex items-center justify-center w-full max-w-[500px] min-h-[320px]`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 px-4 break-words z-10">
              <h2 className="text-center font-bold">EDUCACION PRIMARIA</h2>
              <span className="font-bold">
                Escuela Virgen del Carmen 2005 - 2008
              </span>
              <p>
                La escuela queda ubicada en el distrio de Hayucachi provincia de
                Huancayo, estudie hasta el 4to grado
              </p>
              <p className="font-bold">Escuela 30201 desde 2009 - 2010</p>
              <p>
                Curse el 5to y 6to grado en la escuela ubicada en el distrito de
                Chupuro y provincia de Huancayo
              </p>
            </div>
            <img
              src={escuela}
              alt=""
              className="absolute inset-0 h-full object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 rounded z-0 mx-auto"
            />
          </section>
          <section
            className={`${color.text} group relative bg-white/20 overflow-hidden rounded flex items-center justify-center w-full max-w-[500px] min-h-[320px]`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 px-4 break-words z-10">
              <h2 className="text-center font-bold">EDUCACION SECUNDARIA</h2>
              <span className="font-bold">
                Colegio Wari - Vilca 2011 - 2016
              </span>
              <p>
                Estudie mi nivel secundario en el colegio ubicado en el distrito
                de Huayucachi provincia de Huancayo
              </p>
            </div>
            <img
              src={colegio}
              alt=""
              className="absolute inset-0 h-full object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 rounded z-0 mx-auto"
            />
          </section>
          <section
            className={`${color.text} group relative bg-white/20 overflow-hidden rounded flex items-center justify-center w-full max-w-[500px] min-h-[320px]`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 px-4 break-words z-10">
              <h2 className="text-center font-bold">EDUCACION UNIVERSITARIA</h2>
              <span className="font-bold">
                Universidad Nacional del Centro del Perú 2018 - 2023
              </span>
              <p>
                Egresado de la carrera de ingeniería de sistemas de la
                universidad ubicada en la ciudad Huancayo, departamento de Junín
              </p>
            </div>
            <img
              src={universidad}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 rounded z-0 "
            />
          </section>
          <section
            className={`${color.text} group relative bg-white/20 overflow-hidden rounded flex items-center justify-center w-full max-w-[500px] min-h-[320px]`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-lg transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 px-4 break-words z-10">
              <h2 className="text-center font-bold">EDUCACION IDIOMAS</h2>
              <span className="font-bold">Centro de Idiomas UNCP 2022</span>
              <p>Culminacion del idioma Ingles a nivel basico</p>
            </div>
            <img
              src={ceid}
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
