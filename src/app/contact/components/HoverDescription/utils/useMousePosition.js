import { useState, useEffect } from "react";
let x,y;
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x, y });

  const updateMousePosition = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;