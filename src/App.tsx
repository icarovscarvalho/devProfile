import { LocationContextProvider } from "./contexts/location"

import { Hearder } from "./header"
import { MenuIcons } from "./menuIcons"
import { MenuFolder } from "./menuFolder"
import { CodeField } from "./codeField"

import './App.css'

export type handleChangeLocationType = () => void

function App() {

  return (
    <>
      <div className="container">
        <div className="header">
          <Hearder />
        </div>
        <div className="content">
            <MenuIcons />
            <LocationContextProvider>
              <MenuFolder />
              <CodeField />
            </LocationContextProvider>
        </div>
      </div>
    </>
  )
}

export default App
