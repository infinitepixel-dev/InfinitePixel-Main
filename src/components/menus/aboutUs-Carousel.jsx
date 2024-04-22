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
    <div className="relative bg-rose-500 grid overflow-hidden overscroll-none d1440:grid-rows-8 d1440:row-end-8 d1440:row-start-2 d1440:col-start-8 d1440:col-span-4">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url(`path/to/your/image.jpg`)" }}
      />
      <div className="d1440:row-start-1 z-10 grid grid-cols-1 d1440:row-span-7 gap-1 overflow-hidden h-full">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-subgrid grid-rows-subgrid w-full h-1/3 items-center justify-center border-b border-white"
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
