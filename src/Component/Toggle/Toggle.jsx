import { Toggle } from "react-triple-toggle";
import "./toggle.css";

const Toggled = ({ Checked, onchange }) => {
  return (
    <div className="Container-Toggle">
      <div className="Box-Subtitle">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <Toggle checked={Checked} onChange={onchange} />
    </div>
  );
};

export default Toggled;
