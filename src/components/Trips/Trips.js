import React, { useState} from 'react'
import { useGet } from '../_Hooks/Customs'
import { URL_TRIPS } from '../_Utils/Url'
import { Link } from 'react-router-dom'
import Alert from '../Alert/Alert'
import CardCustomTrip from './CardCustomTrip'



const Trips = () => {

    const {data, mutate } = useGet(URL_TRIPS)

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Eliminazione Completata!")
        setAlertShow(true);
        mutate();
    }
    //creazione pagina viaggi, verranno riportati i vari viaggi singoli tramite CardCustomTrip mappati per id e per oggetto viaggio. deleteSuccesse richiama l'eliminazione, alertDismiss l'alert
    if(data) {
        return (
            <>
                <div className=' container'>
                    <h5>Viaggi</h5>
                    <Link to="new" className="btn btn-outline-success btn-sm">Nuovo Viaggio</Link>
                    <div className='row'>
                         {data.map(trip => (
                            <CardCustomTrip  key={trip.id} trip={trip} deleteSuccess={deleteSuccess} />
                        ))} 
                    </div>
                    <Alert show={alertShow} onHide ={alertDismiss} message ={alertMessage} />

                </div>
                
            </>
        ) 
    }
}




export default Trips;
