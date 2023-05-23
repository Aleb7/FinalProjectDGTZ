import { useParams } from 'react-router-dom'
import { URL_USERS } from "../_Utils/Url";
import { useGet } from '../_Hooks/Customs';
import UserForm from './UserForm';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faIdCard } from '@fortawesome/free-solid-svg-icons';





const EditTrip = () => {

    const { id } = useParams();

    const { data, error } = useGet(URL_USERS, id)


    if (data) {
        return (
            <div className=' container '>

                <h5>Modifica Utente</h5>
                <UserForm data={data} ></UserForm>
                <div className='container d-flex justify-content-center'>
                    <div className='row'>

                        <div className='card-custom-user w-25 p-3' style={{minWidth:"300px"}}>
                            <div className=' fw-bold'>
                                <FontAwesomeIcon icon={faIdCard} /> {data.id}
                            </div>
                            <div className='card-custom-user__title'>
                                <FontAwesomeIcon icon={faUser} /> {data.name} {data.surname}
                            </div>
                            <div>
                                <p><FontAwesomeIcon icon={faEnvelope} /> {data.email}</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default EditTrip
