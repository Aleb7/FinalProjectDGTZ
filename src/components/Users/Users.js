import React, { useState } from 'react'
import { useGet } from '../_Hooks/Customs'
import { URL_USERS } from '../_Utils/Url'
import CardCustomUser from './CardCustomUser'
import Alert from '../Alert/Alert'
import { Link } from 'react-router-dom'

const Users = ({ }) => {

    const { data, mutate } = useGet(URL_USERS)

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const alertDismiss = () => {
        setAlertShow(false);
        mutate();
    }

    const deleteSuccess = () => {
        setAlertMessage("Eliminazione Completata")
        setAlertShow(true);
        mutate();
    }

    if (data) {
        return (
            <div className='container'>
                <h5>Utenti</h5>
                <Link to="new" className="btn btn-outline-success btn-sm">Nuovo Utente</Link>
                <div className='row'>
                    {data.map(user => (
                        <CardCustomUser key={user.id} user={user} deleteSuccess={deleteSuccess}> </CardCustomUser>
                    ))}
                </div>
                <Alert show={alertShow} onHide ={alertDismiss} message ={alertMessage} />
            </div>
            
        )
    }
}

export default Users
