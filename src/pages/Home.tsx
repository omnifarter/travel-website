import { FunctionComponent, useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import Indicators from "../components/Carousel/Indicators";
import { sleep } from "../helpers/utils";
import withLoader from "../helpers/withLoader";

const CarouselWithLoader = withLoader(Carousel)
interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    const [loading, setLoading] = useState(true)

    const loadAssets = async () => {
        await sleep(3000)
        setLoading(false)
    }
    useEffect(()=>{
        loadAssets()
    },[])
    return (
        <>
        <CarouselWithLoader loading={loading} hideSticky={loading} />
        </>
    );
}
 
export default Home;