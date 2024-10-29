import NavLink from "../NavLink/NavLink";
import { RxCross2 } from "react-icons/rx";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
const NavBar = () => {
    const [open, setOpen]= useState(false)
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
    <div>
      <div onClick={()=>setOpen(!open)} className="md:hidden text-2xl">
        {
open ?   <RxCross2></RxCross2> :  <RiMenu2Line></RiMenu2Line>
        }
        
      
      </div>

      <ul className="md:flex">
        {routes.map((route) => (
          <NavLink key={route.id} route={route}></NavLink>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
