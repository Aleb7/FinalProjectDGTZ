import React, { useEffect, useState } from 'react'
import { usePost, usePut } from '../_Hooks/Customs';
import { useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const tripsForm = ({ data = {}, mutate }) => {

    const [trips, setTrips] = useState({

        name: "",
        description: "",
        arrival: "",
        departure: "",
        flightPrice: 0.0,
        travelPrice: 0.0,
        image: "",
        passport: ""
    })

    const fetcher = (url) => axios.get(url).then(result => result.data);

    const putData = usePut("http://localhost:8080/trips", data.id)
    const postData = usePost("http://localhost:8080/trips");

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const navigate = useNavigate();                          //useNavigate permette di tornare alla HomePage di tripss una volta confermata una modifica (vedi alertDismiss)

    useEffect(() => {
        if (data.id > 0) {                                   // per switchare da new ad edit, se data.id > 0 è un edit, sennò è un nuovo campo
            setTrips({

                name: data.name,
                description: data.description,
                arrival: data.arrival ? data.arrival : "",
                departure: data.departure ? data.departure : "",
                flightPrice: data.flightPrice,
                travelPrice: data.travelPrice,
                image: data.image,
                passport: data.passport

            })
        }
    }, [data])

    const handleChange = (e) => {
        settripss((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //codice di salvataggio
        if (data.id > 0) {                                    //se l'id è maggiore di 0 siamo sicuramente su una pagina /edit
            putData(trips, submitSuccess)
        }
        else {                                                //se l'id è undefined (cioè non specificato nell'url) siamo in "new"
            postData(trips, submitSuccess)
        }
    }

    const submitSuccess = () => {
        setAlertMessage("Salvataggio Completato")
        setAlertShow(true);
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/trips", { replace: true });              //{replace:true} rimpiazza praticamente la pagina, senza aprirne di nuove
        mutate();                                           // aggiorna i dati precedentemente matchati
    }

    return (
        <>
            <form className="row" onSubmit={handleSubmit}> {/* si mette qui perchè ha effetto su tutti*/}
                <div className="col-6">
                    <label className="form-label">Nome</label>
                    <input className="form-control form-control-sm" name="name" value={trips.name} onChange={handleChange} />
                </div>
                <div className="col-6">
                    <label className="form-label">Descrizione Viaggio</label>
                    <input className="form-control form-control-sm" name="description" value={trips.description} onChange={handleChange} />
                </div>
                <div className="col-4">
                    <label className="form-label" >Partenze</label >
                    <input className="form-control form-control-sm" type='date' name="departure" value={trips.departure.substring(0, 10)} onChange={handleChange} />
                </div>
                <div className="col-4">
                    <label className="form-label">Arrivi</label>
                    <input className="form-control form-control-sm" type='date' name="arrival" value={trips.arrival.substring(0,10)} onChange={handleChange} />
                </div>
                <div className="col-2">
                    <label className="form-label">Costo Servizio</label>
                    <input className="form-control form-control-sm" type='number' min="0" name="travelPrice" value={trips.travelPrice} onChange={handleChange} />
                </div>
                <div className="col-2">
                    <label className="form-label">Costo Volo</label>
                    <input className="form-control form-control-sm" type='number' min="0"  name="flightPrice" value={trips.flightPrice} onChange={handleChange} />
                </div>
                <div className="col-2">
                    <label className="form-label">Passaporto</label>
                    <input className="form-control form-control-sm"  name="passport" value={trips.passport} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <div className='d-flex justify-content-between m-3'>
                        <button className='btn btn-success' type='submit'>
                            Salva
                        </button>
                        <Link className=" btn btn-outline-danger" to="/trips">Annulla</Link>
                    </div>
                </div>


            </form>

            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}></Alert>
        </>
    )
}

export default tripsForm
