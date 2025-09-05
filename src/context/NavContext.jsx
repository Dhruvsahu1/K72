import React, { createContext, useState } from 'react'
export   const navBarContext = createContext();
const NavContext = ({children}) => {

  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <navBarContext.Provider value={[navOpen, setNavOpen]}>
        {children}
      </navBarContext.Provider>
    </div>
  )
}

export default NavContext
