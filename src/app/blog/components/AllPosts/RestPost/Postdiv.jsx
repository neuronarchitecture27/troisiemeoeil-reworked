'use client'
import React from "react";
import Link from "next/link";

function Postdiv({title, authorName, blogDate, link}) {

  return (
    <div>
      <Link
        href={link}
        className=" p-2 "
      >
        <h1 className="font-InterBold text-2xl capitalize  text-neutral-300 my-2">
          {title}
        </h1>
        <div className="text-neutral-500 flex  w-full items-center ">
       <div className="flex items-center gap-x-3 ">
       <img
            className="w-7 h-7 rounded-full object-cover"
            src="./images/troisiemeoeillogo.png"
            alt="troisieme oeil logo"
          />
          <p className="text-neutral-500 text-sm font-InterRegular">
             {authorName} | {blogDate}
          </p>
       </div>
        </div>
      </Link>
    </div>
  );
}

export default Postdiv;