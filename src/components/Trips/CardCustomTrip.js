import React from 'react'
import './CardCustomTrip.scss'
import { faArrowRight, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useDelete } from '../_Hooks/Customs'
import { URL_TRIPS } from '../_Utils/Url'
import { BASE_64_PREFIX } from '../_Costants/Img'


const CardCustomTrip = ({ trip, deleteSuccess }) => {


    const navigate = useNavigate();
    const deleteData = useDelete(URL_TRIPS, trip.id);

    const performDelete = () => {
        deleteData(deleteSuccess);

    };

    const imgSource = trip.imgSource ? `${BASE_64_PREFIX}${trip.imgSource}` : 'https://ithhostels.com/wp-content/uploads/2021/04/honeymoon_road_trip_1.jpg' //se c'è imgSource creamelo col prefisso sennò usa il link costante

    return (
        <div className='col-md-6 col-lg-4'>
            <div className='card-custom-trip' role='button' onClick={() => navigate("trip/" + trip.id)}>
                <div className='card-custom-trip__buttons'>
                    <button className='btn btn-sm' onClick={(event) => {
                        event.stopPropagation(); //per evitare che cliccando i pulsanti mi clicchi la card generale e navighi nel viaggio
                        navigate("update/trip/" + trip.id)
                    }}>
                        <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <button className=' btn btn-sm' onClick={(event) => {
                        event.stopPropagation();
                        const confirmation = window.confirm("Sei sicuro di voler cancellare il viaggio per " + trip.name + "?")
                        if (confirmation) {
                            performDelete()

                        }
                    }}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
                <img className='card-custom-trip__img' src={imgSource} alt={trip.name} />
                <div className='card-custom-trip__info'>
                    <div className='card-custom-trip__title'>
                        {trip.name}
                    </div>
                    <div className='card-custom-trip__footer'>
                        <div className='card-custom-trip__price-container'>
                            <div>
                                A partire da:
                            </div>
                            <div >
                                <span className=' card-custom-trip__price'> {trip.travelPrice}€</span>/persona
                            </div>


                        </div>
                        <button className=' btn btn-sm card-custom-trip__detail-button'>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CardCustomTrip;
