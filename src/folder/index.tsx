import { useState } from "react";

import { VscChevronRight, VscChevronDown } from "react-icons/vsc";

import styles from "./styles.module.css"
import { FileTxt } from "../fileTxt";

class FolderProps {
  color?: string;
  name?: string;
}

export function Folder({color, name}: FolderProps) {

  const [toggleFolder, setToggleFolder] = useState<boolean>(false)

  function handleToggleFolder() {
    setToggleFolder(!toggleFolder)
  }

  return(
    <>
      <div className={styles.container} onClick={handleToggleFolder}>
        {toggleFolder? <VscChevronDown/> : <VscChevronRight />}
        <img src={color} alt="folder image" />
        <p>{name}</p>
      </div>
      {toggleFolder? <FileTxt name={name} /> : null}
    </>
  )
}