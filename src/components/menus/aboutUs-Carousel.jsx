import { useState, useEffect } from "react";

import barberShop from "../../assets/barbershop.png";

function AboutUsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    { websiteName: "Website 1", image: barberShop },
    { websiteName: "Website 2", image: "" },
    { websiteName: "Website 3", image: "" },
    { websiteName: "Website 4", image: "" },
  ]; // Example items

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 1000); // Change item every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Calculate starting and ending indices for visible items
  const visibleItems = carouselItems
    .slice(currentIndex, Math.min(currentIndex + 3, carouselItems.length))
    .concat(
      carouselItems.slice(
        0,
        Math.max(0, currentIndex + 3 - carouselItems.length)
      )
    );

  return (
    <div className="relative grid overflow-hidden bg-rose-500 overscroll-none d1440:grid-rows-8 galaxyS23Ultra:grid-rows-6 galaxyS23Ultra:rows-end-6 d1440:row-span-6 d1440:row-start-2 d1440:col-start-8 d1440:col-span-4 galaxyS23Ultra:col-span-2">
      <div
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: "url(`path/to/your/image.jpg`)" }}
      />
      <div className="z-10 grid h-full grid-cols-1 gap-1 overflow-hidden d1440:row-start-1 galaxyS23Ultra:row-start-1 d1440:row-span-7 galaxyS23Ultra:row-span-2">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="grid items-center justify-center w-full border-b border-white grid-cols-subgrid grid-rows-subgrid h-1/3"
          >
            <img src={item.image} alt="" className="w-1/2" />
            {item.websiteName}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsCarousel;
