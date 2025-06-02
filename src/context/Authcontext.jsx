import React from "react";
import { useContext, createContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth se debe usar dentro de un AuthProvider");
  }
  return context;
};
const colores = [
  {
    nombre: "⚪",
    color: "bg-conic from-yellow-200 via-red-500 to-fuchsia-500",
    text: "text-fuchsia-900",
  },
  { nombre: "🟠", color: "bg-gradient-to-br from-orange-600 to-yellow-200", text: "text-orange-900" },
  { nombre: "🟢", color: "bg-gradient-to-br from-lime-700 to-lime-200", text: "text-green-900" },
  { nombre: "🟣", color: "bg-gradient-to-br from-purple-600 to-yellow-200", text: "text-purple-900" },
  { nombre: "🔵", color: "bg-gradient-to-br from-cyan-600 to-yellow-200", text: "text-cyan-900" },
  { nombre: "🔴", color: "bg-gradient-to-br from-pink-600 to-yellow-200", text: "text-pink-900" },
];
function Authcontext({ children }) {
  const [color, setColor] = useState(colores[0]);

  return (
    <AuthContext.Provider value={{ color, setColor, colores }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Authcontext;
