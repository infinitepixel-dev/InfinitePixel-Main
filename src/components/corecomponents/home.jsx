import DynamicComponentLoader from "../../dynamicComponentLoader"
import "./home.css"

function Home() {
  return (
    <>
      {/*INFO-JSX Hero - Page 1 */}
      {/* <div className="snap-page">
        <DynamicComponentLoader componentName="HeroPage" />
      </div> */}
      {/*INFO-JSX About Us - Page 2 */}
      {/* <div className="snap-page">
        <DynamicComponentLoader componentName="AboutUs" />
      </div> */}
      {/*INFO-JSX Payments - Page 3 */}
      <div className="snap-page">
        <DynamicComponentLoader componentName="Payments" />
      </div>
    </>
  )
}

export default Home
