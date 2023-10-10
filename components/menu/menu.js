export default function menu({ menuActive }) {
  return (
    <div className="fixed flex flex-col items-center justify-center h-92 w-full z-10">
      {menuActive && (
        <>
          <p className="text-5xl">Home</p>
          <p className="text-5xl">About</p>
          <p className="text-5xl">Contact</p>
        </>
      )}
    </div>
  );
}
