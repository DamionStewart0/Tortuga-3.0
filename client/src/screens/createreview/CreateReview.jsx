import React, {useState} from 'react';
import { postReview } from '../../services/reviews';
import {useParams, useHistory} from 'react-router-dom';

export const CreateReview = (props) => {

    const [formData, setFormData]  = useState({
        comment:'',
        stars: 0
    });
    const {comment, stars} = formData;
    const { id } = useParams();
    const history = useHistory();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleCreate = async (e) => {
          e.preventDefault();
          await postReview({...formData, driver_id: id})
          history.push(`/drivers/${id}`)

      }

    return (
        <form onSubmit={handleCreate}>
            <label>
                Comment:
            <input
            type='text' 
            name='comment'
            value={comment}
            onChange={handleChange}
            />
            </label>
            <label>
                Rating:
            <input
            type='number' 
            name='stars'
            value={stars}
            onChange={handleChange}
            />
            </label>
            <button>Submit</button>
        </form>
    )
}
