import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => 
// Fai una richiesta HTTP GET all'URL specificato
axios.get(url)
// Quando la richiesta è completata, estrai i dati dalla risposta
.then(result => result.data);

// -- INIZIO -> useGet -> Hook per il fetching dei dati

const useGet = (url, id= 0) => {

    let finalUrl = url;

    //lavorando con id autoincrementali sappiamo che non saranno mai minori di 1
    if(id > 0) {
        finalUrl += ("/" + id)
    }

    const { data, error, mutate } = useSWR(finalUrl, fetcher)

    return {

        data: data,
        error: error,
        isLoading: !error & !data,
        mutate: mutate

    }
}

    // -- FINE -> useGet -> Hook per il fetching dei dati

    // --------------------------------------------------------------------------------------------------

    // -- INIZIO -> usePut -> Hook per la modifica dei dati

    const usePut = (url,id) => {
        const finalUrl = url + "/update/" +   id

        return (data, successFn) => {

            axios.put(finalUrl,data).then(result => {
                if(result.data){                                 //se la richiesta va a buon fine quindi la risposta dal server ha un campo 'data' allora esegui successFn;
                    successFn();
                }
            })
        }
    }

    // -- FINE -> usePut -> Hook per la modifica dei dati

    // --------------------------------------------------------------------------------------------------

    // -- INIZIO -> usePost -> Hook per la creazione dei dati

    const usePost = (url) => {
        return (data, successFn) => {                      //  //data -> l'oggetto con i dati da salvare || SuccessFn -> la funzione da eseguire nel then
            axios.post(url, data).then(result => {
                if (result.data) {
                    successFn();
                }
            })
        }
    }

    // -- FINE -> usePost -> Hook per la creazione dei dati

    // --------------------------------------------------------------------------------------------------

    // -- INIZIO -> useDelete -> Hook per la creazione dei dati

    const useDelete = (url,id) => {
        const finalUrl = url + "/delete/" + id;
        return (successFn) => {
            axios.delete(finalUrl).then(result =>{
                if(result.data) {
                    successFn();
                }
            })
        }
    }

    // -- FINE -> useDelete -> Hook per la creazione dei dati

    export {useGet, usePut, usePost, useDelete};


