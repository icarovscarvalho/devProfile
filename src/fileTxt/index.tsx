import { useState } from "react";

import { BsFiletypeTxt } from "react-icons/bs";

import styles from "./styles.module.css"

class FileTxtProps {
  name?: string;
}

export function FileTxt({name}: FileTxtProps) {

  
      // "Perfil":
      // "About":
      // "Skills":
      // "Projects":
      // "Experience":
      // "Contact":
  
  // Aqui vai o código para abrir o arquivo

  return(
    <>
      <div className={styles.container}>
        <BsFiletypeTxt />
        <p>
          {name == "Perfil" ? "currículo.txt"
          : name == "About" ? "Sobre mim.txt"
          : name == "Skills" ? "Linguagens.txt"
          : name == "Projects" ? "My Own Pharma.txt"
          : name == "Experience" ? "Experiências.txt"
          : name == "Contact" ? "Email.txt"
          : null}
        </p>
      </div>
    </>
  )
}