function Progressbar() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="parcent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  90<span>%</span>
                </h2>
              </div>
            </div>
            <h2 className="text">HTML</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Progressbar;
