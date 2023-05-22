import React from 'react'
import { useDelete } from '../_Hooks/Customs';
import { URL_USERS } from '../_Utils/Url';
import './CardCustomUser.scss'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faUser, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';



const CardCustomUser = ({ user, deleteSuccess }) => {



    const deleteData = useDelete(URL_USERS, user.id);

    const navigate = useNavigate();

    const performDelete = () => {
        deleteData(deleteSuccess);

    };


    return (
        <div className='col-md-6 col-lg-4'>
            <div className='card-custom-user'>
                <div className='card-custom-user__buttons'>
                    <button className='btn btn-sm' onClick={(event) => {
                        navigate("update/user/" + user.id)
                    }}>
                        <FontAwesomeIcon icon={faPencil} />
                    </button>
                    <button className=' btn btn-sm' onClick={(event) => {
                        const confirmation = window.confirm("Sei sicuro di voler cancellare " + user.name + " " + user.surname + "?")
                        if (confirmation) {
                            performDelete()

                        }
                    }}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
                <div className='card-custom-user__info'>
                    <div className=' fw-bold'>
                        <FontAwesomeIcon icon={faIdCard} /> {user.id}
                    </div>
                    <div className='card-custom-user__title'>
                        <FontAwesomeIcon icon={faUser} /> {user.name} {user.surname}
                    </div>
                    <div>
                        <p><FontAwesomeIcon icon={faEnvelope} /> {user.email}</p>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default CardCustomUser
