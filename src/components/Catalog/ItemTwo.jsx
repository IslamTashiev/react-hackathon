import React, { useState } from "react";
import Arrow from "../../assets/images/arrow.svg";
import "rsuite/dist/rsuite.min.css";
import { Checkbox } from "rsuite";

const ItemSeven = () => {
  const [open, setOpen] = useState(null);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="sort-bar__item">
      <div onClick={handleOpenDropdown} className="sort-bar__type">
        <div className="sort-bar__name">Подсветка</div>
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
            Есть <span className="span-checkbox">(78)</span>
          </Checkbox>
          <Checkbox>
            Нет<span className="span-checkbox">(164)</span>
          </Checkbox>
        </div>
      </div>
    </div>
  );
};

export default ItemSeven;
