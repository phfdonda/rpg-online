import React from 'react'
import Selector from '../components/Selector'

function mapState(index, selected, hovered) {
    if (index <= selected) return "selected";
    if (index <= hovered) return "hovered";

    return "empty";
  }

  function renderPoints(assignedPoints) {
    const points = [];
    for (let id = 1; id <= assignedPoints; id++) {
      points.push(
        <Selector isPoint={true} state="filled" id={id} color="black" />
      );
    }
    return points;
  }

export { mapState, renderPoints };