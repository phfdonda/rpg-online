import React, { useState } from "react";
import Selector from "./Selector";
import { mapState, renderPoints } from "../utils/gradeHelper";
import "./css/Grade.css";

function Grade(props) {
  const { maxPoints, assignedPoints, assignPoint } = props;
  const emptyPoints = maxPoints - assignedPoints;
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  function handleHover(id) {
    setHovered(id);
  }

  function handleClick(id) {
    const diff = id - selected;
    if(diff === 0){
      if(assignPoint(-selected)){
        setSelected(0);
      }else{
        alert('Error returning XP')
      }
    }else {
      if(assignPoint(diff)){
        setSelected(id);
      }else{
        alert("Error assigning XP");
      }
    }

  }
  function renderGrade() {
    const grade = [];
    for (let id = 1; id <= emptyPoints; id++) {
      grade.push(
        <Selector
          state={mapState(id, selected, hovered)}
          id={id}
          color="black"
          handleHover={handleHover}
          handleClick={handleClick}
          reRender={renderGrade}
        />
      );
    }
    return grade;
  }

  return (
    <div className="grade">
      {renderPoints(assignedPoints)}
      {renderGrade()}
    </div>
  );
}

export default Grade;
