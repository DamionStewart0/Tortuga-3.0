import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Driver.css";

export const Driver = (props) => {
  const { drivers, handleDelete, currentUser } = props;
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    img_url: "",
  });
  const { name, company, img_url } = formData;
  const { handleCreate, handleChange } = props;

  return (
    <div className="container">
      <h3>Drivers</h3>

      <div className="driver-details">
        {drivers.map((driver) => (
          <React.Fragment key={driver.id}>
            <div className="driver-name">
              <img src={driver.img_url}></img>
              <Link to={`/drivers/${driver.id}`}>
                <p>{driver.name}</p>
              </Link>
              <p>{driver.company}</p>
            </div>

            {driver.user_id === currentUser?.id && (
              <>
                <Link to={`/drivers/${driver.id}/edit`}>
                  <button>edit</button>
                </Link>
                <button onClick={() => handleDelete(driver.id)}>delete</button>
              </>
            )}
          </React.Fragment>
        ))}
        <br />
      </div>
      {/* <div className="background-driver-create">
        <div className="create-driver">
          <form className="create-form"
             onSubmit={(e) => {
              e.preventDefault();
              handleCreate(formData);
            }}
          
          >
            <div className="input">
              <input
                type="text"
                driver="driver name"
                value={drivers.name}
                placeholder="name"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                driver="company"
                value={drivers.company}
                placeholder="company name"
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <input
                type="text"
                driver="img_url"
                value={drivers.img_url}
                placeholder="Url"
                onChange={handleChange}
              />
            </div>
          </form> */}
          {/* <div className="create-button-container">
            <Link to="/driver/new">
              <button className="create-button">Create</button>
            </Link>
          </div> */}
        </div>
    //   </div>
    // </div>
  );
};
