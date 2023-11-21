import { useEffect } from "react";
import "./SplashPage.css"; // Import any custom CSS if needed

function SplashPage() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1");

    headings.forEach(function (heading) {
      heading.classList.add(
        "animate__animated",
        "animate__fadeIn",
        "animate__duration-5s",
        "animate__delay-1s"
      );
    });
  }, []); // Add an empty dependency array if you only want this effect to run once

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg">
      <div className="row">
        <div className="col">
          <h1>Infinite Pixel</h1>
          <h1>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
