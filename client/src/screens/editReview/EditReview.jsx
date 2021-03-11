import React, {useState, useEffect} from 'react';
import { getOneReview, putReview } from '../../services/reviews';
import {useParams, useHistory} from 'react-router-dom';

export const EditReview = () => {

    const [formData, setFormData]  = useState({
        comment:'',
        stars: 0,
        driver_id: ''
    });
    
    
    
    const {comment, stars} = formData;
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        const fetchOneReview = async () => {
            const reviewData = await getOneReview(id);
            setFormData({
                comment: reviewData.comment,
                stars: reviewData.stars,
                driver_id: reviewData.driver_id
            })
        
        }
        fetchOneReview();

    }, [])
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleUpdate = async (e) => {
          e.preventDefault();
          await putReview(id, formData)
          history.push(`/drivers/${formData.driver_id}`)

      }

    return (
        <form onSubmit={handleUpdate}>
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
