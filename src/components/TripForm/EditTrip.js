import React from 'react'
import TripsForm from './TripForm';
import { useOutletContext, useParams } from 'react-router-dom'
import { useGet } from '../_Hooks/Customs';
import { URL_TRIPS } from '../_Utils/Url';

const EditTrip = () => {

    const { id } = useParams();

    const { data , error } = useGet(URL_TRIPS, id);

    const { mutate } = useOutletContext(); //useOutletContext permette di reperire le proprietà e/o funzioni passate al "context" dell'Outlet passato in Trips.js


if(data) {
    return (
        <>
            <div className='m-2 p-2 border'>
                <h5>Modifica Viaggio</h5>
                <TripsForm data={data} mutate={mutate}></TripsForm>
            </div>
        </>
    )
}
}

export default EditTrip
