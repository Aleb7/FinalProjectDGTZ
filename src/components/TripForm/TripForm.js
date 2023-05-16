import React, { useEffect, useState } from 'react'
import { usePut, usePost } from '../_Hooks/Customs';
import { URL_TRIPS } from '../_Utils/Url';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel } from 'react-bootstrap';
import Alert from '../Alert/Alert';
import { Link } from 'react-router-dom';

const TripForm = ({ data = {} }) => {

    const [trip, setTrip] = useState({
        name: "",
        description: "",
        departure: "",
        arrival: "",
        flightPrice: 0.0,
        travelPrice: 0.0,
    })

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const putData = usePut(URL_TRIPS, data.id);
    const postData = usePost(URL_TRIPS);
    const navigate = useNavigate();

    const submitSuccess = () => {
        setAlertMessage("Salvataggio Completato")
        setAlertShow(true);
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/trips", { replace: true });
    }

    const handleChanges = (e) => {
        setTrip((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.id > 0) {
            putData(trip, submitSuccess)
        } else {
            postData(trip, submitSuccess);
        }
    }

    useEffect(() => {
        if (data.id > 0) {
            setTrip({
                name: data.name,
                description: data.description,
                departure: data.departure,
                arrival: data.arrival,
                flightPrice: data.flightPrice,
                travelPrice: data.travelPrice
            })
        }
    }, [data])


    return (
        <>
            <form className=' row my-2'>
                <div className=' col-12'>
                    <FloatingLabel controlId='txtName' label="Nome" className=' my-2'>
                        <input id='txtName' className=' form-control' name='name' value={trip.name} onChange={handleChanges} placeholder='Nome'></input>
                    </FloatingLabel>
                    <FloatingLabel controlId='txtDescription' label="Descrizione" className=' my-2'>
                        <input id='txtDescription' className=' form-control' name='description' value={trip.description} onChange={handleChanges} placeholder='Descrizione'></input>
                    </FloatingLabel>
                    <FloatingLabel controlId='txtDeparture' label="Partenza" className=' my-2'>
                        <input id='txtDeparture' className=' form-control' type='date' name='departure' value={trip.departure.substring(0, 10)} onChange={handleChanges} placeholder='Partenza'></input>
                    </FloatingLabel>
                    <FloatingLabel controlId='txtArrival' label="Arrivo" className=' my-2'>
                        <input id='txtArrival' className=' form-control' type='date' name='arrival' value={trip.arrival.substring(0, 10)} onChange={handleChanges} placeholder='Arrivo'></input>
                    </FloatingLabel>
                    <FloatingLabel controlId='txtFlightPrice' label="Prezzo Volo" className=' my-2'>
                        <input id='txtFlightPrice' className=' form-control' type='number' min={0} name='flightPrice' value={trip.flightPrice} onChange={handleChanges} placeholder='Prezzo Volo'></input>
                    </FloatingLabel>
                    <FloatingLabel controlId='txtTravelPrice' label="Prezzo Servizio" className=' my-2'>
                        <input id='txtTravelPrice' className=' form-control' type='number' min={0} name='travelPrice' value={trip.travelPrice} onChange={handleChanges} placeholder='Prezzo Servizio'></input>
                    </FloatingLabel>
                </div>
                <div className=" d-flex justify-content-around my-2">
                    <button className=" btn btn-outline-success btn-sm" onClick={handleSubmit}>Salva</button>
                    <Link className=" btn btn-outline-danger btn-sm" to="/trips">Annulla</Link>
                </div>
            </form>
            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}></Alert>
        </>
    )
}

export default TripForm

