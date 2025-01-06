import { useState } from "react"

import { Hearder } from "./header"
import { MenuIcons } from "./menuIcons"
import { MenuFolder } from "./menuFolder"

import './App.css'
import { CodeField } from "./codeField"

export type handleChangeLocationType = () => void

function App() {

  const [actualLocation, setActualLocation] = useState<string[]>(["Home"])

  function handleChangeLocation(newLocation:string[]) {
    setActualLocation(newLocation)
  }

  return (
    <>
      <div className="container">
        <div className="header">
          <Hearder />
        </div>
        <div className="content">
            <MenuIcons />
            <MenuFolder handleChangeLocation={handleChangeLocation} />
            <CodeField actualLocation={actualLocation} />
        </div>
      </div>
    </>
  )
}

export default App
