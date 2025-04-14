import React, { createContext } from 'react'

export const userContext = createContext()

const ContextProvider = ({children}) => {
    const role = 'admin'
    const isAuthenticated = true
  return (
    <div>
        <userContext.Provider value={{role, isAuthenticated}}>
            {children}
        </userContext.Provider>
    </div>
  )
}

export default ContextProvider