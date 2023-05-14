import React, { useState, useEffect } from "react";
import FetchSelect from "../FetchSelect/FetchSelect";
import { Link, useParams } from "react-router-dom";
import { usePost } from "../_Hooks/Customs";
import { URL_BOOKEDTRIPS } from "../_Utils/Url";
import Alert from "../Alert/Alert";


const BookingForm = ({ idTrip, data = {} }) => {
  const { id } = useParams();


  const [booking, setBooking] = useState({
    idTrip: idTrip,
    idUser: 0
  });

  const [trip, setTrip] = useState({
    name: ""
  });

  const [alertShow, setAlertShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const postBooking = usePost(URL_BOOKEDTRIPS + '/trip/:id');

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

  useEffect(() => {
    if (data.id > 0) {
      setTrip({
        name: data.name
      })
    }
  }, [data])
  const alertDismiss = () => {
    setAlertShow(false);
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="card shadow-sm border-0 my-2">
              <div className="card-body">
                <h5 className="card-title">Prenotazione per volo</h5>
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
                <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}></Alert>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}



export default BookingForm;
