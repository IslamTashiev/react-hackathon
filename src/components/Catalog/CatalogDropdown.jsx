import React, { useState } from "react";

const CatalogDropdown = ({ options }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  const renderedOptions = options.map((option) => {
    if (option.id === selected.id) {
      return null;
    }

    return (
      <div
        onClick={() => {
          setSelected(option);
        }}
        key={option.id}
        className="item"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <div
          onClick={handleOpenDropdown}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className={`dropdown icon ${open ? "icon-active" : ""}`}></i>
          <div className="text text-label">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogDropdown;
