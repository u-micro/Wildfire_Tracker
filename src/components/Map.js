import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationinfoBox from './LocationinfoBox'

const Map = ({ eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo]=useState(null)

    const markers= eventData.map(ev =>{
        if(ev.categories[0].id==8) { 
            return <LocationMarker lat={ ev.geometries[0].coordinates[1] } 
            lng={ ev.geometries[0].coordinates[0] } onClick={() => setLocationInfo({id: ev.id,
            title: ev.title })} />
        }
        return null;
    })
  return (
    <div className="map">
        <GoogleMapReact
            bootstrapURLKeys={{ key:
                '# Enter your google map API here in .env format or any other format' }}
                 defaultCenter={ center }
                 defaultZoom={ zoom }
        >
            {markers}
            
        </GoogleMapReact>
        { locationInfo && <LocationinfoBox info={locationInfo} /> }
    </div>
  )
}
//using default values for the map center point and zoom level
Map.defaultProps = {
    center:{
        lat: 21.90753221670896, 
        lng: 81.94323165638951  
        
    },
    zoom: 6
}

export default Map
