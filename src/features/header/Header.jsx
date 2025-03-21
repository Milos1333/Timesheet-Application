import { useState } from "react";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import "./header.style.css";
import HeaderQuotes from "./components/HeaderQuotes";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      <div className="wrap">
        <span className="btn-icon" onClick={openModal}>
          <img
            className="icon icon-plus js-modal-init"
            src="icons/icon-plus.svg"
            alt="Add New Item"
          />
        </span>
        <HeaderQuotes />
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
      <ModalComponent closeModal={closeModal} isModalOpen={isModalOpen} />
    </header>
  );
};

export default Header;
