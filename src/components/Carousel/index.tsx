import { url } from "inspector";
import { FunctionComponent, useRef, useState } from "react";
import Header from "./Header";
import Indicators from "./Indicators";

interface CarouselProps {
    hideSticky:boolean
}
 
const Carousel: FunctionComponent<CarouselProps> = (props:CarouselProps) => {
    const [selected, setSelected] = useState('1')
    const ref = useRef(null)
    const onClickIndicator = (abbr:string) => {
        scrollTo(parseInt(abbr))
    }
    const data = [
        {abbr:'1',full:'Paris'},
        {abbr:'2',full:'Reims'},
        {abbr:'3',full:'Paris and Tours'},
        {abbr:'4',full:'Tours and Bordeaux'},
        {abbr:'5',full:'Bordeaux'},
        {abbr:'6',full:'Arcachon Bay and Cap Ferret'},
        {abbr:'7',full:'Arcachon Bay'},
        {abbr:'8',full:'Dordogne Valley'},
        {abbr:'9',full:'Clermont-Ferrand'},
        {abbr:'10',full:'Annecy'},
        {abbr:'11',full:'Annecy and Charmonix'},
        {abbr:'12',full:'Charmonix'},
        {abbr:'13',full:'Italy and Nice'}
        ]

    const onScroll = (evt:any) => {
        let diff = evt.target.scrollHeight - evt.target.scrollTop
        if(diff % evt.target.clientHeight == 0){
            // fully scrolled
            let index = data.length - (diff / evt.target.clientHeight)
            setSelected((index + 1).toString())
        }
    }

    const scrollTo = (index:Number) => {
        //@ts-ignore
        ref.current.scroll({top:ref.current.clientHeight * (index - 1),left:0,behavior:'smooth'})
    }
    return (        
        <div ref={ref} className="h-full snap-y snap-mandatory overflow-y-scroll snap-always scroll-smooth" onScroll={onScroll}>
        {
            data.map((i)=>(
                <section key={i.abbr} className={`bg-cover bg-center bg-no-repeat w-screen h-screen snap-start`} style={{backgroundImage:`url('https://storage.googleapis.com/france-travel/day${i.abbr}/thumbnail.jpg')`}} />
            ))
        }
        {!props.hideSticky && <Header text={data[parseInt(selected) - 1].full} />}
        {!props.hideSticky && <Indicators data={data} onClickIndicator={onClickIndicator} selected={selected} />}
        </div>
);
}
 
export default Carousel;