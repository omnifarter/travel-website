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
        {loading ? <Loader /> : null}
        <MediaQuery maxWidth={768}>
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
        </MediaQuery>
        <MediaQuery minWidth={768} >
            <div className='flex flex-col p-8 gap-8'>
                <Indicators data={data} selected={selected} onClickIndicator={onClickIndicator} horizontal />
                <div className='flex flex-row gap-8 h-[85vh]'>
                    <div className='flex flex-auto w-full'>
                        <Map loading={loading} day={selected} />
                    </div>
                    <div className='flex flex-auto flex-col gap-8 w-full'>
                        <Card className='flex-initial animate-fadein' >
                            <h1 className='text-white text-3xl animate-fadein'>{data[parseInt(selected) -1].full}</h1>
                            <h1 className='text-white text-lg animate-fadein'>{data[parseInt(selected) -1].description}</h1>
                        </Card>
                        <div className='flex flex-col flex-auto min-h-0'>
                            <PhotoCollage day={selected} isMobile={false} />
                        </div>
                    </div>
                </div>
            </div>
        </MediaQuery>
        </>
    );
}
 
export default Home;