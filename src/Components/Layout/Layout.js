import { Outlet } from "react-router-dom";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import Navbar from "../Navbar/Navbar";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <MusicPlayer />
    </>
  );
}

export default Layout;
