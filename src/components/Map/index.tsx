import { FunctionComponent, useEffect, useRef, useState } from "react";
import Mapbox, { Layer, MapRef, Popup, Source } from 'react-map-gl';
import { mapboxInitialViewState } from "../../helpers/data";
import features from '../../assets/features.json';
import mapboxgl from 'mapbox-gl';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'; // Load worker code separately with worker-loader
//@ts-ignore
mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default

interface MapProps {
    loading:boolean
    day:string
}

interface PopupProps {
    latitude:number;
    longitude:number;
    wikidata:string;
    place_name:string;
}
const Map: FunctionComponent<MapProps> = (props:MapProps) => {    
    const mapbox = useRef<MapRef | null>(null)
    const [showPopup, setShowPopup] = useState(false);
    const [popUp, setPopUp] = useState<PopupProps>({latitude:0,longitude:0,wikidata:'',place_name:''})

    const onMapClick = (e:mapboxgl.MapLayerMouseEvent) => {
        const features = mapbox.current && mapbox.current.queryRenderedFeatures(e.point);
        setShowPopup(false)
        if (features && features[0].layer.id === 'point') {
            setPopUp({
            longitude:e.lngLat.lng,
            latitude:e.lngLat.lat,
            //@ts-ignore
            wikidata: features[0].properties.wikidata,
            //@ts-ignore
            place_name: features[0].properties.place_name
            })
            setShowPopup(true)
        }
    }
    
    useEffect(()=>{
        mapbox.current && mapbox.current.flyTo({
            //@ts-ignore
            center:features.features.find((i)=>i.properties.day===props.day).geometry.coordinates,
            zoom:10,
            duration:2500,
            speed:1
        })
    },[props.loading,props.day])
    return (
        <div className='w-full'>
            <Mapbox
                ref={mapbox}
                initialViewState={mapboxInitialViewState}
                mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
                mapStyle="mapbox://styles/omnifarter/cl3iglt3u000915pnnpr1s6ja"
                onClick={onMapClick}
            >
                {/* 
                //@ts-ignore */}
                <Source type="geojson" data={features}>
                <Layer id='point' type='symbol' layout={{"icon-image":'map-marker'}} paint={{"icon-color":'#ffc0cb'}} />
                {showPopup && (
                <Popup 
                anchor='bottom'
                className='bg-white rounded-lg'
                closeButton={false}
                longitude={popUp.longitude} latitude={popUp.latitude}
                onClose={() => setShowPopup(false)}
                >
                    <div className='rounded-lg'>
                        <h1 className='text-lg'>{popUp.place_name}</h1>
                    </div>
                </Popup>)}
                </Source>
            </Mapbox>        
        </div>
    );
}
 
export default Map;