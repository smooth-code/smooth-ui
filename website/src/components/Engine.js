import React from 'react'

// TODO implement a way to modify code in smooth-doc

const EngineContext = React.createContext()

export function EngineProvider({ children }) {
  const [engine, setEngine] = React.useState('@smooth-ui/core-sc')
  const value = React.useMemo(() => ({ engine, setEngine }), [engine])
  return (
    <EngineContext.Provider value={value}>{children}</EngineContext.Provider>
  )
}

export function useEngine() {
  return React.useContext(EngineContext)
}
