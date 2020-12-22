import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import './css/CharacteristicsForm.css'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}))

function CharacteristicsForm(props) {
  const { Main } = props.data
  const classes = useStyles()
  const [characteristics, setCharacteristics] = useState({Main})

  function handleChange(event){
    const {name, value} = event.target
    setCharacteristics(prev => {return {...prev, [name]:value}})
  }

  function returnSection(object) {
    const keyArray = Object.keys(object)
    return keyArray.map((label) => {
      return (
        <TextField id="standard-basic" onChange={handleChange} value={characteristics[label]} name={label} label={label} />
      )
    })
  }

  const [main] = [returnSection(Main)]

  return (
    <div className="characteristics">
      {main}
    </div>
  )
}

export default CharacteristicsForm