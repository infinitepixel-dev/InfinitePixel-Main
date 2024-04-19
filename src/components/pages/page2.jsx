import sectionbg from "../../assets/sectionbg.jpg"

function Page2() {
  return (
    <div className="relative col-span-12 row-span-1 row-start-1 overflow-hidden">
      {/*NOTE Background Colors */}

      {/* Sub-grid for Page 1 */}
      <div className="relative">

        {/*NOTE Convert JPG TO SVG */}
        <div
          className="absolute inset-0 bg-[url('/src/assets/sectionbg.jpg')] bg-cover bg-center opacity-[.03]"
          style={{ zIndex: -1 }}
        />
        <div className="z-10 grid w-full h-screen grid-cols-12 grid-rows-6 gap-1 overflow-auto column">
          {/* Add your rows and columns inside the sub-grid */}
          <h1 className="col-span-6 col-start-2 row-start-2 mt-5 font-bold leading-tight tracking-normal drop-shadow-lg text-7xl">
            We design and develop modern mobile first websites to solve real
            business problems
          </h1>
          <div className="col-span-5 col-start-2 row-start-4 text-2xl">
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
              className="mt-5 text-4xl leading-none tracking-tight text-center duration-700 bg-yellow-600 md:text-2x1 hover:bg-yellow-500 drop-shadow-lg"
              style={{
                position: "absolute",
                width: "350px",
                height: "89px",
                color: "#031d37",
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

export default Page2
