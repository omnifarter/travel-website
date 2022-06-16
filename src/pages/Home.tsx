import { FunctionComponent, useEffect, useRef, useState } from "react";
import MediaQuery from "react-responsive";
import Carousel from "../components/Carousel";
import Indicators from "../components/Carousel/Indicators";
import { data } from "../helpers/data";
import { sleep } from "../helpers/utils";
import withLoader from "../helpers/withLoader";
import PhotoCollage from "../components/PhotoCollage";
import Card from "../components/Card";
import Header from "../components/Carousel/Header";
import {FaArrowLeft} from "react-icons/fa"
import Map from "../components/Map";
import Loader from "../components/Loader";
import Timeline from "../components/Timeline";

const MediaQueryWithLoader = withLoader(MediaQuery)
interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    const [loading, setLoading] = useState(true)
    const [overlay, setOverlay] = useState(false)
    const [selected, setSelected] = useState('1')

    const loadAssets = async () => {
        await sleep(4000)
        setLoading(false)
    }

    useEffect(()=>{
        loadAssets()
    },[])


    
    const onClickIndicator = (abbr:string) => {
        setSelected(abbr)
    }
    const showOverlay = () => {
        setOverlay(true)
    }
    const hideOverlay = () => {
        setOverlay(false)
    }

    return (
        <>
        <MediaQuery minWidth={768} >
            <div className='flex flex-col gap-8'>
                <div className='flex flex-row gap-8 '>
                    <div className='flex w-[50vw] flex-col gap-8'>
                        <Timeline />
                    </div>
                    <div className='flex w-[50vw] h-screen fixed top-0 right-0'>
                        <Map loading={loading} day={selected} />
                    </div>
                </div>
            </div>
        </MediaQuery>
        </>
    );
}
 
export default Home;