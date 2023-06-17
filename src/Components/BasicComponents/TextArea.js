const TextArea = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontSize: "1.2rem",
        color: props.valueNull ? "#c21104" : "black",
        fontWeight: props.valueNull ? "bold" : "normal",
      }}
    >
      <label style={{ padding: 0, margin: 0 }} htmlFor={props.label}>
        {props.placeholder}:
      </label>
      <textarea
        style={{
          width: props.width,
          height: props.height,
          border: "none",
          borderRadius: "5px",
          padding: "0.5rem 0.5rem",
          backgroundColor: props.value === "" ? "#f2e6d5" : "#f5f1eb",
        }}
        id={props.label}
        name={props.label}
        placeholder={
          props.valueNull ? `${props.value}` : `${props.placeholder}...`
        }
        onChange={(e) => {
          props.setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default TextArea;
