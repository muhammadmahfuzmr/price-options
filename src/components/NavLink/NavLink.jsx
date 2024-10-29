const NavLink = ({ route }) => {
  return (
    <li className="mr-6 hover:bg-lime-600 p-1 rounded-xl">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default NavLink;
