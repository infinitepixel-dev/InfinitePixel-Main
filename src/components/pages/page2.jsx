// Hero - Page 1
import "./heroPage.css"
import sectionbg from "../../assets/sectionbg.jpg"

function AboutSection() {
  return (
    <div className="relative col-span-12 row-span-1 row-start-1 overflow-hidden">
      {/*NOTE Background Colors */}

      {/* Sub-grid for Page 1 */}
      <div className="relative">
        {/* Background image with opacity */}
        {/*NOTE Convert JPG TO SVG */}
        <div
          className="absolute inset-0 bg-[url('/src/assets/sectionbg.jpg')] bg-cover bg-center opacity-[.03]"
          style={{ zIndex: -1 }}
        />
        <div className="z-10 grid w-full h-screen grid-cols-12 gap-2 overflow-auto grid-rows-8">
          {/* Add your rows and columns inside the sub-grid */}
          <h1 className="row-start-1 mt-10 text-6xl font-bold leading-tight tracking-normal md:col-span-5 md:col-start-2 drop-shadow-lg md:row-start-1">
            We design and develop modern mobile first websites to solve real
            business problems
          </h1>
          <div className="mt-10 text-2xl md:col-span-4 md:col-start-2 md:row-start-4">
            <p className="information-top">
              If you are just starting a new business, or looking to redesign
              your current website. Infinite Pixel has you covered, our team has
              a vast array of expertise in Design & Implementation, Ecommerce,
              and Marketing/SEO.
            </p>

            <p className="pt-3 mt-2 text-2xl information-botom">
              If you are looking to streamline your business, enhance user
              experience, or bring your ideas to life.{" "}
              <span className="text-purple-800">Infinite Pixel </span>
              is here to help your reach your goals.
            </p>
            <button
              className="mt-10 text-4xl leading-none tracking-tight text-center duration-700 drop-shadow-xl text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800"
              style={{
                position: "absolute",
                width: "350px",
                height: "89px",
                borderRadius: "15px",
              }}
            >
              Start Your Project
            </button>
          </div>
          <div className="content-center col-span-6 col-start-2 row-span-1"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
