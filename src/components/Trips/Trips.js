import React, { useState} from 'react'
import { useGet } from '../_Hooks/Customs'
import { URL_TRIPS } from '../_Utils/Url'
import { Link } from 'react-router-dom'
import Alert from '../Alert/Alert'
import TripItem from './TripItem'


const Trips = () => {

    const {data, error, mutate } = useGet(URL_TRIPS)

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Eliminazione Completata!")
        setAlertShow(true);
    }

    if(data) {
        return (
            <>
                <div className=' container'>
                    <h5>Viaggi</h5>
                    <Link to="new" className="btn btn-outline-success btn-sm">Nuovo Viaggio</Link>
                    <div className='row'>
                         {data.map(trips => (
                            <TripItem key={trips.id} trips={trips} deleteSuccess={deleteSuccess} />
                        ))} 
                    </div>
                    <Alert show={alertShow} onHide ={alertDismiss} message ={alertMessage} />

                </div>
            </>
        ) 
    }
}




export default Trips;
