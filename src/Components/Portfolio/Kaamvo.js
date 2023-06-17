import KaamvoPic from "../../Images/Kaamvo.png";

const Kaamvo = (props) => {
  return (
    <div
      style={{
        // boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        backgroundColor: "rgba(117,117,117,0.8)",
        width: props.screenWidth >= 1260 ? "45%" : "fit-content",
        height: props.screenWidth >= 1260 ? "30rem" : "fit-content",
        textAlign: "center",
        display: "flex",
        flexDirection: props.screenWidth >= 1260 ? "column-reverse" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "1rem",
        border: "1px solid #636363",
        borderRadius: "15px",
      }}
    >
      <p>
        This is the website that i worked on during my last work term. The
        service exchanging website. I cannot give out much details as of right
        now, but here is a screenshot of what a clients profile page might look
        like.
      </p>
      <img
        style={{
          width: "75%",
          height: "fit-content",
          border: "2px solid black",
        }}
        src={KaamvoPic}
        alt="Kaamvo"
      />
    </div>
  );
};

export default Kaamvo;
