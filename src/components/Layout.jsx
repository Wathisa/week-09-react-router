import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="=min-h-screen bg-gray-100 flex flex-col">
      <div className="bg-amber-500"> Navbar</div>

      <div className="bg-cyan-800">
        <Outlet />
      </div>
    </div>
  );
}
