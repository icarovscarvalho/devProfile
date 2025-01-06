import React from "react";

import { VscChevronRight } from "react-icons/vsc";

import styles from "./styles.module.css"

export function CodeHeader({actualLocation}:{actualLocation:string[]}) {

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