const Footer = () => {
  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
        fontSize: "0.8rem",
        borderTop: "2px solid black",
        position: "fixed",
        bottom: "0",
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        backgroundColor: "#757575",
        justifyContent: "center",
        padding: "0.15rem",
      }}
    >
      <p style={{ fontStyle: "italic" }}>Brayden Burden - Personal Portfolio</p>
    </div>
  );
};

export default Footer;
