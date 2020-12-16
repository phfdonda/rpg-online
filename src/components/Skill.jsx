import React from "react";
import Grade from "./Grade";
import "./css/Skill.css";

function Skill(props) {
  const { skillName, maxPoints, assignedPoints, assignPoint } = props;

  return (
    <div className="skill">
      <h3>{skillName}</h3>
      <Grade assignPoint={assignPoint} maxPoints={maxPoints} assignedPoints={assignedPoints} />
    </div>
  );
}

export default Skill;
