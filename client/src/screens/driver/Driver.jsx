import React from "react";
import { Link } from "react-router-dom";
import "./Driver.css";

export const Driver = (props) => {
  const { drivers, handleDelete, currentUser } = props;

  return (
    <div className="container">
      <h3>Drivers</h3>

      <div className="driver-details">
        {drivers.map((driver) => (
          <React.Fragment key={driver.id}>
            <img src={driver.img_url}></img>
            <Link to={`/drivers/${driver.id}`}>
              <p>{driver.name}</p>
            </Link>
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
        <div className="create-button-container">
          <Link to="/driver/new">
            <button>Create</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
