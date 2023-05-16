import React, { useState } from 'react';
import { useDelete, useGet } from '../_Hooks/Customs';
import { URL_BOOKEDTRIPS, URL_TRIPS } from '../_Utils/Url';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Alert } from 'react-bootstrap';



const TripItem = ({ trips, deleteSuccess }) => {

   

    const [showDelete, setShowDelete] = useState(false);
    const { data, error } = useGet(URL_BOOKEDTRIPS + '/trip/' + trips.id);

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const deleteData = useDelete(URL_TRIPS, trips.id);

    const performDelete = () => {
        deleteData(deleteSuccess);

    };







    return (
        <article className='col-12 col-md-6 col-lg-6'>
            <div className='my-2 rounded'>
                <Card text='black' className='border border-2 border-dark h-100 w-100'>
                    <Card.Body className='d-flex flex-column justify-content-center'>
                        <div className='col-12'>
                            <div className='d-flex justify-content-end'>
                                <Link className='btn btn-outline-warning btn-sm mx-1' to={"update/trip/" + trips.id}>
                                    <FontAwesomeIcon icon={faPencil} />
                                </Link>
                                <button className='btn btn-outline-danger btn-sm' onClick={() => setShowDelete(true)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                        </div>
                        <div className='text-center mx-auto'>
                            <Card.Title>{trips.name}</Card.Title>
                            <Link className="btn btn-info btn-sm" to={"trip/" + trips.id}>Scopri di più</Link>
                            
                        </div>
                    </Card.Body>
                </Card>
               



                <div className=' col-12'>
                    <Alert className=' mt-2' show={showDelete} variant="danger">
                        <Alert.Heading>Eliminare {trips.name} ?</Alert.Heading>
                        <div className="d-flex justify-content-end">
                            {/* spostiamo qua performDelete perchè cliccando il bottone elimina visulizza il messaggio e quando confermi il messaggio cancella il dato */}
                            <button className=' btn btn-outline-success btn-sm mx-2' onClick={performDelete}>
                                Conferma
                            </button>
                            <button className='btn btn-outline-danger btn-sm' onClick={() => setShowDelete(false)} >
                                Annulla
                            </button>
                        </div>
                    </Alert>
                </div>
            </div>
        </article >

    );
};

export default TripItem;
