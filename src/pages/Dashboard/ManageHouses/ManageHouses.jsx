import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MdOutlineBedroomChild,
  MdOutlineBathroom,
  MdPhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { IoResizeSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { Container } from "react-bootstrap";
import "./ManageHouses.css";
import Swal from "sweetalert2";

const ManageHouses = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    // Fetch all houses from the server when the component mounts
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      const response = await axios.get(
        "https://home-finder-server-d0k4aguh9-ahbanna.vercel.app/allhouses"
      );
      setHouses(response.data);
    } catch (error) {
      console.error("Error fetching houses:", error);
    }
  };

  const handleDelete = async (houseId) => {
    try {
      // Make a DELETE request to the server to delete the house
      await axios.delete(
        `https://home-finder-server-d0k4aguh9-ahbanna.vercel.app/allhouses/${houseId}`
      );
      // After successful deletion, fetch the updated list of houses
      fetchHouses();
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "House deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting house:", error);
      // Handle error scenario
    }
  };

  return (
    <div className="manage-house-area">
      {houses.map((house) => (
        <div key={house._id}>
          <div className="single-house">
            <Container>
              <div className="house-image">
                <img src={house.picture} alt="" />
              </div>
              <div className="house-details">
                <div className="featured-head">
                  <div className="title-price">
                    <h4 className="home-title">{house.name}</h4>
                    <span className="price">
                      ${house.rentPerMonth} <em>/month</em>
                    </span>
                  </div>
                  <div className="more-specific">
                    <p>
                      <MdOutlineBedroomChild />
                      {house.bedrooms} Beadrooms
                    </p>
                    <p>
                      <MdOutlineBathroom />
                      {house.bathrooms} Bathrooms
                    </p>
                    <p>
                      <IoResizeSharp />
                      {house.roomSize} sq ft
                    </p>
                    <p>
                      <CiCalendarDate />
                      {house.availabilityDate}
                    </p>
                    <p>
                      <MdPhone />
                      {house.phoneNumber}
                    </p>
                    <p>Description: {house.description}</p>
                  </div>
                </div>
                <div className="featured-footer">
                  <MdOutlineLocationOn />
                  {house.address}, {house.city}
                </div>
              </div>
              <button onClick={() => handleDelete(house._id)}>Delete</button>
            </Container>
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ManageHouses;
