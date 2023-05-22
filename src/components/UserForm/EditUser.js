import { useParams } from 'react-router-dom'
import { URL_USERS } from "../_Utils/Url";
import { useGet } from '../_Hooks/Customs';
import UserForm from './UserForm';
import { Card } from 'react-bootstrap';
import { useState } from 'react';





const EditTrip = () => {

    const { id } = useParams();

    const { data, error } = useGet(URL_USERS, id)


    if (data) {
        return (
            <div className=' container'>
                <h5>Modifica Utente</h5>
                <UserForm data={data}></UserForm>
                <Card text="black">

                    <Card.Body>
                        <div className=' col-12'>
                            <div className=' d-flex float-end'>

                            </div>
                        </div>
                        <Card.Title className=' text-center'>{data.name} {data.surname}</Card.Title>
                        <Card.Text className='d-flex justify-content-center'>{data.email}</Card.Text>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default EditTrip
