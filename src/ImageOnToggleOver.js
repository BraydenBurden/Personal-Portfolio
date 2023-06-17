import { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <img
      style={{ height: "1rem", width: "fit-content" }}
      onMouseOver={() => {
        imageRef.current.src = secondaryImg;
      }}
      onMouseOut={() => {
        imageRef.current.src = primaryImg;
      }}
      src={primaryImg}
      alt=""
      ref={imageRef}
    />
  );
};

export default ImageToggleOnMouseOver;
