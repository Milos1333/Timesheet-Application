import "./App.css";

const App = () => {
  return (
    <div className="page-wrap">
      {/* header */}
      <header className="header">
        <div className="wrap">
          <span className="btn-icon">
            <img
              className="icon icon-plus js-modal-init"
              src="icons/icon-plus.svg"
              alt="Add New Item"
            />
          </span>
          <div className="header-blockquote">
            <h1 className="header-quote">
              Happiness is good health and a bad memory
            </h1>
            <div className="header-cite">- Ingrid Bergman</div>
          </div>
        </div>
        <div className="header-inner">
          <div className="wrap">
            <img className="logo" src="images/vegait-logo.svg" alt="VegaIT" />
            <div className="date-wrap">
              <img
                className="icon"
                src="icons/icon-calendar.svg"
                alt="Calendar"
              />
              <time>02 / 08 / 2019</time>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="wrap">
          {/* item */}
          <div className="item-row">
            <div className="check-flag">
              <span className="small-text-label">Title</span>
              <span className="small-text-label hours">Hours</span>
              <span className="check-flag-label">
                Ticket system integration
              </span>
              <span className="hours-box" />
            </div>
          </div>
          {/* item */}
          <div className="item-row">
            <div className="check-flag">
              <span className="small-text-label">Title</span>
              <span className="small-text-label hours">Hours</span>
              <span className="check-flag-label">
                Integration with Google Maps API
              </span>
              <span className="hours-box" />
            </div>
          </div>
          {/* item */}
          <div className="item-row">
            <div className="check-flag">
              <span className="small-text-label">Title</span>
              <span className="small-text-label hours">Hours</span>
              <span className="check-flag-label">Prepare test cases</span>
              <span className="hours-box" />
            </div>
          </div>
          <div className="total align-right">
            <label htmlFor className="total-label">
              Total:
            </label>
            <input className="total-input" type="text" defaultValue readOnly />
          </div>
        </div>
      </main>
      {/* modal window */}
      <div className="modal-wrap js-modal">
        <div className="modal js-modal-inner">
          <h2>Create a task:</h2>
          <form action>
            <div className="field-wrap">
              <label className="label" htmlFor>
                Title:
              </label>
              <input
                className="field"
                type="text"
                id
                placeholder="Enter title here..."
              />
            </div>
            <div className="field-wrap">
              <label className="label" htmlFor>
                Hours:
              </label>
              <input
                className="field"
                type="text"
                id
                placeholder="Add hours here..."
              />
            </div>
            <div className="btn-wrap align-right">
              <input className="btn" type="submit" defaultValue="Create" />
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <footer className="footer">
        <div className="wrap">
          <span className="copy">© 2019 Vega IT Sourcing</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
