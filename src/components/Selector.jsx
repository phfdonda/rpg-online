import React from "react";
import "./css/Selector.css";

function Selector(props) {
  const { color, state, id, handleHover, handleClick, reRender, isPoint } = props;

  const mapSelector = {
    filled: "40%",
    selected: "25%",
    hovered: "15%",
    empty: 0,
  };

  function mouseOn() {
    handleHover(id);
    reRender();
  }
  function mouseOut() {
    handleHover(0);
    reRender();
  }
  function sendSelected() {
    handleClick(id);
    reRender();
  }

  return (
    <svg
      onMouseUp={!isPoint && sendSelected}
      onMouseOver={!isPoint && mouseOn}
      onMouseOut={!isPoint && mouseOut}
    >
      <circle
        r="40%"
        cy="50%"
        cx="50%"
        fill={color}
        stroke={color}
        strokeWidth="5%"
        fillOpacity="0"
      />
      <circle r={mapSelector[state]} cx="50%" cy="50%" />
    </svg>
  );
}

export default Selector;
