import { useEffect, useState } from "react";

export default function Abertura_Inicial({ Elemento_Que_Vai_Renderizar }) {
  const [Estado_De_Opacidade, setEstado_De_Opacidade] = useState(true);
  const [Estado_Do_Display, setEstado_Do_Display] = useState(true);

  useEffect(() => {
    setEstado_De_Opacidade(false);
  }, []);

  useEffect(() => {
    if (Estado_De_Opacidade) {
      setTimeout(() => {
        setEstado_Do_Display(false);
      }, 2000);
    }
  }, [Estado_De_Opacidade]);

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: Estado_Do_Display ? "flex" : "none",
        zIndex: 999,
        justifyContent: "center",
        alignItems: "center",
        opacity: Estado_De_Opacidade ? 1 : 0,
        transition: "opacity 2s ease",
        opacity: Estado_De_Opacidade ? 1 : 0,
      }}
    >
      <div>{Elemento_Que_Vai_Renderizar}</div>
    </div>
  );
}
