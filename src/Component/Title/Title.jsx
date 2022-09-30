import Toggled from "../Toggle/Toggle";
import "./title.css";

const Title = () => {
  return (
    <div className="box-Container">
      <p>calc</p>
      <div className="box-Tuggle">
        <p>theme</p>
        <Toggled />
      </div>
    </div>
  );
};

export default Title;
