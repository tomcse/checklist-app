import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const SingleItem = ({ name, completed, id, removeItem, editItem }) => {
  return (
    <article className="single-item">
      <input
        type="checkbox"
        name="check"
        id="check"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textDecoration: completed && "line-through",
          textTransform: "capitalize",
        }}
      >
        {name}
      </p>
      <button
        type="button"
        className="btn remove-btn"
        onClick={() => removeItem(id)}
      >
        <RiDeleteBin5Line />
      </button>
    </article>
  );
};

export default SingleItem;
