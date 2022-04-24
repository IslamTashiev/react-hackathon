import React, { useState } from "react";
import { Col, InputGroup, InputNumber, RangeSlider, Row } from "rsuite";
import Arrow from "../../assets/images/arrow.svg";
import "rsuite/dist/rsuite.min.css";
import { Button } from "../Buttons/Button";

const ItemOne = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState([30, 50]);

  const handleOpenDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="sort-bar__item">
      <div onClick={handleOpenDropdown} className="sort-bar__type">
        <div className="sort-bar__name">Цена, ₽</div>
        <img
          src={Arrow}
          className={`sort-bar__image ${open ? "sort-bar__image-active" : ""}`}
        />
      </div>
      <div
        className={`sort-bar-input ${open ? "srt-bar-input-dis-active" : ""}`}
      >
        <Row>
          <Col md={8}>
            <InputGroup>
              <InputGroup.Addon>от</InputGroup.Addon>
              <InputNumber
                min={0}
                max={100}
                value={value[0]}
                onChange={(nextValue) => {
                  const [start, end] = value;
                  if (nextValue > end) {
                    return;
                  }
                  setValue([nextValue, end]);
                }}
              />
              <InputGroup.Addon>до</InputGroup.Addon>
              <InputNumber
                min={0}
                max={100}
                value={value[1]}
                onChange={(nextValue) => {
                  const [start, end] = value;
                  if (start > nextValue) {
                    return;
                  }
                  setValue([start, nextValue]);
                }}
              />
            </InputGroup>
          </Col>
          <Col md={10}>
            <RangeSlider
              progress
              style={{ marginTop: 16 }}
              value={value}
              onChange={(value) => {
                setValue(value);
              }}
            />
          </Col>
        </Row>
        <Button defaultClassName="contact__btn" text="Отправить" />
      </div>
    </div>
  );
};

export default ItemOne;
