const NavItem = (props) => {
  return (
    <a
      className="navLink"
      style={{ textDecoration: "none" }}
      href={`#${props.itemName}`}
    >
      {props.itemName}
    </a>
  );
};

export default NavItem;
