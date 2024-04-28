// Payments - Page 3

import { useEffect, useContext, useRef } from "react";
import { NavigationContext } from "../../context/navigationContext";

import { FaCircleCheck, FaUser, FaCheckDouble } from "react-icons/fa6";

export function PricingCard() {
  const { setIsPaymentsPage } = useContext(NavigationContext);
  const ref = useRef(null); // Reference to the component's DOM element

  // Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsPaymentsPage(entry.isIntersecting);
      },
      {
        root: null, // Using the viewport as the container
        rootMargin: "0px",
        threshold: 0.1, // 10% of the element should be visible
      }
    );

    // Attach the observer to the ref element
    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setIsPaymentsPage]);

  return (
    <>
      <div ref={ref} id="paymentInformation">
        <div className="items-center justify-center">
          <span className="grid row-start-3 p-2 text-5xl text-center">
            Pricing
          </span>
          <span className="grid row-start-3 p-5 italic text-center text-1xl">
            If you would like a custom quote please contact
            <a
              href="mailto:info@infinitepixel.dev"
              className="italic text-red-500 underline hover:text-red-700"
            >
              info@infinitepixel.dev
            </a>
          </span>
          <div className="grid grid-cols-10 gap-4">
            {/* Card 1 */}
            <div className="col-span-2 col-start-3 row-start-4 p-4 rounded-lg shadow-lg bg-slate-100">
              <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                <FaUser className="inline-block mr-1" size={20} />
                <span>Basic Plan</span>
              </h2>
              <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                $300
              </div>
              <ul className="grid grid-cols-6 text-sm grid-rows-10">
                <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800"> Up To 5 Pages</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Unlimited Revisions</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Contact Form</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                  Order Now
                </button>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="col-span-2 col-start-5 row-start-4 p-3 rounded-lg shadow-lg bg-slate-100">
              <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                <FaCheckDouble className="inline-block mr-1" size={20} />
                <span>Premier Plan</span>
              </h2>
              <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                $1100
              </div>
              <ul className="grid grid-cols-6 text-sm grid-rows-9">
                <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800"> Up To 5 Pages</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Unlimited Revisions</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Contact Form</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                  Order Now
                </button>
              </ul>
            </div>
            {/* Card 3 */}
            <div className="col-span-2 col-start-7 row-start-4 p-3 rounded-lg shadow-lg bg-slate-100">
              <h2 className="mb-4 text-lg font-bold text-center text-sky-800 ">
                <FaUser className="inline-block mr-1" size={20} />
                <span>Elite Plus</span>
              </h2>
              <div className="mb-4 text-5xl font-bold text-center text-blue-600">
                $2500
              </div>
              <ul className="grid grid-cols-6 text-sm grid-rows-9">
                <li className="flex items-center col-span-4 col-start-2 row-start-2 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800"> Up To 5 Pages</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-3 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Unlimited Revisions</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-4 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-5 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">Contact Form</span>
                </li>
                <li className="flex items-center col-span-4 col-start-2 row-start-6 p-2 mb-2">
                  <span className="icon-span">
                    <FaCircleCheck size={18} style={{ color: "#20c600" }} />
                  </span>
                  <span className="text-sky-800">100% Ownership Rights</span>
                </li>
                <button className="col-span-4 col-start-2 row-span-1 p-2 text-lg font-bold text-white duration-500 bg-blue-600 rounded row-start-8 hover:bg-blue-700">
                  Order Now
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingCard;
