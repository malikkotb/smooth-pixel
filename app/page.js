"use client";
import Menu from "@/components/menu/menu";
import Header from "@/components/header/header";
import { useState } from "react";
import PixelBackground from "@/components/pixelBackground/pixelBackground";
export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <main className="flex justify-between items-center">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu
        className="justify-center flex flex-1 items-center"
        menuActive={menuActive}
      />
      <PixelBackground />
    </main>
  );
}
