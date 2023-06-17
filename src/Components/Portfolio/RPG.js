import RPGPic from "../../Images/RPG.png";

const RPG = (props) => {
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
        I started building this RPG game using pygame back in my first semester
        of college. It was a great learning experience to make a small
        unfinished game like this. In the game your player must go through the
        level and defeat the enemies. I decided not to continue progress on this
        game as I would rather use an engine such as Unity.
      </p>
      <img
        style={{ width: "75%", border: "2px solid black" }}
        src={RPGPic}
        alt="RPG"
      />
    </div>
  );
};

export default RPG;
