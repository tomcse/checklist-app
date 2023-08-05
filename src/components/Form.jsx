import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      addItem({ name: text, completed: false, id: nanoid() });
      toast.success("Item added!");
    } else {
      toast.error("No input.");
    }
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Checklist App</h4>
      <div className="form-control">
        <input
          type="text"
          name="item"
          id="item"
          className="form-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
