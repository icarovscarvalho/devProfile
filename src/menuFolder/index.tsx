import { useState } from "react";

import { VscChevronRight, VscChevronDown } from "react-icons/vsc";

import { Folder } from "../folder";

import blue from "../assets/folder_Blue.png"
import red from "../assets/folder_Red.png"
import green from "../assets/folder_Green.png"
import yellow from "../assets/folder_Yellow.png"
import gray from "../assets/folder_Gray.png"
import purple from "../assets/folder_Purple.png"

import styles from "./styels.module.css"

export function MenuFolder() {

  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const colorsFolders = [blue, red, green, yellow, gray, purple]
  const namesFolders = ["Perfil", "About", "Skills", "Projects", "Experience", "Contact"]

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu)
  }

  function setFolderColor() {
    return colorsFolders.map((color, i) => (
      <Folder key={i} color={colorsFolders[i]} name={namesFolders[i]} />
    ))
  }

  return(
    <>
      <div className={styles.container}>
        <p className={styles.explorer}>EXPLORER</p>

        <div className={styles.mainlyFolderStructure}>
          <p className={styles.primaryFolder} onClick={handleToggleMenu}>
            {toggleMenu? <VscChevronRight /> : <VscChevronDown />} Ícaro Carvalho
          </p>

          {toggleMenu? "" : 
          <div className={styles.folders}>
            {setFolderColor()}
          </div>}
        </div>        
      </div>
    </>
  )
}