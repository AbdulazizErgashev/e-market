import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import pages from "../pages/routes";

export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto py-5 flex items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2 text-3xl font-bold">
          <img src={Logo} className="w-12" /> e-market
        </Link>

        <ul className="flex items-center gap-10 text-lg font-semibold tracking-widest">
          {pages
            .filter((page) => page.showInNav && !page.icon)
            .map(({ name, path }) => (
              <li key={name}>
                <NavLink to={path}>{name}</NavLink>
              </li>
            ))}
        </ul>

        <div className="flex items-center gap-5">
          {pages
            .filter((page) => page.icon)
            .map(({ name, path, icon: Icon }) => (
              <div key={name}>
                <Link to={path} className="border-2 py-2 px-5 rounded-lg">
                  {name} <Icon />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
}
