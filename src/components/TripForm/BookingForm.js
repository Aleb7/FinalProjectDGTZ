import React, { useState, useEffect } from "react";
import FetchSelect from "../FetchSelect/FetchSelect";
import { Link, useParams } from "react-router-dom";
import { usePost, useGet } from "../_Hooks/Customs";
import { URL_BOOKEDTRIPS, URL_BOOKEDUSERS, URL_TRIPS } from "../_Utils/Url";
import Alert from "../Alert/Alert";



const BookingForm = () => {
  const { id } = useParams();

  const { data, error } = useGet(URL_TRIPS, id);

  const { utenti } = useGet(URL_BOOKEDUSERS, id);



  const [booking, setBooking] = useState({
    idTrip: id,
    idUser: 0
  });



  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const postBooking = usePost(URL_BOOKEDTRIPS);

  const handleChanges = (e) => {
    setBooking((prevValues) => {
      return {
        ...prevValues,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postBooking(booking, () => {
      setAlertMessage("Salvataggio Completato")
      setAlertShow(true);
    });
  }


  const alertDismiss = () => {
    setAlertShow(false);
    // navigate {`/trips/trip/${id}`}
  }


  if (data) {
    return (
      <>
        <div className="container">
          <div className="card shadow-sm border-0 my-4">
            <div className="card-body">
              <h5 className="card-title">Prenotazione per volo per {data.name}</h5>
              <form>
                <div className="form-group">
                  <label>Utenti</label>
                  <FetchSelect className="form-control form-control-sm" name="idUser" value={booking.idUser} onChange={handleChanges} url="http://localhost:8080/users" />
                  <div className="d-flex justify-content-around mt-3">
                    <button className="btn btn-outline-success" onClick={handleSubmit}>Salva</button>
                    <Link className="btn btn-outline-secondary" to={`/trips/trip/${id}`}>Annulla</Link>
                  </div>
                </div>
              </form>
              <h5 className=' text-center mt-2'>Lista Utenti Prenotati</h5>
              {utenti && utenti.map((user) => (
                <p className=' text-center my-2'> ◉ {user.name} {user.surname} || {user.email}</p>
              ))}
              
              <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}></Alert>
            </div>
          </div>
        </div>
      </>
    );
  }
}



export default BookingForm;
