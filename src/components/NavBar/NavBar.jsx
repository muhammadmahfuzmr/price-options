import NavLink from "../NavLink/NavLink";
import { RxCross2 } from "react-icons/rx";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    {
      id: 1,
      path: "/home",
      name: "Home",
    },
    {
      id: 2,
      path: "/about",
      name: "About",
    },
    {
      id: 3,
      path: "/services",
      name: "Services",
    },
    {
      id: 4,
      path: "/contact",
      name: "Contact",
    },
    {
      id: 5,
      path: "/faq",
      name: "FAQ",
    },
  ];

  return (
    <nav className="p-2 text-white font-semibold bg-yellow-800">
      <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
        {open === true ? <RxCross2></RxCross2> : <RiMenu2Line></RiMenu2Line>}
      </div>

      <ul className={`md:flex bg-yellow-800 rounded-xl p-2 md:static absolute ${open ? 'top-11' : '-top-60'}`}>
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
