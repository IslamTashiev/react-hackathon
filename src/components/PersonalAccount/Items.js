import React from "react";

const Items = ({ items }) => {
  const itemsAccount = items.map((item) => {
    return (
      <div className="account-list">
        <ul>
          <li>{item.content}</li>
        </ul>
      </div>
    );
  });

  return <>{itemsAccount}</>;
};

export default Items;
