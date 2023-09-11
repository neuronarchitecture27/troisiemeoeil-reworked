'use client';
import "./index.css";
import Scene from './Scene';
import { PlayProvider } from './contexts/Play';
export default function Index() {


  return (
    
    <PlayProvider>
      <Scene />
    </PlayProvider>
  )
}
