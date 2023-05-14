import React from 'react';
import { Card } from 'react-bootstrap';
import { useGet } from '../_Hooks/Customs';
import { URL_TRIPS } from '../_Utils/Url';
import { Link, useParams } from 'react-router-dom';
import BookingForm from '../TripForm/BookingForm';





const CardTrip = (trips) => {
    const { id } = useParams();

    const { data, error } = useGet(URL_TRIPS, id);

    if (data) {
        return (
            <div className="d-flex justify-content-center my-3">
                <Card bg="dark" text="white" className="shadow-lg p-3 mb-5 rounded" style={{ width: '24rem' }}>
                    <Card.Body>
                        <button className='btn btn-outline-success'>Utenti</button>
                        <Card.Title className="text-center"> {data.name}</Card.Title>
                        <Card.Text>{data.description}</Card.Text>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <Card.Text>Partenza: {data.departure.substring(0, 10)}</Card.Text>
                            <Card.Text>Arrivo: {data.arrival.substring(0, 10)}</Card.Text>
                        </div>
                        <div className="d-flex justify-content-between">
                            <Card.Text>Prezzo Volo: {data.flightPrice} €</Card.Text>
                            <Card.Text>Prezzo Servizio: {data.travelPrice} €</Card.Text>
                        </div>
                        <hr />
                        <div className=" d-flex justify-content-around">
                            <Link className="btn btn-primary" to={"/trips/trip/" + id + "/users"} >Prenota</Link>
                            <Link className=" btn btn-danger " to='/trips'>Indietro</Link>
                        </div>
                    </Card.Body>
                </Card>
                 {/* <BookingForm idTrip={id} />  */}

                <p>+ abbellimenti vari</p>
            </div>
        );
    }
};

export default CardTrip;
