// Header.jsx
import heroImage from "../assets/heroImage.jpg" // Correct import path

const Hero = () => {
  return (
    <section
      className="w-full h-[30vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover" }} // Added backgroundSize
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50"></div>
    </section>
  )
}

export default Hero
