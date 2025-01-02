import { Hearder } from "./header"
import { MenuIcons } from "./menuIcons"
import { MenuFolder } from "./menuFolder"

import styles from "./styles.module.css"
import { CodeField } from "./codeField"

function App() {

  return (
    <>
      <div className={styles.container}>
        <Hearder />
        <main>
          <MenuIcons />
          <MenuFolder />
          <CodeField />
        </main>
      </div>
    </>
  )
}

export default App
