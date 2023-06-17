import Navbar from "./Navbar";

const TopBar = (props) => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset, rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 20px 10px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        fontSize: "1.2rem",
        borderBottom: "2px solid black",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem 3rem",
        width: "100%",
        backgroundColor: "#757575",
        position: "fixed",
        zIndex: "10",
      }}
    >
      <h1 id="topBarHeader" style={{ fontSize: "1.5rem", color: "#fcb856" }}>
        Brayden Burden
      </h1>
      <Navbar
        hamburgerMenu={props.hamburgerMenu}
        setHamburgerMenu={props.setHamburgerMenu}
        screenWidth={props.screenWidth}
      />
    </div>
  );
};

export default TopBar;
