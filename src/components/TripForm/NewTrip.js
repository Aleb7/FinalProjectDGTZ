import { useOutletContext } from 'react-router-dom';
import TripForm from './TripForm';


const NewTrip = () => {

    const { mutate } = useOutletContext(); //useOutletContext permette di reperire le proprietà e/o funzioni passate al "context" dell'Outlet (vedi Trips.js)

    
        return (

            <>
                <div className="m-2 p-2 border">
                    <h5>Nuova Canzone</h5>
                    <TripForm  mutate={mutate}></TripForm>
                </div>
            </>
        );
    }


export default NewTrip;

