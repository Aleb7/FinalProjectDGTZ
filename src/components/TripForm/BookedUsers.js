import React from 'react'
import { useParams } from 'react-router-dom'
import { useGet } from '../_Hooks/Customs';
import { URL_BOOKEDTRIPS, URL_TRIPS, URL_USERS } from '../_Utils/Url';




const BookedUsers = () => {

    const { id } = useParams();
    const { data } = useGet(URL_TRIPS + id)


    return (
        <>
            <div>
                <h5>Lista Utenti Prenotati + {id}</h5>
                {data && data.map((user) => (


                    <p>Ciao {user.name}</p>
                ))}
            </div>

        </>
    )
}

export default BookedUsers;

        // const users = useGet(URL_USERS)
    // const bookedTrips = useGet(URL_BOOKEDTRIPS)

    // const getUserList = (users, id, bookedTrips) => {
    //     console.log(users, id, bookedTrips)
    //     const filteredTrips = bookedTrips.filter(trip => trip.idTrip === id)
    //     return filteredTrips.map(trip => {

    //         const index = users.findIndex(user => user.id === trip.idUser)

    //         if (index !== -1) {
    //             return users[index]
    //         }
    //     })
    // }

    // const data = getUserList(users, id, bookedTrips)
