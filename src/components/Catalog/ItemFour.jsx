import React, { useState } from "react";
import Arrow from "../../assets/images/arrow.svg";
import "rsuite/dist/rsuite.min.css";
import { Checkbox } from "rsuite";

const ItemFour = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="sort-bar__item">
      <div onClick={handleOpenDropdown} className="sort-bar__type">
        <div className="sort-bar__name">Максимальная скорость (км/ч)</div>
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
            45 <span className="span-checkbox">(2)</span>
          </Checkbox>
          <Checkbox>
            32<span className="span-checkbox">(10)</span>
          </Checkbox>
          <Checkbox>
            30<span className="span-checkbox">(4)</span>
          </Checkbox>
          <Checkbox>
            28<span className="span-checkbox">(3)</span>
          </Checkbox>
          <Checkbox>
            25<span className="span-checkbox">(2)</span>
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default ItemFour;
