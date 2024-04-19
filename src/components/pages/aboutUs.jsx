// Hero - Page 1
import "./heroPage.css";

function HeroPage() {
  return (
    <div className="relative col-span-12 row-span-1 row-start-1 overflow-hidden">
      {/*NOTE Background Colors */}

      {/* Sub-grid for Page 1 */}
      <div className="z-10 grid grid-cols-12 grid-rows-6 gap-1 overflow-auto column">
        {/* Add your rows and columns inside the sub-grid */}

        <div className="col-span-5 col-start-2 row-start-2">
          <h2 className="text-6xl font-bold leading-tight tracking-tighter text-left">
            Page 2
          </h2>
        </div>
        <div className="content-center col-span-3 col-start-2 row-span-1 row-start-3 mt-14">
          <button
            className="text-6xl leading-none tracking-tight text-center duration-500 bg-yellow-600 hover:bg-yellow-500"
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
