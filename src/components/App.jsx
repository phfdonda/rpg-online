import React from 'react'
import SkillSet from "./SkillSet";

function App(){
  const xp = 10
  const skills = {
    Strength: 2,
    Dexterity: 3,
    Constitution: 2
  }
return (
  <SkillSet xp={xp} skillSetMaxPoints="5" skillSetPoints={skills} />
);
}

export default App