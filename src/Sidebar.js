import links from '../data/links'

function Sidebar(props) {
  const { closeMenu } = props
  return (
    <section className="relative bg-slate-800 w-[300px] h-screen py-20">
      <button className="absolute top-4 right-4" onClick={closeMenu}>
        <img alt="close" src="images/x-mark.svg" className="w-6 h-6" />
      </button>
      <nav className="w-full h-full text-white font-bold text-lg flex flex-col items-center gap-y-20">
        {links.map((link) => {
          return <a href={link.to}>{link.name}</a>
        })}
      </nav>
    </section>
  )
}

export default Sidebar
