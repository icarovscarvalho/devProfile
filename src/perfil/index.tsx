import { VscChevronRight, VscChevronDown } from "react-icons/vsc";

import styles from "./styles.module.css"

class FolderProps {
  color?: string;
  name?: string;
}

export function Folder({color, name}: FolderProps) {
  return(
    <>
      <div className={styles.container}>
        <VscChevronRight />
        <img src={color} alt="folder image" />
        <p>{name}</p>
      </div>
    </>
  )
}