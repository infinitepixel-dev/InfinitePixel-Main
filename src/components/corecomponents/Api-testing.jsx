import { useState, useEffect } from "react";
import axios from "axios";

function FoodTruckList() {
  const [foodTrucks, setFoodTrucks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://62c85d578c90491c2cb47da3.mockapi.io/Promineo_Tech_API/foodtrucks"
      )
      .then((response) => {
        setFoodTrucks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Food Trucks</h1>
      <ul>
        {foodTrucks.map((truck) => (
          <li key={truck.id}>{truck.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FoodTruckList;
