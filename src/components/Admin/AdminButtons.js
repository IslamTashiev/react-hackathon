import React from "react";
import { ButtonImg } from "../Buttons/ButtonImg";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete-white.svg";

export const AdminButtons = ({ id }) => {
  return (
    <div className='admin__buttons'>
      <ButtonImg defaultClassName='abs' image={editIcon} />
      <ButtonImg defaultClassName='abs-2' image={deleteIcon} />
    </div>
  );
};
