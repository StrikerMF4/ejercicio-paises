import React,{useEffect, useState} from "react";
import { getCountries } from "../../functions/CountriesAPI";
import Combobox from "react-widgets/Combobox";
import './CountryInfo.css'

const CountryInfo = () => {
    const [countries, setCountries] = useState([])
    const [country, setCountry] = useState(null)

    useEffect(() => {
        getCountries(setCountries)
    }, [])

    const displayInfo = (country) => {
        if(country instanceof Object){
            setCountry(country);
        }
    }

    return (
        <div>
            <div className="mb-3">
                <Combobox 
                    data={countries}
                    dataKey={item => typeof item === 'string' ? item : item.name.common}
                    textField={item => typeof item === 'string' ? item : item.name.common}
                    placeholder="Selecciona un país"
                    onChange={displayInfo}
                />
            </div>
            <>
                {country != null ? (
                    <div>
                        <div className="row ts-2">
                            <div className="col-3 p-3 flag-container">
                                <img src={country.flags.svg} className="w-100" alt="Flag of the country" />
                            </div>
                            <div className="col px-5">
                                <div className="row">
                                    <p className="display-3">{country.name.common}</p>
                                    <div className="col-2 d-flex flex-column">
                                        <b>Capital:&nbsp;</b>
                                        <b>Región:&nbsp;</b>
                                        <b>Sub-Región:&nbsp;</b>
                                        <b>Lenguajes:&nbsp;</b>
                                        <br></br>
                                        <b>Población:&nbsp;</b>
                                        <b>Superficie:&nbsp;</b>
                                    </div>
                                    <div className="col d-flex flex-column">
                                        {country.capital}<br></br>
                                        {country.region}<br></br>
                                        {country.subregion}<br></br>
                                        {country.region}<br></br>
                                        <br></br>
                                        {country.population}<br></br>
                                        {country.area} m^2<br></br>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ) : ("")}
            </>
        </div>
    )
}

export default CountryInfo;