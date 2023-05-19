import React from 'react'
import { useGet } from '../_Hooks/Customs';



const FetchSelect = ({ className, name, value, onChange, url, filterFn }) => {

    const { data } = useGet(url)


    if (data) {
        const filteredData = filterFn ? data.filter(filterFn) : data   //se gli passo una filterFunction filtra i dati sennò passa normalmente i dati
        return (
            <select className={className} name={name} value={value} onChange={onChange}>
                <option value={0}> -- Seleziona --</option>
                {filteredData.map(item => <option key={item.id} value={item.id} >{item.name} {item.surname} </option>)}
            </select>
        );
    }

    return (
        <select className={className}>
            <option value={0}>-- Seleziona --</option>
        </select>
    )

}

export default FetchSelect;
