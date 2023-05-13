import React from 'react'
import { useParams } from 'react-router-dom'
import { URL_TRIPS } from '../_Utils/Url';
import TripForm from './TripForm';
import { useGet } from '../_Hooks/Customs';
import { Card } from 'react-bootstrap';



const EditTrip = () => {

    const { id } = useParams();

    const { data, error } = useGet(URL_TRIPS, id)


    if (data) {
        return (
            <div className=' container'>
                <h5>Modifica Viaggio</h5>
                <TripForm data={data}></TripForm>
                <Card text='black'>

                    <Card.Body>
                        <div className=' col-12'>
                            <div className=' d-flex float-end'>

                            </div>
                        </div>
                        <Card.Title className=' text-center'>{data.name}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Card.Text>Partenza: {data.departure.substring(0, 10)}</Card.Text>
                            <span className='mx-5'></span>
                            <Card.Text>Arrivo: {data.arrival.substring(0, 10)}</Card.Text>
                        </div>


                        <div className='d-flex justify-content-center'>
                            <Card.Text>Prezzo Volo: {data.flightPrice} €</Card.Text>
                            <span className='mx-5'></span>
                            <Card.Text>Prezzo Servizio: {data.travelPrice} €</Card.Text>
                        </div>


                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default EditTrip
