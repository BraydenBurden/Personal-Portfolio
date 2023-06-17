import { useEffect, useState } from "react";
import About from "./Components/About/About";
import "./App.css";
import Hr from "./Components/BasicComponents/Hr";
import Portfolio from "./Components/Portfolio/Portfolio";
import TopBar from "./Components/TopBar/TopBar";
import Footer from "./Components/BasicComponents/Footer";
import Contact from "./Components/Contact/Contact";
import NavItem from "./Components/TopBar/NavItem";
import resume from "./Resume.pdf";
import WebFont from "webfontloader";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Droid Sans",
          "Chilanka",
          "Roboto Slab",
          "Permanent Marker",
          "Merriweather",
        ],
      },
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 650 && hamburgerMenu === true) {
      console.log("HELLO");
      setHamburgerMenu(false);
    }
  }, [screenWidth, hamburgerMenu]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TopBar
          screenWidth={screenWidth}
          hamburgerMenu={hamburgerMenu}
          setHamburgerMenu={setHamburgerMenu}
        />
        {hamburgerMenu && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              gap: "2rem",
              paddingTop: "3.5rem",
              paddingBottom: "0.8rem",
              backgroundColor: "rgb(211,211,211)",
              width: "20%",
              alignItems: "center",
              right: "0",
              border: "2px black solid",
              borderBottomLeftRadius: "15px",
              borderBottomRightRadius: "15px",
              zIndex: "5",
            }}
          >
            <NavItem itemName="About" />
            <NavItem itemName="Portfolio" />
            <NavItem itemName="Contact" />
            <a
              className="navLink"
              style={{ textDecoration: "none" }}
              download="Resume.pdf"
              href={resume}
            >
              Resume
            </a>
          </div>
        )}
        <About screenWidth={screenWidth} />
        {/* <Hr /> */}
        <Portfolio screenWidth={screenWidth} />
        <Hr />
        <Contact screenWidth={screenWidth} />
        <Footer />
      </div>
    </>
  );
}

export default App;
