import links from '../data/links'

function Header(props) {
  const { openMenu } = props
  return (
    <header className="min-w-[350px] w-full h-20 bg-slate-800 flex items-center p-10">
      <button className="screen350:block screen750:hidden" onClick={openMenu}>
        <img alt="menu button" src="images/menu-icon.svg" />
      </button>
      <nav className="screen350:hidden screen750:block text-white text-xl font-semibold w-full text-center ">
        {links.map((link, index) => {
          return (
            <a key={index} className="mx-10" href={link.to}>
              {link.name}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
