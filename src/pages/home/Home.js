
import React from 'react'
import CountryInfo from '../../components/CountryInfo/CountryInfo'
import RegionInfo from '../../components/RegionInfo/RegionInfo';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "react-widgets/styles.css";

function Home() {
  return (
    <div className="container">
      <nav className='mb-3'>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-country-tab" data-bs-toggle="tab" data-bs-target="#nav-country" type="button" role="tab" aria-controls="nav-country" aria-selected="true">Por país</button>
          <button className="nav-link" id="nav-region-tab" data-bs-toggle="tab" data-bs-target="#nav-region" type="button" role="tab" aria-controls="nav-region" aria-selected="false">Por región</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-country" role="tabpanel" aria-labelledby="nav-country-tab" tabIndex="0">
          <CountryInfo></CountryInfo>
        </div>
        <div className="tab-pane fade" id="nav-region" role="tabpanel" aria-labelledby="nav-region-tab" tabIndex="0">
          <RegionInfo></RegionInfo>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
