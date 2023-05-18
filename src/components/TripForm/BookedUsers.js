import React from 'react'
import { useParams } from 'react-router-dom'
import { useGet } from '../_Hooks/Customs';
import { URL_BOOKEDUSERS } from '../_Utils/Url';

const BookedUsers = () => {

    const { id } = useParams();
    const { data } = useGet(URL_BOOKEDUSERS, id)

    console.log(data);

    if (data) {
        return (
            <div>
                <h5 className=' text-center mt-2'> Utenti Prenotati</h5>
                {data.length === 0 ? <div className=' text-center'> Non ci sono utenti prenotati</div> :
                    data.map((user) => (

                        <p className=' text-center my-2 border-bottom'> ◉ {user.name} {user.surname} || {user.email}</p>
                    ))}
            </div>
        )
    }
}

export default BookedUsers;
