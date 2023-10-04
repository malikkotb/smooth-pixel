import Menu from "@/components/menu/menu";
import Header from "@/components/header/header";
export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between">
        <div></div>
        <Menu />
      </div>
      <div className="flex justify-center items-center h-screen">
        <Header />
      </div>
    </div>
  );
}
