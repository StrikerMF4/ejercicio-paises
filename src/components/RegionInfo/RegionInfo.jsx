import React,{useEffect, useState} from "react";
import { getRegions, getRegion } from "../../functions/CountriesAPI";
import Combobox from "react-widgets/Combobox";
import './RegionInfo.css'

const RegionInfo = () => {
    const [regions, setRegions] = useState([])
    const [region, setRegion] = useState(null)

    useEffect(() => {
        getRegions(setRegions)
    }, [])

    const displayInfo = (item) => {
        getRegion(setRegion, item);
    }

    const calculateDensity = () => {
        if(region != null){
            const population = region
                .map(country => country.population)
                .reduce((a, v) => a = a + v, 0);

            const surface = region
                .map(country => country.area)
                .reduce((a, v) => a = a + v, 0);
            
            return population / surface;       
        }
    }

    return (
        <div>
            <div className="mb-3">
                <Combobox 
                    data={regions}
                    placeholder="Selecciona una región"
                    onChange={displayInfo}
                />
            </div>
            <>
                {region != null && region.length > 0 ? (
                    <div>
                        <p>Densidad de población: {calculateDensity().toLocaleString(undefined, {maximumFractionDigits:2})} hab./km²</p>

                        <h5>Paises</h5>
                        {region.map(country => (
                            <div className="row region-item" key={country.name.official}>
                                <div className="col-1">
                                    <img src={country.flags.svg} className="w-100" />
                                </div>
                                <div className="col">
                                    <p>{country.name.official}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : ("")}
            </>
        </div>
    )
}

export default RegionInfo;