import { Folder } from "../perfil";

import { VscChevronRight, VscChevronDown } from "react-icons/vsc";
import blue from "../assets/folder_Blue.png"
import red from "../assets/folder_Red.png"
import green from "../assets/folder_Green.png"
import yellow from "../assets/folder_Yellow.png"
import gray from "../assets/folder_Gray.png"
import purple from "../assets/folder_Purple.png"

import styles from "./styels.module.css"

export function MenuFolder() {
  return(
    <>
      <div className={styles.container}>
        <p className={styles.explorer}>EXPLORER</p>
        <div className={styles.mainlyFolderStructure}>
          <p className={styles.primaryFolder}>
            <VscChevronRight /> Ícaro Carvalho
          </p>
          <div className={styles.folders}>
            <Folder color={blue} name="Perfil" />
            <Folder color={red} name="About" />
            <Folder color={green} name="Skills" />
            <Folder color={yellow} name="Projects" />
            <Folder color={gray} name="Experience" />
            <Folder color={purple} name="Contact" />
          </div>
        </div>
      </div>
    </>
  )
}