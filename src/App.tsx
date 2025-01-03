import { Hearder } from "./header"
import { MenuIcons } from "./menuIcons"
import { MenuFolder } from "./menuFolder"

import './App.css'
import { CodeField } from "./codeField"

function App() {

  return (
    <>
      <div className="container">
        <div className="header">
          <Hearder />
        </div>
        <div className="content">
            <MenuIcons />
            <MenuFolder />
            <CodeField />
        </div>
      </div>
    </>
  )
}

export default App
