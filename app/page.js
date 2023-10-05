"use client";
import Menu from "@/components/menu/menu";
import Header from "@/components/header/header";
import { useState } from "react";
export default function Home() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between">
        <div></div>
        <Header menuActive={menuActive} setMenuActive={setMenuActive} />
      </div>
      <div className=" justify-center align-middle">
        <Menu menuActive={menuActive} />
      </div>
    </div>
  );
}
