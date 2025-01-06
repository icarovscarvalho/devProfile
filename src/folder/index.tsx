import { useContext, useState } from "react";
import { LocationContext } from "../contexts/location";

import { VscChevronRight, VscChevronDown } from "react-icons/vsc";

import styles from "./styles.module.css"
import { FileTxt } from "../fileTxt";

class FolderProps {
  color?: string;
  name?: string;
}

export function Folder({color, name}: FolderProps) {

  const {handleChangeLocation} = useContext(LocationContext)
  const [toggleFolder, setToggleFolder] = useState<boolean>(false)

  function handleToggleFolder() {
    handleChangeLocation(!toggleFolder && name ? ["Home", name] : ["Home"])
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