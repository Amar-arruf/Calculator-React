import "./screen.css";

const Screen = (props) => {
  return (
    <div className="box-Container-Screen">
      <p>{props.value}</p>
    </div>
  );
};

export default Screen;
