import React from "react";

const PokemonThumb = ({
  id,
  image,
  name,
  type,
  editMode,
  setActiveStep,
  _callback,
}) => {
  const style = type + " thumb-container";
  return (
    <div className={style}>
      <div style={{ width: "100%" }}>
        {editMode && (
          <button
            style={{ float: "right", marginRight: "10px" }}
            className="button-42"
            onClick={() => setActiveStep(1)}
          >
            Edit
          </button>
        )}
        {/* Edit */}
      </div>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  );
};

export default PokemonThumb;
