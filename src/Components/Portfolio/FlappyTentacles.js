import flappyTentacles from "../../Images/FlappyTentacles.mp4";

const FlappyTentacles = (props) => {
  return (
    <div
      style={{
        // boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        backgroundColor: "rgba(117,117,117,0.8)",
        width: props.screenWidth >= 1260 ? "45%" : "fit-content",
        height: props.screenWidth >= 1260 ? "30rem" : "fit-content",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        padding: "1rem",
        border: "1px solid #636363",
        borderRadius: "15px",
      }}
    >
      <p>
        I built this simple recreation of "Flappy Bird" that I call "Flappy
        Tentacles". You control a pink octopus that is trying to navigate its
        way through the ocean. Avoiding spikes to reach a new high score. I plan
        to keep working on this game and take on many more personal projects
        using unity.
      </p>
      <video width="75%" style={{ border: "2px solid black" }} controls>
        <source src={flappyTentacles} type="video/mp4"></source>
        Your browser down not support HTML video
      </video>
    </div>
  );
};

export default FlappyTentacles;
