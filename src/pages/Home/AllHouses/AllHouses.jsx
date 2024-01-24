// import { useEffect, useState } from "react";
// import "./AllHouses.css";
// import SingleHouse from "../SingleHouse/SingleHouse";
// import { Container } from "react-bootstrap";

// const AllHouses = () => {
//   const [houses, setHouses] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/allhouses")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setHouses(data);
//       });
//   }, []);
//   return (
//     <Container>
//       <div className="all-houses">
//         {houses.map((item) => (
//           <SingleHouse key={item._id} info={item}></SingleHouse>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default AllHouses;

import React, { useEffect, useState } from "react";
import "./AllHouses.css";
import SingleHouse from "../SingleHouse/SingleHouse";
import { Container, Form, Button } from "react-bootstrap";

const AllHouses = () => {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredHouses, setFilteredHouses] = useState([]);

  useEffect(() => {
    fetch("https://home-finder-server-d0k4aguh9-ahbanna.vercel.app/allhouses")
      .then((res) => res.json())
      .then((data) => {
        setHouses(data);
        setFilteredHouses(data);
      });
  }, []);

  useEffect(() => {
    const filtered = houses.filter((house) =>
      house.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHouses(filtered);
  }, [searchTerm, houses]);

  const handleSearch = () => {
    const filtered = houses.filter((house) =>
      house.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredHouses(filtered);
  };

  return (
    <Container>
      <div className="search-bar">
        <Form.Control
          type="text"
          placeholder="Search houses by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </div>
      <div className="all-houses">
        {filteredHouses.map((item) => (
          <SingleHouse key={item._id} info={item}></SingleHouse>
        ))}
      </div>
    </Container>
  );
};

export default AllHouses;
