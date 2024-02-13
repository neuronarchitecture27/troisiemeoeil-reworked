"use client";

import React, { useEffect, useReducer } from "react";
import Image from "next/image";
import { Editor } from "novel";
import { usePathname } from 'next/navigation';

function Blog({route}) {

  useEffect(()=> {
  console.log(route);

  })
  const [response, setResponse] = useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
      data: [],
      loading: true,
      searchTerm: "",
      page: 0,
    }
  );

  const fetchProjects = async () => {
    setResponse({ loading: true });
   
    const res = await fetch(`/api/blog?id=${route}`, {
      method: "GET",
    });
    const response = await res.json();

    setResponse({
      data: response.data,
      loading: false,
    });
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <section className="pt-4 pb-10 relative z-10">
    {response.loading ? (
      <div
        className="animate-pulse flex space-x-4 mt-12"
      >
        <div className="flex-1 space-y-6 py-1">
          <div className="h-28 w-full bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="h-2 bg-slate-200 rounded"></div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    ) : (
      <>
        <ul className="flex mb-2 gap-3">
          {response.data.tags.map((tag, index) => (
            <li
              className="text-xs text-slate-400 border border-slate-400 px-2 py-1 rounded "
              key={index.toString()}
            >
              {tag}
            </li>
          ))}
        </ul>
   
      </>
    )}
  </section>
  );
}

export default Blog;