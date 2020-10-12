import React from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/MapaOrfanatos.css';

import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapaOrfanatos() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>
                <footer>
                    <strong>Porto Alegre</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map
                center={[-30.0398678,-51.1507156]}
                zoom={13}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

            </Map>


            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#fff"/>
            </Link>
        </div>
    )
}

export default MapaOrfanatos;