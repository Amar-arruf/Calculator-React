import { useState } from "react";
import "./toggle.css";
import { Toggle } from "react-triple-toggle";

let initialState = {
  left: true,
  middle: false,
  right: false,
};

const Toggled = () => {
  let [isToggle, setIsToggled] = useState(initialState);

  const handleChange = (e) => {
    switch (e) {
      case "left":
        return setIsToggled({ left: true, middle: false, right: false });
      case "middle":
        return setIsToggled({ left: false, middle: true, right: false });
      case "right":
        return setIsToggled({ left: false, middle: false, right: true });
      default:
        return e;
    }
  };

  return (
    <div className="Container-Toggle">
      <div className="Box-Subtitle">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <Toggle checked={isToggle} onchange={handleChange} />
    </div>
  );
};

export default Toggled;
