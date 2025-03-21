import "./App.css";
import Header from "./features/header/Header";
import ModalComponent from "./components/ModalComponent/ModalComponent";

const App = () => {
  return (
    <div className="page-wrap">
      <Header />
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

      {/* Modal Component */}

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
