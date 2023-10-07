"use client";
import Menu from "@/components/menu/menu";
import Header from "@/components/header/header";
import { useState } from "react";
import PixelBackground from "@/components/pixelBackground";
export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex justify-between">
        <div></div>
        <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
      <div className="justify-center flex flex-1 items-center">
        <Menu menuActive={menuActive} />
      </div>
      <PixelBackground />
      <div></div>
    </div>
  );
}
