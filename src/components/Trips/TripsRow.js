import React from 'react'
import { useDelete } from '../_Hooks/Customs';
import { URL_TRIPS } from '../_Utils/Url';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const TripsRow = ({ trips, deleteSuccess }) => {


    const deleteData = useDelete(URL_TRIPS, trips.id)

    const performDelete = () => {
        deleteData(deleteSuccess);
    }




    return (
        <tr>
            <td className=' align-middle'>
                <Link className='btn btn-info my-2 mx-1' to={"edit/" + trips.id}>
                    <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                </Link>
                <button className="btn btn-danger" onClick={performDelete}>
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                </button>
            </td>
            <td className=' align-middle'>{trips.name}</td>
            <td className=' align-middle'>{trips.description}</td>
            <td className=' align-middle'>{trips.departure.substring(0, 10)}</td>
            <td className=' align-middle'>{trips.arrival.substring(0, 10)}</td>
            <td className=' align-middle'>{trips.flightPrice + "€"}</td>
            <td className=' align-middle'>{trips.travelPrice + "€"}</td>
        </tr>
    )


}

export default TripsRow;
