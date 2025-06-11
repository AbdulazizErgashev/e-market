import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";
import pages from "../pages/routes";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <nav className="bg-[#819A91] fixed right-0 left-0 top-0 z-50">
      <div className="container mx-auto py-5 px-5 md:px-0 flex items-center justify-between">
        <Link
          to={"/"}
          className="flex items-center gap-2 text-xl md:text-3xl font-bold text-white"
        >
          <img src={Logo} className="w-12" /> e-market
        </Link>

        <ul className="hidden md:flex items-center gap-12 text-xl font-semibold tracking-widest text-white">
          {pages
            .filter((page) => page.showInNav && !page.icon)
            .map(({ name, path }) => (
              <li key={name}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            ))}
        </ul>

        <div className="hidden md:flex items-center gap-5">
          {pages
            .filter((page) => page.icon)
            .map(({ name, path, icon: Icon }) => (
              <div
                key={name}
                className="transition-all duration-300 active:scale-75"
              >
                <Link
                  to={path}
                  className="border-2 py-2 px-5 rounded-lg font-semibold bg-transparent text-white "
                >
                  {name} <Icon />
                </Link>
              </div>
            ))}
        </div>

        <button onClick={handleOpenMenu} className="md:hidden text-white">
          {isOpenMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isOpenMenu && (
        <div className="md:hidden p-5 flex items-center justify-between">
          <ul className="md:hidden space-y-5 font-semibold tracking-widest text-white">
            {pages
              .filter((page) => page.showInNav && !page.icon)
              .map(({ name, path }) => (
                <li key={name}>
                  <NavLink to={path} onClick={handleOpenMenu}>
                    {name}
                  </NavLink>
                </li>
              ))}
          </ul>

          <div className="md:hidden flex flex-col items-end gap-7">
            {pages
              .filter((page) => page.icon)
              .map(({ name, path, icon: Icon }) => (
                <div
                  key={name}
                  className="transition-all duration-300 active:scale-75"
                >
                  <Link
                    to={path}
                    className="border-2 py-2 px-5 rounded-lg font-semibold bg-transparent text-white"
                    onClick={handleOpenMenu}
                  >
                    <Icon />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
}
