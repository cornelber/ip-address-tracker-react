import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const TILE_URL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ZOOM_LEVEL = 9;


const FormMap = () => {
  const temporaryCenter = [40.650002, -73.949997];


  return (
    <div className='form-map'>
      <MapContainer center={temporaryCenter} zoom={ZOOM_LEVEL} >
        <TileLayer attribution={TILE_ATTRIBUTION} url={TILE_URL} />
      </MapContainer>
    </div>
  )
}

export default FormMap