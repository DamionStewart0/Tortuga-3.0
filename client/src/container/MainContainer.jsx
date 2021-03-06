import React,{useState,useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import { Layout } from '../components/shared/layouts/Layout';
import { CreateReview } from '../screens/createreview/CreateReview';
import { Driver } from '../screens/driver/Driver';
import { DriverDetails } from '../screens/driverdetails/DriverDetails';
import { EditReview } from '../screens/editReview/EditReview';
import { Search } from '../screens/search/Search';
import { getAllDrivers } from '../services/drivers';


export const MainContainer = () => {
    const[drivers, setDrivers ] = useState([]);

    useEffect(() => {
        const fetchDrivers = async () =>{
            const driverData = await getAllDrivers()
            setDrivers(driverData)
        }
        fetchDrivers()
    }, [])

    
    return (
        <Layout >

        <Switch>
            <Route path='/drivers/:id/review-edit'> 
             <EditReview />
            
            </Route>


            <Route path='/drivers/:id/review-create'>
                <CreateReview />
                
            </Route>

            <Route path='/drivers/:id'>
                <DriverDetails />
            </Route>


            <Route path='/'>
                <Search />
                <Driver drivers={drivers}/>
            </Route>
        </Switch>
        </Layout>
    )
}
