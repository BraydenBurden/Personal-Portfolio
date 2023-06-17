import spacePic from "../../Images/SpaceBattle.png";

const SpaceBattle = (props) => {
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
        This was the first game i ever created. I created this game using the
        pygame package in python. It is a 2-player co-op game where each player
        controls a spaceship. The objective is to shoot the other players
        spaceship. When a spaceships health reaches 0, the other player wins.
      </p>
      <img
        style={{ width: "75%", border: "2px solid black" }}
        src={spacePic}
        alt="Space Battle"
      />
    </div>
  );
};

export default SpaceBattle;
