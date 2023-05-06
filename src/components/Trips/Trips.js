
import { Link, Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { useGet } from '../_Hooks/Customs'
import { URL_TRIPS } from '../_Utils/Url'
import { Table } from 'react-bootstrap'
import Alert from '../Alert/Alert'
import TripsItem from './TripsItem'



const Trips = () => {

  const { data, error, mutate } = useGet(URL_TRIPS)

  const [alertShow, setAlertShow] = useState(false);      // viene impostato a false perchè non deve mostrarsi all'apertura della pagina ma all'avvenuta funzione
  const [alertMessage, setAlertMessage] = useState("");   // "" perchè inizialmente il messaggio è vuoto e non c'è nulla da mostrare la prima volta

  const alertDismiss = () => {
    setAlertShow(false)
    mutate();
  }

  const deleteSuccess = () => {
    setAlertMessage("Eliminazione Completata!")
    setAlertShow(true);
  }

  if (data) {
    return (

      <div className='container'>
        <h5>Viaggi</h5>
        <Link to="new" className=' btn btn-outline-success btn-sm'>Nuovo Viaggio</Link>
        <Outlet context={{ mutate }} />
        <Table responsive variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Partenza</th>
              <th>Arrivo</th>
              <th>Costo Servizio</th>
              <th>Costo Volo</th>
              <th>Passaporto Necessario</th>
            </tr>
          </thead>
        </Table>

        {data.map(trips => (
          <TripsItem key={trips.id} trips={trips} deleteSuccess={deleteSuccess}></TripsItem>
        ))}

        <Alert show={alertShow} onHide={alertDismiss} message={alertMessage} />
      </div>
    );
  }

  // else if (isLoading) {
  //   <div>Loading . . .</div> // qui si potrebbe mettere un loader
  // }
  // else if (error) {
  //   <div>Errore di caricamento</div> // qui potete renderizzare un componente ad hoc oppure navigare ad una pagina di errore
  // }

}



export default Trips;
