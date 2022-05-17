import { FunctionComponent } from "react";
import Carousel from "../components/Carousel";
import Indicators from "../components/Carousel/Indicators";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
        <Carousel/>
        </>
    );
}
 
export default Home;