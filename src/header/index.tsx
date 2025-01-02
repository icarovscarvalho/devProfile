import styles from "./styles.module.css"
import barryLogo from "../assets/RaspberryIcon.png"

export function Hearder() {
  return(
    <>
      <header>
        <nav>
          <img className={styles.logo} src={barryLogo} alt="logo" />
          <div className={styles.navBtn}><p>home</p></div>
          <div className={styles.navBtn}><p>about</p></div>
          <div className={styles.navBtn}><p>skills</p></div>
          <div className={styles.navBtn}><p>projects</p></div>
          <div className={styles.navBtn}><p>experience</p></div>
          <div className={styles.navBtn}><p>contact</p></div>
        </nav>
      </header>
    </>
  )
}