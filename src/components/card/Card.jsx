import React, { useState } from "react";
import "./card.css";
import PropTypes from "prop-types";
import a from "./a.jpg";

const Cards = ({ id, cost, name, phoneNumber, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDebt, setEditedDebt] = useState({ name, phoneNumber, cost });

  const handleChange = (e) => {
    setEditedDebt({ ...editedDebt, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit(id, editedDebt);
    setIsEditing(false);
  };

  return (
    <div className="cards">
      <div className="cards_1">
        <div className="imges">
          <img className="a_img" src={a} alt="No img?" />
        </div>
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={editedDebt.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              value={editedDebt.phoneNumber}
              onChange={handleChange}
            />
            <input
              type="number"
              name="cost"
              value={editedDebt.cost}
              onChange={handleChange}
            />
            <button className="save_btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel_btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <h2>
              Name: <span className="PhoneNumber">{name}</span>
            </h2>
            <h5 className="mt-3">
              Phone Number: <span>{phoneNumber}</span>
            </h5>
            <div className="h6 mt-3">
              Debt: <h6 className="text-danger">$ {cost}</h6>
            </div>
            <button className="Edit_btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete_btn mx-3" onClick={() => onDelete(id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Cards.propTypes = {
  id: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Cards;
