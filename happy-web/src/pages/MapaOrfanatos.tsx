import React, {useEffect, useState} from 'react';
import mapMarkerImg from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import '../styles/pages/MapaOrfanatos.css';

import mapIcon from '../utils/mapIcon';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import api from '../services/api';


interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function MapaOrfanatos() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    useEffect(()=> {
        api.get('orphanages').then(response => {
            setOrphanages(response.data);
        })
    }, [])

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

            
            {orphanages.map(orphanage => {
            return (
                <Marker
                icon = {mapIcon}
                position={[orphanage.latitude, orphanage.longitude]}
                key={orphanage.id}                    
                >
            <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {orphanage.name}
                <Link to={`orfanatos/${orphanage.id}`}>
                    <FiArrowRight size={20} color="#FFF"/>
                </Link>
            </Popup>
            </Marker> )
            })}
            )

            </Map>


            <Link to="/orfanatos/cadastrar" className="create-orphanage">
                <FiPlus size="32" color="#fff"/>
            </Link>
        </div>
    )
}

export default MapaOrfanatos;