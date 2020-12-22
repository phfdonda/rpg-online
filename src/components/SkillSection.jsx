import React from "react";
import SkillSet from "./SkillSet";
import "./css/SkillSection.css";

function SkillSection(props) {
  const { xp, skillSectionSets, skillSectionName } = props.data;
  const sectionSets = Object.keys(skillSectionSets);

  const skillSection = sectionSets.map((skillSetName) => {
    return (
        <SkillSet
          xp={xp}
          skillSetName={skillSetName}
          skillSetMaxPoints={5}
          skillSetPoints={skillSectionSets[skillSetName]}
        />
    );
  });
  return (
    <section className="skillSection">
      <h1>{skillSectionName}</h1>
      {skillSection}
    </section>
  );
}

export default SkillSection;
