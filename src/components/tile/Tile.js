import React from "react";

export const Tile = ({name, description}) => {
  const info = Object.values(description);
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {
        info.map((tile, index) => {
          return <p key={index} className="tile">{tile}</p>
        })
      }
    </div>
  );
};



