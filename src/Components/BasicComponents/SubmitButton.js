const SubmitButton = (props) => {
  return (
    <input
      className="formButton"
      style={{
        width: "20%",
        height: "2rem",
        alignSelf: "center",
        borderRadius: "10px",
        backgroundColor: "#f2e6d5",
      }}
      type={props.type}
      value={props.value}
    />
  );
};

export default SubmitButton;
