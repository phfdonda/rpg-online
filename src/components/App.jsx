import React from 'react'
import SkillSet from "./SkillSet";

function App(){
  const xp = 10
  const skills = {
    Strength: 0,
    Dexterity: 0,
    Constitution: 0
  }
return (
  <SkillSet xp={xp} skillSetMaxPoints="5" skillSetPoints={skills} />
);
}

export default App