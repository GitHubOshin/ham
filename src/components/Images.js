import links from '../data/links'
import Nav from './Nav'

function Images() {
  return (
    <section>
      <Nav />
      <div className="w-full flex justify-center">
        <div className="max-w-[550px]">
          {links.map((member) => {
            return <img alt={member.name} src={member.img} className="my-4 " />
          })}
        </div>
      </div>
    </section>
  )
}
export default Images
