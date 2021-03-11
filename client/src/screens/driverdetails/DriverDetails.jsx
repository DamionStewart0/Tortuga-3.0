import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOneDriver } from "../../services/drivers";
import {Link} from 'react-router-dom';
import { destroyReview } from "../../services/reviews";

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

  const handleDelete = async (reviewId) => {
      await destroyReview(reviewId)
      setOneDriver(prevState => ({
          ...prevState, 
          reviews: prevState.reviews.filter((review)=> {
            return review.id !== reviewId
          })
      }))

  }

  return (
    <div>
      <h3>{oneDriver?.name}</h3>
      {oneDriver?.reviews.map((review) => (
        <div>
            
          <p>{review.comment}</p>
          <Link to={`/drivers/${review.id}/review-edit`}><button>Edit</button></Link>
          <button onClick={() => handleDelete(review.id)}>Delete</button>
        </div>
      ))}
      <Link to={`/drivers/${id}/review-create`}><button>Create</button></Link>
    </div>
  );
};
