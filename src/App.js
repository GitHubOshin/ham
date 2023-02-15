import Header from './components/Header'
import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="w-screen h-screen bg-red-700">
      {openMenu === true ? (
        <Sidebar
          closeMenu={() => {
            setOpenMenu(false)
          }}
        />
      ) : (
        <Header
          openMenu={() => {
            setOpenMenu(true)
          }}
        />
      )}
    </div>
  )
}

export default App
