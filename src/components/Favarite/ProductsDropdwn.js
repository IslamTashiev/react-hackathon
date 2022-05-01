import React, { useState } from "react";

const Dropdwn = ({ text, allProducts }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeItem, setActiveItem] = useState([0]);

  const handleChangeI = (id) => {};

  const openDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const renredeProducts = allProducts.map((item) => {
    return (
      <>
        <p
          onClick={() => setShowDropdown(allProducts)}
          className="dropdown-description"
        >
          {item.title}
        </p>
      </>
    );
  });

  return (
    <div className="favarite-dropdown">
      <div onClick={openDropdown} className="dropdown-title">
        <h4>{text}</h4>
        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.79171 9.68907C6.6337 9.85749 6.3663 9.85749 6.20829 9.68907L1.50288 4.67368C1.26324 4.41825 1.44435 4 1.7946 4L11.2054 4C11.5557 4 11.7368 4.41825 11.4971 4.67368L6.79171 9.68907Z"
            fill="#070C11"
          />
        </svg>
      </div>
      {showDropdown ? (
        <div className="dropdown-item">{renredeProducts}</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dropdwn;