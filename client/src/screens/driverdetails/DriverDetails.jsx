import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneDriver } from "../../services/drivers";

export const DriverDetails = () => {
  const [oneDriver, setOneDriver] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchOneDriver = async () => {
      const driverData = await getOneDriver(id);
      setOneDriver(driverData);
    };
    fetchOneDriver();
  }, []);

  return (
    <div>
      <h3>{oneDriver?.name}</h3>
      {oneDriver?.reviews.map((review) => (
        <div>
          <p>{review.comment}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
      <button>Create</button>
    </div>
  );
};
