import React, { useState } from "react";
import Arrow from "../../assets/images/arrow.svg";
import "rsuite/dist/rsuite.min.css";
import { Checkbox } from "rsuite";

const ItemThree = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="sort-bar__item">
      <div onClick={handleOpenDropdown} className="sort-bar__type">
        <div className="sort-bar__name">Мощность двигателя (Ватт)</div>
        <img
          src={Arrow}
          className={`sort-bar__image ${open ? "sort-bar__image-active" : ""}`}
        />
      </div>
      <div
        className={`sort-bar-input ${open ? "srt-bar-input-dis-active" : ""}`}
      >
        <div className="checkboxes">
          <Checkbox>
            2100 <span className="span-checkbox">(2)</span>
          </Checkbox>
          <Checkbox>
            500<span className="span-checkbox">(10)</span>
          </Checkbox>
          <Checkbox>
            350<span className="span-checkbox">(4)</span>
          </Checkbox>
          <Checkbox>
            300<span className="span-checkbox">(3)</span>
          </Checkbox>
          <Checkbox>
            250<span className="span-checkbox">(2)</span>
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default ItemThree;
