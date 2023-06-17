import NavItem from "./NavItem";
import resume from "../../Resume.pdf";
import resumePic from "../../Images/resume.png";
import resumePicWhite from "../../Images/resumeWhite.png";
import hamburger from "../../Images/hamBurgerBlack.png";
import hamburgerWhite from "../../Images/hamBurgerWhite.png";
import ImageToggleOnMouseOver from "../../ImageOnToggleOver";

const Navbar = (props) => {
  const hamburgerClicked = () => {
    console.log("hamburgerClicked");
    console.log(props.hamburgerMenu);
    props.setHamburgerMenu(!props.hamburgerMenu);
  };

  return (
    <>
      {props.screenWidth >= 650 ? (
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
          <NavItem itemName="About" />
          <NavItem itemName="Portfolio" />
          <NavItem itemName="Contact" />
          <a
            style={{ color: "black", textDecoration: "none" }}
            download="Resume.pdf"
            href={resume}
          >
            <ImageToggleOnMouseOver
              primaryImg={resumePic}
              secondaryImg={resumePicWhite}
              alt="resume"
            />
          </a>
        </div>
      ) : (
        <button
          style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }}
          onClick={hamburgerClicked}
        >
          <ImageToggleOnMouseOver
            primaryImg={hamburger}
            secondaryImg={hamburgerWhite}
            alt="hamburger"
          />
        </button>
      )}
    </>
  );
};

export default Navbar;
