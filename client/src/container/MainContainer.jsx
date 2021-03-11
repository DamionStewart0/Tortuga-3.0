import React,{useState,useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import { CreateReview } from '../screens/createreview/CreateReview';
import { Driver } from '../screens/driver/Driver';
import { DriverDetails } from '../screens/driverdetails/DriverDetails';
import { getAllDrivers } from '../services/drivers';


export const MainContainer = () => {
    const[drivers, setDrivers ] = useState([]);

    useEffect(() => {
        const fetchDrivers = async() =>{
            const driverData = await getAllDrivers()
            setDrivers(driverData)
        }
        fetchDrivers()
    }, [])
    
    return (
        <Switch>
            <Route path='/drivers/:id/review-create'>
                <CreateReview />
                
            </Route>

            <Route path='/drivers/:id'>
                <DriverDetails />
            </Route>


            <Route path='/'>
                <Driver drivers={drivers}/>
            </Route>
        </Switch>
    )
}
