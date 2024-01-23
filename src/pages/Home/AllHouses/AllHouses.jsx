import { useEffect, useState } from "react";
import "./AllHouses.css";
import SingleHouse from "../SingleHouse/SingleHouse";
import { Container } from "react-bootstrap";

const AllHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allhouses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHouses(data);
      });
  }, []);
  return (
    <Container>
      <div className="all-houses">
        {houses.map((item) => (
          <SingleHouse key={item._id} info={item}></SingleHouse>
        ))}
      </div>
    </Container>
  );
};

export default AllHouses;
