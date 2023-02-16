import links from '../data/links'

function Sidebar(props) {
  const { closeMenu } = props
  return (
    <section className="screen750:hidden fixed w-full h-full bg-[rgba(0,0,0,0.5)]">
      <div className="relative bg-slate-200 w-[300px] h-full py-20">
        <button className="absolute top-4 right-4" onClick={closeMenu}>
          <img alt="close" src="images/x-mark.svg" className="w-6 h-6" />
        </button>
        <nav className="w-full h-full text-slate-700 font-bold text-lg flex flex-col items-center gap-y-20">
          {links.map((link) => {
            return <a href={link.to}>{link.name}</a>
          })}
        </nav>
      </div>
    </section>
  )
}

export default Sidebar
