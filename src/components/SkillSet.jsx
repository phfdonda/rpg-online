import React, {useState} from "react";
import Skill from "./Skill";

function SkillSet(props) {
  const { skillSetPoints, skillSetMaxPoints, xp } = props;
  const skillNames = Object.keys(skillSetPoints);

  const [availableXp, setAvailableXp] = useState(xp)

  function setXp(selectedValue){
    alert('available XP is '+ availableXp)
    alert('selected value is '+ selectedValue)
    if(selectedValue <= availableXp){
      setAvailableXp( availableXp - selectedValue)
      return true
    }else{
      alert('not enough xp')
      return false
    }
  }

  const skillSet = skillNames.map((skillName) => {

    return (
      <Skill
        assignPoint={setXp}
        skillName={skillName}
        maxPoints={skillSetMaxPoints}
        assignedPoints={skillSetPoints[skillName]}
      />
    );
  });
  return skillSet;
}

export default SkillSet;
