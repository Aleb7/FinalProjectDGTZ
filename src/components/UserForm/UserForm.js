import React, { useState, useEffect } from 'react'
import { URL_USERS } from '../_Utils/Url';
import { FloatingLabel } from 'react-bootstrap';
import Alert from '../Alert/Alert';
import { usePut, usePost, useGet } from '../_Hooks/Customs';
import { Link, useNavigate } from 'react-router-dom';




// La variabile data viene assegnata un valore predefinito di un oggetto vuoto 
// {} nel caso in cui nessun valore venga passato per quella proprietà quando il componente viene utilizzato.

const UserForm = ({ data = {} }) => {

    const [user, setUser] = useState({
        name: "",
        surname: "",
        password: "",
        email: ""
    })

    const [alertShow, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const { mutate } = useGet(URL_USERS)
    const putData = usePut(URL_USERS, data.id);
    const postData = usePost(URL_USERS);
    const navigate = useNavigate();

    const submitSuccess = () => {
        setAlertMessage("Salvataggio Completato")
        setAlertShow(true);
        mutate();
    }

    const alertDismiss = () => {
        setAlertShow(false);
        navigate("/users", { replace: true }); // la pagina corrente nella cronologia di navigazione sarà solo quella nuova ("/users"), senza possibilità di tornare indietro alla pagina precedente.
    }

    const handleChanges = (e) => {
        setUser((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.id > 0) {
            // Modifica utente esistente
            if (user.email.includes('@')) {
                putData(user, submitSuccess);
            } else {
                window.confirm("È necessario inserire il carattere @ per andare avanti");
            }
        } else {
            // Creazione di un nuovo utente
            if (user.email.includes('@')) {
                postData(user, submitSuccess);
            } else {
                window.confirm("È necessario inserire il carattere @ per andare avanti");
            }
        }
    };

    useEffect(() => {
        if (data.id > 0) {
            setUser({
                name: data.name,
                surname: data.surname,
                email: data.email,
                password: data.password,

            })
        }
    }, [data])





    return (
        <>
            <form className='my-2'>
                <div className='mb-3'>
                    <FloatingLabel controlId='txtName' label="Nome">
                        <input id='txtName' className='form-control' name='name' value={user.name} onChange={handleChanges} placeholder='Nome' />
                    </FloatingLabel>
                </div>
                <div className='mb-3'>
                    <FloatingLabel controlId='txtSurname' label="Cognome">
                        <input id='txtSurname' className='form-control' name='surname' value={user.surname} onChange={handleChanges} placeholder='Cognome' />
                    </FloatingLabel>
                </div>
                <div className='mb-3'>
                    <FloatingLabel controlId='txtEmail' label="Email">
                        <input id='txtEmail' className='form-control' name='email' value={user.email} onChange={handleChanges} placeholder='Email' />
                    </FloatingLabel>
                </div>
                <div className='d-flex justify-content-around my-2'>
                    <button className='btn btn-outline-success btn-sm' onClick={handleSubmit}>Salva</button>
                    <Link className='btn btn-outline-danger btn-sm' to='/users'>Annulla</Link>
                </div>
            </form>

            <Alert show={alertShow} onHide={alertDismiss} message={alertMessage}></Alert>
        </>
    )
}

export default UserForm;
