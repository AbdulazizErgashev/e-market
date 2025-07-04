import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import pages from "../pages/routes";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleToggleMenu = () => setIsOpenMenu((prev) => !prev);

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenMenu]);

  const isLoginToBeReplaced = (name) => name === "Login" && isAuthenticated;

  const getProfilePage = () => pages.find((p) => p.name === "Profile");

  return (
    <nav className="bg-[#1f2937] fixed inset-x-0 top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-white text-2xl font-bold"
        >
          <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
          ee-market
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-white font-medium text-lg">
            {pages
              .filter((page) => page.showInNav && !page.icon)
              .map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-teal-400 border-b-2 border-teal-400 pb-1"
                        : "hover:text-teal-300 transition"
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
          </ul>

          <div className="flex gap-4">
            {pages
              .filter((page) => page.icon)
              .map(({ name, path, icon: Icon }) => {
                if (isLoginToBeReplaced(name)) {
                  const profile = getProfilePage();
                  return (
                    <Link
                      key={"Profile"}
                      to={profile.path}
                      className="flex items-center gap-1 px-4 py-2 border border-teal-400 text-teal-300 rounded-full hover:bg-teal-500 hover:text-white transition"
                    >
                      Profile <profile.icon />
                    </Link>
                  );
                }

                if (name === "Profile") return null;

                return (
                  <Link
                    key={name}
                    to={path}
                    className="flex items-center gap-1 px-4 py-2 border border-teal-400 text-teal-300 rounded-full hover:bg-teal-500 hover:text-white transition"
                  >
                    {name} <Icon />
                  </Link>
                );
              })}
          </div>
        </div>

        <button
          onClick={handleToggleMenu}
          className="md:hidden text-white text-3xl z-50 relative"
        >
          {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpenMenu && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#1f2937] bg-opacity-95 px-6 pt-24 pb-10 flex flex-col justify-between">
          <button
            onClick={handleToggleMenu}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <CloseIcon />
          </button>

          <ul className="space-y-6 text-white text-xl font-semibold text-center">
            {pages
              .filter((page) => page.showInNav && !page.icon)
              .map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    onClick={handleToggleMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "text-teal-400"
                        : "hover:text-teal-300 transition"
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
          </ul>

          <div className="flex flex-col items-center gap-5">
            {pages
              .filter((page) => page.icon)
              .map(({ name, path, icon: Icon }) => {
                if (isLoginToBeReplaced(name)) {
                  const profile = getProfilePage();
                  return (
                    <Link
                      key={"Profile"}
                      to={profile.path}
                      className="flex items-center gap-1 px-4 py-2 border border-teal-400 text-teal-300 rounded-full hover:bg-teal-500 hover:text-white transition"
                    >
                      <profile.icon /> Profile
                    </Link>
                  );
                }

                if (name === "Profile") return null;

                return (
                  <Link
                    key={name}
                    to={path}
                    onClick={handleToggleMenu}
                    className="flex items-center gap-2 px-6 py-2 border border-teal-400 text-teal-300 rounded-full hover:bg-teal-500 hover:text-white transition"
                  >
                    <Icon /> {name}
                  </Link>
                );
              })}
          </div>
        </div>
      )}
    </nav>
  );
}
