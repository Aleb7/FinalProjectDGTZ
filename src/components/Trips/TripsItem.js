import React, { useState } from 'react'
import { useDelete, useGet } from '../_Hooks/Customs';
import { URL_TRIPS } from '../_Utils/Url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const TripsItem = ({ trips, deleteSuccess }) => {

  const [showDelete, setShowDelete] = useState(false);

  // const { data: users, error: userError } = useGet(URL_USERS, trips.idUsers)
  // const { data: bookedTrips, error: bookedTripsError } = useGet(URL_BOOKEDTRIPS, trips.idBookedTrips)

  const deleteData = useDelete(URL_TRIPS, trips.id)

  const performDelete = () => {
    deleteData(deleteSuccess);
  }

  return (
    <tr>
      <td className=' align-middle'>
        <Link className="btn btn-info" to={"edit/" + trips.id}>
          <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
        </Link>
        <button className=' btn text-danger' onClick={performDelete}>
          <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </button>
      </td>
      <td>
        <div>{trips.name}</div>
        <div className=' small'>{trips.arrival}</div>
        <div className=' small'>{trips.departure}</div>
      </td>
      <td className=' align-middle'> {trips.flightPrice}</td>
      <td className=' align-middle'> {trips.travelPrice}</td>
      <td className=' align-middle'> {trips.passport}</td>
    </tr>
  )
}

export default TripsItem;
