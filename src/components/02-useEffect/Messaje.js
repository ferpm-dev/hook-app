import React, { useEffect, useState } from "react";

export const Messaje = () => {
  const [coords, setCoords] = useState({x:0, y:0})
  const {x, y} = coords;

  useEffect(() => {

  const mouseMove = (e) => {
    const coords = {x: e.x, y: e.y}
    setCoords(coords)
    console.log(' :D ')

  }

    window.addEventListener('mousemove', mouseMove)



    // console.log("componente montado");
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      // console.log("componente desmontado");
    };
  }, []);

  return (
    <>
    <h1>x:{x} y:{y}</h1>
      <hr className="mt-4" />
      <h3>sos un capo</h3>
    </>
  );
};
