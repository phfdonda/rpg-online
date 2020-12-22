import React from "react"
import "./css/Section.css"

function Section(props) {
  const {sectionName} = props

  return (
    <section>
      <h1>{sectionName}</h1>
      {skillSection}
    </section>
  )
}

export default Section
