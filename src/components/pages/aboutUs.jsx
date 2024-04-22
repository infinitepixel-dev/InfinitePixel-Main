// About Us - Page 2

function AboutSection() {
  return (
    <div className="relative overflow-hidden overscroll-none">
      {/* Background image with opacity */}
      {/*NOTE Convert JPG TO SVG */}
      <div
        className="absolute inset-0 bg-[url('/src/assets/sectionbg.jpg')] bg-cover bg-center opacity-[.03]"
        style={{ zIndex: -1 }}
      />
      <div className="z-10 grid w-full grid-cols-8 gap-1 overflow-hidden h-dvh grid-rows-8 md:grid-cols-8 lg:grid-rows-5 lg:grid-cols-12 xl:grid-rows-8 xl:grid-cols-12 column">
        {/* Add your rows and columns inside the sub-grid */}
        <div className="col-span-7 d1440:col-start-2 d1440:col-span-7 d1440:col-end-7 col-start-2 col-end-7 galaxyS23Ultra:col-start-2 galaxyS23Ultra:text-2xl galaxyS23Ultra:col-span-6 lg:mt-[-.7em] row-start-2 text-5xl font-bold leading-normal tracking-normal lg:text-8xl xs:text-5xl xl:row-start-2 xl:col-start-2 xl:col-span-3 xs:row-start-2 xs:mt-[-1.8em]">
          We design and develop modern mobile first websites to solve real
          business problems
        </div>
        <div className="mt-10 text-2xl d1440:row-start-5 galaxyS23Ultra:text-base xs:row-start-3 xs:text-1xl xs:col-start-2 xs:col-span-6 md:col-span-4 md:col-start-2 md:row-start-4">
          <p className="information-top">
            If you are just starting a new business, or looking to redesign your
            current website. Infinite Pixel has you covered, our team has a vast
            array of expertise in Design & Implementation, Ecommerce, and
            Marketing/SEO.
          </p>

          <p className="pt-3 mt-2 information-botom">
            If you are looking to streamline your business, enhance user
            experience, or bring your ideas to life.{" "}
            <span className="text-purple-800">Infinite Pixel </span>
            is here to help your reach your goals.
          </p>
        </div>

        <button className="self-center col-span-6 p-5 text-4xl leading-none tracking-tight text-center duration-700 rounded-lg d1440:p-6 d1440:col-start-3 d1440:col-span-2 d1440:row-start-6 galaxyS23Ultra:row-start-6 galaxyS23Ultra:mt-48 xs:mt-36 xs:col-start-2 xs:row-start-7 xl:col-span-3 xl:col-start-2 xl:row-start-7 xl:m-2 drop-shadow-xl text-slate-100 bg-violet-700 md:text-2x1 hover:bg-violet-800">
          Start Your Project
        </button>
      </div>
    </div>
  );
}

export default AboutSection;
