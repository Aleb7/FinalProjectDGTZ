
import { Link, Outlet } from 'react-router-dom'
import React, { useState } from 'react'
import { useGet } from '../_Hooks/Customs'
import { URL_TRIPS } from '../_Utils/Url'
import { Table } from 'react-bootstrap'
import Alert from '../Alert/Alert'
import TripsRow from './TripsRow'




const Trips = () => {

  const { data, error, isLoading, mutate } = useGet(URL_TRIPS)

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
        <h4>Elenco Viaggi</h4>
        <Link className=' btn btn-outline-success btn-sm my-2' to="new">Nuovo Viaggio</Link>
        {/* passa come props la chiave mutate che porta alla funzione mutate */}
        <Outlet context={{ mutate }}/>
        <Table responsive variant='dark'>
          <thead>
            <tr>
              <th className=' col-1'>#</th>
              <th className=' col-1'>Nome</th>
              <th className=' col-6'>Descrizione</th>           
              <th className=' col-1'>Partenza</th>
              <th className=' col-1'>Arrivo</th>
              <th className=' col-1'>Costo Volo</th>
              <th className=' col-1'>Costo Servizio</th>
              </tr>
              </thead>
            <tbody>
              {data.map(trips => (
                <TripsRow key={trips.id} trips={trips} deleteSuccess={deleteSuccess}></TripsRow>
              ))}
            </tbody>          
        </Table>
        <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}></Alert>
      </div>


    )
  }


  else if (isLoading) {
    <div>Loading . . .</div> // qui si potrebbe mettere un loader
  }
  else if (error) {
    <div>Errore di caricamento</div> // qui potete renderizzare un componente ad hoc oppure navigare ad una pagina di errore





  }
}



  export default Trips;
