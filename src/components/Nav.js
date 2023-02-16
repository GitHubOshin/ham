import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function Nav() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div>
      <Header
        openMenu={() => {
          setOpenMenu(true)
        }}
      />
      {openMenu === true ? (
        <Sidebar
          closeMenu={() => {
            setOpenMenu(false)
          }}
        />
      ) : (
        false
      )}
    </div>
  )
}

export default Nav
