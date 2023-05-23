import React from 'react'
import { useGet } from '../_Hooks/Customs';



const FetchSelect = ({ className, name, value, onChange, url, filterFn }) => {  //componente react a cui vengono passati determinati parametri e rendere flessibile il componente in base 
    const { data } = useGet(url)        //prende tramite Hook useGet i dati tramite chiamati api


    if (data) {
        const filteredData = filterFn ? data.filter(filterFn) : data
        //se gli passo una filterFunction filtra i dati sennò passa normalmente i dati, io la uso per filtrare 
        //gli utenti che sono già prenotati per i viaggi e che quindi non dovrebbero essere selezionati per lo stesso viaggio
        return (
            <select className={className} name={name} value={value} onChange={onChange}>
                <option value={0}> -- Seleziona --</option>
                {filteredData.map(item =>
                    <option key={item.id} value={item.id} >{item.name} {item.surname}
                    </option>)}
            </select>
        );
    }
    {/* se non sono stati ottenuti dati (quindi data è undefined) viene restituito al componente select un'unica opzione "seleziona" */ }
    return (

        <select className={className}>
            <option value={0}>-- Seleziona --</option>
        </select>
    )

}

export default FetchSelect;
