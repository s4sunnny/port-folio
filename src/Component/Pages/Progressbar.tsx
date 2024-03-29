interface Props {
  skillName: string;
  circlePercent: string;
  color: string;
  textSize: string;
}

const Progressbar = (props: Props) => {
  const strokeSize = "calc(440 - (440 * " + props.circlePercent + ") / 100)";
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="parcent">
              <svg>
                <circle cx="50" cy="50" r="50"></circle>
                <circle
                  style={{
                    strokeDashoffset: strokeSize,
                    stroke: props.color,
                  }}
                  cx="50"
                  cy="50"
                  r="50"
                ></circle>
              </svg>
              <div className="number">
                <h2 className="text">{props.skillName}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progressbar;
