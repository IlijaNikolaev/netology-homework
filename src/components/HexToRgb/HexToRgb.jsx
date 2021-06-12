import hexRgb from 'hex-rgb';
import {useState} from "react";

import './index.css'

const HexToRgb = () => {
  const hexColorRegex = require('hex-color-regex')
  let [colorState, setColorState] = useState('#c6c6c6')
  let [rgbState, setRgbState] = useState('rgb(198, 198, 198)')

  const onColorChange = (event) => {
    let hexColor = event.target.value;
    setColorState(hexColor)
    if (hexColor.length === 7) {
      setRgbState(
        hexColorRegex().test(hexColor) ?
          hexRgb(hexColor, {format: 'css'}) : 'Ошибка'
      )
    }
  }

  return (
    <div className="hex-to-rgb" style={{background: rgbState}}>
      <input className="hex-to-rgb__input" type="text" value={colorState} onChange={onColorChange} maxLength={7}/>
      <p className="hex-to-rgb__error">{rgbState}</p>
    </div>
  )
}

export default HexToRgb