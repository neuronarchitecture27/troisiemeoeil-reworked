'use client'
import React from "react";
import Link from "next/link";

function Postdiv({title}) {

  return (
    <div>
      <Link
        href="#"
        className="hover:bg-neutral-950 p-2 hover:rounded-2xl"
      >
        <h1 className="font-InterBold text-2xl  text-neutral-300 my-2">
          {title}
        </h1>
        <div className="text-neutral-500 flex gap-x-3">
          <img
            className="w-7 h-7 rounded-full object-cover"
            src="./images/troisiemeoeillogo.png"
            alt=""
          />
          <p className="text-neutral-500 text-sm font-InterRegular">
            25/08/21 • Troiseieme Oeil
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Postdiv;