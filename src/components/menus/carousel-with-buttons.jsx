import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import barberShop from "./../../assets/barbershop.png";
const CarouselWithButtons = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    barberShop,
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="relative h-full">
        <button
          onClick={prevSlide}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 p-2 m-1 bg-gray-800 text-white"
        >
          <FaAngleUp />
        </button>
        <div className="carousel carousel-vertical rounded-box overflow-hidden h-full">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-item h-full transition-opacity duration-1000 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
              style={{ position: "absolute", width: "100%" }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onClick={() =>
                  document.getElementById(`my_modal_${index}`).showModal()
                }
              />
              <dialog id={`my_modal_${index}`} className="modal">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">
                    Press ESC key or click the button below to close{" "}
                    {activeIndex}
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 p-2 m-1 bg-gray-800 text-white"
        >
          <FaAngleDown />
        </button>
      </div>
    </>
  );
};

export default CarouselWithButtons;
