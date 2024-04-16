// Hero - Page 1
import "./heroPage.css";

function HeroPage() {
  const backGroundBlurAmount = 400;
  const backGroundBorderRadius = 50;

  return (
    <div className="relative col-span-12 row-start-2 overflow-hidden  md:col-span-4 md:col-start-2 lg:col-end-4">
      {/*NOTE Background Colors */}

      {/* rose */}
      <div
        className="absolute col-start-1 row-start-6 bg-color1"
        style={{
          width: "50%",
          height: "50%",
          left: "-10%",
          top: "60%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>

      {/* lime */}
      <div
        className="absolute col-start-2 row-start-3 bg-color2"
        style={{
          width: "40%",
          height: "60%",
          left: "25%",
          top: "25%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>
      {/* sky */}
      <div
        className="absolute bg-color3"
        style={{
          width: "30%",
          height: "40%",
          left: "65%",
          top: "-15%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>
      {/* violet */}
      <div
        className="absolute bg-color4"
        style={{
          width: "35%",
          height: "45%",
          left: "72%",
          top: "50%",
          filter: `blur(${backGroundBlurAmount}px)`,
          borderRadius: `${backGroundBorderRadius}%`,
          zIndex: "-1",
        }}
      ></div>

      {/* Sub-grid for Page 1 */}
      <div className="z-10 grid h-full grid-cols-12 grid-rows-6 gap-1 overflow-auto column">
        {/* Add your rows and columns inside the sub-grid */}

        <div className="col-span-4 col-start-2 col-end-4 row-start-2">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-6xl">
            Developing Responsive Websites For Your Brand
          </h2>
        </div>
        <div className="content-center col-span-3 col-start-2 row-span-1 row-start-3 mt-14">
          <button
            className="text-5xl leading-none tracking-tight text-center duration-700 bg-yellow-600 md:text-2x1 hover:bg-yellow-500"
            style={{
              position: "absolute",
              width: "350px",
              height: "89px",
              // left: "148px",
              // top: "485px",
              color: "black",
              borderRadius: "15px",
            }}
          >
            Get Started
          </button>
        </div>
        <div className="col-span-2 row-span-2">Content 3</div>
        <div className="col-span-4 row-span-2">Content 4</div>
      </div>
    </div>
  );
}

export default HeroPage;
