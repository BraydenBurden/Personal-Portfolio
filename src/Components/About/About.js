import braydenPic from "../../Images/BraydenPic.jpg";
import resumePic from "../../Images/resume.png";
import resume from "../../Resume.pdf";
import background from "../../Images/portfolioBackground.jpg";

const About = (props) => {
  return (
    <>
      <div
        id="About"
        style={{
          backgroundImage: `url(${background})`,
          // backgroundImage: `url(${codeBackground})`,
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection:
              props.screenWidth >= 875 ? "row-reverse" : "column-reverse",
            gap: "1rem",
            padding:
              props.screenWidth >= 875
                ? "5rem 5rem 1rem 5rem"
                : "5rem 1rem 1rem 1rem",
            justifyContent: "space-between",
            alignItems: props.screenWidth >= 875 ? "left" : "center",
            backgroundColor: "rgba(161,161,161,0.5)",
            boxShadow:
              "inset 0px 60px 40px -10px #a1a1a1, inset 0px -60px 40px -10px #a1a1a1",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: props.screenWidth >= 875 ? "70%" : "90%",
              fontSize: "1.2rem",
              backgroundColor: "rgba(117,117,117,0.8)",
              padding: "1rem",
              border: "1px solid #636363",
              borderRadius: "15px",
            }}
          >
            {/* <h1 style={{ textDecoration: "underline" }}>About</h1> */}
            <p style={{ textIndent: "5%" }}>
              Hello, I'm Brayden Burden, a passionate software development
              student specializing in web and game development. Currently in my
              second year at "The College of the North Atlantic," I'm dedicated
              to expanding my knowledge and skills in this ever-evolving field.
            </p>
            <p style={{ textIndent: "5%" }}>
              With expertise in web development using the React framework, I
              thrive on problem-solving and the satisfaction of finding
              solutions. I'm always eager to take on challenging projects that
              push my boundaries.
            </p>
            <p style={{ textIndent: "5%" }}>
              During my work terms, I collaborated with high school students to
              develop a tourist website for the town of Pasadena, showcasing its
              attractions and activities. I also played a pivotal role in
              building a React-based website that facilitated the trade of
              services for monetary compensation at "Steady Innovation Inc."
            </p>
            <p style={{ textIndent: "5%" }}>
              Outside of coding, you'll find me immersed in the world of gaming
              or spending quality time with my family. I believe in the power of
              collaboration, attention to detail, and creating user-centric
              experiences.
            </p>
            <p style={{ textIndent: "5%" }}>
              If you have inquiries, collaboration opportunities, or exciting
              projects, I'm eager to connect with you. Feel free to reach out
              using the contact form on my website, and I'll respond promptly.
            </p>
            <p style={{ zIndex: 1 }}>
              Looking for my resume? Download it by clicking this icon "
              <a
                style={{ color: "black", textDecoration: "none" }}
                download="Resume.pdf"
                href={resume}
              >
                <img
                  style={{ height: "1.2rem", width: "fit-content" }}
                  src={resumePic}
                  alt="resume"
                />
              </a>
              ".
            </p>
          </div>
          <img
            style={{
              width: props.screenWidth >= 875 ? "20%" : "50%",
              height: "fit-content",
              alignSelf: "center",
              border: "2px solid black",
            }}
            src={braydenPic}
            alt="Brayden Burden"
          ></img>
        </div>
      </div>
    </>
  );
};

export default About;
