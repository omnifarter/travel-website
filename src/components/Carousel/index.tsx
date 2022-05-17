import { url } from "inspector";
import { FunctionComponent, useState } from "react";
import Indicators from "./Indicators";

interface CarouselProps {
    
}
 
const Carousel: FunctionComponent<CarouselProps> = () => {
    const [selected, setSelected] = useState('1')
    const onClickIndicator = (abbr:string) => {
        setSelected(abbr)
        
    }
    const data = [
        {abbr:'1',full:'Paris'},
        {abbr:'2',full:'Reims'},
        {abbr:'3',full:'Paris and Tours'},
        {abbr:'4',full:'Tours and Bordeaux'},
        {abbr:'5',full:'Bordeaux'},
        {abbr:'6',full:'Arcachon Bay and Cape Farret'},
        {abbr:'7',full:'Arcachon Bay'},
        {abbr:'8',full:'Dordogne Valley'},
        {abbr:'9',full:'Clermont-Ferrand'},
        {abbr:'10',full:'Annecy'},
        {abbr:'11',full:'Annecy and Charmonix'},
        {abbr:'12',full:'Charmonix'},
        {abbr:'13',full:'Italy and Nice'}
        ]
        //TODO: clean this up
    return (        
    <div className={`bg-cover bg-center bg-no-repeat w-full h-full`} style={{backgroundImage:`url('https://storage.googleapis.com/france-travel/day${selected}/thumbnail.jpg')`}}>
        <Indicators data={data} onClickIndicator={onClickIndicator} selected={selected} />
    </div>
);
}
 
export default Carousel;