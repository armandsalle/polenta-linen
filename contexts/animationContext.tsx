import React, { useState, createContext } from 'react'

type AnimationState = {
  isUserNavigated: boolean
  setUserNavigated: React.Dispatch<React.SetStateAction<boolean>>
}

type NavigationProviderProps = {
  children: React.ReactNode
}

const defaultState: AnimationState = {
  isUserNavigated: false,
  // Default State is here just as a Type
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserNavigated: () => {},
}

export const NavigationContext = createContext<AnimationState>(defaultState)

export const NavigationProvider = ({
  children,
}: NavigationProviderProps): JSX.Element => {
  const [isUserNavigated, setUserNavigated] = useState(false)

  return (
    <NavigationContext.Provider
      value={{
        isUserNavigated,
        setUserNavigated,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}
