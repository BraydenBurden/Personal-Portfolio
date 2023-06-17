import FlappyTentacles from "./FlappyTentacles";
import Kaamvo from "./Kaamvo";
import RPG from "./RPG";
import SpaceBattle from "./SpaceBattle";
import background from "../../Images/portfolioBackground.jpg";

const Portfolio = (props) => {
  return (
    <>
      <div
        id="Portfolio"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            fontSize: "1.2rem",
            padding: props.screenWidth >= 460 ? "1rem 5rem" : "1rem",
            justifyContent:
              props.screenWidth >= 1260 ? "space-between" : "normal",
            backgroundColor: "rgba(161,161,161,0.5)",
            boxShadow:
              "inset 0px 60px 40px -10px #a1a1a1, inset 0px -60px 50px -10px #a1a1a1",
          }}
        >
          <h2 style={{ textDecoration: "underline" }}>Projects</h2>
          <div
            style={{
              display: "flex",
              flexDirection: props.screenWidth >= 1260 ? "row" : "column",
              gap: props.screenWidth >= 1260 ? "0rem" : "1rem",
              justifyContent: "space-between",
              marginBottom: props.screenWidth >= 1260 ? "3rem" : "0",
            }}
          >
            <FlappyTentacles screenWidth={props.screenWidth} />
            <RPG screenWidth={props.screenWidth} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: props.screenWidth >= 1260 ? "row" : "column",
              gap: props.screenWidth >= 1260 ? "0rem" : "1rem",
              justifyContent: "space-between",
            }}
          >
            <SpaceBattle screenWidth={props.screenWidth} />
            <Kaamvo screenWidth={props.screenWidth} />
          </div>
          <p style={{ textAlign: "center", fontStyle: "italic", zIndex: 1 }}>
            *Of course this website is also a showcase of my Web Development
            skills using ReactJS*
          </p>
        </div>
        {/* <h1 style={{ textDecoration: "underline" }}>Portfolio</h1> */}
      </div>
    </>
  );
};

export default Portfolio;
