import { createContext, useContext, useState } from "react";

const Context = createContext();

export const usePlay = () => {

  const context = useContext(Context);
console.log(context);
  if (context === undefined) {
    throw new Error("usePlay must be used within a PlayProvider");
  }

  return context;
};

export const PlayProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [end, setEnd] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  return (
    <Context.Provider
      value={{
        play,
        setPlay,
        end,
        setEnd,
        hasScroll,
        setHasScroll,
      }}
    >
      {children}
    </Context.Provider>
  );
};


