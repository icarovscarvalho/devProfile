import {
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscGear
} from "react-icons/vsc";
import { GoGitBranch } from "react-icons/go";

import styles from "./styles.module.css"

export function MenuIcons() {
  return(
    <>
      <div className={styles.container}>
        <VscFiles />
        <VscSearch />
        <GoGitBranch />
        <VscDebugAlt />
        <VscExtensions />
        <div className={styles.blank}></div>
        <VscAccount />
        <VscGear />
      </div>
    </>
  )
}