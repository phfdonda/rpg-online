import React, {useState} from "react";
import Selector from "./Selector";
import './css/Grade.css'

function Grade(props) {
  const {maxPoints, assignedPoints} =  props
  const emptyPoints = maxPoints - assignedPoints
  const [hovered, setHovered] = useState(0)
  const [selected, setSelected] = useState(0)

  function handleHover(id){
    setHovered(id)
  }
  function handleClick(id){
    if(selected === id){
      setSelected(0)
    }else{
      setSelected(id)
    }
  }
  function mapState(index, selected, hovered){
    if(index <= selected) return "selected"
    if(index<= hovered) return 'hovered'

    return 'empty'
  }
  function renderPoints(){
    const points = [];
    for (let id = 1; id <= assignedPoints; id++) {
      points.push(
        <Selector
          state="filled"
          id={id}
          color="black"
        />
      );
    }
    return points;
  }
  function renderGrade(){
    const grade = []
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
    return grade
  }
  return (
    <div className="grade">
      {renderPoints()}
      {renderGrade()}
    </div>
  );
}

export default Grade;
