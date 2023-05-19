import React, { useEffect, useState } from 'react'
import { usePut, usePost, useGet } from '../_Hooks/Customs';
import { URL_TRIPS } from '../_Utils/Url';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel } from 'react-bootstrap';
import Alert from '../Alert/Alert';
import { Link } from 'react-router-dom';
import { BASE_64_PREFIX } from '../_Costants/Img';





const TripForm = ({ data = {} }) => {

    const [trip, setTrip] = useState({
        name: "",
        description: "",
        departure: "",
        arrival: "",
        flightPrice: 0.0,
        travelPrice: 0.0,
        imgSource: ""
    })

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const { mutate } = useGet(URL_TRIPS)
    const putData = usePut(URL_TRIPS, data.id);
    const postData = usePost(URL_TRIPS);
    const navigate = useNavigate();

    const submitSuccess = () => {
        setAlertMessage("Salvataggio Completato")
        setAlertShow(true);
        mutate();
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/trips", { replace: true });
    }

    const setBase64ImgSource = async (file) => {


        var reader = new FileReader();      //crea un file reader
        await reader.readAsDataURL(file);   //legge un file con readAsDataUrl
        reader.onload = function () {       //creo una funzione di load che viene eseguita in modo asincrono quando il caricamento è completato
            setTrip((prevValues) => {       //quando il file è stato caricato viene eseguito il setSong sul campo apposito
                return {
                    ...prevValues,
                    "imgSource": reader.result.replace(BASE_64_PREFIX, "")
                }
            });
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const handleChanges = (e) => {
        if (e.target.name === 'imgSource') {
            setBase64ImgSource(e.target.files[0])
        }
        else {
            setTrip((prevValues) => {
                return {
                    ...prevValues,
                    [e.target.name]: e.target.value
                }
            })
        }
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
                travelPrice: data.travelPrice,
                imgSource: data.imgSource,
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
                    <FloatingLabel controlId='txtImgSource' label="Immagine" className=' my-2'>
                        <input id='txtImgSource' className=' form-control' type='file' accept='image/jpeg' name='imgSource' onChange={handleChanges} ></input>
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

