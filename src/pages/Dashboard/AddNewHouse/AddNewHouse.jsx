import Swal from "sweetalert2";
import "./AddNewHouse.css";

const AddNewHouse = () => {
  const handleAddHouse = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const address = form.address.value;
    const city = form.city.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const roomSize = form.roomSize.value;
    const picture = form.picture.value;
    const availabilityDate = form.availabilityDate.value;
    const rentPerMonth = form.rentPerMonth.value;
    const phoneNumber = form.phoneNumber.value;
    const description = form.description.value;

    const newHouse = {
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
    };
    console.log(newHouse);

    // send data to server starts
    fetch("https://home-finder-server-d0k4aguh9-ahbanna.vercel.app/allhouses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newHouse),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "House Information added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
    // send data to server end
  };

  return (
    <div className="add-new-house-form">
      <h2>House Owner Form</h2>
      <form onSubmit={handleAddHouse}>
        <div className="all-field">
          <div className="single-field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              // value={houseInfo.name}
              // onChange={handleInputChange}
              required
            />
            {/* {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} */}
          </div>
          <div className="single-field">
            <label>Address:</label>
            <input type="text" name="address" required />
          </div>

          <div className="single-field">
            <label>City:</label>
            <input type="text" name="city" required />
          </div>
          <div className="single-field">
            <label>Bedrooms:</label>
            <input type="number" name="bedrooms" required />
          </div>
          <div className="single-field">
            <label>Bathrooms:</label>
            <input type="number" name="bathrooms" required />
          </div>
          <div className="single-field">
            <label>RoomSize (square feet)</label>
            <input type="number" name="roomSize" required />
          </div>
          <div className="single-field">
            <label>Picture:</label>
            {/* <input type="file" name="picture" accept="image/*" required /> */}
            <input type="text" name="picture" required />
          </div>
          <div className="single-field">
            <label>Availability Date:</label>
            <input type="date" name="availabilityDate" required />
          </div>
          <div className="single-field">
            <label>Rent Per Month:</label>
            <input type="number" name="rentPerMonth" placeholder="$" required />
          </div>
          <div className="single-field">
            <label>Phone Number:</label>
            <input type="text" name="phoneNumber" required />
          </div>
          <div className="single-field">
            <label>Description:</label>
            <textarea name="description" required />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* {successMessage && <p style={{ color: "green" }}>{successMessage}</p>} */}
    </div>
  );
};

export default AddNewHouse;
