import React, { useState } from "react";
import arrowIcon from "../../assets/images/arrow-down.svg";

export const FormDropDown = () => {
  const [showDropdownList, setShowDropdownList] = useState(false);
  const [activeItem, setActiveItem] = useState(1);

  const dropdownItems = [
    {
      title: "Сигвеи",
      id: 1,
    },
    {
      title: "Самокаты",
      id: 2,
    },
    {
      title: "Смарт часы",
      id: 3,
    },
    {
      title: "Катерогия",
      id: 4,
    },
  ];

  const renderDropdownItms = dropdownItems.map((item) => (
    <li
      key={item.id}
      onClick={() => handleActiveItem(item.id)}
      className={`list__item ${activeItem === item.id ? "active" : ""}`}>
      {item.title}
    </li>
  ));

  const handleShowDropdown = () => {
    setShowDropdownList(!showDropdownList);
  };
  const handleActiveItem = (id) => {
    setActiveItem(id);
    handleShowDropdown();
  };

  return (
    <div className='create__input dropdown'>
      <label className='input__label'>Выберите категорию</label>
      <div onClick={handleShowDropdown} className='input__dropdown'>
        {dropdownItems[activeItem - 1].title}
        <img src={arrowIcon} />
      </div>
      <div className={`dropdown__list ${showDropdownList ? "active" : ""}`}>
        <ul>{renderDropdownItms}</ul>
      </div>
    </div>
  );
};
