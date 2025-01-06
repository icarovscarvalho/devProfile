import { createContext, useState } from "react";

interface LocationContextType {
  actualLocation: string[],
  handleChangeLocation: (newLocation:string[])=>void
}

export const LocationContext = createContext<LocationContextType|undefined>(undefined)

export function LocationContextProvider({children}:{children:React.ReactNode}) {
  const [actualLocation, setActualLocation] = useState<string[]>(["Home"])

  function handleChangeLocation(newLocation:string[]) {
    setActualLocation(newLocation)
  }

  return(
    <LocationContext.Provider value={{actualLocation, handleChangeLocation}}>
      {children}
    </LocationContext.Provider>
  )
}