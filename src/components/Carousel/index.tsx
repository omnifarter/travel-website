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
        {abbr:'1',full:'Paris',location:'https://goo.gl/maps/KGBxaQhYWKLUSjMG8'},
        {abbr:'2',full:'Reims',location:'https://goo.gl/maps/AByBVGQkYesRMxFm7'},
        {abbr:'3',full:'Paris and Tours',location:'https://goo.gl/maps/KGBxaQhYWKLUSjMG8'},
        {abbr:'4',full:'Tours and Bordeaux', location:'https://goo.gl/maps/JJbwAUStqdAouhSb8'},
        {abbr:'5',full:'Bordeaux', location: 'https://goo.gl/maps/gdybCmcbZdh2FLoK6'},
        {abbr:'6',full:'Arcachon Bay and Cap Ferret', location:'https://goo.gl/maps/3fmvz2pDCNCWbB8J7'},
        {abbr:'7',full:'Arcachon Bay', location:'https://goo.gl/maps/NcVJjt8nETw58uBR7'},
        {abbr:'8',full:'Dordogne Valley', location:'https://g.page/gouffrepadirac?share'},
        {abbr:'9',full:'Clermont-Ferrand', location:'https://goo.gl/maps/in5qDZp5zPM5Ss1TA'},
        {abbr:'10',full:'Annecy', location:'https://goo.gl/maps/sG7z4gfEsVn57X8W7'},
        {abbr:'11',full:'Annecy and Charmonix', location:'https://goo.gl/maps/sG7z4gfEsVn57X8W7'},
        {abbr:'12',full:'Charmonix',location:'https://goo.gl/maps/okJXJojk1KsNKWSt9'},
        {abbr:'13',full:'Italy and Nice', location:'https://goo.gl/maps/C7hrBmyamKcX79im7'}
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
        {!props.hideSticky && <Header text={data[parseInt(selected) - 1].full} location={data[parseInt(selected) - 1].location} />}
        {!props.hideSticky && <Indicators data={data} onClickIndicator={onClickIndicator} selected={selected} />}
        </div>
);
}
 
export default Carousel;