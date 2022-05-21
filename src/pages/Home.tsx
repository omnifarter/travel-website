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

const MediaQueryWithLoader = withLoader(MediaQuery)
interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    const [loading, setLoading] = useState(true)
    const [overlay, setOverlay] = useState(false)
    const [selected, setSelected] = useState('1')

    const loadAssets = async () => {
        await sleep(3000)
        setLoading(false)
    }
    useEffect(()=>{
        loadAssets()
    },[])

    useEffect(()=>{
        console.log(selected)
    },[selected])


    
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
        <MediaQueryWithLoader maxWidth={768} loading={loading}>
            <div className='h-full'>
                <div className={`${!overlay ? "hidden opacity-0 bg-transparent" : "block opacity-100 bg-slate-800"}  w-full min-h-screen p-5 z-50 animate-fadein`}>
                    <button className='flex bg-slate-600 text-white text-xl rounded-3xl py-2 px-4 mb-8' onClick={hideOverlay}><FaArrowLeft className='mt-1 mr-2' /> Back</button>
                    <Card className='mb-8' >
                        <h1 className='text-white text-3xl mb-4'>{data[parseInt(selected) -1].full}</h1>
                        <h1 className='text-white text-lg'>{data[parseInt(selected) -1].description}</h1>
                    </Card>
                    <PhotoCollage day={selected} isMobile={true} />

                </div>
                <Carousel hideSticky={loading || overlay} onClick={showOverlay} selected={selected} setSelected={setSelected} />
            </div>
        </MediaQueryWithLoader>
        <MediaQueryWithLoader minWidth={768} loading={loading}>
            <div className='flex flex-col p-8'>
                <Indicators data={data} selected={selected} onClickIndicator={onClickIndicator} horizontal />
                <div className='flex flex-row'>
                <div className='flex flex-col w-1/2 mt-8'>
                    <Card className='mb-8' >
                        <h1 className='text-white text-3xl mb-4'>{data[parseInt(selected) -1].full}</h1>
                        <h1 className='text-white text-lg'>{data[parseInt(selected) -1].description}</h1>
                    </Card>
                    <PhotoCollage day={selected} isMobile={false} />
                </div>
                <div className='flex w-1/2'>
                    <iframe
                    className='w-full h-full ml-8 mt-8 pb-8'
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDvchTjo4sE10PI_y074T5grDx-a9HCtKE&q=${data[parseInt(selected) -1].locationQuery}`}>
                    </iframe>
                </div>
                </div>

            </div>
        </MediaQueryWithLoader>
        </>
    );
}
 
export default Home;