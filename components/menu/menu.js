export default function menu({ menuActive }) {
  return (
    <>
      {menuActive && (
        <div className="justify-center text-center">
          <ul>
            <li className="text-4xl">Home</li>
            <li className="text-4xl">About</li>
            <li className="text-4xl">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
}
