import React from "react"
import CharacteristicsForm from "./CharacteristicsForm"
import SkillSection from "./SkillSection"

function App() {
  const data = {
    Main: {
      Name: "",
      Nature: "",
      Life: "",
      Player: "",
      Demeanor: "",
      Death: "",
      Chronicle: "",
      Shadow: "",
      Regret: "",
    },
    skillSectionSets: {
      Attributes: {
        Physical: {
          Strength: 1,
          Dexterity: 1,
          Stamina: 1,
        },
        Social: {
          Charisma: 1,
          Manipulation: 1,
          Appearance: 1,
        },
        Mental: {
          Perception: 1,
          Intelligence: 1,
          Wits: 1,
        },
      },
    },
    xp: 120,
  }

  return (
    <main className="app">
      <CharacteristicsForm data={data} />
      {/* <SkillSection data={data} /> */}
    </main>
  )
}

export default App
