import { TypeAnimation } from "react-type-animation";

const TypeWriterAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "- from Movies",
        1000, // wait 1s before replacing
        "- from Books",
        1000,
        "- from TV-Series",
        1000,
        "- from Teachers",
        1000,
        "- from Friends",
        1000,
        "- from People Who Inspire You",
        1000,
      ]}
      wrapper="span"
      speed={1}
      style={{ fontSize: "90%", display: "inline-block" }}
      repeat={1}
    />
  );
};

export default TypeWriterAnimation;
