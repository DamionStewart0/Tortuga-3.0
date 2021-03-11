import React, {useState} from 'react';

export const CreateReview = () => {

    cons [formData, setFormData]  = useState({
        comment:'',
        stars: 0
    });
    const {comment, stars} = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    return (
        <form>
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
