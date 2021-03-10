import React from 'react';
import { Link } from 'react-router-dom';

export const Driver = (props) => {
    const { drivers, handleDelete, currentUser } = props;

    return (
        <div>
            <h3>Drivers</h3>
            {drivers.map((driver) (
                <React.Fragment key={driver.id}>
                    <Link to={`/drivers/${driver.id}`}><p>{driver.name}</p></Link>
                    { driver.user_id === currentUser?.id &&
                    <>
                        <Link to={`/drivers/${driver.id}/edit`}><button>edit</button></Link>
                        <button onClick={() => handleDelete(driver.id)}>delete</button>
                    </>
                    }
                </React.Fragment>
            ))}
            <br />
            <Link to='/driver/new'><button>Create</button></Link>
            
        </div>
    )
}
