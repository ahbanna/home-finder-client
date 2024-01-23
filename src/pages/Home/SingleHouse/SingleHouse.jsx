import { Container } from "react-bootstrap";
import "./SingleHouse.css";
import {
  MdOutlineBedroomChild,
  MdOutlineBathroom,
  MdPhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import { IoResizeSharp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";

const SingleHouse = (props) => {
  const {
    name,
    address,
    city,
    bedrooms,
    bathrooms,
    roomSize,
    picture,
    availabilityDate,
    rentPerMonth,
    phoneNumber,
    description,
  } = props.info;
  return (
    <div className="single-house">
      <Container>
        <div className="house-image">
          <img src={picture} alt="" />
        </div>
        <div className="house-details">
          <div className="featured-head">
            <div className="title-price">
              <h4 className="home-title">{name}</h4>
              <span className="price">
                ${rentPerMonth} <em>/month</em>
              </span>
            </div>
            <div className="more-specific">
              <p>
                <MdOutlineBedroomChild />
                {bedrooms} Beadrooms
              </p>
              <p>
                <MdOutlineBathroom />
                {bathrooms} Bathrooms
              </p>
              <p>
                <IoResizeSharp />
                {roomSize} sq ft
              </p>
              <p>
                <CiCalendarDate />
                {availabilityDate}
              </p>
              <p>
                <MdPhone />
                {phoneNumber}
              </p>
              <p>Description: {description}</p>
            </div>
          </div>
          <div className="featured-footer">
            <MdOutlineLocationOn />
            {address}, {city}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleHouse;
