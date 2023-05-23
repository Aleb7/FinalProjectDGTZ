
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const Alert = (props) => {    //accetta un oggetto props come argomento
  return (
    <Modal            //crea Modal (finestra di popUp), la centra rispetto allo schermo e definsce grandezza lg
      {...props}
      size="lg" centered>  

      
      <Modal.Body>    
        <p>
          {props.message}   
        </p>

        {/* props.message passerà il messaggio quando verrà messo come costante in caso in cui venga richiamato l'Alert */}
      </Modal.Body>
      <Modal.Footer className=' justify-content-center'>
        <Button className=' btn btn-success ' onClick={props.onHide}>Conferma</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Alert;

//componente creato per far comparire un alert specifico quando richiamato con <Alert />