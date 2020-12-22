import React, { useState } from "react"
import Skill from "./Skill"
import "./css/SkillSet.css"

function SkillSet(props) {
  const { skillSetPoints, skillSetMaxPoints, skillSetName, xp } = props
  const skillNames = Object.keys(skillSetPoints)

  const [availableXp, setAvailableXp] = useState(xp)

  function setXp(selectedValue) {
    if (selectedValue <= availableXp) {
      setAvailableXp(availableXp - selectedValue)
      return true
    } else {
      alert("not enough xp")
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
    )
  })
  return (
    <div className="skillSet">
      <h2>{skillSetName}</h2>
      {skillSet}
    </div>
  )
}

export default SkillSet
