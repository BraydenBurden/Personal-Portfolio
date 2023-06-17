const TextInput = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: props.width,
        gap: "0.25rem",
      }}
    >
      <label
        style={{
          padding: 0,
          margin: 0,
          fontSize: "1.2rem",
          color: props.valueNull ? "#c21104" : "black",
          fontWeight: props.valueNull ? "bold" : "normal",
        }}
        htmlFor={props.label}
      >
        {props.placeholder}:
      </label>
      <input
        style={{
          width: `${props.inputWidth}`,
          height: `${props.height}`,
          border: "none",
          borderRadius: "5px",
          padding: "0 0.5rem",
          backgroundColor: props.value === "" ? "#f2e6d5" : "#f5f1eb",
          // padding: 0,
          // margin: 0,
        }}
        type={props.type}
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

export default TextInput;
