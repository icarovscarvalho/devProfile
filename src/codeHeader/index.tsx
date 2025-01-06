import React from "react";
import { useContext } from "react"

import { LocationContext } from "../contexts/location";

import { VscChevronRight } from "react-icons/vsc";

import styles from "./styles.module.css"

export function CodeHeader() {

  const { actualLocation } = useContext(LocationContext)
  const actualLocationLength = actualLocation.length

  return(
    <>
      <div className={styles.container}>

        {actualLocation.map((location, i)=>
          <React.Fragment key={`actualLocation${i}`}>
            <p>{location}</p>
            {i<actualLocationLength-1 && <VscChevronRight />}
          </React.Fragment>
        )}
      </div>
    </>
  )
}