import { CodeHeader } from "../codeHeader"
import styles from "./styles.module.css"

export function CodeField({actualLocation}:{actualLocation:string[]}) {
  return(
    <>
      <div className={styles.container}>
        <CodeHeader actualLocation={actualLocation} />
      </div>
    </>
  )
}