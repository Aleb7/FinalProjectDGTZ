
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';

const Alert = (props) => {
  return (
    <Modal
      {...props}
      size="lg" centered>


      <Modal.Body>
        <p>
          {props.message}
        </p>
      </Modal.Body>
      <Modal.Footer className=' justify-content-center'>
        <Button className=' btn btn-success ' onClick={props.onHide}>Conferma</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Alert;