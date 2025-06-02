import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiBriefcase2Fill } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi";
import { useRef, useEffect } from "react";
import { useAuth } from "../context/Authcontext";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef(null);

  const { colores, setColor } = useAuth();

  const links = [
    { to: "/proyectos", label: "Proyectos" },
  
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={sidebarRef} onMouseLeave={() => setOpen(false)}>
      <aside
        className={`fixed z-30 p-6 rounded-b-lg shadow-lg w-full top-0 left-0 flex items-center justify-between font-bold font-serif italic text-2xl text-white backdrop-blur-md bg-white/20 transition-all duration-100 select-none`}
      >
        <section className="flex ">
          <Link to={"/"}>
            <RiBriefcase2Fill className="cursor-pointer text-4xl hover:p-1 hover:text-gray-400 transition-all duration-300 mr-4" />
          </Link>
          {colores.map((col, index) => (
            <button
              key={index}
              className={`font-semibold hover:brightness-110 transition-all duration-300 not-italic cursor-pointer`}
              onClick={() => setColor(col)}
            >
              {col.nombre}
            </button>
          ))}
        </section>

        <nav className="hidden md:flex gap-6 font-bold font-serif transition-all duration-300">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:shadow-lg hover:shadow-white/70 p-2 hover:text-gray-400 rounded-xl transition-all duration-300 `}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? (
            <FiX className="cursor-pointer hover:text-gray-300 hover:p-1 transition-all duration-300" />
          ) : (
            <FiMenu className="cursor-pointer hover:text-gray-300 hover:p-1 transition-all duration-300" />
          )}
        </button>
      </aside>
      {open && (
        <nav className="fixed top-20 left-0 w-full bg-white/20 backdrop-blur-md text-white flex flex-col gap-4 p-8 font-bold font-serif italic md:hidden z-40 shadow-lg animate-slide-down">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-gray-300 transition-all duration-300 hover:rounded-xl justify-end flex hover:text-xl"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Sidebar;
